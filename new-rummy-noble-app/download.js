// å¤åˆ¶çš„æ–¹æ³•
function copyText(text, callback) { // text: è¦å¤åˆ¶çš„å†…å®¹ï¼Œ callback: å›žè°ƒ
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
//èŽ·å–getå‚æ•°çš„æ–¹æ³•
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
		from_gameid: "2880633",
		channelCode: code
	}
	let copyStr = JSON.stringify(copyObj)
	copyText(copyStr, function () { console.log('copy successful', copyStr) })
	//end get channel code from clipboarad

	if (isiOS) {
		//window.location.href = "https://dajdew.com/CVyx"
		window.location.href = "https://gogo.ctqwrdbac.com/36cdjn"
	}
	else if (isAndroid) {
	 window.location.href = "https://ryceccc-noble.oss-ap-southeast-1.aliyuncs.com/RummyNoble"

	}
	else {
		window.location.href = "https://ryceccc-noble.oss-ap-southeast-1.aliyuncs.com/RummyNoble"
	}
}