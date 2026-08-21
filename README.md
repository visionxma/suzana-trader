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

## Assets

`assets/` fica na raiz e é compartilhada pelas duas páginas:

- `assets/provas/prova-0*.jpg` — 6 prints de conversa que alimentam o carrossel
- `assets/perfil.jpg` — avatar do bloco de perfil

As páginas referenciam por `../assets/...`, então a pasta precisa continuar na raiz do site.

## Rastreamento

Meta Pixel `4478623159061468`, com `PageView` no load e `Purchase` no clique dos CTAs.
Os dois canais disparam o mesmo evento, então a atribuição por canal não fica separada
no Gerenciador de Anúncios.
