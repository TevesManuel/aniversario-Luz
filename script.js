window.onload = () => {
  document.getElementById("title").onclick = () => {
    console.log("a");
    document.getElementById("container").classList.add("open");
  };
  document.getElementById("close").onclick = () => {
    document.getElementById("container").classList.remove("open");
  };
};