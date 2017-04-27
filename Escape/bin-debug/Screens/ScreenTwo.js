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
    var ScreenTwo = (function (_super) {
        __extends(ScreenTwo, _super);
        function ScreenTwo() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
            ScreenTwo.instance = this;
        }
        var d = __define,c=ScreenTwo,p=c.prototype;
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
            this.listGrids.itemRenderer = Game.mapItemRender;
            this.listGrids.dataProvider = this.dataList;
            this.labelSign.text = "2";
        };
        return ScreenTwo;
    }(Game.BaseScreen));
    Game.ScreenTwo = ScreenTwo;
    egret.registerClass(ScreenTwo,'Game.ScreenTwo');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenTwo.js.map