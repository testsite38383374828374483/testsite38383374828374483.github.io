function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getThisCard = function(){
    let cards = ['die', 'enemy', 'every', 'fear', 'friend', 'future', 'god', 'help', 'hope', 'interest', 'love', 'nothing', 'thoughts', 'waiting', 'want', 'warm', 'wow'];
    return 'assets/images/cards/'+cards[randomIntFromInterval(0, cards.length-1)]+'-card.jpg';
}

const btnClick = function(){
    let cardBtn = document.querySelector('.preview-card-button').querySelector('a');
    cardBtn.onclick = function(){
        document.querySelector('.preview-card').classList.add('startanim');
        document.querySelector('.preview-card').querySelector('img').src=getThisCard();
        document.querySelector('.preview-card-button').innerHTML = '<p style="animation: 3s start-card-animation ease-in-out;">Ищи знак, читай рассказ</p>';
    }
}