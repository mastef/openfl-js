class Bunny extends Tile {
	
	
	public var speedX:Float = 0;
	public var speedY:Float = 0;
	
	
	public function new () {
		
		super (0);
		
	}
	
	
}


// TODO: Generate full externs automatically
@:jsRequire("openfl/src/openfl/display/Tile", "default")
extern class Tile implements Dynamic {
	function new (id:Int):Void;
}