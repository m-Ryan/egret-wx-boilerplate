type SceenParams = {
	[key: string]: any
}

type GradientOptions = {
	type?: string, colors: string[], alphas: number[], ratios: number[], matrix?: egret.Matrix | undefined
}

abstract class BaseSceen extends egret.Sprite {
	public abstract name: string;
	public params: SceenParams = {};
	private backgroundImageElement: egret.Bitmap;
	private backgroundColorElement: egret.Shape;

	public constructor(params?: SceenParams) {
		super();
		if (params) {
			this.params = params;
		}
		this.backgroundColorElement = new egret.Shape();
		this.addChild(this.backgroundColorElement);
		this.backgroundImageElement = new egret.Bitmap();
		this.backgroundImageElement.width = app.store.common.stage.width;
		this.backgroundImageElement.height = app.store.common.stage.height;
		this.addChild(this.backgroundImageElement);
		this.init();
	}

	public setBackground(oprions: {
		image?: string
		color?: string | GradientOptions
	}) {
		const color = oprions.color;
		if (color) {
			const graphics = this.backgroundColorElement.graphics;
			graphics.clear();
			if (typeof color === 'object') {
				if (!color.type) {
					color.type = egret.GradientType.LINEAR;
				}
				graphics.beginGradientFill(color.type, color.colors.map(c=>app.utils.formatColor(c)), color.alphas, color.ratios, color.matrix);
			} else {
				graphics.beginFill(app.utils.formatColor(color));
			}
			graphics.drawRect(0, 0, this.width, this.height);
			graphics.endFill();

		}

		if (oprions.image) {
			this.backgroundImageElement.texture = RES.getRes(oprions.image);
		}
	}

	protected abstract init(): void

}