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
            for (var _i = 0, data_escapeOne_1 = Game.data_escapeOne; _i < data_escapeOne_1.length; _i++) {
                var a = data_escapeOne_1[_i];
                var preData = new Game.dataEscapeOne(a);
                gridsData.push(preData);
            }
            this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = mapItemRender;
            this.listGrids.dataProvider = this.dataList;
            this.labelSign.text = "1";
        };
        // 获取当前节点的元素，并判断是否可以通过，并进行换肤操作
        p.JudgeIfCanAdvance = function (id) {
            if (this.dataList.length == 0) {
                return false;
            }
            return true;
        };
        p.NotifyBlockUpdate = function (id) {
            //得到当前块关联块id
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
        p.onTouch = function (e) {
            egret.log("touch");
            //this.imgBg.source = RES.getRes("main_json.map_close");
            // 更新当前位置点
            Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
            // 换肤
            var curBlockId = Game.player.GetCurBlockId();
            var isAdvance = Game.scrOne.JudgeIfCanAdvance(curBlockId);
            if (isAdvance) {
            }
            Game.scrOne.NotifyBlockUpdate(curBlockId);
            // 移动主角
            var moveDirection = Game.player.GetMoveDirection();
            if (moveDirection == 0 /* PLAYER_MOVE_LEFT */) {
                Game.player.m_node.x = Game.player.m_node.x - 40;
            }
            else if (moveDirection == 1 /* PLAYER_MOVE_RIGHT */) {
                Game.player.m_node.x = Game.player.m_node.x + 40;
            }
            else if (moveDirection == 2 /* PLAYER_MOVE_UP */) {
                Game.player.m_node.y = Game.player.m_node.y - 40;
            }
            else if (moveDirection == 3 /* PLAYER_MOVE_DOWN */) {
                Game.player.m_node.y = Game.player.m_node.y + 40;
            }
            // // 切换界面 参数可以待定
            // playerEvent.dispatchEventWith(PlayerEvent.PLAYERCHANGEMAP,false,{
            // 		curItemId:1,
            // 		curScreen:1,
            // 		nextScreen:2,
            // })
        };
        p.dataChanged = function () {
            egret.log("datachanged");
        };
        return mapItemRender;
    }(CustomItemRenderer));
    Game.mapItemRender = mapItemRender;
    egret.registerClass(mapItemRender,'Game.mapItemRender');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenOne.js.map