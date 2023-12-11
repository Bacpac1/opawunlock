// 每七天访问一次 https://m.lapl.org/validate/auth_rm.php?db=wapo
var lastVisit = $persistentStore.read("lastVisit"); // 读取上次访问的时间
var current = new Date().getTime(); // 获取当前时间戳
var interval = 7 * 24 * 60 * 60 * 1000; // 设置访问间隔为七天，单位为毫秒
if (!lastVisit || current - lastVisit > interval) { // 如果没有记录或者超过间隔时间
  var options = {
    url: "https://m.lapl.org/validate/auth_rm.php?db=wapo", // 设置访问的 URL
    headers: {}, // 设置请求头，可以为空
    body: "" // 设置请求体，可以为空
  };
  $httpClient.get(options, function(error, response, data) { // 发起一个 HTTP GET 请求
    if (error) { // 如果请求出错
      console.log(error); // 输出错误信息到日志
    } else { // 如果请求成功
      console.log(response.status); // 输出响应状态码到日志
      console.log(data); // 输出响应数据到日志
      $persistentStore.write(current.toString(), "lastVisit"); // 保存当前时间戳到持久化存储
    }
    $done(); // 表示脚本执行完毕
  });
} else { // 如果没有超过间隔时间
  console.log("No need to visit"); // 输出提示信息到日志
  $done(); // 表示脚本执行完毕
}
