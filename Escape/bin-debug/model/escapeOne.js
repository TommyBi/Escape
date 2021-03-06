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
            this.isAccess = false;
            this.setData(data);
            this.getLinks();
        }
        var d = __define,c=dataEscapeOne,p=c.prototype;
        p.getLinks = function () {
            if (this.linkNodeId.length > 0) {
                var a = this.linkNodeId.split(',');
                for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                    var b = a_1[_i];
                    if (b == "0") {
                        break;
                    }
                    this.linkList.push(parseInt(b));
                }
            }
        };
        return dataEscapeOne;
    }(Game.DataModal));
    Game.dataEscapeOne = dataEscapeOne;
    egret.registerClass(dataEscapeOne,'Game.dataEscapeOne');
    var dataEscapeTwo = (function (_super) {
        __extends(dataEscapeTwo, _super);
        function dataEscapeTwo(data) {
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
            this.isAccess = false;
            this.setData(data);
            this.getLinks();
        }
        var d = __define,c=dataEscapeTwo,p=c.prototype;
        p.getLinks = function () {
            if (this.linkNodeId.length > 0) {
                var a = this.linkNodeId.split(',');
                for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
                    var b = a_2[_i];
                    this.linkList.push(parseInt(b));
                }
            }
        };
        return dataEscapeTwo;
    }(Game.DataModal));
    Game.dataEscapeTwo = dataEscapeTwo;
    egret.registerClass(dataEscapeTwo,'Game.dataEscapeTwo');
})(Game || (Game = {}));
//# sourceMappingURL=escapeOne.js.map