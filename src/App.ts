const defaultRequest: RequestConstructorOptions = {
    interceptorsResponse (data: any) {
        return new Promise((resolve, reject)=> {
            if (data.code !== 0) {
                reject(data);
            } else {
                resolve(data);
            }
            
        })
    },
    baseURL: ''
}

class App {
    request: WxRequest|EgretRequest;
    constant:Constant;
    services = new Services();
    store = new Store();
    platform = new WxgamePlatform();
    utils = new Util();
    sceenController = new SceenController();

    constructor(env: ProcessEnv) {
        //  this.request = env === 'wxgame' ? new WxRequest(defaultRequest) : new EgretRequest(defaultRequest); 未知原因，这里不能写三元表达式
        if (env === 'wxgame') {
            this.request = new WxRequest(defaultRequest);
        } else {
             this.request = new EgretRequest(defaultRequest);
        }
        this.constant = new Constant(env);
    }
}

declare let app: App;
window.app = new App(typeof wx === 'undefined' ? 'web': 'wxgame');
