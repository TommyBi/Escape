/*
 *  ScreenOne.ts
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
		public labelSign:eui.Label;

		//data 
		public gridsData = []; //448

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenOne.instance = this;
			this.labelSign.text = "1";
		}

		protected createChildren(): void {
			// 初始化地图中的结点
			for(let a of data_escapeOne){
				let preData: dataEscapeOne = new dataEscapeOne(a);
				let preScr:ItemScreen = new ItemScreen(preData);
				this.GroupMapItem.addChild(preScr);
				this.gridsData.push(preData);
			}

			// 监听点击事件，通知刷新界面
			Game.playerEvent.addEventListener(PlayerEvent.PLAYERPASSGRIDS,this.onUpdateInfo,this);
		}

		/** 处理位置后所在位置关联区域的显示情况 */
		private onUpdateInfo(){

		}
	}

	/** ItemScreen */
	export class ItemScreen extends BaseScreen{
		public imgBg:eui.Image;
		public constructor(data:dataEscapeOne){
			super();
			this.skinName = "MapItemSkin";
		}

		protected createChildren(): void {
			// 初始化
			this.imgBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
		} 

		// 点击响应
		private onTouch(){
			
		}
	}
}