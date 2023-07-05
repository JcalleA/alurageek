const getProductos = () => {
  const api="https://back-api-nfs4.onrender.com/api/producto/getcategoria/"

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
                        <img src=${element.url} alt="" class="producto">
                        <h1 class="producto__titulo">${element.nombre}</h1>
                        <h2 class="producto_precio">USD $ ${element.precio}</h2>
                        <a href="">Ver Producto</a>
                    </div>`
                productos.innerHTML = output
                })
            })
            .catch(error => console.log(error))
            
    })
        
};


getProductos()