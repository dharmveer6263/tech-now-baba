const hosts = window.location.origin
const parms = window.location.search.split('=')[1]
// document.getElementById('imges').setAttribute('content', hosts + '/share.jpg')
$('.link-box1').attr('href',hosts + '/about/filepage/Privacy');
$('.link-box2').attr('href',hosts + '/about/filepage/About');
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    $('body').css("width",'100%');
    $('.link-box1').css("font-size",'32px'); 
    $('.link-box2').css("font-size",'32px'); 
    $('.copyright-box').css("font-size",'24px');
    $('.btn-title').css('width', '50%')
    $('.downoad-box').css('margin-bottom', '40px')
    $('.fixed-box').css('width', '100%')
    $('.fixed-box').css('padding-top', '40px')
} else {
    $('body').css("width",'640px');
}
// $(document).ready(function(){
//     if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
//         $('body').css("width",'160%');
//         $('.link-box1').css("font-size",'32px'); 
//         $('.link-box2').css("font-size",'32px'); 
//         $('.copyright-box').css("font-size",'24px'); 
//     } else{
//         return
//     }
// })
const noAutoDownloadUrl = [
    'https://bappa-live.xyz'
]
function getUrl() {
    $.ajax({
        url: hosts + "/invite/clickInviteLink",
        data:"inviterId=" + parms,
        type:"get",
        dataType: "json",
        success:function (data){
            if(data.code === 0) {
                $('.btn-title').attr('href',  data.data);
                if(!noAutoDownloadUrl.includes(hosts)) {
                    document.getElementById("downloadbtn").click();
                }
                // $('.btn-title').click()
                // window.open( data.data)
                return
            }
            console.log(data.message)
        },
        error:function (res){
            // alert('error')
        }
    })
}

getUrl()

