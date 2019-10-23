#!/usr/bin/env sh

# abort on errors
set -e

rm -rf dist/

git clone -b gh-pages https://github.com/JoeSorensen/joesorensen.xyz.git dist

# build
npm run build

# navigate into the build output directory
cd dist

git add -A
date=$(date)
git commit -m "deploy on $date"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push git@github.com:JoeSorensen/joesorensen.xyz.git

cd -
