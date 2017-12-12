var curUrl=window.location.href;
var sign="";
var time="";
 $.ajax({
 type: 'get',
 url: 'http://tool.dailyqd.com/maker/mobilesharejninterface.aspx',
 data:
 {
 'url': curUrl
 },
 dataType: 'jsonp',
 jsonp: "callback",
 jsonpCallback: "qdrbjnshare",
 success: function (data) {
 	 wx.config({
 debug: false, 
 appId: "wxab5dbb4806762bfc", 
 timestamp: data.time, 
 nonceStr: data.noncstr, 
 signature: data.sign,
 jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 功能列表，我们要使用JS-SDK的什么功能

}); 
 },
 error: function (XMLHttpRequest, textStatus, errorThrown) {
 }
 })
	

wx.error(function(res){
});
 wx.ready(function(){
 // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
wx.onMenuShareAppMessage({
 title: '《青岛日报》创刊68周年', // 分享标题
 desc: '今天，重温历史，不忘初心，未来，牢记使命，砥砺前行。', // 分享描述
 
 link: document.URL, // 分享链接
 imgUrl: 'http://www.dailyqd.com/h5/smdyds/images/logo.png', // 分享图标
 type: '', // 分享类型,music、video或link，不填默认为link
 dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
 success: function () { 
 // 用户确认分享后执行的回调函数
		 
 },
 cancel: function () { 
 // 用户取消分享后执行的回调函数
		
 }
});
wx.onMenuShareTimeline({
 title: '《青岛日报》创刊68周年', // 分享标题
 link: document.URL, // 分享链接
 desc: '今天，重温历史，不忘初心，未来，牢记使命，砥砺前行。', // 分享描述
 imgUrl: 'http://www.dailyqd.com/h5/smdyds/images/logo.png', // 分享图标
 success: function () { 
 // 用户确认分享后执行的回调函数
 	 
 },
 cancel: function () { 
 // 用户取消分享后执行的回调函数
 	
 }
});
wx.onMenuShareQQ({
 title: '《青岛日报》创刊68周年', // 分享标题
 desc: '今天，重温历史，不忘初心，未来，牢记使命，砥砺前行。',
 link: document.URL, // 分享链接
 imgUrl: 'http://www.dailyqd.com/h5/smdyds/images/logo.png', // 分享图标
 success: function () { 
 // 用户确认分享后执行的回调函数
 	
 },
 cancel: function () { 
 // 用户取消分享后执行的回调函数
 	
 }
});
wx.onMenuShareWeibo({
	 title: '《青岛日报》创刊68周年', // 分享标题
 desc: '今天，重温历史，不忘初心，未来，牢记使命，砥砺前行。',
 link: document.URL, // 分享链接
 imgUrl: 'http://www.dailyqd.com/h5/smdyds/images/logo.png', // 分享图标
 success: function () { 
 // 用户确认分享后执行的回调函数
 	 
 },
 cancel: function () { 
 // 用户取消分享后执行的回调函数
 	
 }
});
wx.onMenuShareQZone({
	 title: '《青岛日报》创刊68周年', // 分享标题
 desc:'今天，重温历史，不忘初心，未来，牢记使命，砥砺前行。',
 link: document.URL, // 分享链接
 imgUrl: 'http://www.dailyqd.com/h5/smdyds/images/logo.png', // 分享图标
 success: function () { 
 // 用户确认分享后执行的回调函数
 	 
 },
 cancel: function () { 
 // 用户取消分享后执行的回调函数
 	
 }
});
}); 