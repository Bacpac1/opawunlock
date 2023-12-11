var options = {
  url: "https://www.washingtonpost.com/subscribe/signin/special-offers/?s_oe=SPECIALOFFER_LOSANGELESPL", // 设置访问的 URL
  headers: {}, // 设置请求头，可以为空
  body: "" // 设置请求体，可以为空
};
$httpClient.get(options, function(error, response, data) { // 发起一个 HTTP GET 请求
  if (error) { // 如果请求出错
    console.log(error); // 输出错误信息到日志
  } else { // 如果请求成功
    console.log(response.status); // 输出响应状态码到日志
    console.log(data); // 输出响应数据到日志
  }
  $done(); // 表示脚本执行完毕
});
