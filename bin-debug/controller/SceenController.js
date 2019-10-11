"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceenController = (function () {
    function SceenController() {
    }
    SceenController.load = function (sceen) {
        Store.stage.removeChildren();
        Store.sceen = sceen;
        Store.stage.addChild(sceen);
    };
    SceenController.loadLogin = function () {
        this.load(new LoginSceen());
    };
    return SceenController;
}());
__reflect(SceenController.prototype, "SceenController");
