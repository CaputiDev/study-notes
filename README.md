# Study Notes - CaputiDev

Este é o repositório oficial do meu **Digital Garden** (Jardim Digital), onde documento meus estudos sobre programação, algoritmos, resumos de livros e desenvolvimento de software.

O site é construído com [Docusaurus](https://docusaurus.io/) e hospedado no GitHub Pages.

 **Acesse online:** [https://CaputiDev.github.io/study-notes/](https://CaputiDev.github.io/study-notes/)

---

## Como Rodo e atualizo este projeto

1.  **Instalar dependências** (apenas na primeira vez ou se apagar a pasta node_modules):
    ```bash
    npm install
    ```

2.  **Iniciar o servidor local**:
    ```bash
    npm start
    ```
    *Isso abrirá o site em `http://localhost:3000`. As alterações que você fizer nos arquivos `.md` aparecem na hora.*

---

## FLUXO DE TRABALHO: Como Atualizo o Site

### 1. Criar e Testar
Escreva seus resumos na pasta `docs/` e verifique se ficou bom usando o `npm start`.

### 2. Salvar o Código
Isso salva o histórico das suas edições e garante que você não perca os arquivos originais.
*(Faça isso no terminal, após parar o servidor com Ctrl+C)*

```bash
git add .
git commit -m "Escreva aqui o que você mudou (ex: Adicionei resumo de Busca Binária)"
git push
```

### 3. Publicar (Deploy)

Este é o comando que realmente atualiza o site caputidev.github.io. Sem isso, o site online não muda.

uso no Powershell

```bash
$env:GIT_USER="CaputiDev"; npm run deploy
```

### Estrutura de Pastas Importante

* /docs: Aqui ficam todos os resumos e anotações (arquivos .md).

* /src/pages: Contém a página inicial (index.js) e o CSS personalizado.

* /static/img: Onde ficam as imagens (logos, backgrounds, diagramas).

* docusaurus.config.js: Configurações globais do site (nome, links, navbar).

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. O site é construído usando Docusaurus (Meta Platforms, Inc).

> Sinta-se livre para dar um fork no meu projeto e criar seu próprio espaço. Só não esqueça de dar os créditos. 😉
