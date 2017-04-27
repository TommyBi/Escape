var Game;
(function (Game) {
    /**
     * escapeOne
     */
    var dataEscapeOne = (function (_super) {
        __extends(dataEscapeOne, _super);
        function dataEscapeOne(data) {
            _super.call(this);
            /** id */
            this.id = 0;
            /** 能否通过 */
            this.advance = 1;
            /** 门id */
            this.type = 0;
            /** 包含物品 */
            this.addGoods = 0;
            this.linkNodeId = "";
            this.linkList = [];
            this.isPass = false;
            this.setData(data);
        }
        var d = __define,c=dataEscapeOne,p=c.prototype;
        return dataEscapeOne;
    }(Game.DataModal));
    Game.dataEscapeOne = dataEscapeOne;
    egret.registerClass(dataEscapeOne,'Game.dataEscapeOne');
})(Game || (Game = {}));
//# sourceMappingURL=escapeOne.js.map