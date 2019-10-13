class HomeSceen extends BaseSceen {
	name = 'home';

	protected init() {
		this.setBackground({
			color: "#f1e05a"
		});
		this.createElements();
	}

	protected async createElements() {
		app.platform.getSystemInfo();
		const loginBtn = new BaseBtn({
			x: 50,
			y: 50,
			width: 200,
			height: 100,
			backgroundColor: '#067785',
			text: '首页'
		}, () => {
            wx.onShareAppMessage(() => {
				return {
					title: '转发标题'
				}
			})
            console.log(wx.shareAppMessage);
            wx.shareAppMessage({
                success() {
                    console.log('ssss')
                },
                fail(res) {
                    console.log(res)
                },
                complete() {
                   console.log('wqe') 
                }
            })
		});
		this.addChild(loginBtn);
		this.createFruit();

	}

	protected createFruit() {
		const fruit = app.utils.createBitmapByName('e4_png');
		fruit.x = 50;
		fruit.y= 50;
		this.addChild(fruit);
        var tw:egret.Tween = egret.Tween.get(fruit);
        tw.wait(50, false);
        // tw.call(this.addThisToParent,this);
        tw.to({x:300,y:300},3000, egret.Ease.bounceOut);;

	}

}