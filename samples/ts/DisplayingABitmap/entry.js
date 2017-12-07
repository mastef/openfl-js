"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = require("openfl/src/openfl/display/Application");
var Main_1 = require("./Main");
//
var div = document.createElement("div");
div.id = "openfl-content";
div.style.width = "550px";
div.style.height = "400px";
document.body.appendChild(div);
var app = new Application_1.default();
var config = {
    build: "1",
    company: "OpenFL",
    file: "entry.js",
    fps: 60,
    name: "OpenFL-JS BunnyMark",
    orientation: "portrait",
    packageName: "org.openfl.samples.bunnymark",
    version: "1.0.0",
    windows: [
        {
            allowHighDPI: true,
            alwaysOnTop: false,
            antialiasing: 1,
            background: 0xFFFFFFFF,
            borderless: false,
            colorDepth: 16,
            depthBuffer: false,
            display: 0,
            element: div,
            fullscreen: false,
            hardware: true,
            height: 400,
            hidden: false,
            maximized: false,
            minimized: false,
            parameters: {},
            resizable: false,
            stencilBuffer: false,
            title: "",
            vsync: false,
            width: 550,
            x: 0,
            y: 0
        }
    ]
};
app.create(config);
var result = app.exec();
var stage = app.window.stage;
stage.addChild(new Main_1.default());
