

type RequestPayload = {
    params?: KeyObject<any>;
    data?: KeyObject<any>;
    header?: KeyObject<string>;
    baseURL?: string;
}
type InterceptorsResponse = (data: any)=> Promise<any>;
type InterceptorsRequest = (data: any)=> Promise<any>;

type RequestConstructorOptions = {
    baseURL?: string;
    header?: RequestPayload['header'];
    interceptorsResponse?: InterceptorsResponse;
    interceptorsRequest?: InterceptorsRequest;
}

abstract class BaseRequest {
    protected defaultbaseURL: string = '';
    protected defaultHeader: KeyObject<string> = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    protected interceptorsResponse?:InterceptorsResponse; 
    protected interceptorsRequest?:InterceptorsRequest; 


    constructor(options?: RequestConstructorOptions) {
        if (options) {
            options.baseURL && (this.defaultbaseURL = options.baseURL);
            options.header && (this.defaultHeader = options.header);
            options.interceptorsResponse && (this.interceptorsResponse = options.interceptorsResponse);
            options.interceptorsRequest && (this.interceptorsRequest = options.interceptorsRequest);
        }
    }

    private async runUse<T>(url: string, method: 'GET' | 'POST', payload?: RequestPayload) {
        if (this.interceptorsRequest) {
            payload = await this.interceptorsRequest(payload);
        }
        return this.use<T>(url, method, payload)
        .then(res => {
            if (this.interceptorsResponse) {
                return this.interceptorsResponse(res);
            }
            return res;
        });
    }

    protected abstract use<T>(url: string, method: 'GET' | 'POST', payload?: RequestPayload): Promise<T>

    async get<T>(url: string, payload?: RequestPayload) {
        return this.runUse<T>(url, 'GET', payload);
    }

    post<T>(url: string, payload?: RequestPayload) {
        return this.runUse<T>(url, 'POST', payload);
    }
}
