(function () {



  // ロード位置の調整
  window.onload = function() {
    window.location.hash = "hogehoge"
}



  $(".l_header_container").click(function(){
      $(".js_navigation").toggleClass("is-active");
      $(".l_header_nav_title-wrapper").toggleClass("is-active");
      $(".l_header_nav_title").toggleClass("is-active");
      $(".l_header_nav_link-txt").toggleClass("is-active");
  });

  // ローディングアニメーション

// TextRandomAnimeにappearRandomtextというクラス名を付ける定義
function TextRandomAnimeControl() {
	$('.TextRandomAnime').each(function () {
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appearRandomtext");

		} else {
			$(this).removeClass("appearRandomtext");
		}
	});
}

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
// 	TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextRandomAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = '';
		text.split('').forEach(function (t) {
			textbox += '<span>' + t + '</span>';
		});
		$(this).html(textbox);
	});

	TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



  gsap
.fromTo(".l_lorder", 1, {  opacity: 1}, {  opacity: 0,delay: 4.5 }) 
gsap
.fromTo(".l_lorder", 1, { yPercent: 0}, { yPercent: -100, delay: 6.5 }) 
// fromTo("セレクタ", アニメーション時間, { アニメーション前の状態（スタイル） }, { アニメーション後の状態（スタイル） })

// トグルメニュー

  $(".m_contents_menu-item").click(function(){
      // $(".m_content_item-detail").nextElementSibling.toggleClass("is-active");
      $(this).children(".m_content_item-detail").toggleClass("is-active");
  });

  $('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
  

  // ページ内リンク


$(".input").click(function(){
  $(this).toggleClass("is-active");
  $(".input").not(this).removeClass("is-active");
});


// 横スクロール

//横にスクロールする要素をマウスホイールで動かせるようにするJavaScript
$.fn.mycus_hScroll = function (amount) {
	amount = amount || 120;
	$(this).bind("DOMMouseScroll mousewheel", function (event) {
		var oEvent = event.originalEvent, 
		direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
		position = $(this).scrollLeft();
		position += direction > 0 ? -amount : amount;
		$(this).scrollLeft(position);
		event.preventDefault();
	})
};

$(function() {
	$(".data-scroll-container").mycus_hScroll(60); // カッコ内の数字でスクロール量を調節できます。
});

})();
