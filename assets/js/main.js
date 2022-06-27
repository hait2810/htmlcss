const btns = document.querySelectorAll(".btn");
const listItem = document.querySelectorAll(".item-list");

// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         btns.forEach(item => item.classList.remove('addClassne'))
//         btn.classList.add('addClassne');
//     })
// })

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    listItem.forEach((item) => {
      if (filter == "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});
