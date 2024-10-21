// ==UserScript==
// @name         西北农林科技大学自动网络认证
// @namespace    https://github.com/Originsin/NWAFU_Internet
// @version      1.0
// @description  适用于西北农林科技大学校园网认证登录（深澜认证计费系统）。首次使用先修改为自己的账号密码，之后即可以自动登录。
// @author       Originsin
// @match        https://portal.nwafu.edu.cn/srun_portal_pc?ac_id=1&theme=pro
// @match        http://172.26.8.11/srun_portal_pc?ac_id=1&theme=pro
// @icon         https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352af51902614443fbf2b2111e37?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
// @grant        none
// @license      MIT
// ==/UserScript==
(function() {
    'use strict';
    // 首次使用请修改为自己的账号和密码
    // 账号
    var usr = "这填账号"
    // 密码
    var pwd = "这填密码"
    // 首次使用请修改为自己的账号和密码↑
if (usr === "这填账号" || pwd === "这填密码") {
    alert("首次使用，请先在脚本添加自己的账号和密码。");
} else{
	document.getElementById("username").value = usr;
	document.getElementById("password").value = pwd;
	document.getElementById("login-account").click();
      }
})();