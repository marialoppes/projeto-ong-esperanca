// Controla a aparência do site e guarda a preferência escolhida.

const CHAVE_APARENCIA = "ong-esperanca-aparencia";
const botoesAparencia = document.querySelectorAll("[data-aparencia]");

function aplicarAparencia(aparencia) {
    const opcoesValidas = ["padrao", "escuro", "alto-contraste"];

    // Se o valor salvo não for reconhecido, usa a aparência padrão.
    if (!opcoesValidas.includes(aparencia)) {
        aparencia = "padrao";
    }

    if (aparencia === "padrao") {
        document.body.removeAttribute("data-aparencia");
    } else {
        document.body.setAttribute("data-aparencia", aparencia);
    }

    // Informa aos leitores de tela qual opção está selecionada.
    botoesAparencia.forEach((botao) => {
        const selecionado = botao.dataset.aparencia === aparencia;
        botao.setAttribute("aria-pressed", String(selecionado));
    });

    // Salva a preferência para a próxima visita.
    try {
        localStorage.setItem(CHAVE_APARENCIA, aparencia);
    } catch (erro) {
        // O tema ainda funciona nesta página, mesmo se o navegador
        // não permitir salvar a preferência.
    }
}

// Recupera a preferência salva, ou começa no tema padrão.
let aparenciaSalva = "padrao";

try {
    aparenciaSalva = localStorage.getItem(CHAVE_APARENCIA) || "padrao";
} catch (erro) {
    aparenciaSalva = "padrao";
}

aplicarAparencia(aparenciaSalva);

// Usa um único evento para responder aos cliques nos três ícones.
document.addEventListener("click", (evento) => {
    const botao = evento.target.closest("button[data-aparencia]");

    if (!botao) {
        return;
    }

    aplicarAparencia(botao.dataset.aparencia);
});