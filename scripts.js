let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let dots = document.querySelectorAll('.dot');

let count = list.length;
let active = 0;

// Função para atualizar os pontos (indicadores)
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Função para avançar para o próximo slide
next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1; // Se for o último, vai para o primeiro
    list[active].classList.add('active');
    updateDots(active);
    updateNavigation();
}

// Função para voltar para o slide anterior
prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1; // Se for o primeiro, vai para o último
    list[active].classList.add('active');
    updateDots(active);
    updateNavigation();
}

// Adicionando funcionalidade nos pontos (dots)
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        active = parseInt(e.target.getAttribute('data-index'));
        let activeOld = document.querySelector('.active');
        activeOld.classList.remove('active');
        list[active].classList.add('active');
        updateDots(active);
        updateNavigation();
    });
});

// Inicializando a navegação ao carregar a página
updateDots(active);
updateNavigation();
