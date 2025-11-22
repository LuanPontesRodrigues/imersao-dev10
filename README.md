# 📖 Base de Conhecimento de Tecnologias

Este é um projeto simples de front-end que funciona como uma base de conhecimento para diversas linguagens de programação, frameworks e ferramentas de desenvolvimento. A aplicação exibe cartões de informação e permite que o usuário pesquise por tecnologias específicas.

O projeto foi desenvolvido durante a Imersão da Alura, com foco em praticar a manipulação do DOM com JavaScript e o consumo de dados de um arquivo local.

## ✨ Funcionalidades

- **Listagem de Tecnologias:** Exibe informações carregadas a partir de um arquivo `data.json`.
- **Busca Dinâmica:** Permite ao usuário filtrar as tecnologias pelo nome.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para a estilização, utilizando variáveis, Flexbox e Media Queries para responsividade.
- **JavaScript (Vanilla):** Para a lógica da aplicação, incluindo:
  - Consumo de dados do arquivo `data.json` com a API `fetch`.
  - Manipulação do DOM para criar e exibir os cartões de tecnologia.
  - Implementação da funcionalidade de busca.
- **JSON:** Como formato para armazenar os dados da base de conhecimento.

## 🚀 Como Rodar o Projeto

Como este é um projeto estático de front-end, você não precisa de um ambiente de desenvolvimento complexo para executá-lo.

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/LuanPontesRodrigues/imersao-dev10/tree/main>
    ```

2.  **Abra o projeto:**
    Navegue até a pasta do projeto. A maneira mais fácil de executar é usando um servidor local.

    **Usando a extensão Live Server (Recomendado):**
    - Se você usa o Visual Studio Code, instale a extensão Live Server.
    - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

    **Abrindo o arquivo diretamente:**
    - Você também pode abrir o arquivo `index.html` diretamente no seu navegador.
    > **Nota:** Dependendo das configurações de segurança do seu navegador, a funcionalidade de busca que carrega o `data.json` pode não funcionar corretamente ao abrir o arquivo localmente (devido a políticas de CORS). Por isso, o uso de um servidor local é recomendado.

---

Desenvolvido com base nos aprendizados da Imersão Alura.
