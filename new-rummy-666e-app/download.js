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

function Download() {
    var u = navigator.userAgent;
    //iOS
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //Android
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  
    //begin get channel code from clipboarad
    let gameId = getQueryVariable("from_gameid");
    let code = getQueryVariable("channelCode");
    let copyObj = {
      from_gameid: "2068236",
      channelCode: "425996",
    };
    let copyStr = JSON.stringify(copyObj);
    copyText(copyStr, function () {
      console.log("copy successful", copyStr);
    });
    //end get channel code from clipboard
  
    let fbclid = getQueryVariable("fbclid");
    var golink = "";
    console.log("fbclid", fbclid);
    if (fbclid.length > 1) {
      //  channel apk  this  url
      //golink = "https://xjpossmm02.ccverdcfm.com/inapk/666Entertainment-202010241404-1.0.apk";
      //golink = "https://xjpossmm02.techyespark.com/inapk/666Entertainment-202010241404-1.0.apk";
      //golink = "https://kefuchuangkou.com/99182hd/id28dhad_cc3/dj2icuasv_cc32/666Entertainment-202010241404-1.0.apk";
      //golink = "https://666jkhgjkbasapp.com/inapk/666Entertainment-202010241404-1.0.apk";
      golink = "https://666jkhgjkbasapp.com/inapk/666Entertainment-212636.apk";
    } else {
      //golink = "https://xjpossmm02.ccverdcfm.com/inapk/666Entertainment-202010241404-1.0.apk";
      //golink = "https://xjpossmm02.techyespark.com/inapk/666Entertainment-202010241404-1.0.apk";
      //golink = "https://kefuchuangkou.com/99182hd/id28dhad_cc3/dj2icuasv_cc32/666Entertainment-202010241404-1.0.apk";
      //golink = "https://666jkhgjkbasapp.com/inapk/666Entertainment-202010241404-1.0.apk";
      golink = "https://666jkhgjkbasapp.com/inapk/666Entertainment-212636.apk";
    }
  
    if (isiOS) {
      //if  not have ios Ã¦Â³Â¨Ã©â€¡Å 
      //window.location.href = "https://zji2z.shluxing.com/zwm4mdhimd";
      //window.location.href = "https://mrbbs.cbrsfnco.com/api/c/659lv72o";
      window.location.href = "https://sypnu.czocmklf.com/api/c/659lv72o";
    } else if (isAndroid) {
      window.location.href = golink;
    } else {
      window.location.href = golink;
    }
  }
