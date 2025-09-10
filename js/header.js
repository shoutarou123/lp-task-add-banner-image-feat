const header = document.querySelector(".logo_content_flex");
const sub_title_content = document.querySelector(".sub_title_content");
const offset = header.getBoundingClientRect().top + window.pageYOffset;

function handleFixed() {
  const isNarrow = this.window.innerWidth <= 850;
  if (window.pageYOffset > offset && !isNarrow) {
    header.classList.add("fixed");
    sub_title_content.style.marginTop = "123px";
  } else {
    header.classList.remove("fixed");
    sub_title_content.style.marginTop = "63px";
  }
}

window.addEventListener("scroll", handleFixed);
window.addEventListener("resize", handleFixed);
