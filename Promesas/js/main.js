/* Se declara una variable para ir poniendo en ese espacio las tarjetas de presentación de los productos se debe poner el nombre de la clase*/

//function getProducto() {
//    return new Promise((resolve, reject) => {
//        if (producto == null) {
//            reject(new Error("Producto no existe")); /* Se rechaza */
//        }
//        setTimeout(() => { /* Se realizará la acción en un tiempo de 2 segundos */
//            resolve(producto); /* Se dará los productos del JSON */
//        }, 2000);
//    });
//}

/* Promesa paraq poder traer el JSON  */
function getProducto() {
    let promesas = fetch("https://fakestoreapi.com/products", { /* Se trae una api de un JSON */
        method: "GET" /* Método que se escoge */
    });
    promesas.then((response) => { /* Respuesta de la promesa */
        response.json().then((prods) => { /* Convierte la api en un formato JSON */
            console.log("prods=>json()");
            console.log(prods); /* Las funciones deben tener parametros */
            crearTrajetas(prods);
        }
        )
            .catch((err) => { /* Mensaje de error para la respuesta de la promesa */
                console.error("Error en el formato de la respuesta" + err.message);
            });
    }
    )
        .catch((err) => { /* Mensaje de error para la promesa */
            console.error("Error en el formato de la respuesta" + err.message);
        });
}

/* Función para dar formato a las tarjetas */
getProducto();
/*     .then((prod) => { */
let tarjetaGrupo = document.getElementsByClassName("row");
function crearTrajetas(prods) {
    prods.forEach(element => {
        let pagina = /*Para poner elementos en un html desde un js se puede por medio de poner dentro de estos simbolos `` el cógido*/
            `<div class="col">
                    <div class="card border-light text-bg-dark mb-3" style="width: 18rem;">
                    <div class="card-header">${element.id}. ${element.title}</div> 
                      <img src=${element.image} class="card-img-top" alt="Producto ${element.id}">
                      <div class="card-body">
                        <p class="card-text">${element.description}</p>
                        <p class="card-text"><strong>$${element.price}</strong></p>
                        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${element.id}">
  Más información
</button>

<!-- Modal -->
<div class="modal fade" id="#exampleModal_${element.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p><strong>$${element.description}</strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
                      </div>
                    </div>
                  </div>`;
        tarjetaGrupo[0].insertAdjacentHTML("beforeend", pagina);
    });
}