"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var defaultRequest = {
    interceptorsResponse: function (data) {
        return new Promise(function (resolve, reject) {
            if (data.code !== 0) {
                reject(data);
            }
            else {
                resolve(data);
            }
        });
    },
    baseURL: ''
};
var App = (function () {
    function App(env) {
        this.services = new Services();
        this.store = new Store();
        this.platform = new WxgamePlatform();
        this.utils = new Util();
        this.sceenController = new SceenController();
        //  this.request = env === 'wxgame' ? new WxRequest(defaultRequest) : new EgretRequest(defaultRequest); 未知原因，这里不能写三元表达式
        if (env === 'wxgame') {
            this.request = new WxRequest(defaultRequest);
        }
        else {
            this.request = new EgretRequest(defaultRequest);
        }
        this.constant = new Constant(env);
    }
    return App;
}());
__reflect(App.prototype, "App");
window.app = new App(typeof wx === 'undefined' ? 'web' : 'wxgame');
//# sourceMappingURL=App.js.map