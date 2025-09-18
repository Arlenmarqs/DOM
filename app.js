
// let titulo2 = document.querySelector(".titulo2")
// let titulo3 = document.querySelector("#titulo3")
// let titulo = document.querySelector("h1")

// // Escrevendo dentro de tags
// titulo.innerText = "Olá mundo"
// titulo2.innerText = "Olá mundo"
// titulo3.innerText = "Olá mundo"

// let div = document.querySelector("div")
// div.innerHTML = "<h1> buuuufo </h1>"

// titulo.classList.add("title1")
// titulo2.classList.add("title2")
// titulo3.classList.add("title3")

// // remove
// titulo.classList.remove("title1")
// titulo2.classList.add("title2")
// titulo3.classList.add("title3")

// let button = document.querySelector("button")

// function renderTitle() {    
//     let h1 = document.querySelector("h1")
//     h1.innerText = "vai tomando" 
// }

// button.addEventListener("click", renderTitle)

let icon = document.querySelector(".iconClass")
function darkmode() {
    let body = document.querySelector("body")
    let = sectionIcon = document.querySelector("#teste")
    let = icon = document.querySelector(".iconClass")
    body.classList.toggle("body-darkmode")
    sectionIcon.classList.toggle("section-darkmode")
    icon.classList.toggle("icon-class")
}
icon.addEventListener("click", darkmode)

const usuarios = [
    { email: "joao@email.com", senha: "123456" },
    { email: "maria@email.com", senha: "senha123" },
    { email: "admin@email.com", senha: "admin" },
    { email: "lucas@email.com", senha: "lucas123" },
    { email: "ana@email.com", senha: "ana456" },
    { email: "carla@email.com", senha: "carla789" },
    { email: "pedro@email.com", senha: "pedro000" },
    { email: "rafael@email.com", senha: "rafa123" },
    { email: "juliana@email.com", senha: "juliana321" },
    { email: "gustavo@email.com", senha: "guga999" }
];

const btnLogin = document.querySelector("button");
const inputEmail = document.querySelector("input[type='email']");
const inputSenha = document.querySelector("input[type='password']");

btnLogin.addEventListener("click", () => {
    const emailDigitado = inputEmail.value;
    const senhaDigitada = inputSenha.value;

  if (!emailDigitado || !senhaDigitada) {
    alert(" Preencha todos os campos.");
    return;
  }

    const login = usuarios.filter(user =>
        user.email === emailDigitado && user.senha === senhaDigitada
    );

    if (login) {
        window.location.href = "cardapio.html";
    } else {
        alert(" Email ou senha inválidos.");
    }
}

)