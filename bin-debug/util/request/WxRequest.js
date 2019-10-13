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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var WxRequest = (function (_super) {
    __extends(WxRequest, _super);
    function WxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WxRequest.prototype.use = function (url, method, payload) {
        if (payload === void 0) { payload = {}; }
        var httpUrl = url.indexOf('http') === 0 ? url : this.defaultbaseURL + url;
        if (payload.params) {
            var paramsText = Object.keys(payload.params).map(function (key) { return key + "=" + payload.params[key]; }).join('&');
            if (httpUrl.indexOf('?') !== -1) {
                httpUrl = httpUrl.replace('?', "?" + paramsText + "&");
            }
            else {
                httpUrl += '?' + paramsText;
            }
        }
        var config = {
            url: httpUrl,
            method: method,
            header: __assign({}, this.defaultHeader, payload.header || {}),
        };
        if (method === 'POST') {
            // 表单提交
            if (config.header['Content-Type'] === 'application/x-www-form-urlencoded') {
                config.data = Object.keys(payload.data).map(function (key) { return key + "=" + payload.data[key]; }).join('&');
            }
        }
        return app.platform.request(config)
            .catch(function (res) {
            var error = {
                message: '网络加载慢，请稍等',
                status: res.statusCode,
                code: -1
            };
            if (res.data) {
                error.message = res.data.message || res.data.errMsg || '网络加载慢，请稍等';
            }
            throw new Error(res.errMsg);
        });
    };
    return WxRequest;
}(BaseRequest));
__reflect(WxRequest.prototype, "WxRequest");
