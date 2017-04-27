/*
 *  mapScreen.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */
var Game;
(function (Game) {
    /** 玩家用户详情界面 */
    var mapScreen = (function (_super) {
        __extends(mapScreen, _super);
        function mapScreen() {
            _super.call(this);
            this.skinName = "MapScreenSkin";
        }
        var d = __define,c=mapScreen,p=c.prototype;
        p.createChildren = function () {
            // 注册关闭事件
            // this.buttonClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{this.removeSelf();},this);
            // curPlayer.addEventListener(PlayerEvent.EXPERIENCECARDCHANGED,this.updateRemainingTime,this);
        };
        return mapScreen;
    }(Game.BaseScreen));
    Game.mapScreen = mapScreen;
    egret.registerClass(mapScreen,'Game.mapScreen');
})(Game || (Game = {}));
//# sourceMappingURL=Map.js.map