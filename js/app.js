$(function () {
  const MSG_EMPTY = "必須項目に記入もれがあります。";
  const MSG_TEXT_MAX = "20文字以内で入力してください。";
  const MSG_EMAIL_TYPE = "E-Mailの形式ではありません。";

  $(".js-valid-name").keyup(function () {
    let form_g = $(this).siblings(".contact__form-alert");

    if ($(this).val().length > 20) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.text(MSG_TEXT_MAX);
    } else if ($(this).val().length === 0) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.text(MSG_EMPTY);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.text("");
    }
  });

  $(".js-valid-email").keyup(function () {
    let form_g = $(this).siblings(".contact__form-alert");

    if ($(this).val().length === 0) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.text(MSG_EMPTY);
    } else if (
      !$(this)
        .val()
        .match(
          /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/
        )
    ) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.text(MSG_EMAIL_TYPE);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.text("");
    }
  });

  $(".js-valid-txt").keyup(function () {
    let form_g = $(this).siblings(".contact__form-alert");

    if ($(this).val().length === 0) {
      form_g.removeClass("has-success").addClass("has-error");
      form_g.text(MSG_EMPTY);
    } else {
      form_g.removeClass("has-error").addClass("has-success");
      form_g.text("");
    }
  });

  // フロートヘッダーメニュー
  // var targetHeight = $('.js-float-menu-target').height();
  // $(window).on('scroll', function() {
  //   $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  // });

  // SPメニュー
  $(".js-toggle-sp-menu").on("click", function () {
    $(this).toggleClass("active");
    $(".js-toggle-sp-menu-target").toggleClass("active");
  });
});

$(".nav__menu-link").on("click", function () {
  $(this).toggleClass("active");
  $(".js-toggle-sp-menu-target").toggleClass("active");
  $(".js-toggle-sp-menu").toggleClass("active");
});

$(window).scroll(function () {
  $(".fadein").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 150) {
      $(this).addClass("scrolled");
    }
  });

  $(document).on("click", ".open-options", function (event) {
    event.preventDefault();
    $("#modal-options").iziModal("open");
  });
  $("#modal-options").iziModal({
    headerColor: "#26A69A", //ヘッダー部分の色
    width: 400, //横幅
    overlayColor: "rgba(0, 0, 0, 0.5)", //モーダルの背景色
    fullscreen: true, //全画面表示
    transitionIn: "fadeInUp", //表示される時のアニメーション
    transitionOut: "fadeOutDown", //非表示になる時のアニメーション
  });

  // $('a[href^="#"]').click(function () {
  //   var speed = 500;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? "html" : href);
  //   var position = target.offset().top;
  //   $("html, body").animate({ scrollTop: position }, speed, "swing");
  //   return false;
  // });

  // $('a[href^="#"]').click(function () {
  //   var speed = 400;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? "html" : href);
  //   var position = target.offset().top;
  //   $("body,html").animate({ scrollTop: position }, speed, "swing");
  //   return false;
  // });
});
