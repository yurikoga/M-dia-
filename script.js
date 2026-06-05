const buttons = document.querySelectorAll('.icon-btn');

buttons.forEach(btn => {
    // Adiciona o efeito de "afundar" ao clicar
    btn.addEventListener('mousedown', () => {
        btn.classList.add('pressed');
    });

    // Remove o efeito ao soltar o clique
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('pressed');
    });

    // Garante que remova o efeito se o mouse sair do botão enquanto pressionado
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('pressed');
    });
});
