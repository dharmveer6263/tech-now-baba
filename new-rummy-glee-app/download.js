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
	//get link and flag
	let mylink
	let downFlag = await getQueryVariable("c")
	if (downFlag && downFlag != '') {
		mylink = "https://rummymu.com/RummyGleeAPK/RummyGlee.apk"
	}else{
		mylink = "https://rummymu.com/RummyGleeAPK/RummyGlee.apk"
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
		from_gameid:"2304283",
		channelCode:"32006"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	//end get channel code from clipboarad


	if (isAndroid) {
		window.location.href = mylink
	}
	else if (isiOS) {
		window.location.href = "https://trucogoldagent.com/rummyglee"
	}
	else {
		window.location.href = mylink
	}
}
