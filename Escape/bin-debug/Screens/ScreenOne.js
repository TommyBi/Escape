/*
 *  ScreenOne.ts
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
            //data 
            this.gridsData = []; //448
            this.skinName = "MapScreenSkin";
            ScreenOne.instance = this;
            this.labelSign.text = "1";
        }
        var d = __define,c=ScreenOne,p=c.prototype;
        p.createChildren = function () {
            // 初始化地图中的结点
            for (var _i = 0, data_escapeOne_1 = Game.data_escapeOne; _i < data_escapeOne_1.length; _i++) {
                var a = data_escapeOne_1[_i];
                var preData = new Game.dataEscapeOne(a);
                var preScr = new ItemScreen(preData);
                this.GroupMapItem.addChild(preScr);
                this.gridsData.push(preData);
            }
            // 监听点击事件，通知刷新界面
            Game.playerEvent.addEventListener(Game.PlayerEvent.PLAYERPASSGRIDS, this.onUpdateInfo, this);
        };
        /** 处理位置后所在位置关联区域的显示情况 */
        p.onUpdateInfo = function () {
        };
        return ScreenOne;
    }(Game.BaseScreen));
    Game.ScreenOne = ScreenOne;
    egret.registerClass(ScreenOne,'Game.ScreenOne');
    /** ItemScreen */
    var ItemScreen = (function (_super) {
        __extends(ItemScreen, _super);
        function ItemScreen(data) {
            _super.call(this);
            this.skinName = "MapItemSkin";
        }
        var d = __define,c=ItemScreen,p=c.prototype;
        p.createChildren = function () {
            // 初始化
            this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        };
        // 点击响应
        p.onTouch = function () {
        };
        return ItemScreen;
    }(Game.BaseScreen));
    Game.ItemScreen = ItemScreen;
    egret.registerClass(ItemScreen,'Game.ItemScreen');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenOne.js.map