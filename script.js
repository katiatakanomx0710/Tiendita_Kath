// ================================================
// KAT ESPACIAL
// CARRITO + COOKIE + MODAL PRODUCTO
// ================================================

var nombreCookieCarrito = "KatEspacialCarrito";

var productoModal = null;


// ================================================
// INICIO
// ================================================

window.onload = function () {

    cargarCarrito();

    iniciarBotonesAgregar();

    iniciarBotonCarrito();

    iniciarBotonCerrarCarrito();

    iniciarBotonComprar();

    iniciarNombresProductos();

    iniciarBotonModal();

};


// ================================================
// OBTENER CARRITO DE LA COOKIE
// ================================================

function obtenerCarrito() {

    var nombre = nombreCookieCarrito + "=";

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].trim();

        if (cookie.indexOf(nombre) == 0) {

            try {

                return JSON.parse(
                    decodeURIComponent(
                        cookie.substring(nombre.length)
                    )
                );

            }
            catch (e) {

                return [];

            }

        }

    }

    return [];

}


// ================================================
// GUARDAR CARRITO EN COOKIE
// ================================================

function guardarCarrito(carrito) {

    var datos = encodeURIComponent(
        JSON.stringify(carrito)
    );

    document.cookie =
        nombreCookieCarrito +
        "=" +
        datos +
        ";path=/;max-age=2592000";

}


// ================================================
// CARGAR CARRITO
// ================================================

function cargarCarrito() {

    var carrito = obtenerCarrito();

    actualizarContador(carrito);

    mostrarCarrito(carrito);

}


// ================================================
// INICIAR BOTONES AGREGAR
// ================================================

function iniciarBotonesAgregar() {

    var botones =
        document.getElementsByClassName("btnAgregar");

    for (var i = 0; i < botones.length; i++) {

        botones[i].addEventListener(
            "click",
            agregarProducto
        );

    }

}


// ================================================
// AGREGAR PRODUCTO
// ================================================

function agregarProducto(event) {

    var boton = event.currentTarget;

    var id =
        boton.getAttribute("data-id");

    var nombre =
        boton.getAttribute("data-nombre");

    var precioTexto =
        boton.getAttribute("data-precio");

    var precio =
        parseFloat(
            precioTexto.replace(",", ".")
        );

    if (isNaN(precio)) {

        precio = 0;

    }

    agregarProductoAlCarrito(
        id,
        nombre,
        precio
    );


    // =========================================
    // ANIMACIÓN DEL BOTÓN
    // =========================================

    var textoOriginal =
        boton.innerHTML;

    boton.innerHTML =
        '<i class="fa-solid fa-check"></i> Agregado';

    boton.style.background =
        "#d783aa";

    boton.style.color =
        "white";


    setTimeout(function () {

        boton.innerHTML =
            textoOriginal;

        boton.style.background =
            "";

        boton.style.color =
            "";

    }, 900);

}


// ================================================
// FUNCIÓN GENERAL PARA AGREGAR PRODUCTO
// ================================================

function agregarProductoAlCarrito(
    id,
    nombre,
    precio
) {

    var carrito =
        obtenerCarrito();

    var encontrado = false;


    // =========================================
    // BUSCAR SI YA EXISTE
    // =========================================

    for (var i = 0; i < carrito.length; i++) {

        if (
            String(carrito[i].id) ===
            String(id)
        ) {

            carrito[i].cantidad++;

            encontrado = true;

            break;

        }

    }


    // =========================================
    // SI NO EXISTE
    // =========================================

    if (!encontrado) {

        carrito.push({

            id: id,

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    // =========================================
    // GUARDAR
    // =========================================

    guardarCarrito(carrito);

    actualizarContador(carrito);

    mostrarCarrito(carrito);


    // =========================================
    // ANIMAR CONTADOR
    // =========================================

    var contador =
        document.getElementById(
            "contadorCarrito"
        );

    if (contador) {

        contador.style.transform =
            "scale(1.4)";

        setTimeout(function () {

            contador.style.transform =
                "scale(1)";

        }, 180);

    }

}


// ================================================
// ACTUALIZAR CONTADOR
// ================================================

function actualizarContador(carrito) {

    var contador =
        document.getElementById(
            "contadorCarrito"
        );

    if (!contador) {

        return;

    }


    var cantidadTotal = 0;


    for (var i = 0; i < carrito.length; i++) {

        cantidadTotal +=
            parseInt(
                carrito[i].cantidad
            );

    }


    contador.innerHTML =
        cantidadTotal;

}


// ================================================
// MOSTRAR CARRITO
// ================================================

function mostrarCarrito(carrito) {

    var lista =
        document.getElementById(
            "listaCarrito"
        );

    var carritoVacio =
        document.getElementById(
            "carritoVacio"
        );

    var totalElemento =
        document.getElementById(
            "totalCarrito"
        );


    if (!lista) {

        return;

    }


    lista.innerHTML = "";


    // =========================================
    // CARRITO VACÍO
    // =========================================

    if (carrito.length === 0) {

        if (carritoVacio) {

            carritoVacio.style.display =
                "block";

        }

        if (totalElemento) {

            totalElemento.innerHTML =
                "$0.00";

        }

        return;

    }


    if (carritoVacio) {

        carritoVacio.style.display =
            "none";

    }


    var total = 0;


    // =========================================
    // CREAR PRODUCTOS
    // =========================================

    for (var i = 0; i < carrito.length; i++) {

        var producto =
            carrito[i];

        var subtotal =
            producto.precio *
            producto.cantidad;

        total += subtotal;


        var item =
            document.createElement("div");

        item.className =
            "itemCarrito";


        item.innerHTML =

            '<div class="infoItem">' +

                '<div class="nombreItem">' +

                    escaparHTML(
                        producto.nombre
                    ) +

                '</div>' +

                '<div class="precioItem">' +

                    "$" +
                    producto.precio.toFixed(2) +
                    " c/u" +

                '</div>' +

                '<div class="cantidadItem">' +

                    "Cantidad: " +
                    producto.cantidad +
                    " | Subtotal: $" +
                    subtotal.toFixed(2) +

                '</div>' +

            '</div>' +

            '<button ' +

                'type="button" ' +

                'class="btnEliminarItem" ' +

                'data-id="' +
                producto.id +
                '">' +

                '<i class="fa-solid fa-trash"></i>' +

            '</button>';


        lista.appendChild(item);

    }


    // =========================================
    // BOTONES ELIMINAR
    // =========================================

    var botonesEliminar =
        document.getElementsByClassName(
            "btnEliminarItem"
        );


    for (
        var j = 0;
        j < botonesEliminar.length;
        j++
    ) {

        botonesEliminar[j].addEventListener(
            "click",
            eliminarProducto
        );

    }


    // =========================================
    // TOTAL
    // =========================================

    if (totalElemento) {

        totalElemento.innerHTML =
            "$" +
            total.toFixed(2);

    }

}


// ================================================
// ELIMINAR PRODUCTO
// ================================================

function eliminarProducto(event) {

    var id =
        event.currentTarget.getAttribute(
            "data-id"
        );

    var carrito =
        obtenerCarrito();

    var nuevoCarrito = [];


    for (var i = 0; i < carrito.length; i++) {

        if (
            String(carrito[i].id) !==
            String(id)
        ) {

            nuevoCarrito.push(
                carrito[i]
            );

        }

    }


    guardarCarrito(
        nuevoCarrito
    );

    actualizarContador(
        nuevoCarrito
    );

    mostrarCarrito(
        nuevoCarrito
    );

}


// ================================================
// BOTÓN DEL CARRITO
// ================================================

function iniciarBotonCarrito() {

    var boton =
        document.getElementById(
            "btnCarrito"
        );

    var panel =
        document.getElementById(
            "panelCarrito"
        );


    if (!boton || !panel) {

        return;

    }


    boton.addEventListener(
        "click",
        function () {

            panel.classList.toggle(
                "abierto"
            );

        }
    );

}


// ================================================
// CERRAR CARRITO
// ================================================

function iniciarBotonCerrarCarrito() {

    var boton =
        document.getElementById(
            "btnCerrarCarrito"
        );

    var panel =
        document.getElementById(
            "panelCarrito"
        );


    if (!boton || !panel) {

        return;

    }


    boton.addEventListener(
        "click",
        function () {

            panel.classList.remove(
                "abierto"
            );

        }
    );

}


// ================================================
// BOTÓN COMPRAR
// ================================================

function iniciarBotonComprar() {

    var boton =
        document.getElementById(
            "btnComprar"
        );


    if (!boton) {

        return;

    }


    boton.addEventListener(
        "click",
        function () {

            var carrito =
                obtenerCarrito();


            if (carrito.length === 0) {

                alert(
                    "Tu carrito está vacío ♡"
                );

                return;

            }


            alert(
                "Tu carrito tiene " +
                obtenerCantidadTotal(carrito) +
                " producto(s).\n\n" +

                "Total: $" +
                obtenerTotal(carrito)
                    .toFixed(2)
            );

        }
    );

}


// ================================================
// CANTIDAD TOTAL
// ================================================

function obtenerCantidadTotal(carrito) {

    var cantidad = 0;


    for (var i = 0; i < carrito.length; i++) {

        cantidad +=
            parseInt(
                carrito[i].cantidad
            );

    }


    return cantidad;

}


// ================================================
// TOTAL
// ================================================

function obtenerTotal(carrito) {

    var total = 0;


    for (var i = 0; i < carrito.length; i++) {

        total +=
            carrito[i].precio *
            carrito[i].cantidad;

    }


    return total;

}


// ================================================
// SEGURIDAD PARA MOSTRAR TEXTO
// ================================================

function escaparHTML(texto) {

    var div =
        document.createElement(
            "div"
        );

    div.textContent =
        texto;

    return div.innerHTML;

}


// ==================================================
// MODAL PRODUCTO
// ==================================================


// ================================================
// INICIAR NOMBRES DE PRODUCTOS
// ================================================

function iniciarNombresProductos() {

    var nombres =
        document.getElementsByClassName(
            "nombreProducto"
        );


    for (
        var i = 0;
        i < nombres.length;
        i++
    ) {

        nombres[i].addEventListener(
            "click",
            function () {

                var id =
                    this.getAttribute(
                        "data-id"
                    );

                var nombre =
                    this.getAttribute(
                        "data-nombre"
                    );

                var descripcion =
                    this.getAttribute(
                        "data-descripcion"
                    );

                var precio =
                    this.getAttribute(
                        "data-precio"
                    );

                var imagen =
                    this.getAttribute(
                        "data-imagen"
                    );


                abrirProducto(
                    id,
                    nombre,
                    descripcion,
                    precio,
                    imagen
                );

            }
        );

    }

}


// ================================================
// ABRIR PRODUCTO
// ================================================

function abrirProducto(
    id,
    nombre,
    descripcion,
    precio,
    imagen
) {

    var modal =
        document.getElementById(
            "modalProducto"
        );


    if (!modal) {

        return;

    }


    productoModal = {

        id: id,

        nombre: nombre,

        precio: parseFloat(
            precio.replace(",", ".")
        )

    };


    if (isNaN(productoModal.precio)) {

        productoModal.precio = 0;

    }


    document.getElementById(
        "modalImagen"
    ).src = imagen;


    document.getElementById(
        "modalNombre"
    ).innerHTML =
        escaparHTML(nombre);


    document.getElementById(
        "modalDescripcion"
    ).innerHTML =
        escaparHTML(descripcion);


    document.getElementById(
        "modalPrecio"
    ).innerHTML =

        "$" +
        productoModal.precio.toFixed(2);


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";

}


// ================================================
// CERRAR PRODUCTO
// ================================================

function cerrarProducto() {

    var modal =
        document.getElementById(
            "modalProducto"
        );


    if (!modal) {

        return;

    }


    modal.style.display =
        "none";


    document.body.style.overflow =
        "auto";


    productoModal =
        null;

}


// ================================================
// BOTÓN AGREGAR DEL MODAL
// ================================================

function iniciarBotonModal() {

    var boton =
        document.getElementById(
            "btnAgregarModal"
        );


    if (!boton) {

        return;

    }


    boton.addEventListener(
        "click",
        function () {


            if (
                productoModal == null
            ) {

                return;

            }


            agregarProductoAlCarrito(

                productoModal.id,

                productoModal.nombre,

                productoModal.precio

            );


            var nombreProducto =
                productoModal.nombre;


            cerrarProducto();


            alert(
                "💗 " +
                nombreProducto +
                " fue agregado al carrito."
            );

        }
    );

}


// ================================================
// CERRAR MODAL AL DAR CLIC AFUERA
// ================================================

document.addEventListener(
    "click",
    function (e) {

        var modal =
            document.getElementById(
                "modalProducto"
            );


        if (
            modal &&
            e.target === modal
        ) {

            cerrarProducto();

        }

    }
);