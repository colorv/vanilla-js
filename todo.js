const toDoform = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li"); // html li생성하는 li선언
  const delBtn = document.createElement("button"); //html button생성하는 delBtn선언
  delBtn.innerText = "❌"; // 생성한 button에 x(이모지) 텍스트 삽입
  const span = document.createElement("span"); // html span생성하는 span선언
  span.innerText = text; // 생성한 span에 받아온 값(text)으로 텍스트 삽입
  li.appendChild(delBtn); // li에 delbtn 추가
  li.appendChild(span); // li에 span 추가
  toDoList.appendChild(li); // toDoList(ul)에 li추가
}

function handleSubmit(event) {
  event.preventDefault(); // 기본 설정되어있는 이벤트 중단
  const currentValue = toDoInput.value; //toDoInput(input)에 입력된 값을 currentValue에 저장
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}

init();
