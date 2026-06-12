# Raquetes Clube

Site institucional do Raquetes Clube, com landing page, paginas dedicadas por unidade e fluxo de contato/reserva via WhatsApp.

Projeto publicado em GitHub Pages no repositorio:

https://github.com/raquetesclube20/raquetesclube

## Visao Geral

O site apresenta o Raquetes Clube nas cidades de Americana e Nova Odessa, com foco em:

- unidades e enderecos oficiais;
- modalidades esportivas por unidade;
- professores, aulas e planos;
- agenda e reserva de quadras;
- rankings e torneios;
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
- Hero com video, chamadas principais e acesso rapido a agenda.
- Carrossel de unidades com videos primeiro e fotos depois.
- Videos de fundo nas paginas dedicadas das unidades.
- Cards de professores com modal visual, foto solta e conteudo responsivo.
- Modal mobile dos professores com botao de fechar sempre visivel.
- Feed visual do Instagram com hover exibindo legenda, curtidas e comentarios.
- Botao flutuante de WhatsApp com selecao de unidade e fechamento ao clicar fora.
- Botao flutuante do Instagram.
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
