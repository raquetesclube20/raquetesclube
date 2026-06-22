# Raquetes Clube

Site institucional do Raquetes Clube, com landing page, paginas dedicadas por unidade e fluxo de contato/reserva via WhatsApp.

Projeto publicado em GitHub Pages no repositorio:

https://github.com/raquetesclube20/raquetesclube

## Visao Geral

O site apresenta o Raquetes Clube nas cidades de Americana e Nova Odessa, com foco em:

- unidades e enderecos oficiais;
- modalidades esportivas por unidade;
- professores, aulas e planos;
- reservas e locacoes direcionadas ao WhatsApp;
- torneios, rankings e competicoes via LetzPlay;
- feed visual do Instagram;
- chamadas diretas para WhatsApp.

## Rotas

- `/`: landing page principal.
- `/americana`: pagina dedicada da unidade Americana.
- `/nova-odessa`: pagina dedicada da unidade Nova Odessa.

As paginas dedicadas foram criadas para melhorar a experiencia por cidade e preparar o site para SEO local.

## Unidades

### Americana

- Endereco: Av. de Cillo, 4451 - Pq Novo Mundo, Americana - SP
- WhatsApp: (19) 98152-2647
- Modalidades: tenis, raquetinha, squash, beach tennis e quadra de areia
- Rota local: `/americana`

### Nova Odessa

- Endereco: Av. Cinco, 227 - Bosque dos Eucaliptos, Nova Odessa - SP
- WhatsApp: (19) 92012-7054
- Modalidades: tenis e raquetinha
- Rota local: `/nova-odessa`

## Principais Recursos

- Identidade visual alinhada a paleta da logo do Raquetes Clube.
- Header fixo com indicador de secao ativa e bolinha de tenis no item selecionado.
- Submenu de unidades no desktop e links dedicados no mobile.
- Hero com video, chamadas principais e acesso rapido a reservas pelo WhatsApp.
- Carrossel de unidades com videos primeiro e fotos depois.
- Videos de fundo nas paginas dedicadas das unidades.
- Cards de professores com modal visual, foto solta e conteudo responsivo.
- Titulos comerciais de professores: Head Coach e Senior Coach.
- Planos de aula sem valores publicados, com atendimento consultivo pelo WhatsApp.
- Modal mobile dos professores com botao de fechar sempre visivel.
- Feed visual do Instagram com hover exibindo legenda, curtidas e comentarios.
- Botao flutuante de WhatsApp com selecao de unidade e fechamento ao clicar fora.
- Botao flutuante do Instagram.
- Area de torneios com link para LetzPlay e banner editavel do proximo torneio.
- Enderecos clicaveis apontando para Google Maps.
- Icones das modalidades carregados de `assets/icons`.
- Horario de funcionamento: seg a sex das 05h30 as 22h; sab e domingo das 06h as 18h.
- Remocao de referencias a prototipo/versao "2.0".
- Ajustes para evitar scroll horizontal na landing page.

## Assets Importantes

Principais pastas de midia:

- `assets/americana`: fotos da unidade Americana.
- `assets/americana/vids`: videos da unidade Americana.
- `assets/nova-odessa`: fotos da unidade Nova Odessa.
- `assets/nova-odessa/vids`: videos da unidade Nova Odessa.
- `assets/instagram`: imagens usadas no bloco do Instagram.
- `assets/animations`: modelos 3D adicionados para testes futuros. Eles nao estao ativos no site neste momento.
- `public/torneios/proximo-torneio.png`: banner editavel do proximo torneio exibido na secao Torneios & Rankings.

O banner tambem pode ser gerenciado pelo painel Sanity. Quando houver um torneio ativo e publicado no painel, seus dados substituem o arquivo local automaticamente. Se o painel estiver vazio ou indisponivel, o site mantem `public/torneios/proximo-torneio.png` como fallback.

Painel administrativo:

- Projeto: `Raquetes Clube`
- Project ID: `7eqc9tfi`
- Dataset: `production`
- URL: `https://raquetes-clube.sanity.studio/`
- Codigo do painel: `studio/`
- Campos: exibicao, titulo, banner, descricao, data, link, texto do botao e expiracao automatica.

Banner de torneio recomendado:

- Arquivo: `public/torneios/proximo-torneio.png`
- Dimensao: `1200 x 420 px`
- Orientacao: substituir mantendo o mesmo nome e formato para nao alterar o codigo.

Observacao: alguns videos, principalmente da unidade Americana, sao grandes. Antes de uma publicacao mais madura em producao, recomenda-se comprimir os arquivos para melhorar carregamento em celulares.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- Motion
- Lucide React

## Comandos

Instalar dependencias:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

Servidor local padrao:

```text
http://localhost:3000
```

Validar TypeScript:

```bash
npm run lint
```

Gerar build de producao:

```bash
npm run build
```

## Deploy

O deploy e feito pelo GitHub Pages a partir do repositorio `raquetesclube20/raquetesclube`.

Fluxo recomendado:

1. Rodar `npm run lint`.
2. Rodar `npm run build`.
3. Fazer commit na branch `main`.
4. Fazer push para `origin/main`.
5. Aguardar o GitHub Pages/GitHub Actions publicar a nova versao.

## Manutencao

Ao alterar midias:

- preferir nomes de arquivo sem caracteres especiais;
- comprimir videos antes de subir;
- revisar se os imports continuam apontando para os arquivos corretos;
- validar desktop e mobile antes do deploy.

Ao alterar dados das unidades:

- revisar textos da home;
- revisar paginas `/americana` e `/nova-odessa`;
- revisar links de WhatsApp;
- revisar links de rota no Google Maps.
