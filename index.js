const book = require('./addressbook.json');
const data = require('./scores.json');
const tokensToSend = 50

const {getUsers,whitelistedGrain,normalisedGrain,total,sendCSVContent} = require('./helpers')

const users = getUsers(data);
const whitelist = whitelistedGrain(users, book);
const totalCred = total(whitelist)
const normalised = normalisedGrain(whitelist, totalCred, tokensToSend) 

console.log(sendCSVContent(normalised))