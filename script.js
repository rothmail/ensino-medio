const nome = prompt("Olá, flor do dia! 🌸 Qual seu nome?");
const saudacao = `<p>Bem-vindo(a) ao Brechó Senac, ${nome}! 💜<br>Venha ver nossas peças incríveis e se apaixonar!!</p>`;
document.getElementById("mensagemInicial").innerHTML = saudacao;

const interesse = confirm(
  "Quer dar uma olhadinha nas peças mais amadas do momento?"
);

if (interesse) {
  const listaProdutos = [
    {
      nome: "Dia de Prequiça",
      detalhe: "Tecido macio, confortável, perfeito para inverno.",
      imagem:
        "https://i.pinimg.com/736x/53/89/4a/53894ac989aa445116332b403bf6526f.jpg",
    },
    {
      nome: "Encontro à Tarde",
      detalhe:
        "Estilo indie, delicado e romântico",
      imagem:
        "https://i.pinimg.com/736x/7c/33/4d/7c334dc668dd899f4359f2d2e03d8e64.jpg",
    },
    {
      nome: "Festa de Sexta",
      detalhe: "Roupa leve, simples mas marcante",
      imagem:
        "https://i.pinimg.com/736x/b8/b0/72/b8b0724ac4c05dbdf2468b194ae978cf.jpg",
    },
    {
      nome: "Passeio com Amigos",
      detalhe: "Estilo casual, leve e confortável, ótimo para passear",
      imagem:
        "https://i.pinimg.com/736x/55/57/99/5557999d9bcc96b3cbada3f2aae68ab4.jpg",
    },
  ];

  const container = document.getElementById("produtos");

  listaProdutos.forEach((item, index) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.className = "produto";

    produtoDiv.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}">
          <h3>${item.nome}</h3>
          <div class="detalhe" id="detalhe${index}">${item.detalhe}</div>
        `;

    produtoDiv.onclick = () => {
      const detalhe = document.getElementById(`detalhe${index}`);
      detalhe.style.display =
        detalhe.style.display === "block" ? "none" : "block";
    };

    container.appendChild(produtoDiv);
  });
} else {
  document.getElementById("mensagemInicial").innerHTML += `
        <div class="bye-message">Poxa que pena! ${nome} volte quando quiser pra mais provas de nossas peças!!</div>
      `;
}
