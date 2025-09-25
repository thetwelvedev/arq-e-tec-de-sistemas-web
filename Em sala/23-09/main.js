let contador = 0;
const numeroElemento = document.getElementById("numero");
const botaoIncrementar = document.getElementById("incrementar");
const botaoResetar = document.getElementById("resetar");
const botaoDecrementar = document.getElementById("decrementar");

botaoIncrementar.addEventListener("click", () => {
 contador++;
 numeroElemento.textContent = contador;

 // Mudança de cor baseada no valor
 if (contador >= 10) {
 numeroElemento.style.color = "#E8AF3B";
 }
});

botaoDecrementar.addEventListener("click", () => {
 contador--;
 numeroElemento.textContent = contador;
});

botaoResetar.addEventListener("click", () => {
 contador = 0;
 numeroElemento.textContent = contador;
 numeroElemento.style.color = "black";
});
