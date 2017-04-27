var Game;
(function (Game) {
    /**
     * DataDoor
     */
    var Data = (function (_super) {
        __extends(Data, _super);
        function Data(data) {
            _super.call(this);
            /** id */
            this.id = 0;
            /** 该门对应的界面 */
            this.screen = 0;
            /** 改门在该界面中对应的块id */
            this.screen_id = 0;
            /** 通过该门的条件 */
            this.need = 0;
            this.setData(data);
        }
        var d = __define,c=Data,p=c.prototype;
        return Data;
    }(Game.DataModal));
    Game.Data = Data;
    egret.registerClass(Data,'Game.Data');
})(Game || (Game = {}));
//# sourceMappingURL=DataObstacle.js.map