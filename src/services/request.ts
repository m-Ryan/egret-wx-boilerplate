class Request {
    constructor(baseUrl?: string) {
        if (baseUrl) {
            this.BASE_URL = baseUrl;
        }
    }
    private BASE_URL: string = '';

    private use<T>(
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
            config.header = {
                ...config.header,
                ...header,
            };
        }
     

        return platform.request<T>(config).then(res => {
            console.log(res);
        });
    }

    get<T>(url: string, params?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', params, header);
    }

    post<T>(url: string, data?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', data, header);
    }
}

window.request = new Request('https://www.maocanhua.cn');