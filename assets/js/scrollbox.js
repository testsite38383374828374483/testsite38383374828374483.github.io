const reverse = function(arr){
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}

const initTW = function(){
    let tw = document.querySelectorAll('.scroll-tw')
    for  (let k in tw){
        let kk = tw[k];
        try{
            let left_scroll = kk.querySelector('.left_scroll');
            let right_scroll = kk.querySelector('.right_scroll');
            let scrolling_c = kk.querySelector('.scroll-center');
            let scrollboxs = scrolling_c.querySelectorAll('.scroll-box');
            right_scroll.onclick = function(){
                let ind = 0;
                let index = -1;
                for (let s in scrollboxs){
                index +=1;
                let sc = scrollboxs[s];
                if (sc.classList.contains('switched')){
                    ind = 1;
                    if (index < scrollboxs.length-1){
                        sc.classList.remove('switched');
                    }
                }else{
                    if (ind == 1){
                        sc.classList.add('switched');
                        ind +=1;
                    }
                }
                }
            }
            left_scroll.onclick = function(){
                let scrollboxss = reverse(scrollboxs);
                let indd = 0;
                let index = -1;
                for (let s in scrollboxss){
                index +=1;
                let sc = scrollboxss[s];
                if (sc.classList.contains('switched')){
                    indd = 1;
                    if (index < scrollboxss.length-1){
                        sc.classList.remove('switched');
                    }
                }else{
                    if (indd == 1){
                        sc.classList.add('switched');
                        indd +=1;
                    }
                }
                }
            }
        }catch{
            console.log(kk);
        }
    }
}