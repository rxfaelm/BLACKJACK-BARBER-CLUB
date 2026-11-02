# BLACKJACK BARBER CLUB

Site demonstrativo para uma barbearia fictícia, feito com React, TypeScript, Vite e Tailwind CSS.

## Requisitos

- Node.js 20 ou mais recente
- npm

## Instalação e desenvolvimento

```bash
npm install
npm run dev
```

O Vite informa o endereço local no terminal.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos de produção são gerados em `dist/`.

## Contatos e personalização

Edite `src/config.ts` para atualizar dados e contatos. Os dois telefones de WhatsApp estão separados no mesmo arquivo:

- `barbershopWhatsApp`: número fictício da barbearia, com DDI e DDD e apenas dígitos.
- `portfolioWhatsApp`: placeholder `SEU_NUMERO_AQUI`; substitua pelo seu número antes de divulgar o site.

O agendamento monta o pedido no WhatsApp; a equipe ainda precisa confirmar disponibilidade e horário. Data e faixas de hora são demonstrativas, sem bloqueio ou reserva automática. Endereço, equipe, preços e depoimento também são fictícios.

## Publicação na Vercel

Importe o repositório na Vercel. O preset Vite usa `npm run build` como comando de build e `dist` como diretório de saída. Não há variáveis de ambiente obrigatórias. Atualize o endereço canônico de exemplo em `public/robots.txt` e `public/sitemap.xml` quando o domínio estiver definido.

## Skill de animação consultada

O projeto usa movimento breve na entrada, transições de hover, letreiro contínuo e respeita `prefers-reduced-motion`. A referência `emilkowalski/skills` foi consultada. Para instalar a skill no ambiente de desenvolvimento, use:

```bash
npx skills@latest add emilkowalski/skills
```

## 21st.dev

A galeria adapta o componente Spotlight da biblioteca 21st.dev: o realce acompanha o ponteiro sem dependência de animação adicional.
