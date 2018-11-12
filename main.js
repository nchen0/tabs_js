let buttons = Array.from(document.querySelectorAll(".tab"));
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let tabcontents = Array.from(document.querySelectorAll(".tabcontent"));
    tabcontents.forEach(tabcontent => {
      tabcontent.style.display = "none";
    });
    buttons.forEach(clickedButton => {
      clickedButton.style.colr = "black";
      clickedButton.style.backgroundColor = "";
    });
    button.style.color = "white";
    button.style.backgroundColor = button.classList[2];
    tabcontents[Number(button.classList[1]) - 1].style.display = "flex";
    tabcontents[Number(button.classList[1]) - 1].style.backgroundColor = button.classList[2];
  });
});
