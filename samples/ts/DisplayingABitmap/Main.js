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
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        var loader = new Loader_1.default();
        loader.contentLoaderInfo.addEventListener(Event_1.default.COMPLETE, _this.loader_onComplete.bind(_this));
        loader.load(new URLRequest_1.default("openfl.png"));
        return _this;
    }
    // Event Handlers
    Main.prototype.loader_onComplete = function (event) {
        var bitmap = event.target.loader.content;
        bitmap.x = (this.stage.stageWidth - bitmap.width) / 2;
        bitmap.y = (this.stage.stageHeight - bitmap.height) / 2;
        this.addChild(bitmap);
    };
    return Main;
}(Sprite_1.default));
exports.Main = Main;
exports.default = Main;
