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
contactCall.onclick = () => {
    callTab();
};