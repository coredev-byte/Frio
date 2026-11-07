# TCLIMA Engenharia Térmica — Site

Landing page da TCLIMA (instalação, higienização e manutenção de ar-condicionado).

**Stack:** Vite + React 19 + Tailwind CSS 3 + Framer Motion + Lucide Icons.

- Botão flutuante do WhatsApp com mensagem automática (`src/config.js`)
- Cada serviço abre o WhatsApp com uma mensagem específica
- SEO: meta tags, Open Graph, dados estruturados (Schema.org `HVACBusiness`), `robots.txt`

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # gera /dist (deploy na Vercel)
```

Para trocar o número ou a mensagem padrão, edite `src/config.js`.

## Proposta comercial

`proposta/Proposta-Site-TCLIMA.pdf` — gerada a partir de `proposta/proposta.html`
(Chromium/Playwright, A4). Para regenerar após editar o HTML, imprima em PDF com fundo ativado.
