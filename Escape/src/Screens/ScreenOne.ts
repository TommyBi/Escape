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
			let item = this.listGrids.dataProvider.getItemAt(id - 1);
			if (item.advance == 1) {
				return true;
			}
			return false;
		}

		//得到当前块是否为门的标识
		public GetDoorType(id : number) : number {
			if (this.dataList.length == 0) {
				return 0;
			}
			let item = this.listGrids.dataProvider.getItemAt(id - 1);
			return item.type;
		}

		public NotifyBlockUpdate(id:number) : void {
			//得到当前块关联块id
			let item = this.listGrids.dataProvider.getItemAt(id - 1);
			let list:number[] = item.linkList;
			let isAdvance : boolean = Game.scrOne.JudgeIfCanAdvance(id);
			if ((list.length == 0) && (isAdvance == false) && (item.addGoods == 0)) { //表示当前块即不能通过，也没有关联项，也没有障碍
				item.isAccess = true;
				return;
			}
			
			playerEvent.dispatchEventWith(PlayerEvent.PLAYERPASSGRIDS,false,{
						curItem:item,isAdvance:isAdvance,list:list,listGrids:this.listGrids
				});
		}
	}
	
	/** 每一个格子的界面 */
	export class mapItemRender extends CustomItemRenderer{
		public imgBg:eui.Image;
		public data:dataEscapeOne;
		public constructor() {
			super();
			this.skinName = "MapItemSkin";
			this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
			Game.playerEvent.addEventListener(PlayerEvent.PLAYERPASSGRIDS,(event: { data: { curItem:any, isAdvance:boolean, list:number[], listGrids:any} })=>{
				this.ExchangeItemSkin(event);
			},this);
		}

		//响应按钮点击
		private onTouch(e: egret.TouchEvent){
			egret.log("touch");
			//this.imgBg.source = RES.getRes("main_json.map_close");
			
			// 更新当前位置点
			Game.player.JudgeCurPlayerValue(e.stageX, e.stageY);
			
			// 换肤
			let curScreenId : number = Game.player.GetScreenId();
			let curBlockId : number = Game.player.GetCurBlockId();
			let isAdvance : boolean = false;
			let doorType : number = 0;
			if (curScreenId == 1) {
				isAdvance = Game.scrOne.JudgeIfCanAdvance(curBlockId);
				doorType = Game.scrOne.GetDoorType(curBlockId);
				Game.scrOne.NotifyBlockUpdate(curBlockId);
			} else if (curScreenId == 2) {
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
			}

			// 切换界面 参数可以待定
			if (doorType > 0) { //表示当前块为门
				let doorData = data_escapeDoor[doorType];
				playerEvent.dispatchEventWith(PlayerEvent.PLAYERCHANGEMAP,false,{
						doorId:doorData.id,
						nextScreen:doorData.screen,
						nextScreenId:doorData.screen_id,
				})
			}
		}
		protected dataChanged(): void {
			egret.log("datachanged");
		} 

		//更换皮肤
		private ExchangeItemSkin(event) {
			let curBlockId : number = Game.player.GetCurBlockId();
			if (event.data.curItem.id == curBlockId) {
				//先访问当前块
				if(event.data.curItem.isAccess == false) {
					if (event.data.isAdvance == true) {   //能通过
						//先根据移动方向，设置通道图
						// this.SetAdvanceImage(curItem);
						this.imgBg.source = RES.getRes("main_json.pass");
						if (event.data.curItem.addGoods != 0) {  //能通过，但是有障碍，如钻石，地雷，喷火...
							this.SetObstacleImage(event.data.curItem);
								//再设置障碍图
						}
					} else {  //不能通过
						if (event.data.curItem.addGoods != 0) {  //不能通过，但是有贴图，如树，墙，石头...
							this.SetObstacleImage(event.data.curItem);
							//设置障碍图
						}
					}
					event.data.curItem.isAccess = true;
				}
				
				//再访问关联块
				if (event.data.list.length > 0) {
					for (let i = 0; i < (event.data.list.length - 1); i++) {
						let itemtemId = event.data.list[i];
						let item = event.data.listGrids.dataProvider.getItemAt(itemtemId);
						let curAdvance : boolean = Game.scrOne.JudgeIfCanAdvance(itemtemId);
						if (item.isAccess == false) {
							if (item.isAdvance == true) {   //能通过
								//先根据移动方向，设置通道图
								// this.SetAdvanceImage(curItem);
								this.imgBg.source = RES.getRes("main_json.pass");
								if (item.addGoods != 0) {  //能通过，但是有障碍，如钻石，地雷，喷火...
									this.SetObstacleImage(item);
										//再设置障碍图
								}
							} else {  //不能通过
								if (item.addGoods != 0) {  //不能通过，但是有贴图，如树，墙，石头...
									this.SetObstacleImage(item);
									//设置障碍图
								}
							}
							item.isAccess = true;
						}
					}
				}
			}
		}
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
		private SetObstacleImage(item) {
			let Obstacle = data_escapeObstacle[item.addGoods];
			this.imgBg.source = RES.getRes("main_json." + Obstacle.image);
		}
	}
}