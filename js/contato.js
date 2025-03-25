document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault();

        var nome = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mensagem = document.getElementById("message").value;

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        console.log("Simulando Envio para o Back-end!");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Sua mensagem foi enviada com sucesso!");
    });
});
