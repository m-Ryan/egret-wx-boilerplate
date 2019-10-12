"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var WxgamePlatform = (function () {
    function WxgamePlatform() {
        this.name = 'wxgame';
    }
    WxgamePlatform.prototype.login = function () {
        return new Promise(function (resolve, reject) {
            wx.login({
                success: function (data) {
                    resolve(data);
                },
                fail: function (data) {
                    reject(data);
                }
            });
        });
    };
    WxgamePlatform.prototype.getUserInfo = function () {
        return new Promise(function (resolve, reject) {
            if (app.constant.PROCESS_ENV === 'web') {
                return resolve(app.constant.VIRTUAL_USER);
            }
            wx.getUserInfo({
                success: function (data) {
                    resolve(data);
                },
                fail: function (data) {
                    reject(data);
                }
            });
        });
    };
    WxgamePlatform.prototype.request = function (options) {
        return new Promise(function (resolve, reject) {
            wx.request(__assign({}, options, { success: function (data) {
                    resolve(data.data);
                },
                fail: function (error) {
                    reject(error);
                } }));
        });
    };
    WxgamePlatform.prototype.createUserInfoButton = function (options) {
        if (app.constant.PROCESS_ENV === 'web') {
            return {
                onTap: function (fn) { },
                destroy: function () { }
            };
        }
        return wx['createUserInfoButton'](options);
    };
    return WxgamePlatform;
}());
__reflect(WxgamePlatform.prototype, "WxgamePlatform");
//# sourceMappingURL=Platform.js.map