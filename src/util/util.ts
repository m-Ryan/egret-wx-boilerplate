class Util {
    createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    formatColor(color: string): number {
        return ('0x' + color.replace('#', '')) as any
    }
}