// 复制的方法
function copyText(text, callback) { // text: 要复制的内容， callback: 回调
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
//获取get参数的方法
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}


async function DownSoft() {
	var u = navigator.userAgent;
	//Android
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	//iOS
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	//begin get channel code from clipboarad
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	let copyObj = {
		from_gameid: "926095",
		channelCode: "899420"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText(copyStr, function () { console.log('Copy successfully', copyStr) })
	//end get channel code from clipboarad


	if (isiOS) {
		window.location.href = "https://trucogoldagent.com/RummyNabob"
		//window.location.href = "https://iapple-ww.zmnddke.com/8ixVR"
	}
	else if (isAndroid) {
               window.location.href = "https://rummymq.com/RummyNabob/RummyNabob-.apk"
               //window.location.href = "https://xjpossmm02.ccverdcfm.com/RummyNabob/RummyNabob-.apk"

	}
	else {
          window.location.href = "https://rummymq.com/RummyNabob/RummyNabob-.apk" 
	}
}
