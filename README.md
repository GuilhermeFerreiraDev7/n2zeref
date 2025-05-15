
# Calculadora de IMC - React Native
![Screenshot_33](https://github.com/user-attachments/assets/268205b5-501f-4153-bcf2-4634738a2e59)


Este é um aplicativo simples desenvolvido em React Native que calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário. Além de mostrar o valor calculado, o app também exibe a classificação do IMC com cores e ícones que facilitam a visualização.

---

## Funcionalidades

- Entrada de peso (em kg) e altura (em metros) com suporte a vírgula e ponto decimal.
- Cálculo do IMC exibido com uma casa decimal.
- Exibição da classificação do IMC (ex: Peso normal, Sobrepeso, Obesidade I, etc.) com cores distintas.
- Botão para calcular o IMC.
- Botão para limpar os campos e resultado.
- Tabela explicativa com as faixas de IMC, classificações e ícones ilustrativos.

---

## Explicação das Funções Principais

- **calcularIMC()**: Converte as strings de peso e altura para números, trata entradas inválidas e calcula o IMC usando a fórmula: IMC = peso / (altura * altura). O resultado é formatado com uma casa decimal e armazenado no estado `resultado`.

- **limpar()**: Reseta os estados `peso`, `altura` e `resultado` para seus valores iniciais, limpando os inputs e a exibição do resultado.

- **getClassificacao(imc)**: Recebe um valor de IMC e retorna um objeto com o texto da classificação e a cor associada. Essa função ajuda a definir a cor e o texto que serão mostrados para o usuário.

---

## Tecnologias Utilizadas

- React Native
- React Hooks (`useState`)
- react-native-vector-icons (MaterialCommunityIcons) para ícones

---

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/GuilhermeFerreiraDev7/n2zeref.git
cd n2zeref
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Instale o pacote de ícones:

```bash
npm start
```

4. Caso use React Native CLI, link o pacote de ícones:

```bash
npx react-native link react-native-vector-icons
```

5. Execute o app:

```bash
npx react-native run-android
# ou
npx react-native run-ios
```

---

## Estrutura do Código

- **App.js**: Contém toda a lógica, estados e UI do aplicativo.
- Uso de `SafeAreaView` para compatibilidade com dispositivos iOS e Android.
- `ScrollView` para permitir rolagem em dispositivos com telas menores.
- Inputs controlados para peso e altura.
- Botões para acionar as funções de cálculo e limpeza.
- Visualização do resultado e tabela de classificação com ícones e cores.

---



