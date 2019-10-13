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
var BaseText = (function (_super) {
    __extends(BaseText, _super);
    function BaseText(style, doFn) {
        var _this = _super.call(this) || this;
        _this.doFn = function () { };
        _this.clickOnce = false;
        _this.clickOnce = !!style.clickOnce;
        if (doFn) {
            _this.doFn = doFn;
        }
        _this.init(style);
        return _this;
    }
    BaseText.prototype.init = function (style) {
        style.width && (this.width = style.width);
        style.height && (this.height = style.height);
        this.x = style.x || 0;
        this.y = style.y || 0;
        if (style.backgroundColorImage) {
            var btn = app.utils.createBitmapByName(style.backgroundColorImage);
            style.width && (btn.width = style.width);
            style.height && (btn.height = style.height);
            this.addChild(btn);
        }
        var text = new egret.TextField();
        style.width && (text.width = style.width);
        style.height && (text.height = style.height);
        text.text = style.text;
        text.textAlign = style.align || 'center';
        text.verticalAlign = style.verticalAlign || 'middle';
        text.size = style.size || 24;
        text.bold = style.bold || false;
        this.addChild(text);
        if (style.backgroundColor) {
            text.background = true;
            text.backgroundColor = app.utils.formatColor(style.backgroundColor);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
    };
    BaseText.prototype.do = function (doFn) {
        if (!doFn) {
            throw egret.error();
        }
        doFn();
    };
    BaseText.prototype.addChild = function (child) {
        child.touchEnabled = true;
        return _super.prototype.addChild.call(this, child);
    };
    BaseText.prototype.removeEvent = function () {
        this.do(this.doFn);
        if (this.clickOnce) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
        }
    };
    return BaseText;
}(egret.Sprite));
__reflect(BaseText.prototype, "BaseText");
