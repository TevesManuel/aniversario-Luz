window.onload = () => {
  fetch("https://raw.githubusercontent.com/TevesManuel/aniversario-Luz/main/src/frases.txt")
  .then(response => {
    if (!response.ok)
    {
      throw new Error(`Error en la solicitud GET: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    let indice = Math.floor(Math.random() * ((data.split('\n').length) + 1));
    if(indice % 2 != 0)
    {
      indice = indice - 1;
    }
    console.log(data.split('\n')[indice]);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

  document.getElementById("title").onclick = () => {
    console.log("a");
    document.getElementById("container").classList.add("open");
  };
  document.getElementById("close").onclick = () => {
    document.getElementById("container").classList.remove("open");
  };
};