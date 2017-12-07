import Sprite from "openfl/src/openfl/display/Sprite";
import Loader from "openfl/src/openfl/display/Loader";
import URLRequest from "openfl/src/openfl/net/URLRequest";
import Event from "openfl/src/openfl/events/Event";


export class Main extends Sprite {
	
	
	constructor () {
		
		super ();
		
		var loader = new Loader ();
		loader.contentLoaderInfo.addEventListener (Event.COMPLETE, this.loader_onComplete.bind (this));
		loader.load (new URLRequest ("openfl.png"));
		
	}
	
	
	
	// Event Handlers
	
	
	
	
	private loader_onComplete (event:Event):void {
		
		var bitmap = event.target.loader.content;
		bitmap.x = (this.stage.stageWidth - bitmap.width) / 2;
		bitmap.y = (this.stage.stageHeight - bitmap.height) / 2;
		this.addChild (bitmap);
		
	}
	
	
}


export default Main;