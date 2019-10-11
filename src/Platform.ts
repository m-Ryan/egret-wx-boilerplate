





/**
* 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
*/

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
    request<T>(options: RequestOptions<T>) {
        return new Promise((resolve, reject)=> {
            wx.request({
                ...options,
                success(data) {
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

declare let platform: WxgamePlatform;
window.platform = new WxgamePlatform();

declare interface Window {
    platform: WxgamePlatform
}