
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
        header?: KeyObject<string>,
        'content-type'?: string,
        method?: string,
        dataType?: string,
        responseType?: string,
        success?: (data: T)=>void,
        fail?: (data: any)=>void,
        complete?: Function
    }

interface IStyle { left: number; top: number; width: number; height: number; lineHeight: number; backgroundColor: string; color: string; textAlign: string; fontSize: number; borderRadius: number; }

declare namespace wx {

    export function getUserInfo(options: WxOptions<WxUserLoginData, { errMsg: string; }, {}>): void;

    export function createUserInfoButton(options: WxUserInfoButton): { onTap(fn: (data: WxUserLoginData) => any | { errMsg: string }): void, destroy(): void; };

    export function login(options: WxOptions<{ errMsg: string; code: string }, { errMsg: string; code: string }, any>): void;

    export function request<T>(options: RequestOptions<T>): void;
}
