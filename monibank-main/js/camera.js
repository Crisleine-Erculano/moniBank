const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
   const iniciarVideo = await navigator.mediaDevices // Pede ao navegador para iniciar câmera.
      .getUserMedia({ video: true, audio: false })

   botaoIniciarCamera.style.display = "none";// O botão some quando a câmera é inicializada.
   campoCamera.style.display = "block";// A câmera aparece quando o botão é clicado.

   video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener('click', function () {
   canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

   imagemURL = canvas.toDataURL('image/jpeg');

   campoCamera.style.display = "none";
   mensagem.style.display = "block";
});
