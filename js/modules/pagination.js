import { DATABASE } from "./card/DATABASE.js";

const count = DATABASE.length; //всего записей
const cnt = 8; //сколько отображаем сначала
const cnt_page = Math.ceil(count / cnt); //кол-во страниц

//выводим список страниц
const paginator = document.querySelector(".paginator");
let page = "";
for (let i = 0; i < cnt_page; i++) {
  page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;

//выводим первые записи {cnt}
const ourProducts= document.querySelector(".our__products")
const div_num = ourProducts.querySelectorAll(".product__card");
for (let i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
  }
}

let main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

//листаем
function pagination(event) {
  let e = event || window.event;
  let target = e.target;
  let id = target.id;
  
  if (target.tagName.toLowerCase() != "span") return;
  
  const num_ = id.substr(4);
  const data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  let j = 0;
  for (let i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";

  }
  for (let i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}

paginator.addEventListener('click', pagination)