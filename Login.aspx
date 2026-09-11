<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Tiendita_DOS.Login" %>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Iniciar sesión</title>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Segoe UI", Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            background: #fff7fa;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .login-container {
            width: 380px;
            background: white;
            padding: 40px 35px;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(210,120,150,.15);
        }

        .login-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .icono {
            width: 65px;
            height: 65px;
            margin: 0 auto 15px;
            background: #f9d5e3;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
        }

        .login-header h1 {
            color: #c85c82;
            font-size: 28px;
            margin-bottom: 7px;
        }

        .login-header p {
            color: #999;
            font-size: 14px;
        }

        .campo {
            margin-bottom: 20px;
        }

        .campo label {
            display: block;
            margin-bottom: 7px;
            color: #555;
            font-size: 14px;
        }

        .campo-input {
            width: 100%;
            padding: 13px 14px;
            border: 1px solid #ead6de;
            border-radius: 10px;
            outline: none;
            background: #fffafb;
            color: #444;
            font-size: 14px;
        }

        .campo-input:focus {
            border-color: #d982a2;
            box-shadow: 0 0 0 3px rgba(217,130,162,.12);
        }

        .btn-login {
            width: 100%;
            padding: 13px;
            border: none;
            border-radius: 10px;
            background: #d982a2;
            color: white;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: .3s;
        }

        .btn-login:hover {
            background: #c9688d;
        }

        .mensaje {
            display: block;
            text-align: center;
            margin-top: 15px;
            color: red;
        }

        .registro {
            text-align: center;
            margin-top: 25px;
            color: #999;
            font-size: 14px;
        }

        .registro a {
            color: #c85c82;
            text-decoration: none;
            font-weight: bold;
        }

        .registro a:hover {
            text-decoration: underline;
        }

        .volver {
            display: block;
            text-align: center;
            margin-top: 15px;
            color: #999;
            text-decoration: none;
            font-size: 13px;
        }

        .volver:hover {
            color: #c85c82;
        }

    </style>

</head>

<body>

    <div class="login-container">

        <form id="loginForm" runat="server">

            <div class="login-header">

                <div class="icono">♡</div>

                <h1>Bienvenida</h1>

                <p>Inicia sesión en tu cuenta</p>

            </div>

            <div class="campo">

                <label>Nombre de usuario</label>

                <asp:TextBox
                    ID="txtUsuario"
                    runat="server"
                    CssClass="campo-input">
                </asp:TextBox>

            </div>

            <div class="campo">

                <label>Contraseña</label>

                <asp:TextBox
                    ID="txtPassword"
                    runat="server"
                    TextMode="Password"
                    CssClass="campo-input">
                </asp:TextBox>

            </div>

            <asp:Button
                ID="btnIniciarSesion"
                runat="server"
                Text="Iniciar sesión"
                CssClass="btn-login"
                OnClick="btnIniciarSesion_Click" />

            <asp:Label
                ID="lblMensaje"
                runat="server"
                CssClass="mensaje">
            </asp:Label>

        </form>

        <div class="registro">

            ¿No tienes una cuenta?

            <a href="Registro.aspx">Regístrate</a>

        </div>

        <a href="Index.aspx" class="volver">

            ← Volver a la tienda

        </a>

    </div>

</body>

</html>