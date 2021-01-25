FROM node:alpine

MAINTAINER Vladi Gergov <vladi@aresgate.net>

RUN apk add --no-cache git bash openssh libpng-dev autoconf automake build-base libtool nasm python util-linux

## Set web password
USER node
WORKDIR /app
COPY entrypoint.sh /

### Server
EXPOSE 8000

ENTRYPOINT ["/entrypoint.sh"]

##
#  cd redeyecpa
#  yarn install
#
#Inside that directory, you can run several commands:
#
#  yarn dev
#    Starts the development server.
#
#  yarn build
#    Bundles the app into static files for production.
#
#  yarn start
#    Starting production environment.
