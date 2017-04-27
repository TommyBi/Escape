/*
 *  MapScreen.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */
var Game;
(function (Game) {
    /** 主场景界面 */
    var ScreenOne = (function (_super) {
        __extends(ScreenOne, _super);
        function ScreenOne() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
            ScreenOne.instance = this;
        }
        var d = __define,c=ScreenOne,p=c.prototype;
        p.createChildren = function () {
            var gridsData = []; //448
            for (var a = 1; a <= 448; a++) {
                // test data
                var preData = {
                    id: a,
                    type: 1,
                    screenType: 1
                };
                gridsData.push(preData);
            }
            this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = mapItemRender;
            this.listGrids.dataProvider = this.dataList;
            this.labelSign.text = "1";
        };
        return ScreenOne;
    }(Game.BaseScreen));
    Game.ScreenOne = ScreenOne;
    egret.registerClass(ScreenOne,'Game.ScreenOne');
    /** 每一个格子的界面 */
    var mapItemRender = (function (_super) {
        __extends(mapItemRender, _super);
        function mapItemRender() {
            _super.call(this);
            this.skinName = "MapItemSkin";
            this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        }
        var d = __define,c=mapItemRender,p=c.prototype;
        //响应按钮点击
        p.onTouch = function () {
            egret.log("touch");
            this.imgBg.source = RES.getRes("main_json.map_close");
            // 切换界面 参数可以待定
            Game.playerEvent.dispatchEventWith(Game.PlayerEvent.PLAYERCHANGEMAP, false, {
                curItemId: 1,
                curScreen: 1,
                nextScreen: 2,
            });
        };
        p.dataChanged = function () {
            egret.log("datachanged");
        };
        return mapItemRender;
    }(CustomItemRenderer));
    Game.mapItemRender = mapItemRender;
    egret.registerClass(mapItemRender,'Game.mapItemRender');
    /** 格子类型数值 */
    var GridsModel = (function (_super) {
        __extends(GridsModel, _super);
        function GridsModel() {
            _super.apply(this, arguments);
            /** id */
            this.id = 0;
            /** 类型 */
            this.type = 0;
            /** screen */
            this.screenType = 0;
        }
        var d = __define,c=GridsModel,p=c.prototype;
        return GridsModel;
    }(Game.DataModal));
    Game.GridsModel = GridsModel;
    egret.registerClass(GridsModel,'Game.GridsModel');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenOne.js.map