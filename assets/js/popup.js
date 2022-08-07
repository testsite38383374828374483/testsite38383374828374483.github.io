const createPopup = function(){
    try{
        document.querySelector('.popup').remove();
    }catch{
        let exeption = 0;
    }
    let pops = document.createElement('div');
    pops.classList.add('popup');
    pops.innerHTML = `
            <div class="popup-top">
                <div class="popup-close">+</div>
            </div>
            <div class="popup-content">
                <div class="popup-label">
                    <div class="popup-text">
                        Ваше имя
                    </div>
                    <input class="popup-input" value="" type="text" required/>
                </div>
                <div class="popup-label">
                    <div class="popup-text">
                        Ваше E-mail
                    </div>
                    <input class="popup-input" value="" type="email" required/>
                </div>
                <div class="popup-label">
                    <div class="popup-text">
                        Ваш телефон
                    </div>
                    <input class="popup-input" value="+7 " type="phone" required/>
                </div>
                <a class="send_popup">Отправить</a>
            </div>
        `;
        document.body.append(pops);
        document.querySelector('.popup-close').onclick = function(){
            document.querySelector('.popup').remove();
        }
}