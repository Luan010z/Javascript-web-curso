function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if(elemento && elemento.localName === 'audio'){
    elemento.play();
  }
  else {
    alert('Elemento não encontrado ou seletor invalido');
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
const pom = document.querySelector('.tecla_pom');

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
  const tecla = listaDeTeclas[contador];
  const som = tecla.classList[1];
  const idAudio = `#som_${som}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (e) {

    console.log(e.code =='Enter')
    
    if (e.code == 'Space' || e.code == 'Enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
  
}
