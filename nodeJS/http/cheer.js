var imooc = require('./imooc');
var cheerio = require('cheerio')
var url = 'http://buluo.qq.com/mobile/barindex.html?_wv=1027&_bid=128&from=wechat&bid=22310';
imooc.download(url,function(data){
	if(data){
		console.log(data);
	}
})