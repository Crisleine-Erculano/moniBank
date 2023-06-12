const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

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

   // parar camera
   video.srcObject.getTracks().forEach(track => track.stop())
});

botaoEnviarFoto.addEventListener('click', () => {
   const receberDadosExistentes = localStorage.getItem("cadastro");// Retorna o item que tem 
   //a chave cadastro.
   const converteRetorno = JSON.parse(receberDadosExistentes);

   converteRetorno.imagem = imagemURL;

   localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

   window.location.href = '../pages/abrir-conta-form-3.html';
})
