const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);

  /* 밑에 동작들을 토글을 이용해서 한 줄로 표현 가능 
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
