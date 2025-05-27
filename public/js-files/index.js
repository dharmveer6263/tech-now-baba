$(function () {
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
      }, false);
    }
    $('.tab_menu').find('span').on('click', function () {
      var times = $(this).index();
      $(this).addClass('current').siblings().removeClass();
      $(this).parents('.tab_box').find('.sub_box').eq(times).show().siblings().hide();
    });
    $('#typeBtn').on('click', function () {
      $('#typeBox').toggleClass('hide');
      $(this).find('i').toggleClass('up');
      $(this).toggleClass('current');
    })
    $('#typeBox').find('li').on('click', function () {
      $(this).addClass('current').parents('#typeBox').find('li').siblings().removeClass('current');
      $(this).addClass('current')
    })
    $('.ranking_nav').find('li').on('click', function () {
      $(this).addClass('current').siblings().removeClass('current');
    })
    // lootearning.com
    $('.game_classify').on('click', function () {
      $('.game_classify i').toggleClass('up');
      $('.game_tags ul li:nth-child(n+8)').toggle();
      $('.game_classify').show();
    })
    // lootearning.com
    var liLength = $(".nav_bar li.current").index();
    liLength += 1;
  
    if (liLength > 5) {
      $('.nav_bar ul').scrollLeft(parseInt($(".nav_bar li").width()));
    } else {
      $('.nav_bar ul').scrollLeft(0);
    }
    // lootearning.com
    function randomsort(a, b) {
      return Math.random() > .5 ? -1 : 1;
    }
    var arr = ['#0091ff', '#f36e5d', '#e8d851', '#92cf67', '#47c1a8', '#ffab80',
      '#35aba7', '#f98700', '#a286c0', '#ebcda7', '#81a0d7', '#e4697d',
      '#d2bdc4', '#91adb9', '#acb0d5', '#ed9d60', '#f46060', '#be7763',
      '#26a69a', '#f3b18e', '#92cf67', '#36b1c0', '#b27cda', '#ffab80', '#f26d7e', '#66bb6a', '#47c1a8',
      '#ffb230', '#df88ab', '#a1a8e7', '#4dd0e1', '#64b5f6', '#ffb300', '#ce93d8', '#f46060'
    ];
    var arr2 = arr.sort(randomsort);
    $('.index_tag ul').children('li').each(function () {
      var index = $(this).index();
      $(this).children('a').attr('style', 'background:' + arr[index] + ';box-shadow:0px 1px 0px' + arr[index]);
    });
    
   
    var arrTags = ['#98dc9b', '#f8b0cd', '#a6bde3', '#f8c871', '#fea387', '#f38ce3', '#b3d465', '#5dc9ea', '#e4a1f0'];
    var arrtags = arrTags.sort(randomsort);
    $('.game_tag ul').children('li').each(function () {
      var index = $(this).index();
      $(this).children('a').attr('style', 'background:' + arrTags[index]);
    });
    
    var arrRe = arr.sort(randomsort);
    $('.editRe p').children('span').each(function () {
      var index = $(this).index();
      $(this).attr('style', 'background:' + arrRe[index]);
    });
  
  
    // lootearning.com
    var linkHtml = $('#friend_link').html();
    if ($('#friend_link').height() > 30) {
      var box = document.getElementById("friend_link"),
        can = true;
      var html = document.getElementsByTagName('html')[0];
      var fsize = 0.5 * parseInt(html.style.fontSize);
      var ht = 0.5 * parseInt(html.style.fontSize);
      var flh = parseInt($('#friend_link').height());
      if (flh > fsize) {
        $('#friend_link').css('height', fsize);
        box.innerHTML += box.innerHTML;
        box.onmouseover = function () {
          can = false
        };
        box.onmouseout = function () {
          can = true
        };
        new function () {
          var stop = box.scrollTop % ht == 0 && !can;
          if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
          setTimeout(arguments.callee, box.scrollTop % ht ? 30 : 1500);
        };
      }
    } else {
      $('#friend_link').html(linkHtml);
    }
    // lootearning.com
    if ($('#hiddenBox2 .cont').height() < 85) {
      $('#hiddenBox2').addClass('auto_box2');
      $('#openHidden2').empty();
      $('.topic_cont p').css({
        'margin-bottom': '0'
      });
    } else {
      $('#openHidden2').on('click', function () {
        $('#hiddenBox2').toggleClass('auto_box2');
        if ($('#hiddenBox2').hasClass('auto_box2')) {
          $(this).css({
            'bottom': '-.06rem'
          })
          $(this).html('<i class="up"></i>' + 'æ”¶èµ·å…¨éƒ¨');
        } else {
          $(this).css({
            'position': 'absolute',
            'width': '3rem',
            'bottom': '0'
          });
          $(this).html('<i></i>' + 'å±•å¼€å…¨éƒ¨');
        }
      })
    }
    // pageBtn
    if ($('#pageBtn').length > 0) {
      var pageBtnTop = $('#pageBtn').offset().top;
      $(window).scroll(function () {
        var wTop = $(window).scrollTop();
        if (wTop >= pageBtnTop) {
          $('#pageBtn2').removeClass('hide');
        } else {
          $('#pageBtn2').addClass('hide');
        }
      });
    }
    // lootearning.com
    if ($("#vedioAd").length > 0) {
      var vedioAdTop = $('#vedioAd').offset().top - 490;
      $(window).scroll(function () {
        var wTop = $(window).scrollTop();
        if (wTop >= vedioAdTop && $("#vedioAd video").attr('data-play') != 1) {
          var promise = $("#vedioAd video")[0].play();
          $("#vedioAd video").attr('data-play', '1');
          if (promise !== undefined) {
            promise.catch(error => {
  
            }).then(() => {
  
            });
          } else {
  
          }
        }
      })
      $("#vedioAd video").on('ended', function () {
        $('.vback').show();
      })
    }
  
    if ($("#video").length > 0) {
      $(".game-video video").on('ended', function () {
        $('.vback').show();
      })
      $('#replay').on('click', function () {
        $(this).parents('.game-video').find('video')[0].play();
        $(this).parents('.vback').hide();
      })
    }
  
  
  
  
    var baseUrl = $('#base_url').val();
  });
  
  var u = navigator.userAgent;
  var errorUrl = 'https://m.doyo.cn/404';
  var pageBtnDa = $('#pageBtn');
  /**
   $('.chessCard').each(function(){
    $.get("https://m.doyo.cn/location/getposcall/?ac=getposcall",{acd:'get'},function(d){
      if(d.recomdCity&&(uagent.indexOf("Baiduspider")==-1&&uagent.indexOf("Spider")==-1)){        // YisouSpider Baiduspider
        //location.href = errorUrl;
        if(pageBtnDa.attr('href')){
          pageBtnDa.addClass('no').html('<i class="icon_i"></i>è¯¥æ¸¸æˆå·²ä¸‹æž¶').removeAttr('href');
          $('#pageBtn2').html('<a class="btn no" id="pageBtn"><i class="icon_i"></i>è¯¥æ¸¸æˆå·²ä¸‹æž¶</a></div>');
        }
      }
    },"jsonp");
  });
   **/
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  var isUc = u.indexOf('UCBrowser') > -1;
  // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isAndroid && isUc) {
    $('.nav_bar ul').on('touchstart', function () {
      $(document).on('touchmove', function (e) {
        e.preventDefault();
      });
      $(document).on('touchend', function () {
        $(document).unbind();
      });
    });
  }
  
  function headerNav() {
    var bodyH = $('body,html').height();
    var haaderH = $('header').height();
  
    if ($('#headerNav').css('display') === 'none') {
      $('header .menu').find('i').addClass('green');
      $('#headerNav').show();
      $('#headerNav').find('.mask').css('height', bodyH - haaderH);
    } else {
      $('header .menu').find('i').removeClass('green');
      $('#headerNav').hide();
    }
  }
    // lootearning.com
    $('#closeTxt').on('click', function () {
    $(this).siblings('input').val('');
    clearInterval(searchzidong);
  });
  
  var baseurl = $.trim($("#baseUrl").val());
  var keyword = $.trim($("#searchKey").val());
    // lootearning.com
    var searchTxt = 0;
  
  function searchRun() {
    searchTxt++;
    if (searchTxt >= $('.search_ul_txt li').length) {
      searchTxt = 0;
    };
    searchSlider();
  };
  
  function searchSlider() {
    $(".search_ul_txt").find("li").eq(searchTxt).show().siblings().hide();
    $('.search_txt .text').val($(".search_ul_txt").find("li").eq(searchTxt).text());
  };
  var searchzidong = setInterval(searchRun, 2500);
  if (keyword) {
    clearInterval(searchzidong);
    $('.search_txt .text').val(keyword);
  } else {
    $('.search_txt .text').val($(".search_ul_txt").find("li").eq(0).text());
  }
  $(".search_txt input").focus(function () {
    clearInterval(searchzidong);
  });
    // lootearning.com
    function liftSearch() {
    var keyword = $.trim($("#searchKey").val());
    var baseurl = $.trim($("#baseUrl").val());
    if (keyword) {
      $.ajax({
        url: baseurl + 'so/search/',
        type: 'POST',
        data: {
          keyword: keyword
        },
        success: function (data) {
          $('.search_wrap').hide();
          $('.search_list_wrap_div').show();
          $('.search_list_wrap').html(data);
        }
      });
    } else {
      $('.search_wrap').show();
    }
  }
    // lootearning.com
    $('#dosearch').click(function () {
    var keyword = $("#searchKey").val();
    if (keyword) {
      window.location.href = baseurl + 'so/?key=' + encodeURI(keyword);
    }
  });
  
  $(document).keyup(function (event) {
    if (event.keyCode == 13) {
      $('#dosearch').click();
    }
  });
  
  $('#search_more').click(function () {
    var more = $(this);
    var baseurl = $.trim($("#baseUrl").val());
    var keyword = $.trim($("#searchKey").val());
    var page = parseInt($(this).attr('page'));
    var totpage = parseInt($(this).attr('totpage'));
    $.ajax({
      url: baseurl + 'so/',
      type: 'get',
      data: {
        key: keyword,
        page: page
      },
      success: function (res) {
        $('.search_list_wrap2').append(res);
        more.attr('page', page + 1);
        if (page + 1 >= totpage) {
          more.remove();
        }
      }
    });
  });
  
    // lootearning.com
    if ($('.newmain3').length > 0) {
    $('.newmain3').css('height', 'auto');
    $('.linear').remove();
    $('.onc').remove();
  }
  // $(window).on("load",function(){
  // 	var sw = screen.availWidth;
  // 	if (sw >= 375) {
  // 		if($('.newmain3').height() <= 900){
  // 			$('.newmain3').css('height', 'auto');
  // 			$('.linear').hide();
  // 			$('.onc').hide();
  // 		} else {
  // 			$('.newmain3').css('height', '18rem');
  // 			$('.linear').show();
  // 			$('.onc').show();
  // 			$('.onc').on('click', function () {
  // 				$('.newmain3').css('height', 'auto');
  // 				$('.onc').hide();
  // 				$('.linear').hide();
  // 			});
  // 		}
  // 	} else {
  // 		if($('.newmain3').height() <= 864){
  // 			$('.newmain3').css('height', 'auto');
  // 			$('.linear').hide();
  // 			$('.onc').hide();
  // 		} else {
  // 			$('.newmain3').css('height', '15.3rem');
  // 			$('.linear').show();
  // 			$('.onc').show();
  // 			$('.onc').on('click', function () {
  // 				$('.newmain3').css('height', 'auto');
  // 				$('.onc').hide();
  // 				$('.linear').hide();
  // 			});
  // 		}
  // 	}
  
  // })
  
  let liArr = document.getElementsByClassName('numcvs')
  for (const item of liArr) {
    item.innerText = fixed(item.innerText)
  }
  function fixed(text) {
    let nub = ''
    if (text > 999 && text < 10000) {
      return (text / 1000).toFixed(1) + 'k'
    } else if (text > 9999) {
      return (text / 10000).toFixed(1) + 'w'
    } else {
      return text
    }
  }
  
  // Open external links in new tab
  $('a[href^=http]').click(function () {
    var a = new RegExp('/' + window.location.host + '/');
    if (!a.test(this.href)) {
        window.open(this.href);
        return false;
    }
  });
  
  $(function () {
    // lootearning.com
    if ($('.downbtn').length > 0) {
      var baseUrl = "https://m.doyo.cn/";
      var reportUrl = 'https://linkwe.dzyms.cn/';
  
      var obj = $('.downbtn');
      id = obj.attr('id');
      type = obj.attr('type');
      $.get(baseUrl + '/downs/detail/' + id + '/' + type, function (res) {
        var result = JSON.parse(res);
        if (result.code == 1) {
          //view report
          $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) +
            '&url=' + encodeURIComponent(window.location.href));
  
          if (result.data.and_url) {
            $('.btnAnd').show().click(function () {
              $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=and');
              location.href = result.data.and_url;
            });
          }
          if (result.data.ios_url) {
            $('.btnIos').show().click(function () {
              $.getJSON(reportUrl + 'home?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=ios');
              location.href = result.data.ios_url;
            });
          }
        }
      });
    }
  
  })
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('searchInput');
    const appLists = document.querySelectorAll('#appList'); // Select all elements with the ID 'appList'
    const searchResults = document.getElementById('searchResults');
  
    input.addEventListener('input', function () {
        const filter = input.value.toUpperCase();
        
        if (filter === '') {
            searchResults.innerHTML = ''; // Clear search results when the input is empty
            return;
        }
  
        searchResults.innerHTML = '';
        let found = false;
  
        appLists.forEach(appList => {
            const items = appList.querySelectorAll('.name, .grade span');
  
            items.forEach(item => {
                const text = item.textContent.toUpperCase();
  
                if (text.includes(filter)) {
                    found = true;
                    const clonedItem = item.closest('li').cloneNode(true);
  
                    // Create a new <ul> if it doesn't exist in searchResults
                    let ulElement = searchResults.querySelector('ul');
                    if (!ulElement) {
                        ulElement = document.createElement('ul');
                        searchResults.appendChild(ulElement);
                    }
  
                    const existingItem = ulElement.querySelector(`li .name[data-text="${text}"]`);
  
                    if (!existingItem) {
                        const liElement = document.createElement('ul');
                        clonedItem.querySelector('.name').setAttribute('data-text', text); // Set an attribute to mark this element
                        liElement.appendChild(clonedItem);
                        ulElement.appendChild(liElement);
                    }
                }
            });
        });
  
        // Remove empty ul elements
        searchResults.querySelectorAll('ul').forEach(ul => {
            if (!ul.children.length) {
                ul.remove();
            }
        });
  
        if (!found) {
            searchResults.innerHTML = '<p>No Rummy App found</p>';
        }
    });
  });