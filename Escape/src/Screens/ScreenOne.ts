/*
 *  MapScreen.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */

namespace Game {

	/** 主场景界面 */
	export class ScreenOne extends BaseScreen {
		//eui 
		static instance: ScreenOne;
		public GroupMapItem:eui.Group;
		public listGrids:eui.DataGroup;
		public labelSign:eui.Label;

		//control
		private dataList:eui.ArrayCollection;
		private blockIdArray:number[];

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenOne.instance = this;
		}

		protected createChildren(): void {
			let gridsData = []; //448
			for(let a of data_escapeOne){
				let preData: dataEscapeOne = new dataEscapeOne(a);
				gridsData.push(preData);
			}

			this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = mapItemRender;
            this.listGrids.dataProvider = this.dataList;
			this.labelSign.text = "1";
        }

		// 获取当前节点的元素，并判断是否可以通过，并进行换肤操作
		public JudgeIfCanAdvance(id:number) : boolean {
			if (this.dataList.length == 0) {
				return false;
			}

			return true;
		}

		public NotifyBlockUpdate(id:number) : void {
			//得到当前块关联块id

		}
	}
	
	/** 每一个格子的界面 */
	export class mapItemRender extends CustomItemRenderer{
		public imgBg:eui.Image;

		public constructor() {
			super();
			this.skinName = "MapItemSkin";
			this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
		}

		//响应按钮点击
		private onTouch(e: egret.TouchEvent){
			egret.log("touch");
			//this.imgBg.source = RES.getRes("main_json.map_close");

			
			// 更新当前位置点
			Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
			
			// 换肤
			let curBlockId : number = Game.player.GetCurBlockId();
			let isAdvance : boolean = Game.scrOne.JudgeIfCanAdvance(curBlockId);
			if (isAdvance) {

			}
			Game.scrOne.NotifyBlockUpdate(curBlockId);
			
			// 移动主角
			let moveDirection : number = Game.player.GetMoveDirection();
			if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_LEFT) {
                Game.player.m_node.x = Game.player.m_node.x - 40;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT) {
                Game.player.m_node.x = Game.player.m_node.x + 40;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_UP) {
                Game.player.m_node.y = Game.player.m_node.y - 40;
            } else if (moveDirection == Game.PLAYER_MOVE_TYPE.PLAYER_MOVE_DOWN) {
                Game.player.m_node.y = Game.player.m_node.y + 40;
            }

			// // 切换界面 参数可以待定
			// playerEvent.dispatchEventWith(PlayerEvent.PLAYERCHANGEMAP,false,{
			// 		curItemId:1,
			// 		curScreen:1,
			// 		nextScreen:2,
            // })
		}

		protected dataChanged(): void {
			egret.log("datachanged");
		} 
	}
}