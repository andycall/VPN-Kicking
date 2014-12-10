var http = require("http"),
	url = require("url"),
	exec = require("child_process").exec,
    fs = require("fs"),
    path = require("path"),
    stdout = process.stdout,
    stdin = process.stdin,
    PORT = 8030,
    password = require("./password").password;

// 创建HTTP 服务器
function createServer(){
	var server = http.createServer(function(req, res){

		exec("ifconfig", function(error, stdout, stderr){
			
			var params = url.parse(req.url, true).query;


			console.log(password);
			if(params['password'] != password) return; // 设置密码 ^_^


			res.writeHead(200, {
				"Content-Type" : "text/plain;charset=utf-8"
			});

			if(Object.keys(params).length == 1 && typeof params['password'] != undefined){
				res.write(stdout);
			}

			var info = params['info'];

			if(info){
				killPPP(info);
			}

			res.end();
		});
		

	}).listen(PORT, "0.0.0.0");
	console.log("Server Running at 0.0.0.0:" + PORT);
}

function killPPP(name){
	exec("ifconfig " + name + " down", function(error, stdout, stderr){
		if(error){
			console.log(error);
		}
	});
}

createServer();

