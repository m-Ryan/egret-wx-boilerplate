class WxgamePlatform {
    name = 'wxgame'
    login() {
        return new Promise<{ errMsg: string; code: string }>((resolve, reject) => {
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
    request<T>(options: RequestOptions<T>): Promise<RequestResponse<T>> {
        return new Promise((resolve, reject)=> {
            wx.request({
                ...options,
                success(data: RequestResponse<T>) {
                    resolve(data)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    }
    createUserInfoButton = wx['createUserInfoButton']

}
