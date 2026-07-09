<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Senhas</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <section class="conteudo">

        <div class="conteudo-titulo">
            <img src="unlock.svg" alt="Cadeado">
            <h1 class="titulo-principal">Gerador de Senhas</h1>
            <p class="titulo-secundario">
                Gere senhas fortes, aleatórias e seguras em poucos segundos.
            </p>
        </div>

        <div class="conteudo-senha">
            <label for="campo-senha">Senha Gerada</label>

            <div class="senha-box">
                <input
                    type="text"
                    id="campo-senha"
                    readonly
                    placeholder="Clique em Gerar">
                <button id="copiar">📋 Copiar</button>
            </div>
        </div>

        <div class="parametro">

            <h2 class="parametro-titulo">
                Personalize sua senha
            </h2>

            <!-- Quantidade -->
            <div class="parametro-senha">

                <h3>Número de caracteres</h3>

                <div class="parametro-senha-botoes">

                    <button id="menos">-</button>

                    <p id="valor">12</p>

                    <button id="mais">+</button>

                </div>

            </div>

            <!-- Opções -->

            <div class="parametro-senha">

                <h3>Características</h3>

                <label>
                    <input type="checkbox" id="maiusculas" checked>
                    Letras maiúsculas (ABC)
                </label>

                <label>
                    <input type="checkbox" id="minusculas" checked>
                    Letras minúsculas (abc)
                </label>

                <label>
                    <input type="checkbox" id="numeros" checked>
                    Números (123)
                </label>

                <label>
                    <input type="checkbox" id="simbolos" checked>
                    Símbolos (!@#$%)
                </label>

            </div>

            <!-- Força -->

            <div class="parametro-senha">

                <h3>Força da senha</h3>

                <div class="barra-forca">
                    <div id="nivel-forca"></div>
                </div>

                <p id="texto-forca">Média</p>

            </div>

            <!-- Botão -->

            <button id="gerar" class="botao-gerar">
                🔒 Gerar Senha
            </button>

        </div>

    </section>

    <script src="script.js"></script>

</body>

</html>
