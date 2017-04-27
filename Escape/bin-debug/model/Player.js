// TypeScript file
var Game;
(function (Game) {
    var Player = (function () {
        function Player() {
            this.m_diamondNum = 0;
            this.m_boneNum = 0;
            this.m_screenId = 0;
            this.m_curBlockId = 433;
            this.m_moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
        }
        var d = __define,c=Player,p=c.prototype;
        Player.GetInstance = function () {
            if (Player.m_pThis === null) {
                Player.m_pThis = new Player();
            }
            return Player.m_pThis;
        };
        p.GetCurDiamondNum = function () {
            return this.m_diamondNum;
        };
        p.GetCurBoneNum = function () {
            return this.m_boneNum;
        };
        p.UpdateDiamondNum = function (num) {
            this.m_diamondNum += num;
        };
        p.UpdateBoneNum = function (num) {
            this.m_boneNum += num;
        };
        p.SetScreenId = function (id) {
            this.m_screenId = id;
        };
        p.GetScreenId = function () {
            return this.m_screenId;
        };
        p.SetCurBlockId = function (id) {
            this.m_curBlockId = id;
        };
        p.GetCurBlockId = function () {
            return this.m_curBlockId;
        };
        p.SetMoveDirection = function (direction) {
            this.m_moveDirection = direction;
        };
        p.GetMoveDirection = function () {
            return this.m_moveDirection;
        };
        Player.m_pThis = null;
        return Player;
    }());
    Game.Player = Player;
    egret.registerClass(Player,'Game.Player');
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map