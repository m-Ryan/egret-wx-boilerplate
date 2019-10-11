class Store {
	
	// 用户信息
	public user:UserStore = new UserStore();;

	//当前舞台
	public static stage: Main;

	//当前场景
	public static sceen: BaseSceen;

	//设置的舞台宽高
	public static stageW: number = 640;
	public static stageH: number = 1136;

}

window.store = new Store();
declare let store: Store;