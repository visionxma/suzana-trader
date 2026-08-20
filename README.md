# SUZANA TRADER — Landing pages

Duas landing pages do Indicador Fluxo de Tendências, uma por canal de captação.

| Rota | CTA único |
|---|---|
| `/whatsapp/` | grupo do WhatsApp |
| `/telegram/` | grupo do Telegram |

Cada pasta é uma página estática autossuficiente (`index.html` + `hero.jpg`), sem build.

## Rodar localmente

```bash
python3 -m http.server 8000
# http://localhost:8000/whatsapp/
# http://localhost:8000/telegram/
```

## Pendência

As páginas referenciam 13 arquivos em `../assets/` (11 vídeos de prova social e a foto do
bloco de perfil). Essa pasta ainda não está no repositório — enquanto não estiver na raiz do
site, o carrossel de provas sociais e o avatar do perfil ficam quebrados.

## Rastreamento

Meta Pixel `4478623159061468`, com `PageView` no load e `Purchase` no clique dos CTAs.
Os dois canais disparam o mesmo evento, então a atribuição por canal não fica separada
no Gerenciador de Anúncios.
