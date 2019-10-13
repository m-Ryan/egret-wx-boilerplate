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
var EgretRequest = (function (_super) {
    __extends(EgretRequest, _super);
    function EgretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EgretRequest.prototype.use = function (url, method, payload) {
        var _this = this;
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
        return new Promise(function (resolve, reject) {
            var xhr = new egret.HttpRequest();
            // 设置返回格式
            xhr.responseType = 'json';
            // 设置header
            var useHeader = __assign({}, _this.defaultHeader, payload.header || {});
            Object.keys(useHeader).forEach(function (key) {
                xhr.setRequestHeader(key, useHeader[key]);
            });
            var postData = '';
            if (method === 'POST') {
                // 表单提交
                if (useHeader['Content-Type'] === 'application/x-www-form-urlencoded') {
                    postData = payload.data ? Object.keys(payload.data).map(function (key) { return key + "=" + payload.data[key]; }).join('&') : '';
                }
                // json提交
                if (useHeader['Content-Type'] === 'application/json') {
                    postData = payload.data ? Object.keys(payload.data).map(function (key) { return key + "=" + payload.data[key]; }).join('&') : '';
                }
            }
            xhr.open(httpUrl, method);
            xhr.addEventListener(egret.Event.COMPLETE, function (res) {
                resolve(res.currentTarget.response);
            }, _this);
            xhr.addEventListener(egret.IOErrorEvent.IO_ERROR, function (res) {
                var errResp = res.currentTarget._xhr.response;
                var error = {
                    message: '网络加载慢，请稍等',
                    status: res.currentTarget._xhr.status,
                    code: -1
                };
                if (errResp) {
                    error.message = errResp.message || errResp.errMsg || '网络加载慢，请稍等';
                }
                reject(error);
            }, _this);
            xhr.send(postData);
        });
    };
    return EgretRequest;
}(BaseRequest));
__reflect(EgretRequest.prototype, "EgretRequest");
