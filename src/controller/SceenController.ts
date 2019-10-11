class SceenController {

    private load<T extends BaseSceen>(sceen: T){
		app.store.common.stage.removeChildren();
		app.store.common.sceen = sceen;
		app.store.common.stage.addChild(sceen);
	}

    public loadLogin(args?: SceenParams) {
        this.load(new LoginSceen(args));
    }

    public loadHome(args?: SceenParams) {
        this.load(new HomeSceen(args));
    }

}