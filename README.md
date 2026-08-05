# O caminho até a última porta

Projeto responsivo em **React + Vite + CSS**, usando JSX automático sem plugins adicionais para um jogo romântico com cinco perguntas em sequência.

## Funcionalidades

- capa com explicação da brincadeira;
- cinco perguntas;
- tentativa novamente em caso de erro;
- liberação da instrução física após o acerto;
- texto emocional revelado em cada etapa;
- cenário panorâmico que avança de página em página;
- progresso em formato de caminho;
- persistência do progresso no navegador;
- gesto de deslizar para a direita para voltar;
- tecla `Esc` para reiniciar;
- responsividade para celular, tablet e computador;
- suporte a `prefers-reduced-motion`.

## Como executar

É necessário ter o Node.js 18 ou superior instalado.

```bash
npm install
npm run dev
```

Acesse o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

## Gerar versão de produção

```bash
npm run build
```

A pasta gerada será `dist`.

## Onde alterar perguntas e textos

Edite apenas:

```text
src/data/gameData.js
```

Esse arquivo contém:

- perguntas;
- alternativas;
- ID da alternativa correta;
- instrução física;
- texto revelado;
- posição da imagem de fundo;
- alinhamento do cartão.

## Imagem panorâmica

O arquivo usado no fundo é:

```text
public/caminho-romantico.png
```

Para trocar a imagem, mantenha o mesmo nome ou altere a URL em:

```text
src/styles.css
```

Procure por:

```css
background-image: url("/caminho-romantico.png");
```

## Ajustar a transparência

Em `src/styles.css`, procure por `.journey-background`.

```css
opacity: 0.56;
```

Valores menores deixam a imagem mais transparente.

## Ajustar o trecho mostrado em cada etapa

Em `src/data/gameData.js`, altere:

```js
backgroundPosition: 43,
```

Use valores entre `0` e `100`.

## Publicação

A configuração `base: "./"` no `vite.config.js` permite hospedar a pasta `dist` em:

- GitHub Pages;
- Netlify;
- Vercel;
- hospedagem comum;
- domínio próprio.

## Estrutura

```text
caminho-do-amor-react/
├── public/
│   └── caminho-romantico.png
├── src/
│   ├── components/
│   │   ├── CompletionScreen.jsx
│   │   ├── CoverScreen.jsx
│   │   ├── ProgressPath.jsx
│   │   └── QuestionScreen.jsx
│   ├── data/
│   │   └── gameData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
