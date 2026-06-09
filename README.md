# João Victor A. Abreu - Portfolio

Portfólio profissional de João Victor Alves de Abreu, estudante de Ciência da Computação na FIAP com foco em backend, FastAPI, Java e machine learning aplicado.

## Stack principal

Python · FastAPI · Java · React · TypeScript · scikit-learn

## Como rodar localmente

```bash
npm install
npm run dev
```

## Variáveis opcionais

Use `.env.example` como base para um arquivo `.env` quando quiser customizar:

- `VITE_SITE_URL`: URL pública usada em SEO e links canônicos. No Vercel, o projeto já tenta inferir essa URL automaticamente a partir do domínio do deploy.
- `VITE_BASE_PATH`: base path do projeto. Em Vercel, o padrão deve ser `/`.
- `VITE_FORMSPREE_ENDPOINT`: endpoint do Formspree para ativar o formulário sem backend.

## Deploy na Vercel

O projeto já está preparado para Vercel com:

- build padrão em `npm run build`
- SPA rewrite em [vercel.json](C:/Users/jv921/OneDrive/Área%20de%20Trabalho/site-portifolio/vercel.json)
- compatibilidade com `BrowserRouter`
- fallback automático de URL pública para SEO

Configuração recomendada no painel da Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Se usar formulário com envio direto:

- adicione `VITE_FORMSPREE_ENDPOINT` nas Environment Variables do projeto

Se quiser forçar a canonical para um domínio customizado:

- adicione `VITE_SITE_URL=https://seu-dominio.com`

## Projetos em destaque

- Motiva ORION - https://github.com/JoaoVictorAAbreu-Dev/Projeto-Motiva_Orion
- ClimateMind AI - https://github.com/JoaoVictorAAbreu-Dev/-PROJETO-ClimateMind-AI
- Bot_NBA - https://github.com/JoaoVictorAAbreu-Dev/Bot_NBA
- AetherOS - https://github.com/JoaoVictorAAbreu-Dev/Projeto_AetherOS

## Build

```bash
npm run build
```
