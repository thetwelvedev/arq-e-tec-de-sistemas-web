document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-comentario");
  const input = document.getElementById("comentario");
  const lista = document.getElementById("lista-comentarios");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); //Evita recarregar a página

    const texto = input.value.trim();
    if (texto !== "") {
      const li = document.createElement("li");
      li.textContent = texto;
      lista.appendChild(li);

      input.value = ""; //Tem a função de limpa o campo após enviar
    }
  });
});
