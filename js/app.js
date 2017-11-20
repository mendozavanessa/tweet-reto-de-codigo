/* Primero hacemos cargar la pagina para  que otra funcion */
window.addEventListener('load', function() {
  var textarea = document.getElementById('text-tweet'),
    button = document.getElementById('boton'),
    parrafos = document.getElementById('resultado'),
    divForm = document.getElementById('tweet'),
    contador = document.getElementById('counter'),
    contenido = textarea.value;
    /* hacer crecer a textarea en altura si sus caracteres van aumentando de nro de filas*/
  textarea.addEventListener('input', function() {
    var numero = this.value.split('\n').length;
    var columns = numero * 20 + 48;
    this.style.height = columns + 'px';
  });
  /* evaluando cantidad de caracteres para que disminuya el contador y cambie de color*/
  textarea.addEventListener('keyup', function() {
    if (textarea.value.length > 140) {
      textarea.value = textarea.value.substring(0, 140);
    } else {
      this.form.remLen.value = 140 - textarea.value.length;
      if (this.form.remLen.value <= 140) {
        contador.style.color = 'red';
      }
      if (this.form.remLen.value < 130) {
        contador.style.color = 'blue';
      }
      if (this.form.remLen.value < 120) {
        contador.style.color = 'black';
      }
    }
    if (this.value) {
      button.classList.remove('disabledColor');
      button.classList.add('blue');
      button.addEventListener('click', function() {
        /* insertando hora en los twwet publicados*/
        momentoActual = new Date();
        hora = momentoActual.getHours();
        minuto = momentoActual.getMinutes();
        segundo = momentoActual.getSeconds();
        if (hora >= 12) {
          hora = hora - 12;
          horaImprimible = hora + ' : ' + minuto + ' : ' + segundo + ' PM';
        } else {
          horaImprimible = hora + ' : ' + minuto + ' : ' + segundo + ' AM';
        }
        /* creando las cajas de los tweet a publicar */
        if (textarea.value) {
          var parrafo = document.createElement('p');
          var span = document.createElement('span');
          span.setAttribute('id', 'mostrarHora');
          parrafo.textContent = textarea.value;
          span.innerHTML = horaImprimible ;
          parrafo.appendChild(span);
          parrafos.appendChild(parrafo);
          console.log(parrafos);
          textarea.value = '';
          button.classList.add('disabledColor');
          button.classList.remove('blue');
        }
      });
    }
  });
});
