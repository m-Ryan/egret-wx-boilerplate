
type KeyObject<T> = {
    [key: string]: T;
}

type WxOptions<S, F, C> = {
    success?(data: S): any;
    fail?(data: F): any;
    complete?(data: C): any;
}

type WxUserInfo = { nickName: string; gender: number; language: string; city: string; province: string; country: string; avatarUrl: string; }

type WxUserInfoButton = { type: string; text: string; style: IStyle; }

type WxUserLoginData = { errMsg: string; rawData: string; userInfo: WxUserInfo; signature: string; encryptedData: string; iv: string; }

type RequestOptions<T> = {
        url: string,
        data?: any,
        header: KeyObject<string>,
        'content-type'?: string,
        method?: string,
        dataType?: string,
        responseType?: string,
        success?: (data: T)=>void,
        fail?: (data: any)=>void,
        complete?: Function
    }

interface IStyle { left: number; top: number; width: number; height: number; lineHeight: number; backgroundColor: string; color: string; textAlign: string; fontSize: number; borderRadius: number; }

type SystemInfo = { errMsg: string; model: string; pixelRatio: number; windowWidth: number; windowHeight: number; system: string; language: string; version: string; screenWidth: number; screenHeight: number; SDKVersion: string; brand: string; fontSizeSetting: number; benchmarkLevel: number; batteryLevel: number; statusBarHeight: number; safeArea: ISafeArea; platform: string; devicePixelRatio: number; } 
interface ISafeArea { right: number; bottom: number; left: number; top: number; width: number; height: number; }
declare namespace wx {

    export function getUserInfo(options: WxOptions<WxUserLoginData, { errMsg: string; }, {}>): void;

    export function createUserInfoButton(options: WxUserInfoButton): { onTap(fn: (data: WxUserLoginData) => any | { errMsg: string }): any, destroy(): void; };

    export function login(options: WxOptions<{ errMsg: string; code: string }, { errMsg: string; code: string }, any>): void;

    export function request<T>(options: RequestOptions<T>): void;

    export function onShareAppMessage(fn: ()=> { title: string, imageUrlId?: string, imageUrl?: string, query?: string }): void; // 被动转发
    
    export function shareAppMessage(options: { withShareTicket?: boolean } & WxOptions<void, void, void>): void; // 主动转发
    
    export function showShareMenu(options: { withShareTicket?: boolean } & WxOptions<void, void, void>): void; // 主动转发

    export function hideShareMenu(options: WxOptions<void, void, void> ): void; // 主动关闭转发
    
    export function updateShareMenu(fn: ()=> { withShareTicket?: boolean, isUpdatableMessage?: boolean, activityId?: string, templateInfo?: any } & WxOptions<void, void, void>): void;

    export function getSystemInfo(options: WxOptions<SystemInfo, { errMsg: string; }, void>): void;

}
