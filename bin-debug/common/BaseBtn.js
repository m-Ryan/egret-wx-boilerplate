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
var BaseBtn = (function (_super) {
    __extends(BaseBtn, _super);
    function BaseBtn(style, doFn) {
        var _this = _super.call(this) || this;
        _this.clickOnce = false;
        _this.clickOnce = !!style.clickOnce;
        _this.doFn = doFn;
        _this.init(style);
        return _this;
    }
    BaseBtn.prototype.init = function (style) {
        this.width = style.width;
        this.height = style.height;
        this.x = style.x || 0;
        this.y = style.y || 0;
        if (style.backgroundColor) {
            var btn = new egret.Shape();
            btn.graphics.beginFill(app.utils.formatColor(style.backgroundColor), style.opacity);
            btn.graphics.drawRoundRect(0, 0, style.width, style.height, style.borderRadius || 0);
            btn.graphics.endFill();
            this.addChild(btn);
        }
        if (style.backgroundColorImage) {
            var btn = app.utils.createBitmapByName(style.backgroundColorImage);
            btn.width = style.width;
            btn.height = style.height;
            this.addChild(btn);
        }
        if (style.text) {
            if (typeof style.text === 'string') {
                var text = new egret.TextField();
                text.text = style.text;
                text.width = style.width;
                text.height = style.height;
                text.textAlign = style.align || 'center';
                text.verticalAlign = style.verticalAlign || 'middle';
                text.size = style.size || 24;
                this.addChild(text);
            }
            else {
                this.addChild(style.text);
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
    };
    BaseBtn.prototype.do = function (doFn) {
        if (!doFn) {
            throw egret.error();
        }
        doFn();
    };
    BaseBtn.prototype.addChild = function (child) {
        child.touchEnabled = true;
        return _super.prototype.addChild.call(this, child);
    };
    BaseBtn.prototype.removeEvent = function () {
        this.do(this.doFn);
        if (this.clickOnce) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
        }
    };
    return BaseBtn;
}(egret.Sprite));
__reflect(BaseBtn.prototype, "BaseBtn");
//# sourceMappingURL=BaseBtn.js.map