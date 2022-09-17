// const input = document.getElementsByClassName('.input__n');
const input = document.getElementById("input-ok");
const form = document.getElementsByClassName('.pedido__form');
const btn_pedido = document.getElementsByClassName('.boton__pedir');
const resultado = document.getElementsByClassName('.seccion__resultado');
const nombrePizza = document.getElementsByClassName('.nombre__pizza');
const precioPizza = document.getElementsByClassName('.nombre__pizza');

let pedido = [];


let NumIng = JSON.parse(localStorage.getItem('NumIng')) || [];

const saveLocalStorage = (e) => {
    localStorage.setItem ('NumIng', JSON.stringify(e)) 
};



const Pizzas=[
    {id:1, nombre:"Muzza", ingredientes: ['muza', 'salsa tomate'],  precio: 1000},
    {id:2, nombre:'Fugazzeta', ingredientes: ['muza', 'cebolla'], precio: 1200},
    {id:3, nombre:'Napolitana', ingredientes: ['muza', 'salsa tomate', 'tomates'], precio: 1400},
    {id:4, nombre:'Anchoas', ingredientes: ['salsa tomate', 'anchoas'], precio: 1100},
    {id:5, nombre:'Morrón', ingredientes: ['muza', 'salsa tomate', 'morrones'], precio: 1400},
    {id:6, nombre:'Palmitos', ingredientes: ['muza', 'salsa tomate', 'palmitos'], precio: 1400},
];





const quePrecio = Pizzas.forEach( (e) =>{
            if (Pizzas.id === NumIng) {
                return Pizzas.precio
            }
        })




const queNombre = Pizzas.forEach( (e) =>{
    Pizzas.id === NumIng? e.nombre : null;
    }
)

Pizzas.forEach( (e) =>{
    e.id == NumIng ? console.log (`La pizza número ${e.id} se llama ${e.nombre}`) : null;
    }
);

// const crearPedido = pedido =>
// `
// ${pedido.};
// ${Pizzas.nombre};
// ${Pizzas.precio};
// `;


// const crearPedido = () =>{
//     `
    
//     `
// }



// const renderPedido = () => {
//     nombrePizza.innerHTML = queNombre;
//     precioPizza.innerHTML = quePrecio;
// }

// const MensajeError = () => {
// small.innerHTML = 'Elija el número de una pizza'
// }
