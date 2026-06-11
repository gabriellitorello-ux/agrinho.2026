/* ==========================================================================
   1. LÓGICA DO QUIZ INTERATIVO (VERSÃO DEFINITIVA E INFALÍVEL)
   ========================================================================== */
function verificarResposta(isCorreta, botaoClicado, textoSucesso, textoErro) {
    // Encontra o bloco da pergunta atual (.quiz-item)
    const containerPergunta = botaoClicado.closest('.quiz-item');
    
    // Seleciona a caixinha de feedback que está exatamente dentro desta pergunta
    const feedbackDiv = containerPergunta.querySelector('.feedback');
    
    // Seleciona apenas os botões desta pergunta para bloqueá-los
    const botoes = containerPergunta.querySelectorAll('.opcao-btn');
    
    botoes.forEach(botao => {
        botao.disabled = true;
        botao.style.cursor = 'not-allowed';
        botao.style.opacity = '0.6';
    });

    // Destaca o botão escolhido
    botaoClicado.style.opacity = '1';

    // Mostra o feedback removendo o "oculto"
    feedbackDiv.classList.remove('oculto', 'sucesso', 'erro');

    if (isCorreta) {
        // Estilo Verde
        botaoClicado.style.backgroundColor = '#2d6a4f';
        botaoClicado.style.color = '#ffffff';
        botaoClicado.style.borderColor = '#2d6a4f';
        
        feedbackDiv.textContent = textoSucesso;
        feedbackDiv.classList.add('sucesso');
    } else {
        // Estilo Vermelho
        botaoClicado.style.backgroundColor = '#e63946';
        botaoClicado.style.color = '#ffffff';
        botaoClicado.style.borderColor = '#e63946';
        
        feedbackDiv.textContent = textoErro;
        feedbackDiv.classList.add('erro');
    }
}

/* ==========================================================================
   2. SISTEMA DE IMERSÃO: GERADOR ALEATÓRIO DE FOLHAS CAINDO
   ========================================================================== */
function gerarFolhasDecorativas() {
    // Array com variações de folhas/mudas para deixar o visual dinâmico
    const tiposDeFolhas = ['🍃', '🍂', '🍁', '🌱'];
    const quantidadeDeFolhas = 12; // Número de folhas extras flutuando na tela

    for (let i = 0; i < quantidadeDeFolhas; i++) {
        // Cria um novo elemento span para a folha
        const folha = document.createElement('span');
        
        // Escolhe um emoji de folha aleatório do nosso array
        const folhaAleatoria = tiposDeFolhas[Math.floor(Math.random() * tiposDeFolhas.length)];
        folha.textContent = folhaAleatoria;

        // Aplica estilos básicos diretamente via JS para permitir a aleatoriedade
        folha.style.position = 'fixed';
        folha.style.top = '-50px';
        folha.style.zIndex = '9999';
        folha.style.pointerEvents = 'none'; // Não atrapalha os cliques do usuário
        
        // Define uma posição horizontal (esquerda) aleatória entre 5% e 95% da tela
        folha.style.left = Math.random() * 90 + 5 + '%';
        
        // Tamanhos variados para dar sensação de profundidade (folhas perto e longe)
        folha.style.fontSize = Math.random() * (28 - 16) + 16 + 'px';
        
        // Tempo que a folha demora para cair (entre 8 e 18 segundos)
        const duracaoCair = Math.random() * (18 - 8) + 8;
        
        // Tempo de atraso para a folha começar a cair (para não caírem todas juntas no início)
        const atrasoInicio = Math.random() * 10;

        // Aplica a animação que criamos lá no CSS (style.css)
        folha.style.animation = `cairFolhas ${duracaoCair}s linear ${atrasoInicio}s infinite`;
        
        // Define uma opacidade suave para ficar de acordo com a estética soft
        folha.style.opacity = Math.random() * (0.7 - 0.3) + 0.3;

        // Adiciona a folha dentro do body do site
        document.body.appendChild(folha);
    }
}

// Executa a função de gerar folhas assim que toda a página HTML terminar de carregar
window.addEventListener('DOMContentLoaded', gerarFolhasDecorativas);
