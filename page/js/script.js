let topButt = document.getElementById('top-button');
let annCallButt = document.getElementById('ann-call-butt');
let contactCall = document.getElementById('contact-call');

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

window.onload = () => {
    let header = document.querySelector('#header').style.height = '80px';
}

addEventListener('scroll', () => {
    let header = document.querySelector('#header');
    let scr = window.scrollY;
    let topButt = document.getElementById('top-button');

    if(scr >= 100) {
        header.style.height = "80px";
    }else{
        header.style.height = '80px';
    };
    if(scr >= 300) {
        topButt.style.display = 'flex';
    }else{
        topButt.style.display = 'none';
    };
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

function hover() {
    let mause = document.querySelector('.ann-sec-slide');
    let opa = document.querySelectorAll('.ann-slide-butt');
    let zoom =document.getElementById('zoom');

    mause.addEventListener('mouseout', (out) => {
        if(out.type == 'mouseout') {
            for(let i=0; i<opa.length; i++) {
                opa[i].style.opacity = '0';
            }
            zoom.style.opacity = '0';
        }
        
    });
    mause.addEventListener('mouseover', (over) => {
        if(over.type == 'mouseover') {
            for(let i=0; i<opa.length; i++) {
                opa[i].style.opacity = '0.9';
            }
            zoom.style.opacity = '0.9';
        }
    });
}
hover();

function zoom() {
    let zoom = document.querySelector('.ann-sec-slide');
    let zoomBox = document.querySelector('.ann-slide-box');
    let zoomSpan = document.getElementById('zoom');
    let zoomClose = document.getElementById('zoom-close');
    let client = document.querySelector('.announcement-main').clientWidth;
    let client1 = window.innerHeight;
    // 
    let annItem = document.querySelectorAll('.ann-slide');
    let next = document.getElementById('ann-slide-next');
    let prev = document.getElementById('ann-slide-prev');
    let flag = 0;
    let flag1 = 0;
    
    zoomBox.onclick = () => {
        zoom.classList.add('ann-sec-slide1');
        zoom.classList.remove('ann-sec-slide');

        zoomBox.style.width = '80%';
        zoomBox.style.height = '95%';
        zoomSpan.style.display = 'none';
        zoomClose.style.display = 'flex';

        for(let i=0; i < annItem.length; i++){
            flag = 0;
            annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
        }
    }

    zoomClose.onclick = () => {
        zoom.classList.remove('ann-sec-slide1');
        zoom.classList.add('ann-sec-slide');

        zoomBox.style.width = '100%';
        zoomBox.style.height = '100%';
        zoomSpan.style.display = 'flex';
        zoomClose.style.display = 'none';

        for(let i=0; i < annItem.length; i++){
            flag = 0;
            annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
        }
    }

    next.onclick = () => {
        if(zoom.classList.value == 'ann-sec-slide') {
            // let step = client-649;
            let step1 = -client+649;

            flag += step1;
            flag1 = flag / annItem.length;

            for(let i=0; i < annItem.length; i++){
                if(flag1 <= step1) {
                    flag = 0;
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
                if(flag1 > step1) {
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
            }
        }
        else{
            // let step = client-649;
            let step1 = -client+224;

            console.log(client)
            flag += step1;
            flag1 = flag / annItem.length;

            for(let i=0; i < annItem.length; i++){
                if(flag1 <= step1) {
                    flag = 0;
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
                if(flag1 > step1) {
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
            }
        }
    }

    prev.onclick = () => {

        if(zoom.classList.value == 'ann-sec-slide') {
            let step = client-649;
            let step1 = -client+649;

            flag += step;
            flag1 = flag / annItem.length;

            for(let i=0; i<annItem.length; i++) {
                if(flag1 > 0) {
                    flag1 = 0;
                    flag = (annItem.length - 1) * step1;
                    annItem[i].style.transform = 'translate3d(-'+flag+'px,0,0)';
                }
                if(flag1 <= 0) {
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
            }
        }
        else{
            let step = client-270;
            let step1 = -client+270;

            flag += step;
            flag1 = flag / annItem.length;

            for(let i=0; i<annItem.length; i++) {
                if(flag1 > 0) {
                    flag1 = 0;
                    flag = (annItem.length - 1) * step1;
                    annItem[i].style.transform = 'translate3d(-'+flag+'px,0,0)';
                }
                if(flag1 <= 0) {
                    annItem[i].style.transform = 'translate3d('+flag+'px,0,0)';
                }
            }
        }
    }
}
zoom();

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
annCallButt.onclick = () => {
    callTab();
};