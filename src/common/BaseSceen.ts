type SceenParams = {
	[key: string]: any
}

abstract class BaseSceen extends egret.Sprite {
	private backgroundElement?: egret.Bitmap;
	protected backgroundImage?: string;
	protected params: SceenParams = {}

	public constructor(params?: SceenParams) {
		super();
		if (params) {
			this.params = params;
		}
		this.init();
	}

	private initBackground() {
		if (this.backgroundImage) {
			let bg: egret.Bitmap = new egret.Bitmap();
			bg.texture = RES.getRes(this.backgroundImage);
			bg.width = app.store.common.stageW;
			bg.height = app.store.common.stageH;
			this.backgroundElement = bg;
			this.addChild(bg);
		}

	}

	public updatetBackgroundImage(image: string) {
		this.backgroundImage = image;

		if (this.backgroundElement) {
			this.backgroundElement.texture = RES.getRes(image);
		} else {
			this.initBackground();
		}
	}

	protected abstract init(backgroundImage?: string): void

}