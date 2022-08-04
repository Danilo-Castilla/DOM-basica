/*const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')*/

/*console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = 'Patito <br> Feo'
//h1.innerText = ''
console.log(h1.getAttribute('class'))
h1.setAttribute('class','rojo')
console.log(h1.getAttribute('class'))
h1.classList.add('amarillo')
h1.classList.remove('rojo')

input.value = '456'

const img = document.createElement('img')
img.setAttribute('src','https://cdn.pixabay.com/photo/2022/07/26/19/09/spotted-owlet-7346555_960_720.jpg')
console.log(img)

pid.append(img)*/

const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btncalcular')
const pResult = document.querySelector('#result')
let suma;

form.addEventListener('submit', sumarInputVarios)
pResult.addEventListener('mouseover', mouseOverUp)
pResult.addEventListener('mouseout', mouseOverDown)

function sumarInputVarios(event){
    console.log({event})
    event.preventDefault();
    suma = (parseInt(input1.value)) + (parseInt(input2.value));
    pResult.innerHTML = suma;
    
}

function mouseOverUp(){
    pResult.innerHTML='Resultado Correcto';
}

function mouseOverDown(){
    pResult.innerHTML=suma;
}