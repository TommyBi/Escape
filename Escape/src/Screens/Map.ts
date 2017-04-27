/*
 *  mapScreen.ts
 *  egret
 *  cardh5
 *
 *  Created by Liu Yang on 17/04/27.
 *  Copyright (c) 2017年 LiuYang Mobile. All rights reserved.
 */

namespace Game {

	/** 玩家用户详情界面 */
	export class mapScreen extends BaseScreen {
		public constructor() {
			super();
			this.skinName = "MapScreenSkin";
		}

		protected createChildren(): void {
            
            // 注册关闭事件
			// this.buttonClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{this.removeSelf();},this);
            // curPlayer.addEventListener(PlayerEvent.EXPERIENCECARDCHANGED,this.updateRemainingTime,this);
		}
	}
}