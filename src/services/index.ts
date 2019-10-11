class Services {
   static getA() {
         platform.request({
            url: 'http://www.maocanhua.cn/api/article/visitor/list?page=2&size=10&user_id=21',
            method: 'get',
        })
    }

    static use<T>(
        url: string,
        method: 'GET' | 'POST',
        data?: KeyObject<any>,
        header?: KeyObject<string>
    ) {
        // const httpUrl = url.indexOf('http') !== -1 ? url : this.BASE_URL + url;

        const config: platform.request.Param<any> = {
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
     

    }

    get<T>(url: string, params?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', params, header);
    }

    post<T>(url: string, data?: KeyObject<any>, header?: KeyObject<string>) {
        return this.use<T>(url, 'GET', data, header);
    }
}
}

