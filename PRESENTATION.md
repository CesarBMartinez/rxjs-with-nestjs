# RxJS with NestJS

### Links Úteis

- [Learn RxJS by Examples](https://www.learnrxjs.io/)
- [RxJS API](https://rxjs-dev.firebaseapp.com/api)
- [List of Operators by Category](https://www.learnrxjs.io/learn-rxjs/operators)
- [Complete List of Operators](https://www.learnrxjs.io/learn-rxjs/operators/complete)

### Operators

**Há dois tipos de Operadores:**

1. Pipeable Operators

Um operador Pipeable é uma função que recebe uma Observable e retorna uma outra Observable.
É uma função pura, ou seja, a Observable anterior não é modificada.

Ex: map, tap, flatMap, filter, reduce, scan, delay, switchMap

2. Creation Operators

Funções standalones(independentes) usadas para criar uma nova Observable com algum comportamento pré-definido ou juntando outras Observables.

Ex: of, from, fromEvent, interval, forkJoin

### Pipe

Pipeable Operators são funções, então podem ser usadas como funções comuns:

```js
op4()(op3()(op2()(op1()(obs))));
```

Mas isso acaba se tornando ilegível, por isso as Observables tem um método chamado `pipe`, que faz a mesma coisa mas sendo muito mais fácil de ler.

<!-- prettier-ignore -->
```js
obs.pipe(
  op1(), 
  op2(), 
  op3(), 
  op4()
);
```

E esse é o padrão mesmo quando temos apenas um operador.

```js
obs.pipe(op1());
```
