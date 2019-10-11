class HomeSceen extends BaseSceen {

	protected init() {
		this.updatetBackgroundImage('bg2_jpg');
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

		});
		this.addChild(loginBtn);
		Services.get()

	}

}