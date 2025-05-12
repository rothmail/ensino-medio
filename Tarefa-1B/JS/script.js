// financeiro.js
let transacoes = [];

const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const lista = document.getElementById("listaTransacoes");
const saldoEl = document.getElementById("saldo");

document.getElementById("btnAdicionar").addEventListener("click", () => {
    const desc = descricao.value.trim();
    const val = parseFloat(valor.value);

    if (desc === "" || isNaN(val)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    transacoes.push({ desc, val });
    descricao.value = "";
    valor.value = "";
    atualizar();
});

document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

function atualizar() {
    lista.innerHTML = "";
    let total = 0;

    transacoes.forEach(t => {
        const li = document.createElement("li");
        li.className = "transacao";
        li.textContent = `${t.desc}: R$ ${t.val.toFixed(2)}`;
        lista.appendChild(li);
        total += t.val;
    });

    saldoEl.textContent = total.toFixed(2);
}