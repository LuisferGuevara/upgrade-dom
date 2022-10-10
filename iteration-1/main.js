// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showme$$ = document.querySelector('.showme');
console.log(showme$$)


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const IdPillado$$ = document.querySelector('#pillado');

console.log(IdPillado$$);

// 1.3 Usa querySelector para mostrar por consola todos los p
const showAllP$$ = document.querySelectorAll('p');
console.log(showAllP$$);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const  showAllClassPokemon$$ = document.querySelectorAll('.pokemon');

console.log(showAllClassPokemon$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
const showAllFunctions$$ = document.querySelectorAll('[data-function="testMe"]');

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(showAllFunctions$$[3])

