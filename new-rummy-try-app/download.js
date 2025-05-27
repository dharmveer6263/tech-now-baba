// Ã¥Â¤ÂÃ¥Ë†Â¶Ã§Å¡â€žÃ¦â€“Â¹Ã¦Â³â€¢
function copyText(text, callback) {
  // text: Ã¨Â¦ÂÃ¥Â¤ÂÃ¥Ë†Â¶Ã§Å¡â€žÃ¥â€ â€¦Ã¥Â®Â¹Ã¯Â¼Å’ callback: Ã¥â€ºÅ¾Ã¨Â°Æ’
  var tag = document.createElement("input");
  tag.setAttribute("id", "cp_hgz_input");
  tag.value = text;
  document.getElementsByTagName("body")[0].appendChild(tag);
  document.getElementById("cp_hgz_input").select();
  document.execCommand("copy");
  document.getElementById("cp_hgz_input").remove();
  if (callback) {
    callback(text);
  }
}
//Ã¨Å½Â·Ã¥Ââ€“getÃ¥Ââ€šÃ¦â€¢Â°Ã§Å¡â€žÃ¦â€“Â¹Ã¦Â³â€¢
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

function setUrl() {
  let codeid;
  if (location.search.indexOf("re=") < 0) {
    const host = location.host;
    for (let i in urlData) {
      if (host.indexOf(i) >= 0) {
        codeid = urlData[i].channel_id;
      }
    }
  }
  return codeid || "";
}
async function DownSoft() {
  var u = navigator.userAgent;
  //iOS
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  //Android
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;

  //begin get channel code from clipboarad
  let gameId = getQueryVariable("from_gameid");
  let code = getQueryVariable("channelCode");
  let copyObj = {
    from_gameid: "8146903",
    channelCode: "7736428",
  };
  let copyStr = JSON.stringify(copyObj);
  copyText(copyStr, function () {
    console.log("copy successful", copyStr);
  });

  //end get channel code from clipboarad

  if (isiOS) {
    window.location.href =
      "https://ylffe.sjm4kx10.com/api/c/xttclkk8";
  } else if (isAndroid) {
    window.location.href =
//      "https://ossyd06.downwl.com/Rummytry/rummmytry-release-massage.apk";
      "https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk";
  } else {
    window.location.href =
//      "https://ossyd06.downwl.com/Rummytry/rummmytry-release-massage.apk";
      "https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk";
  }
}