FROM openfl/openfl:develop

## install node/npm
ADD https://deb.nodesource.com/setup_8.x /opt/node8setup.sh
RUN chmod +x /opt/node8setup.sh && /opt/node8setup.sh
RUN apt-get install -y --no-install-recommends nodejs

## tests need these modules, let's have them in global namespace
RUN npm install http-server -g
RUN npm install webpack -g

## install hxgenjs
## re-install if repo changed and clear docker cache
ADD https://api.github.com/repos/jgranick/hxgenjs/compare/master...HEAD /dev/null
RUN haxelib git hxgenjs https://github.com/jgranick/hxgenjs

## pull repository
## re-install if repo changed and clear docker cache
RUN git clone https://github.com/openfl/openfl-js /opt/openfl-js
ADD https://api.github.com/repos/openfl/openfl-js/compare/master...HEAD /dev/null

WORKDIR /opt/openfl-js
RUN git pull
RUN npm install
RUN npm run build -s
RUN npm link

# more logs from npm
ENV NPM_CONFIG_LOGLEVEL info
