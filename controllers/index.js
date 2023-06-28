const getProductos = () => {

    const categorias = [
        "star wars",
        "consolas",
        "diversos"

    ]

    categorias.forEach(elemento => {
        let output = ""
        const productos = document.getElementById(elemento)
        fetch("http://localhost:3000/productos?categoria=" + elemento)
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    output += `
                
                    <div class="producto">
                        <img src=${element.img} alt="" class="producto">
                        <h1 class="producto__titulo">${element.titulo}</h1>
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