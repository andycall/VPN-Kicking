PPTP 踢人工具
PPTP Ticking tools
=====================

VPN 老被别人蹭网， 慢的不行。。
于是就有了这个小东西。。→_→

VPN is getting to slow when to many users loggin on the server, 
this tool is aiming to solve this violent.  :)


### 使用方法 (How to Use)

1. 在password.js中填入密码 (put your own password to password.js)

2. `sudo node ticking` 


###  功能（Functions）

访问 localhost://8030?password=xxx 可以查看服务器`ifconfig`的信息

visit localhost://8030?password=xxx could show the `ifconfig` info from the server

访问 localhost://8030?password=xxx&info=ppp2 可以断开服务器上`ppp2` 的
连接

visit localhost://8030?password=xxx&info=ppp2 can take off the connection of `ppp2`
