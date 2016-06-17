/**
 * Created by Ace.C on 2016/4/9.
 */
var utils;
(function (utils) {
    /**
     * 检测工具
     */
    var TestUtils = (function () {
        function TestUtils() {
        }
        var d = __define,c=TestUtils,p=c.prototype;
        /**
         * 显示区域碰撞检测
         * @param o1
         * @param o2
         * @returns {boolean}
         */
        TestUtils.hitTest = function (o1, o2) {
            if (!o1 || !o2)
                return false;
            var p1 = o1.localToGlobal(0, 0);
            var r1 = o1.getBounds();
            r1.x = p1.x + 1;
            r1.y = p1.y + 1;
            r1.width -= 2;
            r1.height -= 2;
            var p2 = o2.localToGlobal(0, 0);
            var r2 = o2.getBounds();
            r2.x = p2.x + 1;
            r2.y = p2.y + 1;
            r2.width -= 2;
            r2.height -= 2;
            return r1.intersects(r2);
        };
        return TestUtils;
    }());
    utils.TestUtils = TestUtils;
    egret.registerClass(TestUtils,'utils.TestUtils');
})(utils || (utils = {}));
