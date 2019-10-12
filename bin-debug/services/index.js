"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Services = (function () {
    function Services() {
    }
    Services.prototype.getUser = function () {
        //    return ApiRequest.get<IData>('http://www.maocanhua.cn/api/article/visitor/list?page=2&size=10&user_id=21')
    };
    return Services;
}());
__reflect(Services.prototype, "Services");
//# sourceMappingURL=index.js.map