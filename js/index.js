var schedule = 
    {
        "新歓合宿":"先輩とはもちろんのこと、同期とも仲を深められるのが最初の新歓合宿。毎年一泊で絆が深まる",
        "BBQ":"夏といったら川遊びとBBQ。川辺でおいしいものをたべながらバケツで水をかけあったり、つきおとしたり",
        "夏合宿":"SWEARの一大イベント！テニスに花火に肝試しに、とにかく盛りだくさんではちゃめちゃな合宿だ。楽しいこと間違いなし！",
        "Xmas Party":"都内の会場を貸し切りにしてみんなでドレスをきたりスーツをきたり。毎年多くのメンバーが集まるワンナイトイベント",
        "春合宿":"夏だけじゃない！春の合宿も楽しいぞ！年度内最後の大騒ぎ。4泊5日でみっちりテニスをする",
        "追いコン":"気づけばあっという間に１年がすぎ、お世話になった先輩をおいだす。もちろんただではすまない",
        "早慶戦":"体育の出席もゲットできちゃうお得イベント！毎年早慶戦ではドラマがおきると言われている"
    };
var mainPic = ["img/members.jpg"];

var schedulePic = {
                    "新歓合宿":"img/sinkan.jpg",
                    "BBQ":"img/bbq_shugo.jpg",
                    "夏合宿":"img/natuga.jpg",
                    "Xmas Party":"img/kuripa_shugo.jpg",
                    "春合宿":"img/haruga_shugo.jpg",
                    "追いコン":"img/oikon.jpg",
                    "早慶戦":"img/sokesen.jpg"
}

/*【SWEARプチ裏情報⑥】ぱいせんの手首はとてもfragile */

function kesu(){
    $("#loading").hide();
    $("#widget").hide();
}

function unko(){
    console.log("unko");
}

var cd = 0;
function wijeto(){
    if(cd == 1){
        $("#widget").hide();
        cd = 0;
    }
    else{
        $("#widget").fadeIn("slow");
        cd = 1;   
    }
    alert();
}


// window.onload = function(){
// var opts = {
//   lines: 8, 
//   length: 40, 
//   width: 3, 
//   radius: 29, 
//   corners: 0.1, 
//   rotate: 0, 
//   direction: 1, 
//   color: '#000', 
//   speed: 1, 
//   trail: 60, 
//   shadow: false, 
//   hwaccel: false, 
//   className: 'spinner', 
//   zIndex: 2e9,
//   top: '50%', 
//   left: '50%' 
// };
// var target = document.getElementById('spin');
// var spinner = new Spinner(opts).spin(target);
// }

function transf(evt){
    document.getElementById("moji").textContent = schedule[evt];
    $('#pic').hide();
    document.getElementById("pic").src = schedulePic[evt];
    $('#pic').fadeIn(500);
}

 $(document).ready(function(){
        document.getElementById("top").src = mainPic[Math.floor(Math.random()*mainPic.length)];
        $('header').headshrinker({ fontSize: "17px", mobileMenu: true });
        $("#container").delay(2000).fadeIn(1000);

        $("#copy").delay(5000).queue(function(next){$(this).css("color","white");next();});
        setTimeout("kesu()",3100);
        $("header").delay(7000).animate({top:10},"slow");
        $("#paper").delay(7000).queue(function(next){$(this).css("background-color","white");next();});
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        // $("#top_carousel").owlCarousel({
        //     navigation : true, // Show next and prev buttons
        //     slideSpeed : 300,//ページ送りした時のスライドスピード
        //     paginationSpeed : 800,//自動のスライドスピード
        //     singleItem:true,//アイテムを1つにする
        //     autoPlay: 5000,//自動でスライドするスピード。例：5000の場合、5秒
        // });
    });

/*【SWEARプチ裏情報⑦】イケメンなとぅっさん、実はヘビーなラブライバー */




$(function(){
	var bPos1 = ($("#ball1").offset());
    var bPos2 = ($("#ball2").offset());
    var bPos3 = ($("#ball3").offset());
	$(window).scroll(function(){
		var y = $(this).scrollTop();
        var yd = -y;
		$("#ball1").css("left",bPos1.left + y / 4 - 300);
		$("#ball1").css('-webkit-transform','rotate(' + y/2 + 'deg)');
        $("#ball2").css("left",bPos2.left - y / 120 + 800);
        $("#ball2").css('-webkit-transform','rotate(' + yd/120 + 'deg)');
        $("#ball3").css("left",bPos3.left + y / 80);
        $("#ball3").css('-webkit-transform','rotate(' + y/70 + 'deg)');
	});
});