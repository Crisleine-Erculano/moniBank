const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoIniciarCamera.addEventListener("click", async function () {
   const iniciarVideo = await navigator.mediaDevices // Pede ao navegador para iniciar câmera.
      .getUserMedia({ video: true, audio: false })

   botaoIniciarCamera.style.display = "none";// O botão some quando a câmera é inicializada.
   campoCamera.style.display = "block";// A câmera aparece quando o botão é clicado.

   video.srcObject = iniciarVideo;
})