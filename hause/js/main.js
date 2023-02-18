let topButt = document.getElementById('top-button');
let callButtTop = document.getElementById('call');
let callButtBott = document.getElementById('callButtBott');

function menu() {
    let open = document.querySelector('#menu-burger');
    let menuBar = document.querySelector('.menu-open');
    let close = document.querySelector('#menu-close');

    open.onclick = () => {
        menuBar.style.transform = 'translate(0)';
    }
    close.onclick = () => {
        menuBar.style.transform = 'translate(-100%)';
    }
}
menu();

addEventListener('scroll', () => {
    let header = document.querySelector('#header');
    let scr = window.scrollY;
    let client = document.querySelector('.slide-box').clientWidth;

    if(client < 768) {
        header.style.height = '60px';
    }
    else{
        if(scr >= 100) {
            header.style.height = "80px";
        }else{
            header.style.height = '120px';
        };
        if(scr >= 300) {
            topButt.style.display = 'flex';
        }else{
            topButt.style.display = 'none';
        };
    }
});

topButt.onclick = () => {
    let scr = window.scrollY;
    let interval = setInterval(() => {
        if( scr > 0) {
          scr -= 10;
        }
        if(scr <= 0) {
          clearInterval(interval);
        }
        window.scrollTo(0,scr);
      },0.5)
}

function sliderTop() {
    let img = document.querySelectorAll('.slide-img');
    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');
    let client = document.querySelector('.slide-box').clientWidth;
    let client1 = -client;
    let flag = 0;
    let flag1 = 0;
    let step = 265;
    let step1 = -265;

    setInterval(next.onclick = () => {
        if(client < 768) {
            flag += -client
        }else{
            flag += step1;
        }
        /////////
        if(client > 1023 && client < 1201) {
            flag1 = flag / (img.length - 2);
        }
        if(client > 767 && client < 1024) {
            flag1 = flag / (img.length - 1);
        }
        if(client < 767) {
            flag1 = flag / (img.length);
        }
        else{
            flag1 = flag / (img.length - 3);
        }

        for (let i = 0; i < img.length; i++) {
            if(flag1 == step1 || flag1 == -client){
                flag = 0;
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
            if(flag1 !== step1){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    },'3000');
    

    prev.onclick = () => {
        if(client < 768) {
            flag += client
        }else{
            flag += step;
        }
        //////
        if(client > 1023 && client < 1201) {
            flag1 = flag / (img.length - 2);
        }
        if(client > 767 && client < 1024) {
            flag1 = flag / (img.length - 1);
        }
        else{
            flag1 = flag / (img.length - 3);
        }

        for (let i = 0; i<img.length; i++) {
            if(flag1 > 0){
                if(client > 1200) {
                    flag = step1 * (img.length - 4);
                }
                if(client > 1023 && client < 1201) {
                    flag = step1 * (img.length - 3);
                }
                if(client > 767 && client < 1024) {
                    flag = step1 * (img.length - 2);
                }
                if(client < 767) {
                    flag = client1 * (img.length - 1);
                }
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }if(flag1 <= 0){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    }
}
sliderTop();

function sliderBottom() {
    let img = document.querySelectorAll('.slide-img2');
    let next = document.querySelector('#next2');
    let prev = document.querySelector('#prev2');
    let client = document.querySelector('.slide-box').clientWidth;
    let client1 = -client;
    let flag = 0;
    let flag1 = 0;
    let step = 265;
    let step1 = -265;

    next.onclick = () => {
        if(client < 768) {
            flag += -client
        }else{
            flag += step1;
        }
        ///////
        if(client > 1023 && client < 1201) {
            flag1 = flag / (img.length - 2);
        }
        if(client > 767 && client < 1024) {
            flag1 = flag / (img.length - 1);
        }
        if(client < 767){
            flag1 = flag / (img.length);
        }
        else{
            flag1 = flag / (img.length - 3);
        }

        for (let i = 0; i < img.length; i++) {
            if(flag1 == step1 || flag1 == -client){
                flag = 0;
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
            if(flag1 !== step1){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    }

    prev.onclick = () => {
        if(client < 768) {
            flag += client
        }else{
            flag += step;
        }
        //////
        if(client > 1023 && client < 1201) {
            flag1 = flag / (img.length - 2);
        }
        if(client > 767 && client < 1024) {
            flag1 = flag / (img.length - 1);
        }
        else{
            flag1 = flag / (img.length - 3);
        }

        for (let i = 0; i<img.length; i++) {
            if(flag1 > 0){
                if(client > 1200) {
                    flag = step1 * (img.length - 4);
                }
                if(client > 1023 && client < 1201) {
                    flag = step1 * (img.length - 3);
                }
                if(client > 767 && client < 1024) {
                    flag = step1 * (img.length - 2);
                }
                if(client < 767) {
                    flag = client1 * (img.length - 1);
                }
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }if(flag1 <= 0){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    }
}
sliderBottom();

function callTab() {
    let tabBox = document.getElementById('tab'); 
    let closeTab = document.getElementById('close-tab');
    let tabBack = document.getElementById('tab-back');

    function openTab() {
        tabBox.style.display = 'flex';
        tabBack.style.display = 'flex';
    }
    openTab();
    closeTab.onclick = () => {
        tabBox.style.display = 'none';
        tabBack.style.display = 'none';
    }
    tabBack.onclick = () => {
        tabBox.style.display = 'none';
        tabBack.style.display = 'none';
    }

}

callButtTop.onclick = () => {
    callTab();
};
callButtBott.onclick = () => {
    callTab();
}