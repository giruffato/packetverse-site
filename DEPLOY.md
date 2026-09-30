# PUBLICAÇÃO — PACKETVERSE

## O que já está pronto
- Home responsiva
- Página CCNA
- Página ENCOR
- Página ENARSI
- Página Sobre
- Página de links para bio do Instagram
- SEO básico: title, description, canonical, Open Graph, robots.txt e sitemap.xml
- CNAME com packetverse.com.br
- Favicon e logo SVG
- Site sem framework e sem build: basta publicar os arquivos

## Antes de publicar
Abra `config.js` e substitua:
1. `instagramLabel`
2. `instagramUrl`
3. `ccnaCheckout`
4. `supportUrl`

Não coloque senhas, tokens, CPF, chaves ou segredos no código.

## Publicar no GitHub Pages
1. Crie um repositório público, por exemplo `packetverse-site`.
2. Envie o CONTEÚDO desta pasta para a raiz do repositório.
3. Abra Settings > Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Selecione `main` e `/ (root)`.
6. Em Custom domain, coloque `packetverse.com.br`.

## DNS no Registro.br
Para GitHub Pages, configure o domínio raiz com os registros A indicados pela documentação do GitHub no momento da publicação.
Configure também `www` como CNAME para `<seu-usuario>.github.io`.

Atenção: confirme os valores na documentação oficial antes de salvar DNS, pois infraestrutura pode mudar.

## HTTPS
Depois que o domínio resolver corretamente, ative `Enforce HTTPS` no GitHub Pages.

## Link para Instagram
Depois do domínio funcionar, use na bio:
https://packetverse.com.br/links.html

Se quiser uma URL mais bonita (`/links`), é possível converter essa página para uma pasta `links/index.html`.
