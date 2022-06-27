const btns = document.querySelectorAll(".btn");
const iItem = document.querySelectorAll(".items");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("addBorder"));
    button.classList.add("addBorder");
  });
});

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    iItem.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
