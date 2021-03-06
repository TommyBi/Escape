/*
 *  List.ts
 *  egret
 *  Anansi Game Framework
 *
 *  Created by Chen Zhen on 16/09/30.
 *  Copyright (c) 2016年 Anansi Mobile. All rights reserved.
 */
var agf;
(function (agf) {
    /**
     * 一个简单的链表类
     */
    var List = (function () {
        function List() {
            this.mHead = null;
            this.mTail = null;
            this.mSize = 0;
        }
        var d = __define,c=List,p=c.prototype;
        /**
         * 添加数据到链表末尾
         */
        p.add = function (d) {
            var n = new ListNode();
            n.data = d;
            if (this.mTail == null) {
                this.mHead = n;
                this.mTail = n;
            }
            else {
                this.mTail.next = n;
                n.prev = this.mTail;
                this.mTail = n;
            }
            this.mSize++;
        };
        /**
         * 添加数据到链表末尾，同add()
         */
        p.push = function (d) {
            this.add(d);
        };
        /**
         * 插入数据，如果位置at超出链表长度，则直接添加到链表末尾，如果at < 0，则添加到链表头部
         */
        p.insert = function (d, at) {
            var n = new ListNode();
            n.data = d;
            if (this.mTail == null) {
                this.mHead = n;
                this.mTail = n;
            }
            else {
                if (at < 0) {
                    this.mHead.prev = n;
                    n.next = this.mHead;
                    this.mHead = n;
                }
                else {
                    var prev = this.getNodeAt(at);
                    if (prev == null || prev == this.mTail) {
                        prev = this.mTail;
                        this.mTail = n;
                    }
                    prev.next = n;
                    n.prev = prev;
                    n.next = prev.next;
                    if (n.next)
                        n.next.prev = n;
                }
            }
            this.mSize++;
        };
        /**
         * 从链表末尾移除数据
         */
        p.pop = function () {
            if (this.mSize <= 0)
                return null;
            var d = this.mTail.data;
            if (this.mSize == 1) {
                this.mHead = null;
                this.mTail = null;
            }
            else {
                this.mTail = this.mTail.prev;
                this.mTail.next = null;
            }
            this.mSize--;
            return d;
        };
        /**
         * 移除指定数据
         */
        p.remove = function (d) {
            var n = this.getNodeByData(d);
            this.removeNode(n);
        };
        /**
         * 移除指定位置的数据
         */
        p.removeAt = function (at) {
            var n = this.getNodeAt(at);
            this.removeNode(n);
        };
        /**
         * 获取数据所在位置，找不到则返回-1
         */
        p.indexOf = function (d) {
            if (this.mSize == 0)
                return -1;
            if (this.mHead.data == d)
                return 0;
            if (this.mTail.data == d)
                return this.mSize - 1;
            var n = this.mHead.next;
            var i = 1;
            while (n != null) {
                if (n.data == d)
                    break;
                n = n.next;
            }
            return i;
        };
        /**
         * 清除所有数据
         */
        p.clear = function () {
            this.mHead = this.mTail = null;
            this.mSize = 0;
        };
        p.getNodeByData = function (d) {
            if (this.mSize == 0)
                return null;
            if (this.mHead.data == d)
                return this.mHead;
            if (this.mTail.data == d)
                return this.mTail;
            var n = this.mHead.next;
            while (n != null) {
                if (n.data == d)
                    break;
                n = n.next;
            }
            return n;
        };
        p.removeNode = function (n) {
            if (n != null) {
                var prev = n.prev;
                var next = n.next;
                if (prev != null)
                    prev.next = next;
                if (next != null)
                    next.prev = prev;
                if (n == this.mHead)
                    this.mHead = next;
                if (n == this.mTail)
                    this.mTail = prev;
                this.mSize--;
            }
        };
        /**
         * 获取位置p上的数据
         */
        p.get = function (p) {
            var n = this.getNodeAt(p);
            if (n == null)
                return null;
            else
                return n.data;
        };
        /**
         * 获取指定位置的节点
         */
        p.getNodeAt = function (p) {
            if (p < 0 || p >= this.mSize)
                return null;
            if (this.mHead == null)
                return null;
            if (p == 0)
                return this.mHead;
            if (p == this.mSize - 1)
                return this.mTail;
            var n = this.mHead;
            var i = 0;
            while (i != p) {
                n = n.next;
                i++;
            }
            return n;
        };
        d(p, "length"
            ,function () { return this.mSize; }
            ,function (l) { } // do nothing
        );
        return List;
    }());
    agf.List = List;
    egret.registerClass(List,'agf.List');
    /**
     * 链表节点
     */
    var ListNode = (function () {
        function ListNode() {
            this.data = null;
            this.prev = null;
            this.next = null;
        }
        var d = __define,c=ListNode,p=c.prototype;
        return ListNode;
    }());
    egret.registerClass(ListNode,'ListNode');
})(agf || (agf = {}));
//# sourceMappingURL=List.js.map