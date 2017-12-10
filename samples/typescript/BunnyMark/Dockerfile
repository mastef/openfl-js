FROM openfl/openfl_js

# this is where we test, change if you want to test something else
WORKDIR /opt/openfl-js/samples/typescript/BunnyMark
RUN npm link openfl
RUN npm install typescript -g
RUN npm install -s

# if you're testing locally, you might want to overwrite with your local files
# ADD entry.ts /opt/openfl-js/samples/typescript/BunnyMark/entry.ts
# ADD Main.ts /opt/openfl-js/samples/typescript/BunnyMark/Main.ts

EXPOSE 8080
CMD npm run test -s