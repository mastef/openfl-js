import js.Browser;


class Main {
	
	
	static function main () {
		
		var bitmapData = new BitmapData (200, 200, true, 0xFF24AFC4);
		
		var rect = new Rectangle (50, 50, 100, 100);
		bitmapData.fillRect (rect, 0xFFCCCCCC);
		
		Browser.document.body.appendChild (bitmapData.image.src);
		trace ("Hello World");
		
	}
	
	
}



// TODO: Automatically generate extern classes using hxgenjs
@:jsRequire("openfl/display/BitmapData", "default")
extern class BitmapData {
	var image:Dynamic;
	function new(width:Int, height:Int, transparent:Bool, color:Int);
	function fillRect(rect:Rectangle, color:Int):Void;
}

@:jsRequire("openfl/geom/Rectangle", "default")
extern class Rectangle {
	function new(x:Float, y:Float, width:Float, height:Float);
}