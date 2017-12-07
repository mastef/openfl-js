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
var Tile_1 = require("openfl/src/openfl/display/Tile");
var Bunny = /** @class */ (function (_super) {
    __extends(Bunny, _super);
    function Bunny() {
        var _this = _super.call(this, 0) || this;
        _this.speedX = 0;
        _this.speedY = 0;
        return _this;
    }
    return Bunny;
}(Tile_1.default));
exports.Bunny = Bunny;
exports.default = Bunny;
