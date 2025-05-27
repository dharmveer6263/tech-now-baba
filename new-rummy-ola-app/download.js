// å¤åˆ¶çš„æ–¹æ³•
function copyText(text, callback) {
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { 
	  callback(text);
	}
  }
  
  // èŽ·å–getå‚æ•°çš„æ–¹æ³•
  function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
	  var pair = vars[i].split("=");
	  if (pair[0] == variable) {
		return pair[1];
	  }
	}
	return "";
  }
  
  async function DownSoft(androidLink) {
	const androidLink1 = "https://khryeec-ola.oss-ap-southeast-1.aliyuncs.com/Rummyola_APK/Rummyola-164334";
  //  const androidLink1 = "https://xjpydbak02poi.bvnx3cfc.com/Rummyola_APK/Rummyola-164334.apk";
	const iosLink = "https://gogo.ycwoqqaf.com/s0dtr07xjna5mq";
  //    const iosLink = "https://rummyolavip.cc/ios/download.html";
  
	const isAndroid = /Android|Adr/.test(navigator.userAgent);
	const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
	if (isiOS) {
	  window.location.href = iosLink;
	} else {
	  const link = androidLink || androidLink1;
	  const gameId = getQueryVariable("from_gameid");
	  const code = getQueryVariable("channelCode");
	  const copyObj = {
		from_gameid: "3024219",
		channelCode: code
	  };
	  const copyStr = JSON.stringify(copyObj);
	  copyText(copyStr, function() {
		console.log('copy successful', copyStr);
	  });
	  window.location.href = link;
	}
  }