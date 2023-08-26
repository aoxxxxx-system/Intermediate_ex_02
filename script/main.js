// モバイルメニュー時のバーガーメニュー
$(function () {

  $(".mobile-menu__btn-g_common,.mobile-menu-g_common").on('click', function () {

    if ($(this).hasClass('show')) {
      $(".mobile-menu-g_common,.mobile-menu__btn-g_common").removeClass('show');
      // $(".header").removeClass('hidden');
    } else {
      $(".mobile-menu-g_common,.mobile-menu__btn-g_common").addClass('show');
      // $(".header").addClass('hidden');
    };
  });

});



$(window).on("scroll", function () {
  if ($(this).scrollTop() > 101) {
    $(".header-fixed__inner-gl_common").addClass("is-header-fixed");
  } else {
    $(".header-fixed__inner-gl_common").removeClass("is-header-fixed");
  }
});




// modal
MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
});


// モーダル入力チェック
$(function () {

  const $submitBtn = $('.modal-mypage-btn__signin')

  $('.modal-mypage__form-input').on('change', function () {
    if (
      $('.modal-mypage__form-input-email[type="email"]').val() !== "" &&
      $('.modal-mypage__form-input-password[type="password"]').val() !== "" 
      
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});


//　入力チェック
$(function () {

  const $submitBtn = $('#entry-btn')

  $('.entry__form-input').on('change', function () {
    if (
      $('.entry__form-input-text-name[type="text"]').val() !== "" &&
      $('.entry__form-input-text-age[type="text"]').val() !== "" &&
      $('.entry__form-input-text-email[type="email"]').val() !== "" &&    
      $('.entry__form-input-text-incom[type="text"]').val() !== "" &&
      $('.entry__form-input-text-background[type="textarea"]').val() !== "" &&
      $('.entry__form-input-text-pr[type="textarea"]').val() !== "" &&
      $('.entry__form-input-text-policy[type="checkbox"]').prop('checked') == true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});








// お問合せ完了

$(document).ready(function () {

  $('#entry__form').submit(function (event) {
    var formData = $('#entry__form').serialize();
    
    $.ajax({
      
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScbC4WXi_PwyUfSIBUVvIiYtvGOdQ_6-K20kf6sU920NQvqnQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $("#entry-btn").fadeOut();
          window.location.href = "thanks.html";
          const url = 'thanks.html'

    
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

// ウインドウ閉じる

// $(function(){
//   var close = $('#windowclose');

//   close.on('click', function(){
//       window.open('about:blank','_self').close();      
//   });
// });