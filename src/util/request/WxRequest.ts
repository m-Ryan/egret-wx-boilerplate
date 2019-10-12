class WxRequest extends BaseRequest {

    use<T>(
        url: string,
        method: 'GET' | 'POST',
        payload: RequestPayload = {}
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
        
        const config: RequestOptions<T> = {
            url: httpUrl,
            method,
            header: {
                ...this.defaultHeader,
                ...payload.header || {}
            },
        };

        if (method === 'POST') {
            // 表单提交
            if (config.header['Content-Type'] === 'application/x-www-form-urlencoded') {
                config.data = Object.keys(payload.data).map((key) => `${key}=${payload.data![key]}`).join('&');
            }
        }


        return app.platform.request<T>(config)
            .catch((res: WxRequestErrorResponse) => {
                const error = {
                    message: '网络加载慢，请稍等',
                    status: res.statusCode,
                    code: -1
                }

                if (res.data) {
                    error.message = res.data.message || res.data.errMsg || '网络加载慢，请稍等';
                }
                throw new Error(res.errMsg);
            })
    }

}


interface WxRequestErrorResponse { data: { message?: string, errMsg?: string, msg?: string }; header: IHeader; statusCode: number; cookies: any[]; errMsg: string; }
interface WxRequestResponse<T> { data: T; header: IHeader; statusCode: number; cookies: any[]; errMsg: string; } 

interface IHeader { Server: string; Date: string; 'Content-Type': string; 'Transfer-Encoding': string; Connection: string; 'Access-Control-Allow-Origin': string; 'Access-Control-Allow-Methods': string; 'Access-Control-Allow-Headers': string; 'Content-Encoding': string; }

