class WxgamePlatform {
    name = 'wxgame'
    login() {
        return new Promise<{ errMsg: string; code: string }>((resolve, reject) => {
            if (app.constant.PROCESS_ENV === 'web') {
                return resolve({
                    code: '02',
                    errMsg: ''
                });
            }

            wx.login({
                success(data){
                    resolve(data);
                },
                fail(data) {
                    reject(data);
                }
            })
        })
    }

    getUserInfo() {
        return new Promise<WxUserLoginData>((resolve, reject) => {
            if (app.constant.PROCESS_ENV === 'web') {
                return resolve(app.constant.VIRTUAL_USER);
            }
            wx.getUserInfo({
                success(data){
                    resolve(data);
                },
                fail(data) {
                    reject(data);
                }
            })
        })
    }
    request<T>(options: RequestOptions<T>): Promise<T> {
        return new Promise((resolve, reject)=> {
            wx.request({
                ...options,
                success(data: WxRequestResponse<T>) {
                    resolve(data.data)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    }
    createUserInfoButton(options: WxUserInfoButton) {
        if (app.constant.PROCESS_ENV === 'web') {
            return  { 
                onTap:(fn: (data: any)=>void)=>{}, 
                destroy:()=>{}
            };
        }
        return wx['createUserInfoButton'](options);
    }
    getSystemInfo() {
        
        return new Promise<SystemInfo>((resolve, reject)=> {
            if (app.constant.PROCESS_ENV === 'web') {
                return resolve(app.constant.VIRSUAL_SYSTEM_INFO);
            }
            wx.getSystemInfo({
                success(data){
                    resolve(data);
                },
                fail(res) {
                    reject(res);
                }
            })
        })
    }
     

}
