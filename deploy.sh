#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist

git init
git add -A
date=$(date)
git commit -m "deploy on $date"


git push -f git@github.com:JoeSorensen/joesorensen.xyz.git master:gh-pages

cd -