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
	export class ScreenTwo extends BaseScreen {
		//eui 
		static instance: ScreenTwo;
		public GroupMapItem:eui.Group;
		public listGrids:eui.DataGroup;
		public labelSign:eui.Label;

		//control
		private dataList:eui.ArrayCollection;

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenTwo.instance = this;
		}

		protected createChildren(): void {
			let gridsData = []; //448
			for(let a of data_escapeTwo){
				let preData: dataEscapeTwo = new dataEscapeTwo(a);
				gridsData.push(preData);
			}

			this.dataList = new eui.ArrayCollection(gridsData);
            this.listGrids.itemRenderer = mapItemRender;
            this.listGrids.dataProvider = this.dataList;
			this.labelSign.text = "2";
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
	
}