FROM openfl/openfl_js

# this is where we test, change if you want to test something else
WORKDIR /opt/openfl-js/samples/es5/BunnyMark
RUN npm link openfl
RUN npm install -s

# if you're testing locally, you might want to overwrite with your local files
# ADD entry.js /opt/openfl-js/samples/es5/BunnyMark/entry.js
# ADD Main.js /opt/openfl-js/samples/es5/BunnyMark/Main.js

EXPOSE 8080
CMD npm run test -s