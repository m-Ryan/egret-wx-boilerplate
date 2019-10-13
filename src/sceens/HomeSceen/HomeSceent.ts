class HomeSceen extends BaseSceen {
	name = 'home';

	protected init() {
		this.setBackground({
			color: "#f1e05a"
		});
		this.createElements();
	}

	protected async createElements() {
		this.createFruit();

	}

	protected createFruit() {
		const fruit = app.utils.createBitmapByName('star_png');
		this.addChild(fruit);
		const path = 'M150 0 L75 200 L225 200 Z';
		fruit.x = 150;
		fruit.y= 0;
        var tw:egret.Tween = egret.Tween.get(fruit);
        tw.to({x:75,y:200}, 1000);
        tw.to({x:225,y:200}, 1000);

	}

}