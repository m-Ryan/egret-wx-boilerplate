type ProcessEnv = 'web' | 'wxgame';

class Constant {

    constructor(env: ProcessEnv) {
        this.PROCESS_ENV = env;
    }

    public PROCESS_ENV: ProcessEnv; // web时方便调试

    public VIRTUAL_USER = { "errMsg": "getUserInfo:ok", "rawData": "{\"nickName\":\"毛灿华\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Huizhou\",\"province\":\"Guangdong\",\"country\":\"China\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Cnicsy2hghj1I35Zdj2jDiaDmTeM5icQ8kSsFT2oucM70DQ469xjQ3yxwicjX9gldstG022bbYW6Uqf474Pn2icVsDw/132\"}", "userInfo": { "nickName": "毛灿华", "gender": 1, "language": "zh_CN", "city": "Huizhou", "province": "Guangdong", "country": "China", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Cnicsy2hghj1I35Zdj2jDiaDmTeM5icQ8kSsFT2oucM70DQ469xjQ3yxwicjX9gldstG022bbYW6Uqf474Pn2icVsDw/132" }, "signature": "fc2d3ded873f44e17698068e756661dc0b8f34c0", "encryptedData": "8oEv9z08PtlyNULUytRqRrdqv0C1aPumtAleVfkvBCVQrYexU85w9EwltZjPI+e+7d0f+HsWVGENjMBdrweAwxEOlnpA8cBMndt6UW87CHky2zaNJzpqDnHQN5gUH6dh+7mFwnxv1cWBwO0sLhpfcv22jCeGfh6vXP6nmgslff1WFZz67L9ZdAQ1lJCWAcmF28VVR61JTgs/AMNGV8V0WRA3K2Bd4pRY9T7J0OSGppTmY8B8znRk16jRGfsX7RtcRq60GDGv21QxGYmnsoXizbfD+OwZfSqPlq2ybS8zMD5etTRm5Qbl5bciYBEtmyM0P8jghQ91UzYjQOVlwgfkUDCOLgV4MEJSqOOS7H3wAU1FzHJZxOM5R9G3xMBaPuGZ81SgXPcI7rjRN7SUXIAbq6OhH6OFKVS1BkylrvxXBVtY03wV35F5OfdPOUrVEiZJJMChTNCt8v8p8NntW5n/H/ILjedXDN/lCLhTXVvfd2Y=", "iv": "f4Z8dCdxBSB8k9DdOozUYA==" }

}