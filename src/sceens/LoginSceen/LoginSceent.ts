class LoginSceen extends BaseSceen {

	protected init() {
		this.updatetBackgroundImage('bg2_jpg');
		this.createElements();
	}

	protected async createElements() {
		try {

			// 获取登录code换clientId
			const { code } = await platform.login();
			const { userInfo } = await platform.getUserInfo();
			store.user.baseInfo = userInfo;
			SceenController.loadHome();
		} catch (error) {
			this.createLogin();
		}

	}

	protected createLogin() {

		const button = platform.createUserInfoButton({
			type: 'text',
			text: '获取用户信息111',
			style: {
				left: 10,
				top: 76,
				width: 200,
				height: 40,
				lineHeight: 40,
				backgroundColor: '#ff0000',
				color: '#ffffff',
				textAlign: 'center',
				fontSize: 16,
				borderRadius: 4
			}
		})
		button.onTap((data) => {
			if (data.userInfo) {
				button.destroy();
				store.user.baseInfo = data.userInfo;
				SceenController.loadHome();
			}
		})
	}

}