####################################################################
#
# Description: Deploys the project to the Heroku server.
#              (I didn't want to write this but GitHub OAuth isn't working...)
#
# Note: This script is intended to be run from the project 
#       root directory
#
# Usage:
#   ./deploy.sh
#
####################################################################

#!/bin/bash

HEROKU_APP_NAME='ims322-project3'
HEROKU_DEPLOYMENT_BRANCH='main'
HEROKU_BUILD_PACK_URL='https://github.com/heroku/heroku-buildpack-nodejs#latest'

apps=$(heroku apps)

# Checks if there are any apps with the name $HEROKU_APP_NAME,
# if not, it creates one.
if [[ $apps =~ $HEROKU_APP_NAME ]]; then
  echo "$HEROKU_APP_NAME already exists"
else
  echo "Creating $HEROKU_APP_NAME"
  heroku apps:create $HEROKU_APP_NAME
fi

# Adds repo if not already added
remotes=$(git remote)
if [[ $remotes =~ heroku ]]; then
  echo "heroku remote already exists"
else
  echo "Adding heroku remote"
  heroku git:remote -a ims322-project3
fi

# Sets the buildpacks of the app to the buildpack URL.
buildpacks=$(heroku buildpacks)
if [[ $buildpacks =~ $HEROKU_BUILD_PACK_URL ]]; then
  echo "Buildpack already set"
else
  echo "Setting buildpack"
  heroku buildpacks:add $HEROKU_BUILD_PACK_URL
fi

# Pushes to heroku
git commit --amend -C HEAD
git push heroku $HEROKU_DEPLOYMENT_BRANCH -f