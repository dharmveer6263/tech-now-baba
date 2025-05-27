
const shareButton = document.querySelector('.share-link');
if (navigator.share) {
  shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.share({
      title: document.title,
      url: window.location.href
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
  });
} else {
  console.log('Web Share API not supported');
}
$(document).ready(function () {
  $(".lefthide").click(function () {
    $(".follow_us").animate({ right: -80 }, 500);
    $('.nav_showbtn').show(500)
  });

  $(".nav_showbtn").click(function () {
    $(".follow_us").animate({ right: 0 }, 500);
    $('.nav_showbtn').hide(500)

  });
})