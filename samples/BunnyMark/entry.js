var Application = require ("openfl/src/openfl/display/Application").default;
var Stage = require ("openfl/src/openfl/display/Stage").default;
var Loader = require ("openfl/src/openfl/display/Loader").default;
var URLRequest = require ("openfl/src/openfl/net/URLRequest").default;
var Event = require ("openfl/src/openfl/events/Event").default;
var MouseEvent = require ("openfl/src/openfl/events/MouseEvent").default;
var Tilemap = require ("openfl/src/openfl/display/Tilemap").default;
var Tileset = require ("openfl/src/openfl/display/Tileset").default;
var Tile = require ("openfl/src/openfl/display/Tile").default;

// TODO: Simpler bootstrap

var div = document.createElement ("div");
div.id = "openfl-content";
div.style.width = "550px";
div.style.height = "400px";
document.body.appendChild (div);

var app = new Application ();
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
app.create (config);
var result = app.exec ();
var stage = app.window.stage;

// var stage = new Stage (550, 400, 0xFFFFFFFF);
// document.body.appendChild (stage.element);

var bunnies = [];
var bunnyID;
var addingBunnies = false;

var minX = 0;
var maxX = stage.stageWidth;
var minY = 0;
var maxY = stage.stageHeight;
var gravity = 0.5;
var tileset = null;
var tilemap = null;

var loader = new Loader ();
loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
	start (loader.content.bitmapData);
});
loader.load (new URLRequest ("wabbit_alpha.png"));

function start (bitmapData) {
	
	tileset = new Tileset (bitmapData);
	bunnyID = tileset.addRect (bitmapData.rect);
	
	tilemap = new Tilemap (stage.stageWidth, stage.stageHeight, tileset);
	stage.addChild (tilemap);
	
	stage.addEventListener (MouseEvent.MOUSE_DOWN, stage_onMouseDown);
	stage.addEventListener (MouseEvent.MOUSE_UP, stage_onMouseUp);
	stage.addEventListener (Event.ENTER_FRAME, stage_onEnterFrame);
	
	for (var i = 0; i < 10; i++) {
		
		addBunny ();
		
	}
	
}

function addBunny () {
	
	var bunny = new Tile (bunnyID);
	bunny.x = 0;
	bunny.y = 0;
	bunny.speedX = Math.random () * 5;
	bunny.speedY = (Math.random () * 5) - 2.5;
	bunnies.push (bunny);
	tilemap.addTile (bunny);
	
}

function stage_onEnterFrame (event) {
	
	for (var i = 0; i < bunnies.length; i++) {
		
		var bunny = bunnies[i];
		bunny.x += bunny.speedX;
		bunny.y += bunny.speedY;
		bunny.speedY += gravity;
		
		if (bunny.x > maxX) {
			
			bunny.speedX *= -1;
			bunny.x = maxX;
			
		} else if (bunny.x < minX) {
			
			bunny.speedX *= -1;
			bunny.x = minX;
			
		}
		
		if (bunny.y > maxY) {
			
			bunny.speedY *= -0.8;
			bunny.y = maxY;
			
			if (Math.random () > 0.5) {
				
				bunny.speedY -= 3 + Math.random () * 4;
				
			}
			
		} else if (bunny.y < minY) {
			
			bunny.speedY = 0;
			bunny.y = minY;
			
		}
		
	}
	
	if (addingBunnies) {
		
		for (var i = 0; i < 100; i++) {
			
			addBunny ();
			
		}
		
	}
	
}

function stage_onMouseDown (event) {
	
	addingBunnies = true;
	
}

function stage_onMouseUp (event) {
	
	addingBunnies = false;
	console.log (bunnies.length + " bunnies");
	
}