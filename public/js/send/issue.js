/**
 * Created by Administrator on 2016/12/20.
 */
$(function () {
    $('#iss_cancel').on('tap',function () {
       window.history.go(-1);
    });
    $('.issue_add').on('tap',function () {
        location.href = './addbuildings.html';
    });
    $('.radio_all .radio_one').on('tap',function () {
        if($(this).find('i').hasClass('dian_one')){
            $(this).find('i').removeClass('dian_one');
        }else{
            $(this).find('i').addClass('dian_one');
        }
    });
    $('.iss_cho').eq(3).find('.radio_one').on('tap',function () {
        if($(this).find('i').hasClass('dian_one')){
            $(this).find('i').removeClass('dian_one');
        }else{
            $(this).find('i').addClass('dian_one');
        }
    });
    $('.iss_cho').eq(5).find('.radio_one').on('tap',function () {
        if($(this).find('i').hasClass('dian_one')){
            $(this).find('i').removeClass('dian_one');
        }else{
            $(this).find('i').addClass('dian_one');
        }
    });
    $('.iss_cho').eq(6).find('.radio_one').on('tap',function () {
        if($(this).find('i').hasClass('dian_one')){
            $(this).find('i').removeClass('dian_one');
        }else{
            $(this).find('i').addClass('dian_one');
        }
    });
    $('.iss_cho').eq(2).find('#cho_sel').on('tap',function () {
        $('.cho_sel_menu').show();
    });
    $('.cho_sel_menu .sel_menu li').on('tap',function () {
       var liVal = $(this).text();
      // console.log(liVal);
        $('.iss_cho').eq(2).find('span').eq(1).text(liVal);
        $('.cho_sel_menu').hide();
    });
    $('.iss_btn').on('tap',function () {
       $('.mark').show();
       $('.alert').show();
    });
    $('.alert .bottom').on('tap',function () {
       location.href = '../indexPage/indexPage.html';
    });
});