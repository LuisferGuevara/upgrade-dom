// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div$$ = document.body.appendChild(document.createElement('div'));
console.log(div$$);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div1$$ = document.createElement('div');
const p$$ = document.createElement('p');
div1$$.appendChild(p$$);
document.body.appendChild(div1$$);

// document.body.appendChild(document.createElement("div")).appendChild(document.createElement("p"))


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement('div');

for (let i = 0; i < 6; i++) {
    let sixPElements = document.createElement('p');   
    div3$$.appendChild(sixPElements)
}
document.body.appendChild(div3$$)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p2$$ = document.createElement('p');
p2$$.textContent = 'Soy dinámico';
document.body.appendChild(p2$$)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2$$ = document.querySelector('.fn-insert-here');

h2$$.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const socialList$$ = document.createElement('ul');
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let i = 0; i < apps.length; i++) {
    console.log(apps[i])
    let liElements = document.createElement('li');
    liElements.textContent = apps[i];
    socialList$$.appendChild(liElements)
}

document.body.appendChild(socialList$$);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const allClassToRemove = document.querySelectorAll('.fn-remove-me')
console.log(allClassToRemove);
for (const element of allClassToRemove){
    element.remove()
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const p3$$ = document.createElement('p');
p3$$.textContent = 'Voy en medio!';
const divs$$ = document.querySelectorAll('div');
console.log(divs$$)
document.body.insertBefore(p3$$,divs$$[3]);
// Con el insertBefore añado en la p antes que la posicion 1 de mi array, es decir, al medio.


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const findAllDivsWithClass$$ = document.querySelectorAll('.fn-insert-here');

console.log(findAllDivsWithClass$$);
for (let i = 1; i < findAllDivsWithClass$$.length; i++) {
    let p4$$ = document.createElement('p');
    p4$$.textContent = 'Voy dentro!';
    findAllDivsWithClass$$[i].appendChild(p4$$)
}
