import js.Browser;


class Main extends Sprite {
	
	
	public function new () {
		
		super ();
		
		var loader = new Loader ();
		loader.contentLoaderInfo.addEventListener (Event.COMPLETE, loader_onComplete);
		loader.load (new URLRequest ("openfl.png"));
		
	}
	
	
	
	// Event Handlers
	
	
	
	
	private function loader_onComplete (event:Event):Void {
		
		var bitmap = event.target.loader.content;
		bitmap.x = (stage.stageWidth - bitmap.width) / 2;
		bitmap.y = (stage.stageHeight - bitmap.height) / 2;
		addChild (bitmap);
		
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
@:jsRequire("openfl/src/openfl/display/Application", "default")
extern class Application {
	var window:Dynamic;
	function new ();
	function create (config:Dynamic):Void;
	function exec ():Int;
}

@:jsRequire("openfl/src/openfl/display/Sprite", "default")
extern class Sprite {
	var stage:Dynamic;
	function new ();
	function addChild (child:Dynamic):Void;
}

@:jsRequire("openfl/src/openfl/display/Loader", "default")
extern class Loader {
	var contentLoaderInfo:Dynamic;
	function new ();
	function load (request:URLRequest):Void;
}

@:jsRequire("openfl/src/openfl/net/URLRequest", "default")
extern class URLRequest {
	function new (url:String);
}

@:jsRequire("openfl/src/openfl/events/Event", "default")
extern class Event {
	static var COMPLETE:String;
	var target:Dynamic;
	function new ();
}