"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceenController = (function () {
    function SceenController() {
    }
    SceenController.prototype.load = function (sceen) {
        app.store.common.stage.removeChildren();
        app.store.common.stage.addChild(sceen);
    };
    SceenController.prototype.loadLogin = function (args) {
        this.load(new LoginSceen(args));
    };
    SceenController.prototype.loadHome = function (args) {
        this.load(new HomeSceen(args));
    };
    return SceenController;
}());
__reflect(SceenController.prototype, "SceenController");
