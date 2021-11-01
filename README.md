# API de Calculadora

O projeto consiste em um serviço de calculadora com as quatro operações básicas.

## Dependências

Para executar o projeto, é necessário ter instalado em sua máquina o [NodeJS](https://nodejs.org/pt-br/).

Também erá necessário instalar as dependências com o seguinte comando:

```
$ npm install
```

## EndPoints

- sum
- subtract
- multiply
- divide

Cada endpoint possui as seguintes propriedades:

```
request: {
    body: {
        params: number[]
    }
}

response: number
```

# Iniciando servidor

Para iniciar o servidor é necessário rodar o seguinte comando:

```
$ npm run dev
```

O servidor será iniciado em http://localhost:4000.

É possível alterar a porta do servidor no arquivo .env
