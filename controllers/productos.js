const getProductos = () => {
  
  const api="https://back-api-nfs4.onrender.com/api/producto/getproductos"

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
                        <img src=${element.img} alt="" class="producto">
                        <h1 class="producto__titulo">${element.nombre}</h1>
                        <h2 class="producto_precio">USD $ ${element.precio}</h2>
                        <a href="">Ver Producto</a>
            <button onclick="eliminar(${element._id})">Eliminar</button>

                    </div>`
                productos.innerHTML = output
                })
            })
            .catch(error => console.log(error))
            
    };

getProductos()


const eliminar=(id)=>{
  console.log("va a eliminar el producto"+ id) 
  
 /* fetch("https://back-api-nfs4.onrender.com/api/producto/remove/"+id)
    .then(response => response.json())
    .then(data => {
          alert(data.mensaje);
    
}).catch(error=>alert(error))

*/
}
  