// Ã¥Â¤ÂÃ¥Ë†Â¶Ã§Å¡â€žÃ¦â€“Â¹Ã¦Â³â€¢
function copyText(text, callback) { // text: Ã¨Â¦ÂÃ¥Â¤ÂÃ¥Ë†Â¶Ã§Å¡â€žÃ¥â€ â€¦Ã¥Â®Â¹Ã¯Â¼Å’ callback: Ã¥â€ºÅ¾Ã¨Â°Æ’
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
//Ã¨Å½Â·Ã¥Ââ€“getÃ¥Ââ€šÃ¦â€¢Â°Ã§Å¡â€žÃ¦â€“Â¹Ã¦Â³â€¢
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
	//iOS
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	//Android
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

	//begin get channel code from clipboarad
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	let copyObj = {
		from_gameid: "4490706",
		channelCode: "100000"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText(copyStr, function () { console.log('copy successful', copyStr) })
	//end get channel code from clipboarad

	if (isiOS) {
		window.location.href = "https://trucogoldagent.com/RummyARES"
		//window.location.href = "https://gogo.mxlqrdrtac.com/45yinj"
		//window.location.href = "https://dajdew.com/RZsKq"
	}
	else if (isAndroid) {
	            // window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES20231018.apk"
	           //window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES-channel-16131923.apk"
	           window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES-131416.apk"

	}
	else {
		//window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES20231018.apk"
		//window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES-channel-16131923.apk"
		window.location.href = "https://xjpklccossyd00.zxcvrfrec.com/RummyAres/RummyARES-131416.apk"
	}
}