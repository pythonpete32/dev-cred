# dev-cred

1. add custom labels as `addressbook.json`
2. run Sourcecred
```
SOURCECRED_GITHUB_TOKEN="GIT_HUB_TOKEN" \
  docker run --rm -ti \
  -p 8080:8080 \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest load @1hive
```
3. calculate scores
```
SOURCECRED_GITHUB_TOKEN="GIT_HUB_TOKEN" \
  docker run --rm -ti \
  -p 8080:8080 \
  --env SOURCECRED_GITHUB_TOKEN \
  -v $PWD/sourcecred_data:/data \
  sourcecred/sourcecred:latest scores @1hive > ./scores.json
```
4. `npm run start`