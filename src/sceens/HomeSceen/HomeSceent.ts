class HomeSceen extends BaseSceen {
	name = 'home';
	fruit: any;

	protected init() {
		this.fruit = app.utils.createBitmapByName('star_png');
		this.addChild(this.fruit);
		this.setBackground({
			color: "#f1e05a"
		});
		this.createElements();
	}

	protected async createElements() {
		this.createFruit();

	}

	public get factor(): number {
		return 0;
	}
	//计算方法参考 二次贝塞尔公式  
	public set factor(t: number) {
		const fruit = this.fruit;

		const p = QuadraticBezier(
			{
				x: 0,
				y: 0
			},
			{
				x: -300,
				y: 0
			},
			{
				x: -75,
				y: 225
			},
			t
		);
		fruit.x = p.x;
		fruit.y = p.y;
		console.log(p);
	}

	protected createFruit() {
		console.log('cccc')
		egret.Tween.get(this).to({ factor: 1 }, 3000);

	}

}