const pasteis = [
    {
        id: 1,
        nome: "Pastel de Palmito",
        preco: 7.50,
        ingredientes: "Palmito, Cebola, Azeitona, Temperos",
        tamanho: "Médio",
        imagem: "image/pastel.png"
    },
    {
        id: 2,
        nome: "Pastel de Pizza",
        preco: 8.00,
        ingredientes: "Presunto, Mussarela, Tomate, Orégano",
        tamanho: "Grande",
        imagem: "image/pastel.png"
    },
    {
        id: 3,
        nome: "Pastel de Carne Seca com Catupiry",
        preco: 9.00,
        ingredientes: "Carne seca, Catupiry, Cebola",
        tamanho: "Grande",
        imagem: "image/pastel.png"
    },
    {
        id: 4,
        nome: "Pastel de Bacalhau",
        preco: 10.00,
        ingredientes: "Bacalhau, Batata, Cebola, Azeitona",
        tamanho: "Grande",
        imagem: "image/pastel.png"
    },
    {
        id: 5,
        nome: "Pastel de Banana com Canela",
        preco: 6.50,
        ingredientes: "Banana, Canela, Açúcar",
        tamanho: "Médio",
        imagem: "image/pastel.png"

    },
    {
        id: 6,
        nome: "Pastel de Doce de Leite",
        preco: 7.00,
        ingredientes: "Doce de leite, Chocolate branco",
        tamanho: "Pequeno",
        imagem: "image/pastel.png"
    },
    {
        id: 7,
        nome: "Pastel de Queijo com Orégano",
        preco: 6.50,
        ingredientes: "Mussarela, Orégano",
        tamanho: "Médio",
        imagem: "image/pastel.png"
    },
    {
        id: 8,
        nome: "Pastel de Frango com Requeijão",
        preco: 8.50,
        ingredientes: "Frango desfiado, Requeijão, Cebola",
        tamanho: "Médio",
        imagem: "image/pastel.png"
    },
    {
        id: 9,
        nome: "Pastel de Camarão",
        preco: 11.00,
        ingredientes: "Camarão, Requeijão, Cebola, Salsinha",
        tamanho: "Grande",
        imagem: "image/pastel.png"
    },
    {
        id: 10,
        nome: "Pastel de Chocolate com Morango",
        preco: 9.50,
        ingredientes: "Chocolate ao leite, Morango, Granulado",
        tamanho: "Médio",
        imagem: "image/pastel.png"
    }
];

function renderProduct() {
    let body = document.querySelector("body")
    let tbody = document.querySelector("tbody")
    for (let index = 0; index < pasteis.length; index++) {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td><img src="${pasteis[index].imagem}" alt="${pasteis[index].nome}" width="90"></td>
            <td>${pasteis[index].id}</td>
            <td>${pasteis[index].nome}</td>
            <td>${pasteis[index].preco}</td>
            <td>${pasteis[index].ingredientes}</td>
            <td>${pasteis[index].tamanho}</td>

        `
        tbody.appendChild(tr)
    }
}
renderProduct()