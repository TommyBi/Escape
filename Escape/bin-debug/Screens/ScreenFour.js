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
    var ScreenFour = (function (_super) {
        __extends(ScreenFour, _super);
        function ScreenFour() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
            ScreenFour.instance = this;
        }
        var d = __define,c=ScreenFour,p=c.prototype;
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
        return ScreenFour;
    }(Game.BaseScreen));
    Game.ScreenFour = ScreenFour;
    egret.registerClass(ScreenFour,'Game.ScreenFour');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenFour.js.map