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
	export class ScreenThree extends BaseScreen {
		//eui 
		static instance: ScreenThree;
		public GroupMapItem:eui.Group;
		public listGrids:eui.DataGroup;

		//control
		private dataList:eui.ArrayCollection;

		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
			ScreenThree.instance = this;
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
        }
	}
}