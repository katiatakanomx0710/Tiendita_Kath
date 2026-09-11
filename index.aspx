<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Tiendita_DOS.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head id="Head1" runat="server">

    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Kat Espacial</title>

    <link href="style.css" rel="stylesheet" />

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

</head>

<body>

<form id="form1" runat="server">

    <!-- =========================================
         HEADER
    ========================================== -->

    <header class="header">

        <div class="logo">

            <span class="logoKat">Kat</span>
            <span class="logoEspacial">Espacial</span>

        </div>


        <!-- =====================================
             ZONA DE USUARIO
        ====================================== -->

        <div class="zonaUsuario">

            <!-- USUARIO SIN SESIÓN -->

            <asp:Label
                ID="lblUsuario"
                runat="server"
                CssClass="lblUsuario">
            </asp:Label>


            <asp:Button
                ID="btnIniciarSesion"
                runat="server"
                Text="Iniciar sesión"
                CssClass="btnHeader btnLogin"
                PostBackUrl="Login.aspx" />


            <asp:Button
                ID="btnRegistro"
                runat="server"
                Text="Registrarte"
                CssClass="btnHeader btnRegistro"
                OnClick="btnRegistro_Click" />


            <!-- USUARIO CON SESIÓN -->

            <asp:Button
                ID="btnCerrarSesion"
                runat="server"
                Text="Cerrar sesión"
                CssClass="btnHeader btnCerrar"
                OnClick="btnCerrarSesion_Click"
                Visible="false" />


            <!-- =================================
                 CARRITO
            ================================== -->

            <button
                type="button"
                id="btnCarrito"
                class="btnCarrito">

                <i class="fa-solid fa-bag-shopping"></i>

                <span id="contadorCarrito">0</span>

            </button>

        </div>

    </header>


    <!-- =========================================
         CORTINA DEL CARRITO
    ========================================== -->

    <div id="panelCarrito" class="panelCarrito">

        <div class="carritoTitulo">

            <div>

                <i class="fa-solid fa-bag-shopping"></i>

                <span>Mi carrito</span>

            </div>

            <button
                type="button"
                id="btnCerrarCarrito"
                class="btnCerrarCarrito">

                <i class="fa-solid fa-xmark"></i>

            </button>

        </div>


        <div
            id="listaCarrito"
            class="listaCarrito">

            <!-- JavaScript coloca aquí los productos -->

        </div>


        <div class="carritoVacio" id="carritoVacio">

            <i class="fa-regular fa-heart"></i>

            <p>Tu carrito está vacío</p>

            <span>Agrega algunos productos ♡</span>

        </div>


        <div class="carritoAbajo">

            <div class="filaTotal">

                <span>Total</span>

                <strong id="totalCarrito">
                    $0.00
                </strong>

            </div>


            <button
                type="button"
                id="btnComprar"
                class="btnComprar">

                Comprar

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    </div>


    <!-- =========================================
         BUSCADOR
    ========================================== -->

    <section class="buscador">

        <div class="cajaBusqueda">

            <i class="fa-solid fa-magnifying-glass iconoBusqueda"></i>


            <asp:TextBox
                ID="txtBuscar"
                runat="server"
                CssClass="txtBuscar">
            </asp:TextBox>


            <asp:Button
                ID="btnBuscar"
                runat="server"
                Text="Buscar"
                CssClass="btnBuscar"
                OnClick="btnBuscar_Click" />

        </div>

    </section>


    <!-- =========================================
         CATÁLOGO
    ========================================== -->

    <main class="catalogo">

        <div class="encabezadoCatalogo">

            <span class="decoracionTitulo">✦</span>

            <h1>Nuestros productos</h1>

            <span class="decoracionTitulo">✦</span>

        </div>

        <p class="subtituloCatalogo">
            Encuentra algo bonito para ti ♡
        </p>


        <div class="lineaDecorativa"></div>


        <!-- =====================================
             PRODUCTOS
        ====================================== -->

        <div class="productos">

            <asp:Repeater
                ID="rpProductos"
                runat="server">

                <ItemTemplate>

                    <div class="tarjetaProducto">

                        <!-- IMAGEN -->

                        <div class="imagenProducto">

                            <img
                                src='<%# Eval("Imagen") %>'
                                alt='<%# Eval("NombreProducto") %>' />

                        </div>


                        <!-- INFORMACIÓN -->

                        <div class="informacionProducto">

                       <div
                            class="nombreProducto"
                            data-id='<%# Eval("IdProducto") %>'
                            data-nombre='<%# Eval("NombreProducto") %>'
                            data-descripcion='<%# Eval("Descripcion") %>'
                            data-precio='<%# Eval("PrecioProducto") %>'
                            data-imagen='<%# Eval("Imagen") %>'>

                            <%# Eval("NombreProducto") %>

                        </div>
                       


                            <p class="descripcionProducto">
                                <%# Eval("Descripcion") %>
                            </p>


                            <div class="precioProducto">

                                $<%# Eval("PrecioProducto") %>

                            </div>


                            <!--
                                IMPORTANTE:

                                Este botón NO hace postback.
                                JavaScript lo utiliza para
                                guardar el producto en la cookie.
                            -->

                            <button
                                type="button"
                                class="btnAgregar"
                                data-id='<%# Eval("IdProducto") %>'
                                data-nombre='<%# Eval("NombreProducto") %>'
                                data-precio='<%# Eval("PrecioProducto") %>'>

                                <i class="fa-solid fa-bag-shopping"></i>

                                Añadir al carrito

                            </button>

                        </div>

                    </div>

                </ItemTemplate>

            </asp:Repeater>

        </div>

    </main>

    <!-- ========================================
     MODAL DEL PRODUCTO
======================================== -->

<div id="modalProducto" class="modalProducto">

    <div class="contenidoModal">

        <!-- BOTÓN CERRAR -->

        <button
            type="button"
            class="cerrarModal"
            onclick="cerrarProducto()">

            &times;

        </button>


        <!-- IMAGEN -->

        <div class="imagenModal">

            <img
                id="modalImagen"
                src=""
                alt="Producto" />

        </div>


        <!-- INFORMACIÓN -->

        <div class="infoModal">

            <h2 id="modalNombre"></h2>

            <p id="modalDescripcion"></p>

            <div
                id="modalPrecio"
                class="precioModal">
            </div>


            <!-- AGREGAR AL CARRITO -->

            <button
                type="button"
                id="btnAgregarModal"
                class="btnAgregarModal">

                <i class="fa-solid fa-bag-shopping"></i>

                Añadir al carrito

            </button>

        </div>

    </div>

</div>


    <!-- =========================================
         FOOTER
    ========================================== -->

    <footer class="footer">

        <div class="redes">

            <i class="fa-brands fa-instagram"></i>

            <i class="fa-brands fa-tiktok"></i>

            <i class="fa-brands fa-facebook"></i>

            <i class="fa-brands fa-x-twitter"></i>

        </div>


        <p>
            © Derechos Reservados Kat Espacial
        </p>

        <span>
            Hecho con ♡
        </span>

    </footer>


    <!-- JAVASCRIPT -->

    <script src="script.js"></script>

</form>

</body>

</html>