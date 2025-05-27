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
// 
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}


function DownSoft() {
        var u = navigator.userAgent;
    //Android
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    //iOS
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	
	//begin  
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	// console.log('gameId',gameId)
	// console.log('code',code)
	let copyObj = {
		from_gameid: "8868518",
		channelCode: "8865651"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	//end  
		
		
    if (isAndroid) {
        //openInstall.wakeupOrInstall();
		window.location.href = "https://rummygrandvip.com/RummyGrandqudao/RummyGrand-133014.apk"
		//window.location.href = "https://xjpklccossyd01.zxcvrfrec.com/RummyGrandAPK/RummyGrand.apk"
    }
    if (isiOS) {
	    window.location.href = "https://gogo.ycwoqqaf.com/hrk70w7j9v27tg"
        //window.location.href = "https://gogo.xycyin.com/hrk70w7j9v27tg"
    }
	else
	{
		window.location.href = "https://rummygrandvip.com/RummyGrandqudao/RummyGrand-133014.apk"
		//window.location.href = "https://xjp02aws.dferiuku78.com/RummyGrandAPK/RummyGrand.apk"
		//window.location.href = "https://xjpklccossyd01.zxcvrfrec.com/RummyGrandAPK/RummyGrand.apk"
		
	}
}