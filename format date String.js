String.prototype.formatTime = function () {
    var reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g;
    var ary = [];
    this.replace(reg, function () {
        ary=(([].slice.call(arguments)).slice(1,7));
    });
    var format = arguments[0] || "{0}年{1}月{2}日 {3}：{4}：{5}";
    return format.replace(/{(\d+)}/g, function () {
        var val=ary[arguments[1]];
        return val.length === 1 ? "0" + val : val;
    })
}
//var str = "2016-05-16 20:03:14";
//console.log(str.formatTime("{0}年{1}月 {3}:{4}"));