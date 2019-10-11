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
var LoginSceen = (function (_super) {
    __extends(LoginSceen, _super);
    function LoginSceen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginSceen.prototype.init = function () {
        this.updatetBackgroundImage('bg2_jpg');
        this.createElements();
    };
    LoginSceen.prototype.createElements = function () {
        var loginBtn = new BaseBtn({
            x: 50,
            y: 50,
            width: 200,
            height: 100,
            backgroundColor: '#067785',
            text: '娃哈哈aa'
        }, function () {
            console.log('娃哈哈');
        });
        this.addChild(loginBtn);
    };
    return LoginSceen;
}(BaseSceen));
__reflect(LoginSceen.prototype, "LoginSceen");
