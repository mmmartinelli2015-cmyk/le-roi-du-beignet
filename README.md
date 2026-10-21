# Le Roi du Beignet · site institucional (França)

Site estático em francês, sem dependências: HTML, CSS e JS puros. Funciona direto no **GitHub Pages**.

## Estrutura

```
index.html             página principal (todas as seções)
merci.html             página de agradecimento após o envio do formulário
mentions-legales.html  mentions légales + política de privacidade (obrigatórias na França)
css/style.css          estilos (cores e fontes nas variáveis do topo)
js/main.js             menu mobile, pré-seleção do formulário, ano do rodapé
img/                   logo, favicon e fotos recortadas da embalagem
```

## Seções da página principal

1. Héros escuro com a embalagem da coxinha
2. Notre histoire (fundo com desenhos dos salgados)
3. Nos salgados: 10 produtos com ilustração. O botão "Voir le sachet" abre a embalagem de cada um (`img/emballages/`)
4. Faixa animada "Croustillant · Doré · Brésilien · Royal"
5. Professionnels: congelados para indústria/distribuição e **já fritos** para eventos
6. Fiche produit da coxinha (abre e fecha)
7. Formulário de orçamento (FormSubmit)

## O que falta preencher (busque por "à compléter")

- [ ] E-mail, telefone/WhatsApp e endereço (rodapé do `index.html`)
- [ ] Em `index.html`, trocar `VOTRE-EMAIL` no `action` do formulário pelo e-mail que vai receber os pedidos. No primeiro envio, o FormSubmit manda um e-mail de confirmação: é só clicar uma vez.
- [ ] `mentions-legales.html`: razão social, SIRET, RCS, TVA, endereço, responsável pela publicação
- [ ] Confirmar com o cliente se os 10 salgados entram na linha de produção
- [ ] Confirmar o modo de preparo da esfiha e do enroladinho (aparecem como "Cuisson à confirmer")
- [ ] Fichas técnicas (ingredientes, alergênicos, valores nutricionais) dos outros 9 produtos
- [ ] Fotos reais: hoje os cards usam ilustrações (`img/salgados/*.svg`) e as embalagens são as versões vetoriais (`img/emballages/*.jpg`). Para trocar, salve o arquivo novo com o mesmo nome.

## Publicar no GitHub Pages

1. Crie o repositório e envie todos os arquivos desta pasta para a raiz.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. Para usar domínio próprio (ex.: `.fr`), adicione o domínio em **Settings → Pages → Custom domain** e aponte o DNS.

## Observações

- Na França, alergênicos e valores nutricionais precisam aparecer para produtos alimentícios. Os da coxinha estão no site. Os dos outros produtos devem ser adicionados antes de vender esses itens pelo site.
- O site não usa cookies de rastreamento. Se adicionar Google Analytics ou Meta Pixel, será preciso um banner de cookies (RGPD) e atualizar a política de privacidade.
