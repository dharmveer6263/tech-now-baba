function handleCopyValue(text) {
	if (!navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard.writeText(text)
	} else {
		if (!document.execCommand('copy')) {
			return Promise.reject()
		}
		const textArea = document.createElement('textarea')
		textArea.style.position = 'fixed'
		textArea.style.top = textArea.style.left = '-100vh'
		textArea.style.opacity = '0'
		textArea.value = text
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		return new Promise((resolve, reject) => {
			document.execCommand('copy') ? resolve() : reject()
			textArea.remove()
		})
	}
}

function copyText(text, callback) {
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	res = document.execCommand('copy');
	res_text = res ? "Copy Success" : "Copy Failed";
	console.log(res);
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(res_text, text) }
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}

function find(str, cha, num) {
	var x = str.indexOf(cha);
	for (var i = 0; i < num; i++) {
		x = str.indexOf(cha, x + 1);
	}
	return x;
}

var str = window.location.href;
var index = find(str, '&', 1);
if (index != -1) {
	var url = str.slice(0, index);
	window.location.href = url;
}


function RecommendInfo() {
	let channel = getQueryVariable("invite_channel")
	let code = getQueryVariable("invite_code")
	var request = new XMLHttpRequest();
	request.open("POST", "http://shareinfo.rummyroom.com:880/api.php");
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send("action=RecommendInfo&invite_channel=" + channel + "&invite_code=" + code);
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			console.log(request.responseText);
		}
	};
}


function CopyRecommendInfo() {
	//begin 
	let channel = getQueryVariable("invite_channel")
	let code = getQueryVariable("invite_code")
	console.log('channel', channel)
	console.log('code', code)
	let copyObj = {
		channel: "176816",
		invite_code: "204449"
	}
	let copyStr = JSON.stringify(copyObj)
	handleCopyValue(copyStr)
		.then(() => {
			console.log('copy success')
		})
		.catch(() => {
			console.log('copy failed')
		})
	RecommendInfo();
	//end 
}


var isDown = false;
function DownSoft() {
	let channel = getQueryVariable("invite_channel")
	let code = getQueryVariable("invite_code")
	console.log('channel', channel)
	console.log('code', code)
	let copyObj = {
		channel: "176816",
		invite_code: "204449"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText(copyStr, function (str) { console.log(str) })
	var u = navigator.userAgent;
	//Android
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	//iOS
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

	let mylink
	//mylink = "http://47.115.211.45:812/1.apk";
	mylink = "https://d2hkqs9qwelv1a.cloudfront.net/games/rmtp0323.apk";
        //mylink = "http://qncdn.rummyroom.in/games/rmtp0323.apk";

	if (isDown) {
		return
	}
	isDown = true;
	if (isAndroid) {
		window.location.href = mylink;
	}
	if (isiOS) {
		window.location.href = "itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/wanlijituan/ipa/master/rummybest.plist"
	}
	else {
		window.location.href = mylink;
	}
}