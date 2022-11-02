
//crt e control
const tipoBt = document.getElementById('versao');
const nomeh1 = document.getElementById('nome');
const Ps = document.getElementById('Ps');
const avatar = document.getElementById('avatar');
const poderP = document.getElementById('poder');
const poderH1 = document.getElementById('power');
const fraquezaP = document.getElementById('fraqueza');
const fraquezaH2 = document.getElementById('weakness');
const logo = document.getElementById('logo')
//menu
const Bt1 = document.getElementById('b1');
const Bt2 = document.getElementById('b2');
const Bt3 = document.getElementById('b3');
const Bt4 = document.getElementById('b4');
const Bt5 = document.getElementById('b5');
//logica
const textoA= ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam illum aspernatur?';

Bt1.addEventListener('click',() => {
    
    avatar.src = "img/jose.png";
    logo.style.display ="none";
    nomeh1.innerText='jose';
    poderP.innerText='fazer merda' + textoA;
    fraquezaP.innerText='alcool '+ textoA;
    Ps.innerText='Ps 12';
    tipoBt.innerText='basico';
    poderH1.innerText='Poder :';
    fraquezaH2.innerText='Fraqueza :';
})
Bt2.addEventListener('click',() => {
   
    avatar.src = "img/ines brasil.png";
    logo.style.display ="none";
    nomeh1.innerText='ines brasil';
    poderP.innerText='lacrar' + textoA;
    fraquezaP.innerText='falar de mais' + textoA;
    Ps.innerText='Ps 20';
    tipoBt.innerText='não basico';
    poderH1.innerText='Poder :';
    fraquezaH2.innerText='Fraqueza :';
})
Bt3.addEventListener('click',() => {
   
    avatar.src = "img/pericles.png";
    logo.style.display ="none";
    nomeh1.innerText='pericles';
    poderP.innerText='fazer chorar' + textoA;
    fraquezaP.innerText='Melancolia' + textoA;
    Ps.innerText='Ps 245';
    tipoBt.innerText='não basico';
    poderH1.innerText='Poder :';
    fraquezaH2.innerText='Fraqueza :';
})
Bt4.addEventListener('click',() => {
    
    avatar.src = "img/regina case.png";
    logo.style.display ="none";
    nomeh1.innerText='regina case';
    poderP.innerText='ixxquenta' + textoA;
    fraquezaP.innerText='lugares com arcondicionado ' + textoA;
    Ps.innerText='Ps 23';
    tipoBt.innerText='basico';
    poderH1.innerText='Poder :';
    fraquezaH2.innerText='Fraqueza :';

})
Bt5.addEventListener('click',() => {
    
    avatar.src = "img/susana vieria.png";
    logo.style.display ="none";
    nomeh1.innerText='susana vieria';
    poderP.innerText='força' + textoA;
    fraquezaP.innerText='quebrar tudo'+ textoA ;
    Ps.innerText='Ps 50';
    tipoBt.innerText='basico';
    poderH1.innerText='Poder :';
    fraquezaH2.innerText='Fraqueza :';
})





