//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//计算元素高度
var hg = wd * 0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);
//表示当前元素
var swipeNow = 0;
var slideTime;
//添加滑动事件
$sliderCon.on('swipeLeft', function(){
    console.log('touch left');
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        //计算滑动距离，改变当前元素
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    console.log('touch right');
    clearTimeout(slideTime);
    if(swipeNow > 0){
        //计算滑动距离，改变当前元素
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            //计算滑动距离，改变当前元素
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            //改变点的选中
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 2000);
}
autoSwipe();
var $radioList = $('.radio_box .radio_block');
$radioList.on('tap', function(){
    var $self = $(this);
    if(!$self.hasClass('selected')){
        $radioList.removeClass('selected');
        $self.addClass('selected');
    }
});

var $selectTitle = $('.select-title');
var $selectList = $('.select-list');
$selectTitle.on('tap', function(){
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function(){
    var $self = $(this);
    var $parent = $self.parent('.select-list');
    var text = $self.text();
    var val = $self.data('val');
    console.log(text, val);
    $parent.siblings('.select-title').text(text).data('val', val);
    $parent.hide();
});


