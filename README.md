# 🎾 Raquetes Clube 2.0 | Esportes de Raquete & Areia

> Plataforma web premium para reserva de quadras, rankings ativos de atletas, agenda de treinamentos e comunidade esportiva boutique em Americana e Nova Odessa - SP.

---

## 🌟 Sobre o Projeto
O **Raquetes Clube** é o principal centro de esportes de raquete da região de Americana/SP. O aplicativo web 2.0 reflete o posicionamento premium e a experiência boutique do clube, entregando uma interface fluida, moderna e rica em micro-interações para os atletas ativos.

---

## 🚀 Principais Funcionalidades

### 1. 🧭 Navegação Premium Autocompensada
- **Menu Flutuante Translúcido**: Cabeçalho moderno com efeito de vidro (`backdrop-blur`) que acompanha a rolagem.
- **Dock Indicator**: Indicador ativo de seção que desliza como uma cápsula brilhante e colorida por trás do link selecionado usando transição física (`framer-motion`), se adaptando em tempo real conforme o usuário faz o scroll.
- **Responsividade Pura**: Gaveta mobile adaptada com bordas brilhantes neon e realces discretos para os botões de contato rápido.

### 2. 🌴 Carrossel de Unidades Integrado (AM & NO)
- **Localização Rápida**: Slide de transição física de alto nível para alternar entre a **Unidade 1 - Americana** (Sede Principal de Saibro, Squash e Raquetinha) e a **Unidade 2 - Nova Odessa** (Eco Arena de Beach Tennis e Areia).
- **Dados Oficiais e Contatos**: Acesso rápido a links do Google Maps (Rotas GPS) e canais do WhatsApp direto para a recepção de cada sede.
- **Mídia Integrada**: Carregamento assíncrono das imagens oficiais de cada uma das sedes.

### 3. 🥎 Esportes e Academia de Alto Rendimento
- **Grade de Modalidades**: Informações detalhadas sobre a estrutura de quadras disponíveis para Tênis de Saibro, Beach Tennis, Squash, Raquetinha e Vôlei de Areia.
- **Professores e Grade Técnica**: Conheça o currículo dos Diretores Técnicos Rogério Kawakami e Luciano Santos através de modais interativos e encontre o plano perfeito de evolução técnica (Iniciação ao Avançado).

### 4. 📅 Ligas, Rankings e Redes Sociais
- **Reserva de Quadras**: Integração de agenda online com simulação de horários disponíveis em tempo real.
- **Rankings Atualizados**: Tabelas de classificação das categorias masculinas, mistas e elite do clube.
- **Mural do Instagram**: Grade estilo Bento dos posts mais recentes e novidades das arenas.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema de desenvolvimento foi estruturado com as tecnologias mais recentes e de alta performance:

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/) (Compilação instantânea com HMR)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) (Sistema de temas CSS puro, sem necessidade de arquivos de configuração complexos)
- **Animações**: [Motion (Framer Motion v12)](https://motion.dev/) (Transições compartilhadas de layout e controle de carrossel)
- **Ícones**: [Lucide React](https://lucide.dev/) (Biblioteca otimizada com suporte a Tree Shaking)

---

## 💻 Como Executar Localmente

Siga o passo a passo abaixo para rodar o projeto na sua máquina:

### **Pré-requisitos:**
Instale o **Node.js** (versão 20 ou superior recomendado).

1. **Clonar e acessar o repositório:**
   ```bash
   git clone https://github.com/raquetesclube20/raquetesclube.git
   cd raquetesclube
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Rodar o ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O projeto iniciará localmente e estará disponível no endereço: `http://localhost:3000`*

4. **Executar validação de código (Linter):**
   ```bash
   npm run lint
   ```

---

## 📦 Build e Publicação (GitHub Pages)

O deploy do site está automatizado através do **GitHub Actions**. O arquivo de workflow `.github/workflows/deploy.yml` executa as seguintes tarefas a cada novo commit enviado para a branch `main`:
1. Instalação limpa de dependências com `npm ci`.
2. Compilação estática dos ativos de produção usando `npm run build`.
3. Deploy dos arquivos da pasta `./dist` diretamente para o GitHub Pages.

> 💡 **Nota Importante para Manutenção:** Se você mudar o nome do repositório no GitHub, lembre-se de atualizar a propriedade `base` dentro do arquivo `vite.config.ts` para refletir o novo subdiretório do repositório, garantindo que os caminhos dos arquivos CSS/JS sejam gerados corretamente.
