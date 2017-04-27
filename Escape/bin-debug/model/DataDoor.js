var Game;
(function (Game) {
    /**
     * DataDoor
     */
    var DataDoor = (function (_super) {
        __extends(DataDoor, _super);
        function DataDoor(data) {
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
        var d = __define,c=DataDoor,p=c.prototype;
        return DataDoor;
    }(Game.DataModal));
    Game.DataDoor = DataDoor;
    egret.registerClass(DataDoor,'Game.DataDoor');
})(Game || (Game = {}));
//# sourceMappingURL=DataDoor.js.map