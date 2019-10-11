interface BaseBtnStyle {
	width: number;
	height: number;
	backgroundColor?: string;
	backgroundColorImage?: string;
	x?: number;
	y?: number
	color?: number;
	opacity?: number;
	borderRadius?: number;
	text?: BaseText | string;
	align?: 'left' | 'center' | 'right';
	verticalAlign?: 'top' | 'middle' | 'bottom';
	size?: number;
	clickOnce?: number;
}

class BaseBtn extends egret.Sprite {
	private doFn: Function;
	private clickOnce: boolean = false;
	public constructor(style: BaseBtnStyle, doFn: Function) {
		super();
		this.clickOnce = !!style.clickOnce;
		this.doFn = doFn;
		this.init(style);

	}

	private init(style: BaseBtnStyle) {

		this.width = style.width;
		this.height = style.height;
		this.x = style.x || 0;
		this.y = style.y || 0;

		if (style.backgroundColor) {
			let btn = new egret.Shape();
			btn.graphics.beginFill(Util.formatColor(style.backgroundColor), style.opacity);
			btn.graphics.drawRoundRect(0, 0, style.width, style.height, style.borderRadius || 0);
			btn.graphics.endFill();
			this.addChild(btn);
		}

		if (style.backgroundColorImage) {
			let btn = Util.createBitmapByName(style.backgroundColorImage);
			btn.width = style.width;
			btn.height = style.height;
			this.addChild(btn);
		}


		if (style.text) {
			if (typeof style.text === 'string') {
				var text: egret.TextField = new egret.TextField();
				text.text = style.text;
				text.width = style.width;
				text.height = style.height;
				text.textAlign = style.align || 'center';
				text.verticalAlign = style.verticalAlign || 'middle';
				text.size = style.size || 24;
				this.addChild(text);
			} else {
				this.addChild(style.text);
			}

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