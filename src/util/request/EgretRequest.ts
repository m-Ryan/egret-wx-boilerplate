
type EgretRequestResponse<T> = {
    currentTarget: {
        _xhr: {
            status: number
            statusText: string
            response?: {
                message?: string;
                errMsg?: string;
            }
        },
        response: T
    }
}

class EgretRequest extends BaseRequest {


    protected use<T>(
        url: string,
        method: 'GET' | 'POST',
        payload: RequestPayload =  {},
    ): Promise<T> {
        let httpUrl = url.indexOf('http') === 0 ? url : this.defaultbaseURL + url;
        if (payload.params) {
            const paramsText = Object.keys(payload.params).map((key) => `${key}=${payload.params![key]}`).join('&');
            if (httpUrl.indexOf('?') !== -1) {
                httpUrl = httpUrl.replace('?', `?${paramsText}&`)
            } else {
                httpUrl += '?' + paramsText;
            }
        }
        return new Promise((resolve, reject) => {
            const xhr = new egret.HttpRequest();

            // 设置返回格式
            xhr.responseType = 'json';

            // 设置header
            const useHeader: KeyObject<string> = { ...this.defaultHeader, ...payload.header || {} };
            Object.keys(useHeader).forEach((key) => {
                xhr.setRequestHeader(key, useHeader[key]);
            });
            let postData: string = '';

            if (method === 'POST') {

                // 表单提交
                if (useHeader['Content-Type'] === 'application/x-www-form-urlencoded') {
                    postData = payload.data ? Object.keys(payload.data).map((key) => `${key}=${payload.data![key]}`).join('&') : '';
                }
                // json提交
                if (useHeader['Content-Type'] === 'application/json') {
                    postData = payload.data ? Object.keys(payload.data).map((key) => `${key}=${payload.data![key]}`).join('&') : '';
                }
            }
            xhr.open(httpUrl, method);
            xhr.addEventListener(egret.Event.COMPLETE, (res: EgretRequestResponse<T>) => {
                resolve(res.currentTarget.response);
            }, this);

            xhr.addEventListener(egret.IOErrorEvent.IO_ERROR, (res: EgretRequestResponse<any>) => {
                const errResp = res.currentTarget._xhr.response;
                const error = {
                    message: '网络加载慢，请稍等',
                    status: res.currentTarget._xhr.status,
                    code: -1
                }

                if (errResp) {
                    error.message = errResp.message || errResp.errMsg || '网络加载慢，请稍等';
                }
                reject(error);
            }, this);
            xhr.send(postData);
        })
    }

}
