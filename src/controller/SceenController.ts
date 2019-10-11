class SceenController {

    private static load<T extends BaseSceen>(sceen: T){
		Store.stage.removeChildren();
		Store.sceen = sceen;
		Store.stage.addChild(sceen);
	}

    public static loadLogin(args?: SceenParams) {
        this.load(new LoginSceen(args));
    }

    public static loadHome(args?: SceenParams) {
        this.load(new HomeSceen(args));
    }

}