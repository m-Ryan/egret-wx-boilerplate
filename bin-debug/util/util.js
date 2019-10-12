"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Util.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Util.prototype.formatColor = function (color) {
        return ('0x' + color.replace('#', ''));
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=util.js.map