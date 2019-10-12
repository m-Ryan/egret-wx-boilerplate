class HomeSceen extends BaseSceen {

	protected init() {
		this.updatetBackgroundImage('defaultBg_png');
		this.createElements();
	}

	protected async createElements() {
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
            wx.showShareMenu({
                success() {
                    console.log('ssss')
                },
                fail() {
                    console.log('123')
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