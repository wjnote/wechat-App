export function formatTime(timeStamp,fmt) {
  var o = {
    "M+": timeStamp.getMonth() + 1, // 月份
    "d+": timeStamp.getDate(), // 日
    "h+": timeStamp.getHours(), // 小时
    "m+": timeStamp.getMinutes(), // 分
    "s+": timeStamp.getSeconds(), // 秒
    "q+": Math.floor((timeStamp.getMonth() + 3) / 3), // 季度
    "S": timeStamp.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (timeStamp.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}