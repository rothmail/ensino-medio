let lista = [];

const input = document.querySelector("#itemInput");
const ul = document.getElementById("listaItens");

document.getElementById("btnAdd").addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor !== "") {
    lista.push(valor);
    input.value = "";
    mostrarLista();
  }
});

document.getElementById("btnRemove").addEventListener("click", () => {
  lista.pop();
  mostrarLista();
});

document.getElementById("btnMostrar").addEventListener("click", () => {
  mostrarLista();
});

document.getElementById("btnMudarCor").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

function mostrarLista() {
  ul.innerHTML = "";
  lista.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}