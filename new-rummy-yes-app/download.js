function copyText(text, callback) {
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
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;

    let gameId = getQueryVariable("from_gameid");
    let code = getQueryVariable("channelCode");
    let copyObj = {
        from_gameid: "3178210",
        channelCode: "100000",
    };
    let copyStr = JSON.stringify(copyObj);
    copyText(copyStr, function () {
        console.log("copy successful", copyStr);
    });

    if (isiOS) {
        window.location.href = "https://lbcws.hjfoycmy.com/api/c/wctkr6li"; // Add your iOS download URL here
    } else if (isAndroid) {
        window.location.href = "https://rummyes000.com/RummyYesIPA/rynew"; // Add your Android download URL here
    } else {
        window.location.href = "https://rummyes000.com/RummyYesIPA/rynew"; // Add a default URL or error page
    }
}

const device = detectDevice();
const androidButton = document.getElementById('androidDownload');
const androidtopButton = document.getElementById('androidtopDownload');
const androidbottomButton = document.getElementById('androidbottomDownload');
const iosButton = document.getElementById('iosDownload');
const messageElement = document.getElementById('message');
const modal = document.getElementById('myModal');
const modalMessage = document.getElementById('modalMessage');
const span = document.getElementsByClassName('close')[0];

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "block";
}

androidButton.addEventListener('click', function() {
    if (device === 'android') {
        DownSoft();
    } else if (device === 'ios') {
        showModal('Your phone is an iOS device. Please choose the iOS download button.');
    } else {
        showModal('Unable to detect device type.');
    }
});

androidtopButton.addEventListener('click', function() {
  if (device === 'android') {
      DownSoft();
  } else if (device === 'ios') {
      showModal('Your phone is an iOS device. Please choose the iOS download button.');
  } else {
      showModal('Unable to detect device type.');
  }
});

androidbottomButton.addEventListener('click', function() {
if (device === 'android') {
    DownSoft();
} else if (device === 'ios') {
    showModal('Your phone is an iOS device. Please choose the iOS download button.');
} else {
    showModal('Unable to detect device type.');
}
});

iosButton.addEventListener('click', function() {
    if (device === 'ios') {
        DownSoft();
    } else if (device === 'android') {
        showModal('Your phone is an Android device. Please choose the Android download button.');
    } else {
        showModal('Unable to detect device type.');
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

