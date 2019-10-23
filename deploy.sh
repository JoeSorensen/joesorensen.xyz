#!/usr/bin/env sh

set -e
<<<<<<< HEAD
=======


# build
>>>>>>> f1a60613be37b2b7006dcf525eefedd460051313
npm run build
cd dist
<<<<<<< HEAD
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:JoeSorensen/joesorensen.xyz.git master:gh-pages
=======

git add -A
date=$(date)
git commit -m "deploy on $date"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push git@github.com:JoeSorensen/joesorensen.xyz.git

>>>>>>> f1a60613be37b2b7006dcf525eefedd460051313
cd -
