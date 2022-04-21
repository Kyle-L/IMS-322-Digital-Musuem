####################################################################
#
# Description: Deploys the project to the Heroku server.
#              (I didn't want to write this but GitHub's OAuth isn't working...)
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
echo "Checking if app exists..."
if [[ $apps =~ $HEROKU_APP_NAME ]]; then
  echo "$HEROKU_APP_NAME already exists"
else
  echo "Creating $HEROKU_APP_NAME"
  heroku apps:create $HEROKU_APP_NAME
fi

# Adds repo if not already added
echo "Adding git remote"
remotes=$(git remote)
if [[ $remotes =~ heroku ]]; then
  echo "heroku remote already exists"
else
  echo "Adding heroku remote"
  heroku git:remote -a ims322-project3
fi

# Sets the buildpacks of the app to the buildpack URL.
echo "Setting buildpacks"
buildpacks=$(heroku buildpacks)
if [[ $buildpacks =~ $HEROKU_BUILD_PACK_URL ]]; then
  echo "Buildpack already set"
else
  echo "Setting buildpack"
  heroku buildpacks:add $HEROKU_BUILD_PACK_URL
fi

# Sets environment variables.
echo "Setting environment variables"
heroku config:set NODE_ENV=production
heroku config:set NODE_OPTIONS='--max_old_space_size=1024'

purge=$1
if [ "$purge" = "--purge" ]; then
  echo "Checking for plugins"
  plugins=$(heroku plugins)
  if [[ $plugins =~ heroku-builds ]]; then
    echo "heroku-builds already installed"
  else
    echo "Installing heroku-builds"
    heroku plugins:install heroku-builds
  fi
  echo "Purging old build"
  heroku builds:cache:purge -a $HEROKU_APP_NAME --confirm $HEROKU_APP_NAME
fi

# Pushes to heroku.
echo "Pushing to Heroku"
git commit --amend -C HEAD
git push heroku $HEROKU_DEPLOYMENT_BRANCH -f