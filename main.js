// määritetään paljon muuttujia

let noppia1 = document.getElementById('noppia1');
let noppia2 = document.getElementById('noppia2');
let noppa1 = document.getElementById('noppa1');
let noppa2 = document.getElementById('noppa2');
let heita = document.getElementById('heita');
let talleta = document.getElementById('talleta');
let uusiPeli = document.getElementById('uusiPeli');
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
let vali = document.getElementsByClassName('vali');
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
let pelaaYhdellaNopalla = false;
let pelaaKahdellaNopalla = false;
let images = [
    'noppa1.png',
    'noppa2.png',
    'noppa3.png',
    'noppa4.png',
    'noppa5.png',
    'noppa6.png',
];
noppia1.addEventListener('click', pelaa1Nopalla);
noppia2.addEventListener('click', pelaa2Nopalla);
uusiPeli.addEventListener('click', aloitaUusiPeli);

// määritetään alussa, että halutaan pelata 1 nopalla, joten noppia ruudulla 1
// samalla kutsutaan vaihdaNimet ja kaynnistaPeli functioita

function pelaa1Nopalla() {
    pelaaYhdellaNopalla = true;
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

// määritetään alussa että halutaan pelata 2 nopalla, joten noppia ruudulla 2

function pelaa2Nopalla() {
    pelaaKahdellaNopalla = true;
    noppia1.style.cssText = 'display: none';
    noppia2.style.cssText = 'display: none';
    heita.style.cssText = 'display: inline';
    talleta.style.cssText = 'display: inline';
    syotaTeksti.innerText =
        'Jos heität 1 menetät kaikki tallentamattomat pisteet, jos heität tuplat saat pisteet tuplana';
    vaihdaNimet();
    kaynnistaPeli();
}

// Aloitetaan uusi peli samoilla pelaajilla, nollataan pisteet, nollataan tekstit ja aktivoidaan peli napit

function aloitaUusiPeli() {
    tallentamattomatPisteet.innerText = 0;
    pisteet1.innerText = 0;
    pisteet2.innerText = 0;
    pisteet3.innerText = 0;
    pisteet4.innerText = 0;
    heita.disabled = false;
    talleta.disabled = false;
    if (pelaaYhdellaNopalla) {
        syotaTeksti.innerText =
            'Jos heität 1 menetät kaikki tallentamattomat pisteet';
    } else if (pelaaKahdellaNopalla) {
        syotaTeksti.innerText =
            'Jos heität 1 menetät kaikki tallentamattomat pisteet, jos heität tuplat saat pisteet tuplana';
    }
    if (pelaaja1Mukana) {
        pelaaja1Vuoro = true;
        pelaaja2Vuoro = false;
        pelaaja3Vuoro = false;
        pelaaja4Vuoro = false;
    } else if (pelaaja2Mukana) {
        pelaaja1Vuoro = false;
        pelaaja2Vuoro = true;
        pelaaja3Vuoro = false;
        pelaaja4Vuoro = false;
    } else if (pelaaja3Mukana) {
        pelaaja1Vuoro = false;
        pelaaja2Vuoro = false;
        pelaaja3Vuoro = true;
        pelaaja4Vuoro = false;
    } else if (pelaaja4Mukana) {
        pelaaja1Vuoro = false;
        pelaaja2Vuoro = false;
        pelaaja3Vuoro = false;
        pelaaja4Vuoro = true;
    }
    kaynnistaPeli();
}

// Kuvitetaan pelaajien vuorot

function kaynnistaPeli() {
    if (pelaaja1Vuoro) {
        if (pelaaja1Mukana) {
            pelaaja1.style.opacity = '100%';
            pisteetTxt1.style.opacity = '100%';
            pisteet1.style.opacity = '100%';
        }
        if (pelaaja2Mukana) {
            pelaaja2.style.opacity = '50%';
            pisteetTxt2.style.opacity = '50%';
            pisteet2.style.opacity = '50%';
        }
        if (pelaaja3Mukana) {
            pelaaja3.style.opacity = '50%';
            pisteetTxt3.style.opacity = '50%';
            pisteet3.style.opacity = '50%';
        }
        if (pelaaja4Mukana) {
            pelaaja4.style.opacity = '50%';
            pisteetTxt4.style.opacity = '50%';
            pisteet4.style.opacity = '50%';
        }
        heita.addEventListener('click', heitaNoppaa);
        talleta.addEventListener('click', talletaPisteet);
    }
    if (pelaaja2Vuoro) {
        if (pelaaja1Mukana) {
            pelaaja1.style.opacity = '50%';
            pisteetTxt1.style.opacity = '50%';
            pisteet1.style.opacity = '50%';
        }
        if (pelaaja2Mukana) {
            pelaaja2.style.opacity = '100%';
            pisteetTxt2.style.opacity = '100%';
            pisteet2.style.opacity = '100%';
        }
        if (pelaaja3Mukana) {
            pelaaja3.style.opacity = '50%';
            pisteetTxt3.style.opacity = '50%';
            pisteet3.style.opacity = '50%';
        }
        if (pelaaja4Mukana) {
            pelaaja4.style.opacity = '50%';
            pisteetTxt4.style.opacity = '50%';
            pisteet4.style.opacity = '50%';
        }
        heita.addEventListener('click', heitaNoppaa);
        talleta.addEventListener('click', talletaPisteet);
    }
    if (pelaaja3Vuoro) {
        if (pelaaja1Mukana) {
            pelaaja1.style.opacity = '50%';
            pisteetTxt1.style.opacity = '50%';
            pisteet1.style.opacity = '50%';
        }
        if (pelaaja2Mukana) {
            pelaaja2.style.opacity = '50%';
            pisteetTxt2.style.opacity = '50%';
            pisteet2.style.opacity = '50%';
        }
        if (pelaaja3Mukana) {
            pelaaja3.style.opacity = '100%';
            pisteetTxt3.style.opacity = '100%';
            pisteet3.style.opacity = '100%';
        }
        if (pelaaja4Mukana) {
            pelaaja4.style.opacity = '50%';
            pisteetTxt4.style.opacity = '50%';
            pisteet4.style.opacity = '50%';
        }
        heita.addEventListener('click', heitaNoppaa);
        talleta.addEventListener('click', talletaPisteet);
    }
    if (pelaaja4Vuoro) {
        if (pelaaja1Mukana) {
            pelaaja1.style.opacity = '50%';
            pisteetTxt1.style.opacity = '50%';
            pisteet1.style.opacity = '50%';
        }
        if (pelaaja2Mukana) {
            pelaaja2.style.opacity = '50%';
            pisteetTxt2.style.opacity = '50%';
            pisteet2.style.opacity = '50%';
        }
        if (pelaaja3Mukana) {
            pelaaja3.style.opacity = '50%';
            pisteetTxt3.style.opacity = '50%';
            pisteet3.style.opacity = '50%';
        }
        if (pelaaja4Mukana) {
            pelaaja4.style.opacity = '100%';
            pisteetTxt4.style.opacity = '100%';
            pisteet4.style.opacity = '100%';
        }
        heita.addEventListener('click', heitaNoppaa);
        talleta.addEventListener('click', talletaPisteet);
    }
}

// Talletetaan tallentamattomat pisteet omiin pisteisiin, tarkastetaan onko tarpeeksi pisteitä 
// voittoon ja vaihdetaan pelaajien vuoroa.

function talletaPisteet() {
    if (pelaaja1Vuoro) {
        pisteet1.innerText =
            Number(pisteet1.innerText) +
            Number(tallentamattomatPisteet.innerText);
        tallentamattomatPisteet.innerText = 0;
        if (Number(pisteet1.innerText) >= 100) {
            syotaTeksti.innerText = pelaaja1.innerText + ' voitti!';
            heita.disabled = true;
            talleta.disabled = true;
        }
        if (pelaaja2Mukana) {
            pelaaja2Vuoro = true;
            pelaaja1Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja3Mukana) {
            pelaaja3Vuoro = true;
            pelaaja1Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja4Mukana) {
            pelaaja4Vuoro = true;
            pelaaja1Vuoro = false;
            kaynnistaPeli();
        }
    } else if (pelaaja2Vuoro) {
        pisteet2.innerText =
            Number(pisteet2.innerText) +
            Number(tallentamattomatPisteet.innerText);
        tallentamattomatPisteet.innerText = 0;
        if (Number(pisteet2.innerText) >= 100) {
            syotaTeksti.innerText = pelaaja2.innerText + ' voitti!';
            heita.disabled = true;
            talleta.disabled = true;
        }
        if (pelaaja3Mukana) {
            pelaaja3Vuoro = true;
            pelaaja2Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja4Mukana) {
            pelaaja4Vuoro = true;
            pelaaja2Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja1Mukana) {
            pelaaja1Vuoro = true;
            pelaaja2Vuoro = false;
            kaynnistaPeli();
        }
    } else if (pelaaja3Vuoro) {
        pisteet3.innerText =
            Number(pisteet3.innerText) +
            Number(tallentamattomatPisteet.innerText);
        tallentamattomatPisteet.innerText = 0;
        if (Number(pisteet3.innerText) >= 100) {
            syotaTeksti.innerText = pelaaja3.innerText + ' voitti!';
            heita.disabled = true;
            talleta.disabled = true;
        }
        if (pelaaja4Mukana) {
            pelaaja4Vuoro = true;
            pelaaja3Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja1Mukana) {
            pelaaja1Vuoro = true;
            pelaaja3Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja2Mukana) {
            pelaaja2Vuoro = true;
            pelaaja3Vuoro = false;
            kaynnistaPeli();
        }
    } else if (pelaaja4Vuoro) {
        pisteet4.innerText =
            Number(pisteet4.innerText) +
            Number(tallentamattomatPisteet.innerText);
        tallentamattomatPisteet.innerText = 0;
        if (Number(pisteet4.innerText) >= 100) {
            syotaTeksti.innerText = pelaaja4.innerText + ' voitti!';
            heita.disabled = true;
            talleta.disabled = true;
        }
        if (pelaaja1Mukana) {
            pelaaja1Vuoro = true;
            pelaaja4Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja2Mukana) {
            pelaaja2Vuoro = true;
            pelaaja4Vuoro = false;
            kaynnistaPeli();
        } else if (pelaaja3Mukana) {
            pelaaja3Vuoro = true;
            pelaaja4Vuoro = false;
            kaynnistaPeli();
        }
    }
}

// Muodostetaan noppien animaatiot, arvotaan noppien luvut ja lisätään pisteet sääntöjen mukaan.

function heitaNoppaa() {
    noppa1.classList.add('shake');
    noppa2.classList.add('shake');
    setTimeout(function () {
        noppa1.classList.remove('shake');
        noppa2.classList.remove('shake');
        let noppa1Luku = Math.floor(Math.random() * 6);
        let noppa2Luku = Math.floor(Math.random() * 6);
        noppa1.setAttribute('src', images[noppa1Luku]);
        noppa2.setAttribute('src', images[noppa2Luku]);
        if (pelaaYhdellaNopalla) {
            if (noppa1Luku + 1 == 1) {
                tallentamattomatPisteet.innerText = 0;
                talletaPisteet();
            } else {
                tallentamattomatPisteet.innerText =
                    Number(tallentamattomatPisteet.innerText) + noppa1Luku + 1;
            }
        } else if (pelaaKahdellaNopalla) {
            if (noppa1Luku == noppa2Luku) {
                if (noppa1Luku + 1 == 1 && noppa2Luku + 1 == 1) {
                    tallentamattomatPisteet.innerText =
                        Number(tallentamattomatPisteet.innerText) + 25;
                } else {
                    tallentamattomatPisteet.innerText =
                        Number(tallentamattomatPisteet.innerText) +
                        (noppa1Luku + 1 + noppa2Luku + 1) * 2;
                }
            } else if (noppa1Luku + 1 == 1 || noppa2Luku + 1 == 1) {
                tallentamattomatPisteet.innerText = 0;
                talletaPisteet();
            } else {
                tallentamattomatPisteet.innerText =
                    Number(tallentamattomatPisteet.innerText) +
                    noppa1Luku +
                    1 +
                    noppa2Luku +
                    1;
            }
        }
    }, 1000);
}

// Vaihdetaan kaikkien osallistujien nimet, tuodaan pisteitä tekstit esiin ja piilotetaan nimien 
// syöttölaatikot

function vaihdaNimet() {
    if (pelaaYhdellaNopalla){
        heita.innerText = 'Heitä noppaa'
    }
    if (nimi1.value != '') {
        pelaaja1.innerText = nimi1.value;
        nimi1.style.cssText = 'display: none';
        nimi1Label.style.cssText = 'display: none';
        pisteetTxt1.style.cssText = 'display: inline';
        pisteet1.style.cssText = 'display: block';
        vali[0].style.cssText = 'display: none';
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
        vali[1].style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja2Mukana = true;
        if (pelaaja1Mukana == false) {
            pelaaja2Vuoro = true;
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
        vali[2].style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja3Mukana = true;
        if (pelaaja1Mukana == false && pelaaja2Mukana == false) {
            pelaaja3Vuoro = true;
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
        vali[3].style.cssText = 'display: none';
        tallentamattomatPisteetTxt.style.cssText = 'display: inline-block';
        tallentamattomatPisteet.style.cssText = 'display: inline-block';
        tallentamattomatPisteetTxt.innerText = 'Tallentamattomat pisteet:  ';
        tallentamattomatPisteet.innerText = Number(0);
        pelaaja4Mukana = true;
        if (
            pelaaja1Mukana == false &&
            pelaaja2Mukana == false &&
            pelaaja3Mukana == false
        ) {
            pelaaja4Vuoro = true;
        }
    } else if (nimi4.value == '') {
        pelaaja4.style.cssText = 'visibility: hidden';
        nimi4.style.cssText = 'display: none';
        nimi4Label.style.cssText = 'display: none';
    }
}
