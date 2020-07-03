const BigNumber = require('bignumber.js');

const getScore = (score, addressBook) => {
  const bookNames = addressBook.map((element) => element.name);
  const scoreName = score.address[score.address.length - 1];

  return bookNames.includes(scoreName)
    ? [
        addressBook.filter((entry) => entry.name === scoreName)[0].address,
        new BigNumber(score.intervalCred[score.intervalCred.length - 1])
          .toFixed(18)
          .toString()
          .replace('.', ''),
      ]
    : false;
};

module.exports = {
  sendCSVContent: (array) => {
    return array
      .map(e => e.join(","))
      .join("\n")
  },
  getUsers: (scores) => {
    return scores[1].users;
  },
  whitelistedGrain: (users, addressBook) => {
    return users
      .filter((leaf) => getScore(leaf, addressBook))
      .filter((leaf) =>
        BigNumber(getScore(leaf, addressBook)[1]).isGreaterThan(BigNumber('0')),
      )
      .map((leaf) => getScore(leaf, addressBook));
  },
  total: (whitelisted) => {
    return whitelisted
      .map((score) => score[1])
      .reduce((acc, val) => BigNumber(acc).plus(BigNumber(val)).toString());
  },
  normalisedGrain: (whitelist, total, tokensToMint) => {
    return whitelist.map((user) => [
      user[0],
      BigNumber(user[1])
        .dividedBy(total)
        .multipliedBy(tokensToMint)
        .toFixed(18)
        .toString(),
    ]);
  },
};
