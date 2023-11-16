let noppia1 = document.getElementById('noppia1');
let noppia2 = document.getElementById('noppia2');
let noppa1 = document.getElementById('noppa1');
let noppa2 = document.getElementById('noppa2');
let heita = document.getElementById('heita');
let talleta = document.getElementById('talleta');
let pelaaja1 = document.getElementById('pelaaja1');
let pelaaja2 = document.getElementById('pelaaja2');
let pelaaja3 = document.getElementById('pelaaja3');
let pelaaja4 = document.getElementById('pelaaja4');
let nimi1 = document.getElementById('nimi1');
let nimi2 = document.getElementById('nimi2');
let nimi3 = document.getElementById('nimi3');
let nimi4 = document.getElementById('nimi4');
let nimi1Label = document.getElementById('nimi1Label');
let nimi2Label = document.getElementById('nimi2Label');
let nimi3Label = document.getElementById('nimi3Label');
let nimi4Label = document.getElementById('nimi4Label');
let pisteetTxt1 = document.getElementById('pisteetTxt1');
let pisteetTxt2 = document.getElementById('pisteetTxt2');
let pisteetTxt3 = document.getElementById('pisteetTxt3');
let pisteetTxt4 = document.getElementById('pisteetTxt4');
let pisteet1 = document.getElementById('pisteet1');
let pisteet2 = document.getElementById('pisteet2');
let pisteet3 = document.getElementById('pisteet3');
let pisteet4 = document.getElementById('pisteet4');
let syotaTeksti = document.getElementById('syotaTeksti');
let tallentamattomatPisteetTxt = document.getElementById(
    'tallentamattomatPisteetTxt'
);
let tallentamattomatPisteet = document.getElementById(
    'tallentamattomatPisteet'
);
pisteet1.innerText = Number(pisteet1.innerText);
pisteet2.innerText = Number(pisteet2.innerText);
pisteet3.innerText = Number(pisteet3.innerText);
pisteet4.innerText = Number(pisteet4.innerText);
let vali = document.getElementById('vali');
let vasenYla = document.getElementsByClassName('vasenYla');
let vasenAla = document.getElementsByClassName('vasenAla');
let oikeaYla = document.getElementsByClassName('oikeaYla');
let oikeaAla = document.getElementsByClassName('oikeaAla');
let pelaaja1Mukana = false;
let pelaaja2Mukana = false;
let pelaaja3Mukana = false;
let pelaaja4Mukana = false;
let pelaaja1Vuoro = false;
let pelaaja2Vuoro = false;
let pelaaja3Vuoro = false;
let pelaaja4Vuoro = false;
noppia1.addEventListener('click', pelaa1Nopalla);
noppia2.addEventListener('click', pelaa2Nopalla);
function pelaa1Nopalla() {
    noppia1.style.cssText = 'display: none';
    noppia2.style.cssText = 'display: none';
    noppa2.style.cssText = 'display: none';
    heita.style.cssText = 'display: inline';
    talleta.style.cssText = 'display: inline';
    syotaTeksti.innerText =
        'Jos heität 1 menetät kaikki tallentamattomat pisteet';
    vaihdaNimet();
    kaynnistaPeli();
    
}
function pelaa2Nopalla() {
    noppia1.style.cssText = 'display: none';
    noppia2.style.cssText = 'display: none';
    heita.style.cssText = 'display: inline';
    talleta.style.cssText = 'display: inline';
    syotaTeksti.innerText =
        'Jos heität 1 menetät kaikki tallentamattomat pisteet, jos heität tuplat saat pisteet tuplana';
    vaihdaNimet();
    kaynnistaPeli();
}
function kaynnistaPeli(){
    if (pelaaja1Vuoro){
        if (pelaaja2Mukana){
            pelaaja2.style.cssText = 'opacity: 50%'
            pisteetTxt2.style.cssText = 'display: inline'
            pisteetTxt2.style.cssText = 'opacity: 50%'
            pisteet2.style.cssText = 'opacity: 50% display: block'
        }
        if (pelaaja3Mukana){
            pelaaja3.style.cssText = 'opacity: 50%'
            pisteetTxt3.style.cssText = 'opacity: 50%'
            pisteet3.style.cssText = 'opacity: 50%'
        }if (pelaaja4Mukana){
            pelaaja4.style.cssText = 'opacity: 50%'
            pisteetTxt4.style.cssText = 'opacity: 50%'
            pisteet4.style.cssText = 'opacity: 50%'
        }
        console.log(pelaaja1Vuoro)
        console.log(pelaaja2Vuoro)
        console.log(pelaaja3Vuoro)
        console.log(pelaaja4Vuoro)
    }
}
function vaihdaNimet() {
    console.log(document.getElementById('nimi1').value);
    if (nimi1.value != '') {
        pelaaja1.innerText = nimi1.value;
        nimi1.style.cssText = 'display: none';
        nimi1Label.style.cssText = 'display: none';
        pisteetTxt1.style.cssText = 'display: inline';
        pisteet1.style.cssText = 'display: block';
        vali.style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja1Mukana = true;
        pelaaja1Vuoro = true;
    } else if (nimi1.value == '') {
        pelaaja1.style.cssText = 'visibility: hidden';
        nimi1.style.cssText = 'display: none';
        nimi1Label.style.cssText = 'display: none';

    }
    if (nimi2.value != '') {
        pelaaja2.innerText = nimi2.value;
        nimi2.style.cssText = 'display: none';
        nimi2Label.style.cssText = 'display: none';
        pisteetTxt2.style.cssText = 'display: inline';
        pisteet2.style.cssText = 'display: block';
        vali.style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja2Mukana = true;
        if (pelaaja1Mukana == false){
            pelaaja2Vuoro = true
        }
    } else if (nimi2.value == '') {
        pelaaja2.style.cssText = 'visibility: hidden';
        nimi2.style.cssText = 'display: none';
        nimi2Label.style.cssText = 'display: none';
    }
    if (nimi3.value != '') {
        pelaaja3.innerText = nimi3.value;
        nimi3.style.cssText = 'display: none';
        nimi3Label.style.cssText = 'display: none';
        pisteetTxt3.style.cssText = 'display: inline';
        pisteet3.style.cssText = 'display: block';
        vali.style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja3Mukana = true;
        if (pelaaja1Mukana == false && pelaaja2Mukana == false){
            pelaaja3Vuoro = true
        }
    } else if (nimi3.value == '') {
        pelaaja3.style.cssText = 'visibility: hidden';
        nimi3.style.cssText = 'display: none';
        nimi3Label.style.cssText = 'display: none';
    }
    if (nimi4.value != '') {
        pelaaja4.innerText = nimi4.value;
        nimi4.style.cssText = 'display: none';
        nimi4Label.style.cssText = 'display: none';
        pisteetTxt4.style.cssText = 'display: inline';
        pisteet4.style.cssText = 'display: block';
        vali.style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja4Mukana = true;
        if (pelaaja1Mukana == false && pelaaja2Mukana == false && pelaaja3Mukana == false){
            pelaaja4Vuoro = true
        }
    } else if (nimi4.value == '') {
        pelaaja4.style.cssText = 'visibility: hidden';
        nimi4.style.cssText = 'display: none';
        nimi4Label.style.cssText = 'display: none';
    }
}
