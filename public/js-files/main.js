"use strict";
var pageStartTime = +new Date;
~ function(e) {
	function t() {
		var t = screen.width > 0 && (e.innerWidth >= screen.width || 0 == e.innerWidth) ? screen.width : e.innerWidth;
		a && (t = screen.width);
		var i = t > u ? w : t / (u / 100);
		i = i > h ? i : h, document.documentElement.style.fontSize = i + "px"
	}
	var i, n = e.navigator.userAgent,
		a = n.match(/iphone/i),
		o = n.match(/yixin/i),
		c = n.match(/Mb2345/i),
		r = n.match(/mso_app/i),
		s = n.match(/sogoumobilebrowser/gi),
		m = n.match(/liebaofast/i),
		d = n.match(/GNBR/i),
		u = document.documentElement.dataset.dw || 750,
		h = 42,
		w = 100;
	e.addEventListener("resize", function() {
		clearTimeout(i), i = setTimeout(t, 300)
	}, !1), e.addEventListener("pageshow", function(e) {
		e.persisted && (clearTimeout(i), i = setTimeout(t, 300))
	}, !1), o || c || r || s || m || d ? setTimeout(function() {
		t()
	}, 500) : t()
}(window);


function whatsapp() {
	window.open
('whatsapp://send?text=AllRummyApps.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit: https://allrummyapps.com/')
}
function telegram() {
	window.open
('https://telegram.dog/share/url?url=https://allrummyapps.com/&text=AllRummyApps.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit')
}

function facebook() {
	window.open
('https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https://allrummyapps.com/2F&display=popup&ref=plugin&src=share_button?text=AllRummyApps.com is a Very Good Platform to Download New Rummy Apps, if You Are Intrested to Download New Rummy & Best Rummy Apps Then You Can Visit.')
}