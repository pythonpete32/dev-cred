# dev-cred

1. add custom labels as `addressbook.json`
2. run Sourcecred
```
SOURCECRED_GITHUB_TOKEN="f1e6dd74bb97ad1c7b46792d9641b390b82d6852" \
  docker run --rm -ti \
  -p 8080:8080 \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest load @1hive
```
3. calculate scores
```
SOURCECRED_GITHUB_TOKEN="f1e6dd74bb97ad1c7b46792d9641b390b82d6852" \
  docker run --rm -ti \
  -p 8080:8080 \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest scores @1hive > ./scores.json
```
4. run `npm run start`