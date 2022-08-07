var exception;

const mnuScroll = function(){
    let rdm = document.querySelectorAll('.menu-item');
    for (let r in rdm){
        let rm = rdm[r];
        try{
            if (rm.href.includes('#')){
                rm.onclick = function(){
                    scroller = false;
                    document.body.querySelector('#'+rm.href.split('#')[1]).getElementsByTagName("*")[0].before(document.querySelector('.menu'));
                    document.querySelector('.menu').scrollIntoView(true);

                    for (let k in rdm){
                        try{
                            rdm[k].classList.remove('active');
                        }catch{
                            exception = 1;
                        }
                    }
                    rm.classList.add('active');
                    setTimeout(() => scroller = true, 1000);
                }
            }
        }catch{
            exception = 1;
        }
    }
}

function scrollIt() {
    if (document.body.scrollTop > document.querySelector('.menu').clientHeight + 1 || document.documentElement.scrollTop > document.querySelector('.menu').clientHeight + 1) {
        document.body.querySelector('#Main').before(document.querySelector('.menu'));
    } else {
        document.body.querySelector('#Main').getElementsByTagName("*")[0].before(document.querySelector('.menu'));
    }
}