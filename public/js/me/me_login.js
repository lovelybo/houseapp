/**
 * Created by Administrator on 2016/12/12.
 */
$(function () {
    var session =  sessionStorage.getItem("username");
// console.log(session);
    if(session != null){
        $('.login').eq(0).show();
        $('.login-ed').hide();
        $('.user-pho').show();
    }
    $('#login').on('tap',function () {
        location.href = '../login/login_01.html';
    });
   $('.setting').on('tap',function () {
       location.href = './setting.html';
   });
   $('#changeMe').on('tap',function () {
      location.href = './meData.html';
   });
   $('#lis_01 .right').on('tap',function () {
       location.href = './me_need.html';
   });
    $('#lis_02 .right').on('tap',function () {
        location.href = './mySend.html';
    });
    $('.navbar .li_03').on('tap',function () {
        $('.more_send').addClass('active');
    });
    $('.more_send .send_need').on('tap',function () {
        var session =  sessionStorage.getItem("username");
// console.log(session);
        if(session == null){
            location.href = '../login/login_01.html';
        }else{
            location.href = '../send/send_need.html';
        }
    });
    $('.more_send .send_home').on('tap',function () {
        var session =  sessionStorage.getItem("username");
// console.log(session);
        if(session == null){
            location.href = '../login/login_01.html';
        }else{
            location.href = '../send/issue.html';
        }
    });
    $('.more_send .close').on('tap',function () {
        $(this).parent().removeClass('active');
    });
   $('#txt_01').on('tap',function () {
       location.href = './collection.html';
   });
    $('.navbar ul .li_01').on('tap',function () {
        location.href = '../indexPage/indexPage.html';
    });
    $('.navbar ul .li_02').on('tap',function () {
        location.href = '../reservation/reservation.html';
    });
   $('.navbar ul .li_04').on('tap',function () {
       location.href = '../message/message.html';
   });
});