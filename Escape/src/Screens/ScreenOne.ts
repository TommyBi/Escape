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

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenOne.instance = this;
		}

		protected createChildren(): void {
			let gridsData = []; //448
			for(let a=1;a<=448;a++){
				// test data
				let preData = {
					id:a,
					type:1,
					screenType:1
				}
				gridsData.push(preData);
			}
			this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = mapItemRender;
            this.listGrids.dataProvider = this.dataList;
			this.labelSign.text = "1";
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
		private onTouch(){
			egret.log("touch");
			this.imgBg.source = RES.getRes("main_json.map_close");

			// 切换界面 参数可以待定
			playerEvent.dispatchEventWith(PlayerEvent.PLAYERCHANGEMAP,false,{
					curItemId:1,
					curScreen:1,
					nextScreen:2,
                })
		}

		protected dataChanged(): void {
			egret.log("datachanged");
		} 
	}

	/** 格子类型数值 */
	export class GridsModel extends DataModal {
		/** id */
		public id:number = 0;
		/** 类型 */
		public type:number = 0;
		/** screen */
		public screenType:number = 0;
	}
}