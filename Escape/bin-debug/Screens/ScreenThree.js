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
    var ScreenThree = (function (_super) {
        __extends(ScreenThree, _super);
        function ScreenThree() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
            ScreenThree.instance = this;
        }
        var d = __define,c=ScreenThree,p=c.prototype;
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
        };
        return ScreenThree;
    }(Game.BaseScreen));
    Game.ScreenThree = ScreenThree;
    egret.registerClass(ScreenThree,'Game.ScreenThree');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenThree.js.map