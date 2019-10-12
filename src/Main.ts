class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        try {

           const data =  await app.request.get('https://m.lizhiweike.com/operating/promotion/trial_products', {
                data: {
                    password: "418418001",
                    phone: "13352691060"
                },
                params: {
                    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQWNjb3VudFRva2VuIiwiaWQiOjgxNjc0MTM3LCJuaWNrbmFtZSI6Iuavm-eBv-WNjiIsInNleCI6IjEiLCJzdGF0dXMiOiJub3JtYWwiLCJzdWJzY3JpYmVkIjoxLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU3MDg3Mzk5NywiZXhwIjoxNTcwODk1NTk3fQ.6UNwJGWwGS2PtpwGyFFAAkqCHnsnspQ94kqSR9asCYs`
                }
            });

        } catch (error) {
            console.log('error',error)
        }
        this.createGameScene();
        const result = await RES.getResAsync("description_json")

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        app.store.common.stage = this;
        app.sceenController.loadLogin();
    }

}
