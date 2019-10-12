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
        _this.init();
        return _this;
    }
    BaseSceen.prototype.initBackground = function () {
        if (this.backgroundImage) {
            var bg = new egret.Bitmap();
            bg.texture = RES.getRes(this.backgroundImage);
            bg.width = app.store.common.stageW;
            bg.height = app.store.common.stageH;
            this.backgroundElement = bg;
            this.addChild(bg);
        }
    };
    BaseSceen.prototype.updatetBackgroundImage = function (image) {
        this.backgroundImage = image;
        if (this.backgroundElement) {
            this.backgroundElement.texture = RES.getRes(image);
        }
        else {
            this.initBackground();
        }
    };
    return BaseSceen;
}(egret.Sprite));
__reflect(BaseSceen.prototype, "BaseSceen");
//# sourceMappingURL=BaseSceen.js.map