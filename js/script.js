var usuariosArray = [];

document.getElementById("adicionarBtn").addEventListener("click", adicionarUsuario);

function adicionarUsuario() {
    var nome = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    var usuario = { nome: nome, email: email };
    usuariosArray.push(usuario);

    atualizarListaUsuarios();
    limparCampos();
}

function removeUser(email) {
    usuariosArray = usuariosArray.filter(usuario => usuario.email !== email);
    atualizarListaUsuarios();
    alert("Usuário removido com sucesso!");
}

function atualizarListaUsuarios() {
    const listaUsers = document.getElementById("listausers");
    listaUsers.innerHTML = "";
    usuariosArray.forEach(usuario => {
        var li = document.createElement("li");
        li.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick='removeUser("${usuario.email}")'>Remover</button>`;
        listaUsers.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

document.getElementById("navigateBtn").addEventListener("click", function () {
    window.location.href = "contato.html";
});
