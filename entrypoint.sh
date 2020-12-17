#!/bin/sh

if [ -f /app/package.json ]; then
yarn install && \
  yarn develop -H 0.0.0.0
else
  echo "no gatsby package.json"
fi
