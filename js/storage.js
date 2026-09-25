// Salva os dados do cadastro no localStorage
export function salvarCadastro(formulario) {
    const dados = new FormData(formulario);
    const cadastro = Object.fromEntries(dados.entries());

    localStorage.setItem("cadastroOng", JSON.stringify(cadastro));
}

// Recupera os dados salvos e preenche os campos do formulário
export function carregarCadastro(formulario) {
    if (!formulario) return;

    const dadosSalvos = localStorage.getItem("cadastroOng");

    if (!dadosSalvos) return;

    const cadastro = JSON.parse(dadosSalvos);

    Object.keys(cadastro).forEach((campo) => {
        const elemento = formulario.elements[campo];

        if (!elemento) return;

        if (elemento.type === "radio") {
            const opcao = formulario.querySelector(
                `[name="${campo}"][value="${cadastro[campo]}"]`
            );

            if (opcao) {
                opcao.checked = true;
            }

            return;
        }

        elemento.value = cadastro[campo];
    });
}