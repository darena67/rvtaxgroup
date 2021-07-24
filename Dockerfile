FROM node:alpine

MAINTAINER Vladi Gergov <vladi@aresgate.net>

RUN apk add --no-cache git bash openssh libpng-dev autoconf automake build-base libtool nasm python3 util-linux

# install gatsby globally
RUN npm i -g gatsby-cli

## Set web password
USER node
WORKDIR /app
COPY entrypoint.sh /

### Server
EXPOSE 8000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["gatsby", "develop -H 0.0.0.0"]

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
