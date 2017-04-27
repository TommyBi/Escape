namespace Game{
    /**
     * escapeOne
     */
    export class dataEscapeOne extends DataModal{
        /** id */
        id:number = 0;  
        /** 能否通过 */
        advance:number = 1;
        /** 门id */
        type:number = 0 ;
        /** 包含物品 */
        addGoods:number = 0;
        linkNodeId:string = "";
        linkList:number[] = [];
        isPass:boolean = false;

        public constructor(data?){
            super();
            this.setData(data);
        }
        
    }
}