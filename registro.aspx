<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Registro.aspx.cs" Inherits="Tiendita_DOS.registro" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

    <title>Registro - Kat Espacial</title>

    <link href="styles_registro.css" rel="stylesheet" />

    <script src="script_registro.js"></script>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

</head>

<body>

<form id="form1" runat="server">

<!--================ HEADER ================-->

<header class="header">

    <div class="titulo">

        Kat Espacial

    </div>

</header>

<!--================ CONTENEDOR ================-->

<div class="contenedorRegistro">

    <div class="tarjetaRegistro">

        <div class="iconoRegistro">

            <i class="fa-solid fa-user-plus"></i>

        </div>

        <h1 class="tituloRegistro">

            Registra tu cuenta

        </h1>

        <p class="subtituloRegistro">

            Únete a Kat Espacial para comenzar tus compras.

        </p>

        <!-- Nombre -->

        <div class="grupoCampo">

            <label class="lblCampo">

                Nombre completo

            </label>

            <asp:TextBox
                ID="txtNombre"
                runat="server"
                CssClass="txtCampo"
                MaxLength="60">
            </asp:TextBox>

        </div>

        <!-- Usuario -->

        <div class="grupoCampo">

            <label class="lblCampo">

                Nombre de usuario

            </label>

            <asp:TextBox
                ID="txtUsuario"
                runat="server"
                CssClass="txtCampo"
                MaxLength="20">
            </asp:TextBox>

            <span class="ayuda">

                Mínimo 6 caracteres. Solo letras y números.

            </span>

        </div>

        <!-- Contraseña -->

        <div class="grupoCampo">

            <label class="lblCampo">

                Contraseña

            </label>

            <asp:TextBox
                ID="txtPassword"
                runat="server"
                CssClass="txtCampo"
                TextMode="Password"
                MaxLength="30">
            </asp:TextBox>

        </div>

        <!-- Confirmar -->

        <div class="grupoCampo">

            <label class="lblCampo">

                Confirmar contraseña

            </label>

            <asp:TextBox
                ID="txtConfirmar"
                runat="server"
                CssClass="txtCampo"
                TextMode="Password"
                MaxLength="30">
            </asp:TextBox>

        </div>

        <!-- Mensaje -->

        <asp:Label
            ID="lblMensaje"
            runat="server"
            CssClass="lblMensaje">
        </asp:Label>

        <!-- Botón -->

        <div class="contenedorBoton">

           <asp:Button
                ID="btnRegistrarme"
                runat="server"
                Text="Registrarme"
                CssClass="btnRegistro"
                OnClick="btnRegistrarme_Click"
                ClientIDMode="Static" />

        </div>

        <!-- Regresar -->

        <div class="volver">

            <a href="index.aspx">

                <i class="fa-solid fa-arrow-left"></i>

                Volver al catálogo

            </a>

        </div>

    </div>

</div>

<!--================ FOOTER ================-->

<footer class="footer">

    <div class="redes">

        <i class="fa-brands fa-facebook"></i>

        <i class="fa-brands fa-instagram"></i>

        <i class="fa-brands fa-tiktok"></i>

        <i class="fa-brands fa-x-twitter"></i>

    </div>

    <div class="copyright">

        © Derechos Reservados Katia Takano

    </div>

</footer>

</form>

</body>

</html>