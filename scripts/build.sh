#!/usr/bin/env bash

set -e

mkdir -p input

if [[ ! -f ./input/data.json ]]
then
  VERSION=$(curl -s https://api.github.com/repos/mj1856/TimeZoneNames/releases/latest | grep "tag_name" | cut -d'"' -f4)
  curl -L "https://github.com/mj1856/TimeZoneNames/raw/${VERSION}/src/TimeZoneNames/data.json.gz" | gunzip > ./input/data.json
fi

node ./scripts/build.js