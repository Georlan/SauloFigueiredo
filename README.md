# Saulo Figueiredo — Landing Page

Landing page responsiva para a mentoria de Saulo Figueiredo, com direção editorial baseada nos assets reais da marca e foco em audiovisual, narrativa e posicionamento.

## Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Rodar localmente

```bash
npm install
npm run dev
```

Para validar produção:

```bash
npm run lint
npm run build
npm run preview
```

## Estrutura

- `src/App.jsx`: composição principal
- `src/sections/`: hero, abordagem, mentoria, sobre, FAQ e CTA final
- `src/components/`: navegação responsiva, marca real, CTAs e rodapé
- `public/brand/`: fotografia otimizada e símbolo oficial fornecidos pelo cliente
- `src/styles/`: sistema visual, seções e responsividade

## CTA

O CTA principal abre o WhatsApp do Saulo com mensagem pré-preenchida, conforme o briefing do projeto.
