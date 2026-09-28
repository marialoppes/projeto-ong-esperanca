# ONG Esperança

Site institucional desenvolvido como atividade acadêmica para apresentar a ONG Esperança, divulgar seus projetos e facilitar o contato, o cadastro de pessoas interessadas e a participação em ações de apoio.

## Objetivo do projeto

O projeto tem como objetivo criar uma plataforma web simples, organizada e responsiva para apresentar a instituição, mostrar seus projetos e oferecer formas de participação. A aplicação foi desenvolvida com tecnologias de front-end, sem necessidade de servidor de aplicação ou banco de dados externo.

## Funcionalidades

- Página inicial com apresentação da ONG.
- Página de projetos com informações e imagens.
- Página de cadastro com formulário para pessoas interessadas.
- Navegação entre as páginas.
- Validação dos campos do formulário com JavaScript.
- Recursos de acessibilidade, incluindo indicação visual de foco pelo teclado e link para pular diretamente ao conteúdo principal.
- Uso do armazenamento local do navegador (`localStorage`) para manter dados da aplicação no próprio dispositivo.

## Tecnologias utilizadas

| Tecnologia | Utilização no projeto |
|---|---|
| HTML5 | Estrutura e conteúdo das páginas, com elementos semânticos e formulários. |
| CSS3 | Estilização, organização visual, responsividade e estados de foco para navegação por teclado. |
| JavaScript | Comportamentos da aplicação, navegação, validação e armazenamento local. |
| Git | Controle de versão, registro das alterações e gerenciamento de branches. |
| GitHub | Hospedagem do repositório remoto e acompanhamento das tarefas por issues, milestones e pull requests. |

## Estrutura de arquivos

```text
projeto_ong/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── img/
│   ├── logo_ong.png
│   ├── doacoes_ong.png
│   └── voluntarios_ong.png
├── js/
│   ├── router.js
│   ├── storage.js
│   └── validacao.js
└── README.md
```

## Pré-requisitos

Para executar o projeto localmente, é necessário:

- Um navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.
- Visual Studio Code (VS Code).
- A extensão **Live Server** instalada no VS Code, para abrir o projeto por um servidor local e permitir o funcionamento dos módulos JavaScript.

Não é necessário instalar bibliotecas ou dependências com npm, pois o projeto utiliza HTML, CSS e JavaScript nativos. Também não há um processo de compilação (*build*) configurado.

## Instalação e execução local

1. Baixe o projeto ou clone o repositório do GitHub:

   ```bash
   git clone https://github.com/marialoppes/projeto-ong-esperanca.git
   ```

2. Abra a pasta `projeto-ong-esperanca` no Visual Studio Code.

3. No VS Code, acesse a aba **Extensions** e instale a extensão **Live Server**, caso ainda não esteja instalada.

4. No explorador de arquivos do VS Code, abra a pasta `html`.

5. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.

6. O site será aberto no navegador usando um endereço local. A partir da página inicial, utilize o menu para acessar as outras páginas.

## Build e dependências

O projeto não utiliza ferramentas de compilação nem gerenciador de dependências. Por isso, não há comandos de `npm install` ou de geração de *build*. Os arquivos HTML, CSS e JavaScript são executados diretamente pelo navegador através do servidor local do Live Server.

## Testes realizados

Os testes são feitos manualmente no navegador, verificando os principais recursos do site:

- Abrir a página inicial pelo Live Server e navegar entre Início, Projetos e Cadastro.
- Conferir se os estilos e as imagens são carregados corretamente.
- Preencher e enviar o formulário, verificando a validação dos campos obrigatórios e dos formatos informados.
- Utilizar a tecla `Tab` para percorrer os elementos interativos e verificar a indicação visual de foco.
- Ativar o link “Pular para o conteúdo principal” e confirmar que o foco e a navegação chegam ao conteúdo da página.
- Conferir o comportamento dos recursos que utilizam o armazenamento local do navegador.

Não há, neste momento, uma suíte de testes automatizados configurada no projeto.

## Versionamento e fluxo de trabalho

O controle de versão é realizado com Git e o repositório remoto está hospedado no GitHub.

O projeto utiliza uma organização baseada em GitFlow:

- `main`: branch que mantém a versão principal do projeto.
- `develop`: branch de integração das funcionalidades concluídas.
- `feature/nome-da-funcionalidade`: branches criadas para desenvolver alterações específicas.

As alterações são registradas em commits com mensagens que resumem o que foi feito. Quando uma funcionalidade fica pronta, é aberta uma *pull request* para revisão e integração em `develop`; depois, as alterações integradas podem ser levadas para `main`.

A identificação de versões segue o padrão de versionamento semântico `MAJOR.MINOR.PATCH`:

- **MAJOR**: mudanças incompatíveis com versões anteriores.
- **MINOR**: inclusão de funcionalidades compatíveis.
- **PATCH**: correções e ajustes compatíveis.

A versão inicial do projeto foi identificada pela tag `v1.0.0`.

## Acompanhamento das tarefas no GitHub

As tarefas e alterações também são organizadas no GitHub por meio de:

- **Milestone:** `Atividade 4 — Acessibilidade e documentação`, utilizado para agrupar e acompanhar as tarefas desta etapa.
- **Issue #1:** `Adicionar link para pular diretamente ao conteúdo principal`, criada para registrar a melhoria de acessibilidade.
- **Pull Request #2:** `feat: adicionar link de salto para conteúdo principal`, utilizado para descrever, revisar e integrar a alteração realizada na branch de funcionalidade.

## Autoria

Projeto acadêmico desenvolvido por Maria Eduarda Matheus Lopes para as atividades de desenvolvimento web.