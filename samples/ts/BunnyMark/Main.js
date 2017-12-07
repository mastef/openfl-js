"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = require("openfl/src/openfl/display/Sprite");
var Loader_1 = require("openfl/src/openfl/display/Loader");
var URLRequest_1 = require("openfl/src/openfl/net/URLRequest");
var Event_1 = require("openfl/src/openfl/events/Event");
var MouseEvent_1 = require("openfl/src/openfl/events/MouseEvent");
var Tilemap_1 = require("openfl/src/openfl/display/Tilemap");
var Tileset_1 = require("openfl/src/openfl/display/Tileset");
var Bunny_1 = require("./Bunny");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        console.log("constructor");
        _this.bunnies = [];
        var self = _this;
        //addEventListener (Event.ADDED_TO_STAGE, function (_) {
        var loader = new Loader_1.default();
        loader.contentLoaderInfo.addEventListener(Event_1.default.COMPLETE, function (event) {
            self.start(loader.content.bitmapData);
        });
        loader.load(new URLRequest_1.default("wabbit_alpha.png"));
        return _this;
        //});
    }
    Main.prototype.start = function (bitmapData) {
        console.log("start");
        this.minX = 0;
        this.maxX = this.stage.stageWidth;
        this.minY = 0;
        this.maxY = this.stage.stageHeight;
        this.gravity = 0.5;
        this.tileset = new Tileset_1.default(bitmapData);
        this.tileset.addRect(bitmapData.rect);
        this.tilemap = new Tilemap_1.default(this.stage.stageWidth, this.stage.stageHeight, this.tileset);
        //tilemap = new Tilemap (100, 100, tileset);
        this.addChild(this.tilemap);
        // fps = new FPS ();
        // addChild (fps);
        this.stage.addEventListener(MouseEvent_1.default.MOUSE_DOWN, this.stage_onMouseDown.bind(this));
        this.stage.addEventListener(MouseEvent_1.default.MOUSE_UP, this.stage_onMouseUp.bind(this));
        this.stage.addEventListener(Event_1.default.ENTER_FRAME, this.stage_onEnterFrame.bind(this));
        for (var i = 0; i < 10; i++) {
            this.addBunny();
        }
    };
    Main.prototype.addBunny = function () {
        console.log('add bunny');
        var bunny = new Bunny_1.default();
        bunny.x = 0;
        bunny.y = 0;
        bunny.speedX = Math.random() * 5;
        bunny.speedY = (Math.random() * 5) - 2.5;
        this.bunnies.push(bunny);
        this.tilemap.addTile(bunny);
    };
    // Event Handlers
    Main.prototype.stage_onEnterFrame = function (event) {
        for (var i = 0; i < this.bunnies.length; i++) {
            var bunny = this.bunnies[i];
            bunny.x += bunny.speedX;
            bunny.y += bunny.speedY;
            bunny.speedY += this.gravity;
            if (bunny.x > this.maxX) {
                bunny.speedX *= -1;
                bunny.x = this.maxX;
            }
            else if (bunny.x < this.minX) {
                bunny.speedX *= -1;
                bunny.x = this.minX;
            }
            if (bunny.y > this.maxY) {
                bunny.speedY *= -0.8;
                bunny.y = this.maxY;
                if (Math.random() > 0.5) {
                    bunny.speedY -= 3 + Math.random() * 4;
                }
            }
            else if (bunny.y < this.minY) {
                bunny.speedY = 0;
                bunny.y = this.minY;
            }
        }
        if (this.addingBunnies) {
            for (var i = 0; i < 100; i++) {
                this.addBunny();
            }
        }
    };
    Main.prototype.stage_onMouseDown = function (event) {
        this.addingBunnies = true;
    };
    Main.prototype.stage_onMouseUp = function (event) {
        this.addingBunnies = false;
        console.log(this.bunnies.length + " bunnies");
    };
    return Main;
}(Sprite_1.default));
exports.Main = Main;
exports.default = Main;
