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
    const api = "https://back-api-nfs4.onrender.com/api/producto/getcategoria/"

    const categorias = [
        "star wars",
        "consolas",
        "diversos"

    ]

    categorias.forEach(elemento => {
        let output = ""
        const productos = document.getElementById(elemento)
        fetch(api + elemento)
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    output += `
                    <div class="producto">
                    <div class"ing__container">
                        <img onclick="ver('${element._id}')" src=${element.url} alt="">
                        </div>
                        <div class="descripcion__container">
                        <h1 class="producto__titulo">${element.nombre}</h1>
                        <h2 class="producto__precio">USD $ ${element.precio}</h2>
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

    })

};


getProductos()