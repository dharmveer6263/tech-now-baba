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
		mylink = "https://rummyms.com/RummyGoldsAPK/RummyGolds.apk"
		//mylink = "https://kehuapk.kjher78uyer.com/apk/in_customer/india_RummyGolds-2022-09-21-210435-v1.124.apk"
	}else{
        mylink = "https://rummyms.com/RummyGoldsAPK/RummyGolds.apk"	
        //mylink = "https://kehuapk.kjher78uyer.com/apk/in_customer/india_RummyGolds-2022-09-21-210435-v1.124.apk"	
	}
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	let gameId = getQueryVariable("from_gameid");
	let code = getQueryVariable("channelCode");
	let copyObj = {
		from_gameid:"1295596",
		channelCode:"1243885"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	if (isAndroid) {
		window.location.href = mylink
	}
	else if (isiOS) {
		window.location.href = "https://trucogoldagent.com/RummyGolds"
		//window.location.href = "https://iapple-ww.zmnddke.com/ZYxgE"
	}
	else {
		window.location.href = mylink
	}
}