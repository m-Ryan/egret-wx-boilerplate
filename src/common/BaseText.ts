interface BaseTextStyle {
    text: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    backgroundColorImage?: string;
    x?: number;
    y?: number;
    color?: number;
    opacity?: number;
    bold?: boolean;
    align?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    size?: number;
    clickOnce?: number;
}

class BaseText extends egret.Sprite {
    private doFn: Function = () => { };
    private clickOnce: boolean = false;
    public constructor(style: BaseTextStyle, doFn?: Function) {
        super();
        this.clickOnce = !!style.clickOnce;
        if (doFn) {
            this.doFn = doFn;
        }
        this.init(style);
    }

    private init(style: BaseTextStyle) {

        style.width && (this.width = style.width);
        style.height && (this.height = style.height);

        this.x = style.x || 0;
        this.y = style.y || 0;

        if (style.backgroundColorImage) {
            let btn = app.utils.createBitmapByName(style.backgroundColorImage);
            style.width && (btn.width = style.width);
            style.height && (btn.height = style.height);
            this.addChild(btn);
        }

        const text: egret.TextField = new egret.TextField();
        style.width && (text.width = style.width);
        style.height && (text.height = style.height);

        text.text = style.text;
        text.textAlign = style.align || 'center';
        text.verticalAlign = style.verticalAlign || 'middle';
        text.size = style.size || 24;
        text.bold = style.bold || false;
        this.addChild(text);

        if (style.backgroundColor) {
            text.background = true;
            text.backgroundColor = app.utils.formatColor(style.backgroundColor);
        }

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
    }

    do(doFn: Function): void {
        if (!doFn) {
            throw egret.error();
        }
        doFn();

    }

    addChild(child: egret.DisplayObject) {
        child.touchEnabled = true;
        return super.addChild(child);
    }


    private removeEvent() {
        this.do(this.doFn);
        if (this.clickOnce) {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.removeEvent, this);
        }
    }
}