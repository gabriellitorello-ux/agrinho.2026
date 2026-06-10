// ===========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold: 0.15
});

sections.forEach(section =>{
    section.classList.add("hidden");
    observer.observe(section);
});

// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        botaoTopo.style.display = "block";
    }else{
        botaoTopo.style.display = "none";
    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===========================
// MENU ATIVO
// ===========================

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("ativo");
        }

    });

});

// ===========================
// FRASE SUSTENTÁVEL ALEATÓRIA
// ===========================

const frases = [

    "Produzir com responsabilidade é cultivar o futuro.",

    "Cada árvore preservada representa mais vida para as próximas gerações.",

    "Tecnologia e sustentabilidade caminham juntas no campo moderno.",

    "O agro sustentável protege o planeta enquanto alimenta o mundo.",

    "O futuro da agricultura depende das escolhas feitas hoje."

];

const fraseDiv = document.createElement("div");

fraseDiv.className = "frase-dia";

fraseDiv.innerHTML =
frases[Math.floor(Math.random() * frases.length)];

document.body.insertBefore(fraseDiv, document.body.firstChild);

// ===========================
// CONTADOR DE ESTATÍSTICAS
// ===========================

const numeros = document.querySelectorAll(".contador");

numeros.forEach(numero => {

    const atualizar = () => {

        const alvo = +numero.getAttribute("data-target");

        const atual = +numero.innerText;

        const incremento = alvo / 100;

        if(atual < alvo){

            numero.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar, 25);

        }else{

            numero.innerText = alvo;

        }

    };

    atualizar();

});

// ===========================
// QUIZ AGRINHO
// ===========================

function verificarQuiz(){

    const resposta =
    document.querySelector(
        'input[name="quiz"]:checked'
    );

    if(!resposta){

        alert("Selecione uma resposta.");
        return;

    }

    const resultado =
    document.getElementById("resultadoQuiz");

    if(resposta.value === "correta"){

        resultado.innerHTML =
        "✅ Parabéns! A sustentabilidade busca equilibrar produção e preservação ambiental.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Não foi dessa vez. Sustentabilidade significa produzir preservando os recursos naturais.";

        resultado.style.color = "red";

    }

}