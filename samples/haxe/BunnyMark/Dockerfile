FROM openfl/openfl_js

# this is where we test, change if you want to test something else
WORKDIR /opt/openfl-js/samples/haxe/BunnyMark
RUN npm link openfl
RUN npm install -s

# if you're testing locally, you might want to overwrite with your local files
# ADD Main.hx /opt/openfl-js/samples/haxe/BunnyMark/Main.hx
# ADD Bunny.hx /opt/openfl-js/samples/haxe/BunnyMark/Bunny.hx

# fix for hxgenjs
RUN rm -f /opt/openfl-js/lib/haxe/io/Error.hx

EXPOSE 8080
RUN npm run build
CMD npm run test -s