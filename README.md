# Study Notes - CaputiDev

Este é o repositório oficial do meu **Digital Garden** (Jardim Digital), onde documento meus estudos sobre programação, algoritmos, resumos de livros e desenvolvimento de software.

O site é construído com [Docusaurus](https://docusaurus.io/) e hospedado no GitHub Pages.

 **Acesse online:** [https://CaputiDev.github.io/study-notes/](https://CaputiDev.github.io/study-notes/)

---

## Como utilizar este projeto

1.  **Instalar dependências** (apenas na primeira vez ou se apagar a pasta node_modules):

    ```bash
    npm install
    ```

2.  **Iniciar o servidor local**:

    ```bash
    npm start
    ```

    >*Isso abrirá o site em `http://localhost:3000`. As alterações que você fizer nos arquivos `.md` aparecem na hora.*

---

## Meu fluxo de trabalho

### 1. Criar e Testar

Escrevo meus resumos na pasta [`docs/`](./docs/) e verifico se ficou bom usando o `npm start`.

### 2. Salvar o Código

```bash
git add .
git commit -m "docs: adciona nova secao nas anotacoes"
git push
```

### 3. Publicar (Deploy)

Após salvar as alterações no meu ambiente local, publico as mudanças no site online.

```PowerShell
.\deploy.ps1
```

> Dependendo do terminal que usar a síntaxe pode ser diferente, esse script específico funciona no PowerShell.

### Estrutura de Pastas Importante

* /docs: Aqui ficam todos os resumos e anotações (arquivos .md).

* /src/pages: Contém a página inicial (index.js) e o CSS personalizado.

* /static/img: Onde ficam as imagens (logos, backgrounds, diagramas).

* docusaurus.config.js: Configurações globais do site (nome, links, navbar).

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. O site é construído usando Docusaurus (Meta Platforms, Inc).

> Sinta-se livre para dar um fork no meu projeto e criar seu próprio espaço. Só não esqueça de dar os créditos. 😉
