let asignarFunciones = () => {
  let btnEnviar = document.getElementById('btnEnviar');
  btnEnviar.addEventListener('click', getDataForm);
}

let getDataForm = () => {
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let apellido = document.getElementById('apellido').value;
  let motivo = document.getElementById('motivo').value;
  let mensaje = document.getElementById('mensaje').value;
  if (nombre != '' && email != '' && apellido != '' && motivo != 0 && mensaje != '') {
    mensajeFinal(nombre, email, apellido, motivo, mensaje);
  } else if (nombre == '') {
    alert('El campo Nombre* no puede estar vacío');
  } else if (email == '') {
    alert('El campo Email* no puede estar vacío');
  } else if (apellido == '') {
    alert('El campo Apellido* no puede estar vacío');
  } else if (motivo == 0) {
    alert('El campo Motivo* no puede estar vacío');
  } else if (mensaje == '') {
    alert('El campo Mensaje* no puede estar vacío');
  }

}

let mensajeFinal = (nombre, email, apellido, motivo, mensaje) => {
  let msj = ` DE: ${nombre} ${apellido} (${email}) \n * ASUNTO: ${motivo} \n * MENSAJE: \n${mensaje}`;
  alert(msj);
  limpiar();
}

let limpiar = () => {
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('motivo').value = '0';
  document.getElementById('mensaje').value = '';
}