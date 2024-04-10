/*
* File: app.js
* Author: Berta Péter
* Copyright: 2024, Berta Péter
* Group: Szoft 1/2/N
* Date: 2024-04-10
* Github: https://github.com/bp-ter/
* Licenc: GNU GPL
*/

const InputSugar = document.getElementById("sugar")
const InputMagassag = document.getElementById("magassag")
const InputButton = document.getElementById("countButton")
const InputEredmeny = document.getElementById("eredmeny")


InputButton.addEventListener('click', () =>{
    let r = InputSugar.value
    let h = InputMagassag.value
    var result = 2*Math.PI*Math.pow(r,2)+ 2*Math.PI*r*h
    console.log(result)
    InputEredmeny.textContent = result + " cm²"
    InputSugar.value = ''
    InputMagassag.value = ''
})
