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
            for (var _i = 0, data_escapeTwo_1 = Game.data_escapeTwo; _i < data_escapeTwo_1.length; _i++) {
                var a = data_escapeTwo_1[_i];
                var preData = new Game.dataEscapeTwo(a);
                gridsData.push(preData);
            }
            this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = Game.mapItemRender;
            this.listGrids.dataProvider = this.dataList;
            this.labelSign.text = "2";
        };
        // 获取当前节点的元素，并判断是否可以通过，并进行换肤操作
        p.JudgeIfCanAdvance = function (id) {
            if (this.dataList.length == 0) {
                return false;
            }
            return true;
        };
        //得到当前块是否为门的标识
        p.GetDoorType = function (id) {
            if (this.dataList.length == 0) {
                return 0;
            }
            var item = this.listGrids.dataProvider.getItemAt(id);
            return item.type;
        };
        p.NotifyBlockUpdate = function (id) {
            //得到当前块关联块id
        };
        return ScreenTwo;
    }(Game.BaseScreen));
    Game.ScreenTwo = ScreenTwo;
    egret.registerClass(ScreenTwo,'Game.ScreenTwo');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenTwo.js.map