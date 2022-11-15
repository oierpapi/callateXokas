let boton = document.querySelector(".boton")

boton.addEventListener("click", () =>{
  let etiquetaAudio = document.createElement("audio")
  etiquetaAudio.setAttribute("src", "ElXokas_callate.mp3")
  etiquetaAudio.play()
})
