class App {
    services = new Services();
    store = new Store();
    platform = new WxgamePlatform();
    utils = new Util();
    sceenController = new SceenController();
}

declare let app: App;
window.app = new App();
