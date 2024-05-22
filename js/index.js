document.addEventListener("DOMContentLoaded", (event) => {
  const body = document.body;
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");

  moonIcon.addEventListener("click", () => {
    body.classList.remove("body-light");
    body.classList.add("body-dark");
  });

  sunIcon.addEventListener("click", () => {
    body.classList.remove("body-dark");
    body.classList.add("body-light");
  });
});

const votoGuilherme = document.getElementById("voto-guilherme");
const votoGustavo = document.getElementById("voto-gustavo");
const votoAna = document.getElementById("voto-ana");
const votoJorge = document.getElementById("voto-jorge");
const votoNulo = document.getElementById("voto-nulo");
const votoBranco = document.getElementById("voto-branco");

votoGuilherme.addEventListener("click", () => {
  alert("Você votou no candidato Guilherme!");
});

votoGustavo.addEventListener("click", () => {
  alert("Você votou no candidato Gustavo!");
});

votoAna.addEventListener("click", () => {
  alert("Você votou na candidata Ana!");
});

votoJorge.addEventListener("click", () => {
  alert("Você votou no candidato Jorge!");
});

votoNulo.addEventListener("click", () => {
  alert("Você votou Nulo!");
});

votoBranco.addEventListener("click", () => {
  alert("Você votou em Branco");
});
