# Funções Úteis para formatação BRASILEIRA

### Instalação

`yarn add br-validation`

#### ou

`npm install br-validation`

### Modo de uso

```ts
import {
  cpfFormatter,
  cnpjFormatter,
  cepFormatter,
  documentFormatter,
  phoneFormatter,
  cpfValidator,
  cnpjValidator,
  isCpfOrCnpj
} from 'br-validation'
```

## Descrição das funções

| Função            | Parâmetros    | Retorno                 |
| ----------------- | ------------- | ----------------------- |
| cpfFormatter      | value: string | string                  |
| cnpjFormatter     | value: string | string                  |
| cepFormatter      | value: string | string                  |
| documentFormatter | value: string | string ou null          |
| phoneFormatter    | value: string | string                  |
| cpfValidator      | value: string | boolean                 |
| cnpjValidator     | value: string | boolean                 |
| isCpfOrCnpj       | value: string | 'cpf' ou 'cnpj' ou null |
