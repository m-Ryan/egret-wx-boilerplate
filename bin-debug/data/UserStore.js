"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserStore = (function () {
    function UserStore() {
        this.hasLogin = false;
    }
    return UserStore;
}());
__reflect(UserStore.prototype, "UserStore");
