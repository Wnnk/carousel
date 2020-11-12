//记录初始值
var nowIndex = 0;
//计时器
var timer;
//获取所有含有图片的a标签
var imgs = document.querySelectorAll(".banner .images a");
//获取所有小按钮的a标签
var points = document.querySelectorAll(".banner .point a");
//jQuery经过事件
$("span").mouseenter(function () {
    //滑过，按钮选择中变色
    $(this).addClass("first").siblings().removeClass("first");
    //获取选择的下标
    var index = $(this).index();
    $(".Tab ul li").eq(index).css("display", "block").siblings().css("display","none");
});

bannerTick();

function bannerTick() {
    timer = setInterval(function () {
        nowIndex += 1;
        //设置条件
        if (nowIndex >= imgs.length) {
            nowIndex = 0;
        }
        changeAll();
    }, 2000);
    
}





//点击小按钮事件
for (var i = 0; i < points.length; i++) {
    var pointA = points[i];
    pointA.index = i;
    pointA.onmouseenter = function () {
        //停止计时器
        clearInterval(timer);
    }
    pointA.onmouseout = function () {
        bannerTick();
    }
    pointA.onclick = function () {
        nowIndex = this.index;
        changeAll();
    }
}

//封装函数,隐藏含有图片的a标签
function changeImageA() {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
}

//封装小按钮class名
function changePointA() {
    for (var i = 0; i < points.length; i++) {
        points[i].className = "hidden";
    }
}

//封装小按钮和图片同时切换
function changeAll(){
    changeImageA();
    imgs[nowIndex].style.display = "block";
    changePointA();
    points[nowIndex].className = "show";
}

