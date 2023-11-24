
# Sobre o Hackathon

# Tema
Aprendizagem da Educação Básica Com Ajuda Da Tecnologia.

# Introdução
# Jogos Educacionais e Desenvolvimento Intelectual: O Papel da Tecnologia e do JavaScript

Nos dias de hoje, a interseção entre tecnologia e educação desempenha um papel vital na formação e desenvolvimento intelectual de indivíduos. Entre as diversas formas de utilização da tecnologia para aprimorar o aprendizado, os jogos educacionais destacam-se como ferramentas poderosas e envolventes. Ao incorporar conceitos de educação e entretenimento, os jogos educacionais oferecem uma abordagem inovadora e cativante para fortalecer habilidades cognitivas e promover o conhecimento.

O JavaScript, como uma das linguagens de programação mais amplamente utilizadas na web, desempenha um papel significativo na criação de jogos educacionais interativos e acessíveis. A capacidade de desenvolver experiências educativas dinâmicas e envolventes na interface do navegador permite uma distribuição ampla e acessível.

Neste contexto, explorarei como a tecnologia, particularmente através do uso de JavaScript, se tornou um catalisador essencial no desenvolvimento intelectual. Analisarei como os jogos educacionais, impulsionados por esta linguagem de programação, estão moldando o cenário educacional contemporâneo e proporcionando experiências de aprendizado estimulantes e eficazes para pessoas de todas as idades.

O sistema contém duas API's, uma da Wikipédia e outra do Youtube onde é possível pesquisar qualquer tema de interesse, além de ter uma aba de lista de tarefas visando controlar o fluxo de estudo do indivíduo. Na aba 'Aprenda Brincando' há o jogo da velha onde o jogador precisa calcular o valor da equação escolhida para realizar a jogada, além de outros jogos.

Para rodar o projeto, basta seguir os passos seguites.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

