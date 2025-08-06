# EBAC Jobs - Exercício CSS in JS com Styled Components

Este projeto foi desenvolvido como parte do exercício da EBAC para conversão de estilos CSS tradicionais para CSS-in-JS usando **Styled Components**.

## 🎯 Objetivo do Exercício

Converter a estilização do projeto original que utilizava CSS Modules para uma implementação moderna usando Styled Components, mantendo a mesma funcionalidade e aparência visual.

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Styled Components** para CSS-in-JS
- **Vite** como bundler
- **React Query** para gerenciamento de estado
- **React Router** para navegação

## 🎨 Design System

O projeto utiliza um design system baseado nas cores originais:

- **Cor Principal**: `#a7727d` (HSL: 348 21% 55%)
- **Cor Secundária**: `#f9f5e7` (HSL: 46 64% 96%)
- **Tipografia**: Lato (corpo) e Gloock (títulos)

### Tokens de Design

```css
:root {
  --primary: 348 21% 55%;
  --primary-foreground: 46 64% 96%;
  --secondary: 46 64% 96%;
  --secondary-foreground: 348 21% 55%;
  /* ... outros tokens */
}
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Cabecalho/          # Header do site
│   ├── Hero/               # Seção hero com imagem de fundo
│   ├── FormVagas/          # Formulário de pesquisa
│   └── Vaga/               # Card individual de vaga
├── containers/
│   └── ListaVagas/         # Container principal das vagas
├── styles/
│   └── GlobalStyle.ts      # Estilos globais com Styled Components
└── App.tsx                 # Componente principal
```

## 🔄 Conversão Realizada

### ✅ Componentes Convertidos:

1. **Cabeçalho** - Header responsivo com logo
2. **Hero** - Seção principal com imagem de fundo e overlay
3. **FormVagas** - Formulário de busca estilizado
4. **Vaga** - Cards de vagas com hover effects
5. **ListaVagas** - Grid responsivo de vagas

### 🎨 Melhorias Implementadas:

- **Hover Effects**: Transições suaves nos cards e botões
- **Responsividade**: Layout adaptativo para diferentes telas
- **Acessibilidade**: Focus states e aria-labels
- **Performance**: Componentes otimizados com Styled Components
- **Design Consistente**: Sistema de design centralizado

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

## 📱 Funcionalidades

- **Listagem de Vagas**: Exibe vagas em grid responsivo
- **Busca**: Pesquisa por título, nível, modalidade ou tecnologias
- **Filtros**: Resultados filtrados em tempo real
- **Responsividade**: Funciona em desktop, tablet e mobile

## 🎓 Conceitos Aplicados

### CSS-in-JS com Styled Components

- **Template Literals**: Uso de template strings para estilos
- **Props Styling**: Estilos condicionais baseados em props
- **Theming**: Sistema de temas centralizado
- **Global Styles**: Estilos globais com `createGlobalStyle`
- **Media Queries**: Responsividade com breakpoints

### Exemplo de Styled Component:

```typescript
const VagaContainer = styled.li`
  border: 1px solid hsl(var(--primary));
  background-color: hsl(var(--card));
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: hsl(var(--job-card-hover));
    color: hsl(var(--job-card-hover-foreground));
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`
```

## 🎯 Diferenças do Projeto Original

- ✅ **CSS Modules** → **Styled Components**
- ✅ **Arquivos .module.css** → **Componentes estilizados**
- ✅ **Classes CSS** → **Props e themes**
- ✅ **Estilos separados** → **Colocation de estilos**

## 📝 Próximos Passos

- [ ] Implementar tema escuro/claro
- [ ] Adicionar animações mais complexas
- [ ] Integrar com API real de vagas
- [ ] Adicionar testes unitários
- [ ] Implementar PWA

---

**Desenvolvido para EBAC** - Exercício de CSS-in-JS com Styled Components