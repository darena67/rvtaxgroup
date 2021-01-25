#!/bin/sh

if [ -f /app/package.json ]; then
  yarn install
fi

exec "$@"
