const api2 = "https://back-api-nfs4.onrender.com/api/producto/registrar"

const formulario = document.getElementById("formu")
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formulario))

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }
  alert("Solo los administradores pueden usar esta funcion")

  // fetch(api2, options)
  //   .then(response => response.json())
  //   .then(data => {
  //     alert(data.mensaje);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
})
