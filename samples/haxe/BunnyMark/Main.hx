import js.Browser;


class Main extends Sprite {
	
	
	private var addingBunnies:Bool;
	private var bunnies:Array<Bunny>;
	//private var fps:FPS;
	private var gravity:Float;
	private var minX:Float;
	private var minY:Float;
	private var maxX:Float;
	private var maxY:Float;
	private var tilemap:Tilemap;
	private var tileset:Tileset;
	
	
	public function new () {
		
		super ();
		
		bunnies = [];
		
		//addEventListener (Event.ADDED_TO_STAGE, function (_) {
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				start (loader.content.bitmapData);
			});
			loader.load (new URLRequest ("wabbit_alpha.png"));
		//});
		
	}
	
	
	private function start (bitmapData:BitmapData):Void {
		
		minX = 0;
		maxX = stage.stageWidth;
		minY = 0;
		maxY = stage.stageHeight;
		gravity = 0.5;
		
		tileset = new Tileset (bitmapData);
		tileset.addRect (bitmapData.rect);
		
		tilemap = new Tilemap (stage.stageWidth, stage.stageHeight, tileset);
		//tilemap = new Tilemap (100, 100, tileset);
		addChild (tilemap);
		
		// fps = new FPS ();
		// addChild (fps);
		
		stage.addEventListener (MouseEvent.MOUSE_DOWN, stage_onMouseDown);
		stage.addEventListener (MouseEvent.MOUSE_UP, stage_onMouseUp);
		stage.addEventListener (Event.ENTER_FRAME, stage_onEnterFrame);
		
		for (i in 0...10) {
			
			addBunny ();
			
		}
		
	}
	
	
	private function addBunny ():Void {
		
		var bunny = new Bunny ();
		bunny.x = 0;
		bunny.y = 0;
		bunny.speedX = Math.random () * 5;
		bunny.speedY = (Math.random () * 5) - 2.5;
		bunnies.push (bunny);
		tilemap.addTile (bunny);
		
	}
	
	
	
	
	// Event Handlers
	
	
	
	
	private function stage_onEnterFrame (event:Event):Void {
		
		for (bunny in bunnies) {
			
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
			
			for (i in 0...100) {
				
				addBunny ();
				
			}
			
		}
		
	}
	
	
	private function stage_onMouseDown (event:MouseEvent):Void {
		
		addingBunnies = true;
		
	}
	
	
	private function stage_onMouseUp (event:MouseEvent):Void {
		
		addingBunnies = false;
		trace (bunnies.length + " bunnies");
		
	}
	
	
	
	
	// Entry point
	
	
	
	
	static function main () {
		
		// TODO: Simplify
		
		var div = Browser.document.createElement ("div");
		div.id = "openfl-content";
		div.style.width = "550px";
		div.style.height = "400px";
		Browser.document.body.appendChild (div);
		
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
		
		stage.addChild (new Main ());
		
	}
	
	
}



// TODO: Automatically generate extern classes using hxgenjs
@:jsRequire("openfl/display/Application", "default")
extern class Application {
	var window:Dynamic;
	function new ();
	function create (config:Dynamic):Void;
	function exec ():Int;
}

@:jsRequire("openfl/display/Sprite", "default")
extern class Sprite {
	var stage:Dynamic;
	function new ();
	function addChild (child:Dynamic):Void;
}

@:jsRequire("openfl/display/Loader", "default")
extern class Loader {
	var contentLoaderInfo:Dynamic;
	var content:Dynamic;
	function new ();
	function load (request:URLRequest):Void;
}

@:jsRequire("openfl/net/URLRequest", "default")
extern class URLRequest {
	function new (url:String);
}

@:jsRequire("openfl/events/Event", "default")
extern class Event {
	static var COMPLETE:String;
	static var ENTER_FRAME:String;
	var target:Dynamic;
	function new ();
}

@:jsRequire("openfl/events/MouseEvent", "default")
extern class MouseEvent extends Event {
	static var MOUSE_UP:String;
	static var MOUSE_DOWN:String;
	function new ();
}

@:jsRequire("openfl/display/Tilemap", "default")
extern class Tilemap {
	function new (width:Float, height:Float, tileset:Tileset);
	function addTile (tile:Dynamic):Void;
}

@:jsRequire("openfl/display/Tileset", "default")
extern class Tileset {
	function new (bitmapData:BitmapData);
	function addRect (rect:Dynamic):Void;
}

@:jsRequire("openfl/display/BitmapData", "default")
extern class BitmapData {
	var rect:Dynamic;
	function new ();
}