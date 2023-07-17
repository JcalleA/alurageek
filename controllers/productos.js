const ver = (id) => {
    document.getElementById(id).style.display = "block"

}
const cerrar = (id) => {
    document.getElementById(id).style.display = "none"

}

let usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const getProductos = () => {



    const api = "https://back-api-nfs4.onrender.com/api/producto/getproductos"

    let output = ""
    const productos = document.getElementById("productos")
    fetch(api)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                console.log(element);

                output +=
                    `
                    <div class="producto">
                    <div class"ing__container">
                        <img onclick="ver('${element._id}')" src=${element.url} alt="">
                        </div>
                        <div class="descripcion__container">
                        <h1 class="producto__titulo">${element.nombre}</h1>
                        <h2 class="producto__precio">USD $ ${element.precio}</h2>
                        
                        </div>
                        <div class="btn_container">
 <button class="btn__ver" onclick="ver('${element._id}')">Ver</button>
            <button class="btn__eliminar" onclick="eliminar('${element._id}')">Eliminar</button>
            
                    </div>
                    </div>

          <div class="modal" id="${element._id}">
            <div class="modal__icono">
                <i onclick="cerrar('${element._id}')" class="fa fa-times" ></i>
            </div>
            <div class="modal__container">
                <div class="modal__img">
                    <img src="${element.url}" alt="">
                </div>
                <div class="modal__descripcion">
                    <h1>${element.nombre}</h1>
                    <h2>${usd.format(element.precio)}</h2>
                    <p>${element.descripcion}</p>
                </div>
            </div>
        </div>
                

                    </div>
                    <div class="modal" id="${element._id}">
            <div class="modal__icono">
                <i onclick="cerrar('${element._id}')" class="fa fa-times" ></i>
            </div>
            <div class="modal__container">
                <div class="modal__img">
                    <img src="${element.url}" alt="">
                </div>
                <div class="modal__descripcion">
                    <h1>${element.nombre}</h1>
                    <h2>${usd.format(element.precio)}</h2>
                    <p>${element.descripcion}</p>
                </div>
            </div>
        </div>`
                productos.innerHTML = output
            })
        })
        .catch(error => console.log(error))

};

getProductos()


const eliminar = (id) => {
    if (window.confirm("va a eliminar el producto (" + id + ")  Por favor trate de eliminar un producto que usted miso halla registrado")) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        alert("Solo los administradores pueden usar esta funcion")

        // fetch(`https://back-api-nfs4.onrender.com/api/producto/remove/${id}`, options)
        //     .then(response => response.json())
        //     .then(data => {
        //         alert(data.mensaje);

        //     }).catch(error => console.log(error))
    } else {
        alert("Gracias Por No Eliminar")
    }


}
