"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Store = (function () {
    function Store() {
        // 用户信息
        this.user = new UserStore();
        this.common = new CommonStore();
    }
    ;
    return Store;
}());
__reflect(Store.prototype, "Store");
//# sourceMappingURL=index.js.map