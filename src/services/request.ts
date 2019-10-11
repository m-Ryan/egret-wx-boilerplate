class ApiRequest {

    private static BASE_URL: string = 'https://www.maocanhua.cn';

    private static use<T>(
        url: string,
        method: 'GET' | 'POST',
        data?: KeyObject<any>,
        header?: KeyObject<string>
    ) {
        const httpUrl = url.indexOf('http') === 0 ? url : this.BASE_URL + url;

        const config: RequestOptions<T> = {
            url: httpUrl,
            method,
            header: {},
        };

        if (data) config.data = data;

        if (header) {
            if (!config.header) {
                config.header = {}
            }
            config.header = {
                ...config.header,
                ...header,
            };
        }
     

        return app.platform.request<T>(config).then(res => {
           if (res.statusCode >= 200 && res.statusCode < 300) {
               return res.data;
           }
           throw new Error(res.errMsg);
        });
    }

    static get<T>(url: string, params?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', params, header);
    }

    static post<T>(url: string, data?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', data, header);
    }
}

interface RequestResponse<T> { data: T; header: IHeader; statusCode: number; cookies: any[]; errMsg: string; } 

interface IHeader { Server: string; Date: string; 'Content-Type': string; 'Transfer-Encoding': string; Connection: string; 'Access-Control-Allow-Origin': string; 'Access-Control-Allow-Methods': string; 'Access-Control-Allow-Headers': string; 'Content-Encoding': string; }