"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Store = (function () {
    function Store() {
    }
    //设置的舞台宽高
    Store.stageW = 640;
    Store.stageH = 1136;
    return Store;
}());
__reflect(Store.prototype, "Store");
