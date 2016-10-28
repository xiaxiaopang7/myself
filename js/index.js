/**
 * Created by Administrator on 2016/7/26.
 */
~function (desW) {
    var winW = document.documentElement.clientWidth;
    if (winW > desW) {
        var oMain = document.querySelector(".swiper-container");
        oMain.style.margin = "0 auto";
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);
/*var winW = document.documentElement.clientWidth;
var scale = 750 / 100;
document.documentElement.style.fontSize = winW / scale + "px";*/
//->��Ƶ�Զ�����
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->����Ƶ����:�������ʼ������Դ�ļ�,Ҳ�����������ŵ�����������Ҫһ��ʱ��,ֻ�з������������ǲŻ���ʾ���ֵ�ͼ��
    musicAudio.addEventListener("canplay", function () {
        //->canplay:��Ƶ�ļ��Ѿ����Բ�����,���ǲ�һ����������Դ�����������,�󲿷��Ǳ߲��ű߼���
        music.style.display = "block";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->��ǰ����ͣ״̬�����䲥��
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music musicMove";
        return;
    }
    //->��ǰ�ǲ���״̬��������ͣ
    musicAudio.pause();
    music.className = "music";
}, false);
var mySwiper=new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    //->����Ļ�л�������ִ�� swipe:��ǰSwiper��һ��ʵ��
   onSlideChangeEnd: function (swipe) {
        var n = swipe.activeIndex,//->��ȡ��ǰ���(��ǰչʾ��)������
            slideAry = swipe.slides;//->��ǰ���������е�slider(����loopģʽ�¿�¡��������)-����һ�������鼯��

        //->�õ�ǰչʾ���Ǹ���ID������Ķ��Ƴ�ID
        [].forEach.call(slideAry, function (item, index) {
            if (index == n) {
                //->������ǵ�ǰ��һ��,��Ҫ�趨ID
              /*  item.id = index == 1 || index == 3 ? "page1" : "page2";*/
                item.id ="page"+n;
                return;
            }
            item.id = null;
        });
    }
});