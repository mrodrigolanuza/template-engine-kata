# Softwarecrafters - [Curso Diseño Sostenible](https://diseñosostenible.com)

![Diseño Sostenible](coverds.png)

## Kata Template Engine

>**NOTA:** Plantilla para construir la base inicial del proyecto [aquí](https://github.com/softwarecrafters-io/ts-eslint-prettier-jest).

Se trata de una kata que permite trabajar el diseño simple de software, aplicando heurísticas en la creación de funciones como:
- Una responsabilidad.
- Idealmente 0-3 parámetros. Agrupar en objetos.
- Minimizar uso de parámetros opcionales.
- No utilizar parámetros booleanos ya que probablemente denote varias responsabilidades. Usar dos funciones con nombre ajustados.
- Simplificación de la lógica condicional
	- Usar condiciones de guarda si procede.
	- Extraer funciones explicativas.
- Combinar estilo imperativo y declarativo

|  |  |  |  |  |
|-----------|-----------|-----------|-----------|-----------|
| **JavaScript**| filter() | map() | reduce() | flatMap() |
| **C#**        | Where() | Select() | Aggregate() | SelectMany() |


Objetivo, construir una clase que represente una plantilla, la cual puede incluir variables que deban ser sustituidas por las palabras clave-valor de un diccionario.
Determinar y controlar los casos límite y los posibles escenarios.

> - "Esta es un ejemplo de plantilla con un $variable".
> 
> - Diccionario {variable: "valor"}
> 
> "Esta es un ejemplo de plantilla con un **valor**".

---

* TypeScript
* Jest
* ESLint
* Prettier
* Husky

---
* `nvm use`
* `npm install`
* `npm test`

