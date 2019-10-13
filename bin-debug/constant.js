"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Constant = (function () {
    function Constant(env) {
        this.VIRTUAL_USER = { "errMsg": "getUserInfo:ok", "rawData": "{\"nickName\":\"毛灿华\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Huizhou\",\"province\":\"Guangdong\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Cnicsy2hghj1I35Zdj2jDiaDmTeM5icQ8kSsFT2oucM70DQ469xjQ3yxwicjX9gldstG022bbYW6Uqf474Pn2icVsDw/132\"}", "userInfo": { "nickName": "毛灿华", "gender": 1, "language": "zh_CN", "city": "Huizhou", "province": "Guangdong", "country": "China", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Cnicsy2hghj1I35Zdj2jDiaDmTeM5icQ8kSsFT2oucM70DQ469xjQ3yxwicjX9gldstG022bbYW6Uqf474Pn2icVsDw/132" }, "signature": "fc2d3ded873f44e17698068e756661dc0b8f34c0", "encryptedData": "8oEv9z08PtlyNULUytRqRrdqv0C1aPumtAleVfkvBCVQrYexU85w9EwltZjPI+e+7d0f+HsWVGENjMBdrweAwxEOlnpA8cBMndt6UW87CHky2zaNJzpqDnHQN5gUH6dh+7mFwnxv1cWBwO0sLhpfcv22jCeGfh6vXP6nmgslff1WFZz67L9ZdAQ1lJCWAcmF28VVR61JTgs/AMNGV8V0WRA3K2Bd4pRY9T7J0OSGppTmY8B8znRk16jRGfsX7RtcRq60GDGv21QxGYmnsoXizbfD+OwZfSqPlq2ybS8zMD5etTRm5Qbl5bciYBEtmyM0P8jghQ91UzYjQOVlwgfkUDCOLgV4MEJSqOOS7H3wAU1FzHJZxOM5R9G3xMBaPuGZ81SgXPcI7rjRN7SUXIAbq6OhH6OFKVS1BkylrvxXBVtY03wV35F5OfdPOUrVEiZJJMChTNCt8v8p8NntW5n/H/ILjedXDN/lCLhTXVvfd2Y=", "iv": "f4Z8dCdxBSB8k9DdOozUYA==" };
        this.VIRSUAL_SYSTEM_INFO = { "errMsg": "getSystemInfo:ok", "model": "iPhone 5", "pixelRatio": 2, "windowWidth": 320, "windowHeight": 568, "system": "iOS 10.0.1", "language": "zh", "version": "7.0.4", "screenWidth": 320, "screenHeight": 568, "SDKVersion": "2.8.3", "brand": "devtools", "fontSizeSetting": 16, "benchmarkLevel": 1, "batteryLevel": 100, "statusBarHeight": 20, "safeArea": { "right": 320, "bottom": 568, "left": 0, "top": 20, "width": 320, "height": 548 }, "platform": "devtools", "devicePixelRatio": 2 };
        this.PROCESS_ENV = env;
    }
    return Constant;
}());
__reflect(Constant.prototype, "Constant");
