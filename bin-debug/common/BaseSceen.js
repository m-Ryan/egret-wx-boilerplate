"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BaseSceen = (function (_super) {
    __extends(BaseSceen, _super);
    function BaseSceen(params) {
        var _this = _super.call(this) || this;
        _this.params = {};
        if (params) {
            _this.params = params;
        }
        _this.backgroundColorElement = new egret.Shape();
        _this.addChild(_this.backgroundColorElement);
        _this.backgroundImageElement = new egret.Bitmap();
        _this.backgroundImageElement.width = app.store.common.stage.width;
        _this.backgroundImageElement.height = app.store.common.stage.height;
        _this.addChild(_this.backgroundImageElement);
        _this.init();
        return _this;
    }
    BaseSceen.prototype.setBackground = function (oprions) {
        var color = oprions.color;
        if (color) {
            var graphics = this.backgroundColorElement.graphics;
            graphics.clear();
            if (typeof color === 'object') {
                if (!color.type) {
                    color.type = egret.GradientType.LINEAR;
                }
                graphics.beginGradientFill(color.type, color.colors.map(function (c) { return app.utils.formatColor(c); }), color.alphas, color.ratios, color.matrix);
            }
            else {
                graphics.beginFill(app.utils.formatColor(color));
            }
            graphics.drawRect(0, 0, this.width, this.height);
            graphics.endFill();
        }
        if (oprions.image) {
            this.backgroundImageElement.texture = RES.getRes(oprions.image);
        }
    };
    return BaseSceen;
}(egret.Sprite));
__reflect(BaseSceen.prototype, "BaseSceen");
