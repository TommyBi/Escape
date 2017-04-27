var Game;
(function (Game) {
    /**
     * 对象池. 支持对每个对象的取出和放入定制动作
     *
     * @export
     * @class ObjectPool
     * @template T
     */
    var ObjectPool = (function () {
        function ObjectPool(clazz) {
            this.clazz = clazz;
            this.pool = [];
        }
        var d = __define,c=ObjectPool,p=c.prototype;
        d(p, "length"
            ,function () {
                return this.pool.length;
            }
        );
        p.get = function () {
            var object = this.pool.shift();
            if (!object) {
                if (this.onNew) {
                    object = this.onNew();
                }
                else {
                    object = new this.clazz();
                }
            }
            else {
            }
            if (this.onInitialize) {
                this.onInitialize(object);
            }
            return object;
        };
        p.recycle = function (object) {
            if (!object) {
                return;
            }
            this.pool.push(object);
            if (this.onRecycle) {
                this.onRecycle(object);
            }
        };
        return ObjectPool;
    }());
    Game.ObjectPool = ObjectPool;
    egret.registerClass(ObjectPool,'Game.ObjectPool');
})(Game || (Game = {}));
//# sourceMappingURL=ObjectPool.js.map