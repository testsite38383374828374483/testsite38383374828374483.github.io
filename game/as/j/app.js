document.querySelector('.play_btn').onclick = function(){
    let document_top_selector = document.createElement('div');
    document_top_selector.classList.add('d_top_selector');
    let document_center_selector = document.createElement('div');
    document_center_selector.classList.add('d_center_selector');
    let document_bottom_selector = document.createElement('div');
    document_bottom_selector.classList.add('d_bottom_selector');
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').append(document_top_selector);
    document.querySelector('main').append(document_center_selector);
    document.querySelector('main').append(document_bottom_selector);
    wipe(document_center_selector);
    delay_type(document_center_selector, 'Устраивайтесь поудобнее: в уютном кресле под старым торшером начинается книжная терапия. Что прячется за каждым знаком? Боль, страх — или любовь, которая рушит границы реального? Жуткие и добрые, нежные и шокирующие истории оставят след в душе и заставят по-новому взглянуть на привычное.', 0, 40);
}