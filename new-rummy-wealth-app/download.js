//  
function copyText(text, callback) { // text:  ï¼Œ callback:  
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
// get 
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
	let mylink
	let downFlag = await getQueryVariable("c")
	if (downFlag && downFlag != '') {
		//mylink = "https://xjpklccossyd00.zxcvrfrec.com/rummywealthapk/RummyWealth.apk"
		//mylink = "https://kehuapk.kjher78uyer.com/apk/in_customer/india_RummyWealth-202203261623-.apk"
		mylink = "https://erccc-wealth.oss-ap-southeast-1.aliyuncs.com/RummyWealth-172313"
		//mylink = "https://xjpklccossyd00.zxcvrfrec.com/rummywealthapk/RummyWealth.apk"
		//mylink = "https://xjpklccossyd00.zxcvrfrec.com/rummywealthapk/RummyWealth.apk"
	}else{
		//mylink = "https://kehuapk.kjher78uyer.com/apk/in_customer/india_RummyWealth-202203261623-.apk"
		mylink = "https://erccc-wealth.oss-ap-southeast-1.aliyuncs.com/RummyWealth-172313"
		//mylink = "https://xjpklccossyd00.zxcvrfrec.com/rummywealthapk/RummyWealth.apk"
		//mylink = "https://xjpklccossyd00.zxcvrfrec.com/rummywealthapk/RummyWealth.apk"
	}
	var u = navigator.userAgent;
	//Android
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	//iOS
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	//begin get channel code from clipboarad
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	// console.log('gameId',gameId)
	// console.log('code',code)
	let copyObj = {
		from_gameid:"869630",
		channelCode:code
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	//end get channel code from clipboarad
	if (isAndroid) {
		window.location.href = mylink
	}
	else if (isiOS) {
		//window.location.href = "itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/wanlijituan/ipa/master/joyrummy.plist"
                 window.location.href = "https://gogo.ctqwrdbac.com/pe3hzd"
                 //window.location.href = "https://123.s8k.cc/Xuas"
	}
	else {
		window.location.href = mylink
	}
}