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
            // let tmpList : eui.ArrayCollection = <eui.ArrayCollection> this.listGrids.dataProvider;
            // for (var index = 0; index < tmpList.length; index++) {
            //     let item = tmpList.getItemAt(index) as dataEscapeOne;
            //     if (item.id == id){
            // 		item.isPass = true;
            // 		if(item.advance){
            // 			// datachange中会替换资源
            // 			return true;
            // 		}
            // 	}
            // }
            var item = this.listGrids.dataProvider.getItemAt(id - 1);
            if (item.advance == 1) {
                return true;
            }
            return false;
        };
        //得到当前块是否为门的标识
        p.GetDoorType = function (id) {
            if (this.dataList.length == 0) {
                return 0;
            }
            var item = this.listGrids.dataProvider.getItemAt(id - 1);
            return item.type;
        };
        p.NotifyBlockUpdate = function (id) {
            //得到当前块关联块id
            var item = this.listGrids.dataProvider.getItemAt(id - 1);
            var list = item.linkList;
            var isAdvance = Game.scrOne.JudgeIfCanAdvance(id);
            if ((list.length == 0) && (isAdvance == false) && (item.addGoods == 0)) {
                item.isAccess = true;
                return;
            }
            Game.playerEvent.dispatchEventWith(Game.PlayerEvent.PLAYERPASSGRIDS, false, {
                curItem: item, isAdvance: isAdvance, list: list, listGrids: this.listGrids
            });
        };
        return ScreenOne;
    }(Game.BaseScreen));
    Game.ScreenOne = ScreenOne;
    egret.registerClass(ScreenOne,'Game.ScreenOne');
    /** 每一个格子的界面 */
    var mapItemRender = (function (_super) {
        __extends(mapItemRender, _super);
        function mapItemRender() {
            var _this = this;
            _super.call(this);
            this.skinName = "MapItemSkin";
            this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
            Game.playerEvent.addEventListener(Game.PlayerEvent.PLAYERPASSGRIDS, function (event) {
                _this.ExchangeItemSkin(event);
            }, this);
        }
        var d = __define,c=mapItemRender,p=c.prototype;
        //响应按钮点击
        p.onTouch = function (e) {
            egret.log("touch");
            //this.imgBg.source = RES.getRes("main_json.map_close");
            // 更新当前位置点
            Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
            // 换肤
            var curScreenId = Game.player.GetScreenId();
            var curBlockId = Game.player.GetCurBlockId();
            var isAdvance = false;
            var doorType = 0;
            if (curScreenId == 1) {
                isAdvance = Game.scrOne.JudgeIfCanAdvance(curBlockId);
                doorType = Game.scrOne.GetDoorType(curBlockId);
                Game.scrOne.NotifyBlockUpdate(curBlockId);
            }
            else if (curScreenId == 2) {
                isAdvance = Game.scrTwo.JudgeIfCanAdvance(curBlockId);
                doorType = Game.scrTwo.GetDoorType(curBlockId);
                Game.scrTwo.NotifyBlockUpdate(curBlockId);
            }
            // else if (curScreenId == 3) {
            // 	isAdvance = Game.scrThree.JudgeIfCanAdvance(curBlockId);
            // 	Game.scrThree.NotifyBlockUpdate(curBlockId);
            // } else if (curScreenId == 4) {
            // 	isAdvance = Game.scrFour.JudgeIfCanAdvance(curBlockId);
            // 	Game.scrFour.NotifyBlockUpdate(curBlockId);
            // }
            if (isAdvance) {
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
            }
            // 切换界面 参数可以待定
            if (doorType > 0) {
                var doorData = Game.data_escapeDoor[doorType];
                Game.playerEvent.dispatchEventWith(Game.PlayerEvent.PLAYERCHANGEMAP, false, {
                    doorId: doorData.id,
                    nextScreen: doorData.screen,
                    nextScreenId: doorData.screen_id,
                });
            }
        };
        p.dataChanged = function () {
            egret.log("datachanged");
        };
        //更换皮肤
        p.ExchangeItemSkin = function (event) {
            var curBlockId = Game.player.GetCurBlockId();
            if (event.data.curItem.id == curBlockId) {
                //先访问当前块
                if (event.data.curItem.isAccess == false) {
                    if (event.data.isAdvance == true) {
                        //先根据移动方向，设置通道图
                        // this.SetAdvanceImage(curItem);
                        this.imgBg.source = RES.getRes("main_json.pass");
                        if (event.data.curItem.addGoods != 0) {
                            this.SetObstacleImage(event.data.curItem);
                        }
                    }
                    else {
                        if (event.data.curItem.addGoods != 0) {
                            this.SetObstacleImage(event.data.curItem);
                        }
                    }
                    event.data.curItem.isAccess = true;
                }
                //再访问关联块
                if (event.data.list.length > 0) {
                    for (var i = 0; i < (event.data.list.length - 1); i++) {
                        var itemtemId = event.data.list[i];
                        var item = event.data.listGrids.dataProvider.getItemAt(itemtemId);
                        var curAdvance = Game.scrOne.JudgeIfCanAdvance(itemtemId);
                        if (item.isAccess == false) {
                            if (item.isAdvance == true) {
                                //先根据移动方向，设置通道图
                                // this.SetAdvanceImage(curItem);
                                this.imgBg.source = RES.getRes("main_json.pass");
                                if (item.addGoods != 0) {
                                    this.SetObstacleImage(item);
                                }
                            }
                            else {
                                if (item.addGoods != 0) {
                                    this.SetObstacleImage(item);
                                }
                            }
                            item.isAccess = true;
                        }
                    }
                }
            }
        };
        // //根据移动方向设置通道图
        // private SetAdvanceImage(item) {
        // 	let moveDirection : number = Game.player.GetMoveDirection();
        // 	if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT) {
        // 		item.imgBg.source = RES.getRes("egret_icon_png");
        // 	} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT) {
        // 	} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP) {
        // 	} else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN) {
        // 	}
        // }
        //设置障碍图
        p.SetObstacleImage = function (item) {
            var Obstacle = Game.data_escapeObstacle[item.addGoods];
            this.imgBg.source = RES.getRes("main_json." + Obstacle.image);
        };
        return mapItemRender;
    }(CustomItemRenderer));
    Game.mapItemRender = mapItemRender;
    egret.registerClass(mapItemRender,'Game.mapItemRender');
})(Game || (Game = {}));
//# sourceMappingURL=ScreenOne.js.map