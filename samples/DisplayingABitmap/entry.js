var Application = require ("openfl/src/openfl/display/Application").default;
var Stage = require ("openfl/src/openfl/display/Stage").default;
var Loader = require ("openfl/src/openfl/display/Loader").default;
var URLRequest = require ("openfl/src/openfl/net/URLRequest").default;
var Event = require ("openfl/src/openfl/events/Event").default;

// TODO: Simpler bootstrap

var div = document.createElement ("div");
div.id = "openfl-content";
div.style.width = "550px";
div.style.height = "550px";
document.body.appendChild (div);

var app = new Application ();
var config = {
	build: "1",
	company: "OpenFL",
	file: "entry.js",
	fps: 60,
	name: "OpenFL-JS Displaying A Bitmap",
	orientation: "portrait",
	packageName: "org.openfl.samples.displayingabitmap",
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
			height: 550,
			hidden: false,
			maximized: false,
			minimized: false,
			parameters: {},
			resizable: true,
			stencilBuffer: false,
			title: "",
			vsync: false,
			width: 400,
			x: 0,
			y: 0
		}
	]
};
app.create (config);
var result = app.exec ();
var stage = app.window.stage;

// var stage = new Stage (550, 400, 0xFFFFFFFF);
// document.body.appendChild (stage.element);

var loader = new Loader ();
loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
	var bitmap = loader.content;
	bitmap.x = (stage.stageWidth - bitmap.width) / 2;
	bitmap.y = (stage.stageHeight - bitmap.height) / 2;
});
loader.load (new URLRequest ("openfl.png"));

stage.addChild (loader);