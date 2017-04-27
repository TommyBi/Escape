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
        p.JudgeCurPlayerValue = function (touchX, touchY) {
            var moveDirection = Game.player.GetMoveDirection();
            var offsetX = touchX - Game.player.m_node.x;
            var offsetY = touchY - Game.player.m_node.y;
            if ((offsetX > 0) && (offsetX <= 40)) {
                offsetX = 0;
            }
            if ((offsetY > 0) && (offsetY <= 40)) {
                offsetY = 0;
            }
            if ((offsetX < 0)) {
                if (offsetY == 0) {
                    //left
                    moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                }
                else if (offsetY < 0) {
                    if ((-offsetX) >= (-offsetY)) {
                        moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y - 40;
                        moveDirection = 2 /* PLAYER_MOVE_UP */;
                    }
                }
                else if (offsetY > 0) {
                    if ((-offsetX) >= offsetY) {
                        //left
                        moveDirection = 0 /* PLAYER_MOVE_LEFT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y + 40;
                        moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                    }
                }
            }
            else if (offsetX > 0) {
                if (offsetY == 0) {
                    // Game.player.m_node.x = Game.player.m_node.x + 40;
                    moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                }
                else if (offsetY < 0) {
                    if ((offsetX) >= (-offsetY)) {
                        moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y - 40;
                        moveDirection = 2 /* PLAYER_MOVE_UP */;
                    }
                }
                else if (offsetY > 0) {
                    if (offsetX >= offsetY) {
                        // Game.player.m_node.x = Game.player.m_node.x + 40;
                        moveDirection = 1 /* PLAYER_MOVE_RIGHT */;
                    }
                    else {
                        // Game.player.m_node.y = Game.player.m_node.y + 40;
                        moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                    }
                }
            }
            else if (offsetX == 0) {
                if (offsetY == 0) {
                }
                else if (offsetY < 0) {
                    moveDirection = 2 /* PLAYER_MOVE_UP */;
                }
                else if (offsetY > 0) {
                    moveDirection = 3 /* PLAYER_MOVE_DOWN */;
                }
            }
            var curBlockId = Game.player.GetCurBlockId();
            if (moveDirection == 0 /* PLAYER_MOVE_LEFT */) {
                curBlockId -= 1;
            }
            else if (moveDirection == 1 /* PLAYER_MOVE_RIGHT */) {
                curBlockId += 1;
            }
            else if (moveDirection == 2 /* PLAYER_MOVE_UP */) {
                curBlockId -= 16;
            }
            else if (moveDirection == 3 /* PLAYER_MOVE_DOWN */) {
                curBlockId += 16;
            }
            Game.player.SetCurBlockId(curBlockId);
            Game.player.SetMoveDirection(moveDirection);
        };
        Player.m_pThis = null;
        return Player;
    }());
    Game.Player = Player;
    egret.registerClass(Player,'Game.Player');
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map