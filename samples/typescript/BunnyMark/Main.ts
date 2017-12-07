import Sprite from "openfl/src/openfl/display/Sprite";
import Loader from "openfl/src/openfl/display/Loader";
import URLRequest from "openfl/src/openfl/net/URLRequest";
import Event from "openfl/src/openfl/events/Event";
import BitmapData from "openfl/src/openfl/display/BitmapData";
import MouseEvent from "openfl/src/openfl/events/MouseEvent";
import Tilemap from "openfl/src/openfl/display/Tilemap";
import Tileset from "openfl/src/openfl/display/Tileset";
import Bunny from "./Bunny";


export class Main extends Sprite {
	
	
	private addingBunnies:boolean;
	private bunnies:Bunny[];
	//private fps:FPS;
	private gravity:number;
	private minX:number;
	private minY:number;
	private maxX:number;
	private maxY:number;
	private tilemap:Tilemap;
	private tileset:Tileset;
	
	
	constructor () {
		
		super ();
		
		this.bunnies = [];
		var self = this;
		
		//addEventListener (Event.ADDED_TO_STAGE, function (_) {
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				self.start (loader.content.bitmapData);
			});
			loader.load (new URLRequest ("wabbit_alpha.png"));
		//});
		
	}
	
	
	private start (bitmapData:BitmapData):void {
		
		this.minX = 0;
		this.maxX = this.stage.stageWidth;
		this.minY = 0;
		this.maxY = this.stage.stageHeight;
		this.gravity = 0.5;
		
		this.tileset = new Tileset (bitmapData);
		this.tileset.addRect (bitmapData.rect);
		
		this.tilemap = new Tilemap (this.stage.stageWidth, this.stage.stageHeight, this.tileset);
		//tilemap = new Tilemap (100, 100, tileset);
		this.addChild (this.tilemap);
		
		// fps = new FPS ();
		// addChild (fps);
		
		this.stage.addEventListener (MouseEvent.MOUSE_DOWN, this.stage_onMouseDown.bind (this));
		this.stage.addEventListener (MouseEvent.MOUSE_UP, this.stage_onMouseUp.bind (this));
		this.stage.addEventListener (Event.ENTER_FRAME, this.stage_onEnterFrame.bind (this));
		
		for (var i = 0; i < 10; i++) {
			
			this.addBunny ();
			
		}
		
	}
	
	
	private addBunny ():void {
		
		var bunny = new Bunny ();
		bunny.x = 0;
		bunny.y = 0;
		bunny.speedX = Math.random () * 5;
		bunny.speedY = (Math.random () * 5) - 2.5;
		this.bunnies.push (bunny);
		this.tilemap.addTile (bunny);
		
	}
	
	
	
	
	// Event Handlers
	
	
	
	
	stage_onEnterFrame (event:Event):void {
		
		for (var i = 0; i < this.bunnies.length; i++) {
			
			var bunny = this.bunnies[i];
			bunny.x += bunny.speedX;
			bunny.y += bunny.speedY;
			bunny.speedY += this.gravity;
			
			if (bunny.x > this.maxX) {
				
				bunny.speedX *= -1;
				bunny.x = this.maxX;
				
			} else if (bunny.x < this.minX) {
				
				bunny.speedX *= -1;
				bunny.x = this.minX;
				
			}
			
			if (bunny.y > this.maxY) {
				
				bunny.speedY *= -0.8;
				bunny.y = this.maxY;
				
				if (Math.random () > 0.5) {
					
					bunny.speedY -= 3 + Math.random () * 4;
					
				}
				
			} else if (bunny.y < this.minY) {
				
				bunny.speedY = 0;
				bunny.y = this.minY;
				
			}
			
		}
		
		if (this.addingBunnies) {
			
			for (var i = 0; i < 100; i++) {
				
				this.addBunny ();
				
			}
			
		}
		
	}
	
	
	private stage_onMouseDown (event:MouseEvent):void {
		
		this.addingBunnies = true;
		
	}
	
	
	private stage_onMouseUp (event:MouseEvent):void {
		
		this.addingBunnies = false;
		console.log (this.bunnies.length + " bunnies");
		
	}
	
	
}


export default Main;