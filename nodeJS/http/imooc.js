var http = require('http');
function download(url,callback){
	http.get(url,function(res){
		var html = '';
		res.on('data',function(data){
			html += data;
		});
		res.on('end',function(){
			callback(html)
		})
	})
}

exports.download = download;