// TypeScript file
namespace Game{

    export class Player {
        private static m_pThis = null ;
        public m_node:egret.Bitmap;
	    private m_diamondNum = 0 ;
	    private m_boneNum = 0;
        private m_screenId = 0;
        private m_curBlockId = 433;
        private m_moveDirection = PLAYER_MOVE_TYPE.PLAYER_MOVE_RIGHT;

        public constructor() {
        }

        public static GetInstance(): Player {
            if (Player.m_pThis === null) {
                Player.m_pThis = new Player();
            }
            return Player.m_pThis ;
        }

        public GetCurDiamondNum(): number {
            return this.m_diamondNum ; 
        }

        public GetCurBoneNum(): number {
            return this.m_boneNum;
        }

        public UpdateDiamondNum(num: number): void {
            this.m_diamondNum += num;
        }

        public UpdateBoneNum(num: number): void {
            this.m_boneNum += num;
        }

        public SetScreenId(id: number): void {
            this.m_screenId = id;
        }
        
        public GetScreenId() {
           return this.m_screenId;
        }

        public SetCurBlockId(id: number): void {
            this.m_curBlockId = id;
        }
        
        public GetCurBlockId() {
           return this.m_curBlockId;
        }

        public SetMoveDirection(direction: number): void {
            this.m_moveDirection = direction;
        }
        
        public GetMoveDirection() {
           return this.m_moveDirection;
        }
    }
}