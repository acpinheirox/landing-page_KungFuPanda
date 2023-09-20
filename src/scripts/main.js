document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const extras = document.querySelectorAll('[data-accordion-extras]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    ocultaElementosDoHeader();

    window.addEventListener('scroll', function () {

        const posiçaoAtual = window.scrollY;
        

        if (posiçaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElemtnosDoHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__buttons--is--active');
        })
    }

    for (let i = 0; i < extras.length; i++) {
        extras[i].addEventListener('click', abreOuFechaResposta);
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__buttons--is--active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

function abreOuFechaResposta(event) {
    const elementoPai = event.currentTarget;
    elementoPai.classList.toggle('extras__list__item--is--open');
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');

    header.classList.add('header--is--hidden');
}

function exibeElemtnosDoHeader() {
    const header = document.querySelector('header');

    header.classList.remove('header--is--hidden');
}
