import { validarCampo, validarFormulario } from "../js/validacao.js";
import { salvarCadastro, carregarCadastro } from "../js/storage.js";

const app = document.querySelector("#app");

const rotas = {
    inicio: `
        <section aria-labelledby="titulo-principal">
            <h2 id="titulo-principal">Transformando vidas através da solidariedade</h2>

            <figure>
                <img src="../img/logo_ong.png"
                    alt="Logo da ONG Esperança ao centro e voluntários ajudando pessoas necessitadas"
                    width="900">
            </figure>

            <p>A ONG Esperança trabalha para promover ações sociais e contribuir para uma sociedade mais justa e solidária.</p>
        </section>

        <section aria-labelledby="quem-somos">
            <h2 id="quem-somos">Quem somos</h2>
            <p>Somos uma organização do terceiro setor que desenvolve projetos voltados para pessoas em situação de vulnerabilidade social.</p>
        </section>

        <section aria-labelledby="nossa-missao">
            <h2 id="nossa-missao">Nossa missão</h2>
            <p>Promover oportunidades, acolhimento e apoio por meio de projetos sociais e ações comunitárias.</p>
        </section>

        <section aria-labelledby="entre-em-contato">
            <h2 id="entre-em-contato">Entre em contato</h2>

            <address>
                E-mail: <a href="mailto:contato@ongesperanca.org">contato@ongesperanca.org</a><br>
                Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a><br>
                São Paulo - SP
            </address>
        </section>
    `,

    projetos: `
        <section aria-labelledby="nossos-projetos">
            <h2 id="nossos-projetos">Nossos projetos</h2>
            <p>Conheça nossas iniciativas e descubra como você pode participar.</p>
        </section>

        <section aria-labelledby="campanhas-doacao">
            <h2 id="campanhas-doacao">Campanhas de doação</h2>

            <figure>
                <img src="../img/doacoes_ong.png"
                    alt="Voluntário entregando uma caixa de alimentos identificada como doação"
                    width="600">
            </figure>

            <p>As campanhas de doação arrecadam recursos e produtos necessários para manter nossas ações sociais.</p>

            <ul>
                <li>Doação de alimentos;</li>
                <li>Doação de roupas;</li>
                <li>Doação de produtos de higiene;</li>
                <li>Contribuições financeiras.</li>
            </ul>
        </section>

        <section aria-labelledby="voluntariado">
            <h2 id="voluntariado">Voluntariado</h2>

            <figure>
                <img src="../img/voluntarios_ong.png"
                    alt="Grupo de voluntários da ONG Esperança sorrindo juntos em um abraço coletivo"
                    width="600">
            </figure>

            <p>Os voluntários podem colaborar diretamente com nossas ações e projetos comunitários.</p>

            <ul>
                <li>Participação em eventos;</li>
                <li>Organização de campanhas;</li>
                <li>Distribuição de doações;</li>
                <li>Apoio às atividades da ONG.</li>
            </ul>
        </section>

        <section aria-labelledby="como-participar">
            <h2 id="como-participar">Como participar</h2>
            <p>Para demonstrar interesse, preencha o formulário de cadastro.</p>
            <p><a href="#cadastro" data-link>Quero participar</a></p>
        </section>
    `,

    cadastro: `
        <section aria-labelledby="cadastro-titulo">
            <h2 id="cadastro-titulo">Cadastre-se para participar</h2>

            <p>Preencha seus dados para demonstrar interesse em colaborar com a ONG Esperança.</p>

            <form id="form-cadastro">

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">Nome completo:</label><br>
                        <input type="text" id="nome" name="nome" autocomplete="name" required minlength="3" maxlength="100">
                    </p>

                    <p>
                        <label for="email">E-mail:</label><br>
                        <input type="email" id="email" name="email" autocomplete="email" required>
                    </p>

                    <p>
                        <label for="nascimento">Data de nascimento:</label><br>
                        <input type="date" id="nascimento" name="nascimento" autocomplete="bday" required>
                    </p>

                    <p>
                        <label for="cpf">CPF:</label><br>
                        <input type="text" id="cpf" name="cpf" autocomplete="social-security-number"
                            placeholder="000.000.000-00"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            maxlength="14"
                            required
                            title="Digite o CPF no formato 000.000.000-00">
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Contato e endereço</legend>

                    <p>
                        <label for="telefone">Telefone:</label><br>
                        <input type="tel" id="telefone" name="telefone"
                            placeholder="(00) 00000-0000"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            maxlength="15"
                            required>
                    </p>

                    <p>
                        <label for="cep">CEP:</label><br>
                        <input type="text" id="cep" name="cep"
                            placeholder="00000-000"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxlength="9"
                            required>
                    </p>

                    <p>
                        <label for="endereco">Endereço:</label><br>
                        <input type="text" id="endereco" name="endereco"
                            maxlength="150" required>
                    </p>

                    <p>
                        <label for="cidade">Cidade:</label><br>
                        <input type="text" id="cidade" name="cidade"
                            maxlength="80" required>
                    </p>

                    <p>
                        <label for="estado">Estado:</label><br>

                        <select id="estado" name="estado" required>
                            <option value="">Selecione</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </select>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Forma de participação</legend>

                    <p>
                        <input type="radio" id="voluntario" name="participacao"
                            value="voluntariado" required>
                        <label for="voluntario">Quero ser voluntário</label>
                    </p>

                    <p>
                        <input type="radio" id="doador" name="participacao"
                            value="doacao">
                        <label for="doador">Quero contribuir com doações</label>
                    </p>

                    <p>
                        <input type="radio" id="ambos" name="participacao"
                            value="ambos">
                        <label for="ambos">Tenho interesse nas duas opções</label>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Confirmação</legend>

                    <p>
                        <input type="checkbox" id="termos"
                            name="termos" required>

                        <label for="termos">
                            Concordo com o uso dos meus dados para fins de contato da ONG.
                        </label>
                    </p>
                </fieldset>

                <p>
                    <button type="submit">Enviar cadastro</button>
                    <button type="reset">Limpar formulário</button>
                </p>

            </form>
        </section>
    `
};

function renderizar() {
    const hash = window.location.hash.substring(1) || "inicio";

    let rota = "inicio";
    let secao = null;

    if (hash === "projetos") {
        rota = "projetos";
    }

    if (hash === "projetos-campanhas-doacao") {
        rota = "projetos";
        secao = "campanhas-doacao";
    }

    if (hash === "projetos-voluntariado") {
        rota = "projetos";
        secao = "voluntariado";
    }

    if (hash === "projetos-como-participar") {
        rota = "projetos";
        secao = "como-participar";
    }

    if (hash === "cadastro") {
        rota = "cadastro";
    }

    app.innerHTML = rotas[rota];

    if (rota === "cadastro") {
        const formulario = document.querySelector("#form-cadastro");
        carregarCadastro(formulario);
    }

    if (secao) {
        setTimeout(() => {
            const elemento = document.getElementById(secao);

            if (elemento) {
                elemento.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, 50);
    }
}

document.addEventListener("click", (evento) => {
    const link = evento.target.closest("[data-link]");

    if (!link) return;

    evento.preventDefault();

    const destino = link.getAttribute("href").substring(1);

    window.location.hash = destino;
});

window.addEventListener("hashchange", renderizar);

renderizar();

// Trata o envio do formulário de cadastro
document.addEventListener("submit", (evento) => {
    if (evento.target.id !== "form-cadastro") return;

    evento.preventDefault();

    const formulario = evento.target;

    if (!validarFormulario(formulario)) {
        alert("Verifique os campos destacados antes de enviar.");
        return;
    }

    salvarCadastro(formulario);

    alert("Cadastro salvo com sucesso!");
});

// Valida os campos enquanto o usuário preenche o formulário
document.addEventListener("input", (evento) => {
    const campo = evento.target;

    if (!campo.matches("#form-cadastro input, #form-cadastro select")) {
        return;
    }

    validarCampo(campo);
});