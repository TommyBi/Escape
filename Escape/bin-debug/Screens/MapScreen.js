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
    var mapScreen = (function (_super) {
        __extends(mapScreen, _super);
        function mapScreen() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
        }
        var d = __define,c=mapScreen,p=c.prototype;
        ;
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
        };
        return mapScreen;
    }(Game.BaseScreen));
    Game.mapScreen = mapScreen;
    egret.registerClass(mapScreen,'Game.mapScreen');
    /** 每一个格子的界面 */
    var mapItemRender = (function (_super) {
        __extends(mapItemRender, _super);
        function mapItemRender() {
            _super.call(this);
            this.skinName = "MapItemSkin";
            this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        }
        var d = __define,c=mapItemRender,p=c.prototype;
        //
        p.onTouch = function () {
            egret.log("touch");
            this.imgBg.source = RES.getRes("main_json.map_close");
        };
        p.dataChanged = function () {
            egret.log("datachanged");
            //this.imgBg.source = RES.getRes("main_json.map_open")
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
//# sourceMappingURL=MapScreen.js.map