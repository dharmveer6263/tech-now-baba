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
		from_gameid: "23748725",
		channelCode: code
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	//end  
		
		
    if (isAndroid) {
        //openInstall.wakeupOrInstall();
		window.location.href = "https://rummymq.com/RummyMateAPK/RummyMate-195357.apk"
		//window.location.href = "https://rummymq.com/RummyMateAPK/Rummy_Mate.apk"
    }
    if (isiOS) {
       window.location.href = "https://trucogoldagent.com/RummyNabob"
	
    }
	else
	{
		window.location.href = "https://rummymq.com/RummyMateAPK/RummyMate-195357.apk"
		//window.location.href = "https://rummymq.com/RummyMateAPK/Rummy_Mate.apk"
		
	}
}