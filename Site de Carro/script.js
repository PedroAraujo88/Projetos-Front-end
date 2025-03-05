let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item'); // Seleciona corretamente os itens
let dots = document.querySelectorAll('.indicators ul li'); // Corrigido para selecionar os dots corretamente

let active = 0;
let firstPosition = 0; 
let lastPosition = items.length - 1;

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = active + 1 > lastPosition ? 0 : active + 1; 
    items[active].classList.add('active');

    let dotsOld = document.querySelector('.indicators ul li.active'); // Busca o dot ativo
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    dots[active].classList.add('active');

    // Atualiza o número da posição com dois dígitos
    document.querySelector('.indicators .number').innerHTML = (active + 1).toString().padStart(2, '0'); 
};

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    let dotsOld = document.querySelector('.indicators ul li.active'); // Busca o dot ativo
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    dots[active].classList.add('active');

    // Atualiza o número da posição com dois dígitos
    document.querySelector('.indicators .number').innerHTML = (active + 1).toString().padStart(2, '0'); 
};
