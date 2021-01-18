const toDoform = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target; // btn에 event.target 할당
  const li = btn.parentNode; // li에 btn에 부모노드 할당
  toDoList.removeChild(li); // 클릭 된 btn에 해당하는 li를 삭제
  const cleanToDos = toDos.filter(function (toDo) {
    // filter로 걸러진 값을 cleanToDos에 할당
    return toDo.id !== parseInt(li.id); // 선택된 id 값과 li에 id값이 다른 것만 반환
  });
  toDos = cleanToDos; // 새로 만들어진 cleanToDos를 toDos에 할당
  saveToDos(toDos); // 새로 값을 받은 toDos를 saveToDos 함수 호출해서 저장
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // localStorage에 toDos값을 string으로 저장
}

function paintToDo(text) {
  const li = document.createElement("li"); // html li생성하는 li선언
  const delBtn = document.createElement("button"); //html button생성하는 delBtn선언
  const span = document.createElement("span"); // html span생성하는 span선언
  const newId = toDos.length + 1; // 1부터 시작하는 ID newId 선언
  delBtn.innerText = "❌"; // 생성한 button에 x(이모지) 텍스트 삽입
  delBtn.addEventListener("click", deleteToDo); // 버튼에 click이벤트 감지 및 deleteToDo함수 호출
  span.innerText = text; // 생성한 span에 받아온 값(text)으로 텍스트 삽입
  li.appendChild(delBtn); // li에 delbtn 추가
  li.appendChild(span); // li에 span 추가
  toDoList.appendChild(li); // toDoList(ul)에 li추가
  li.id = newId; // 추가된 li에 id값 추가
  const toDoObj = {
    text: text,
    id: newId,
  }; // text값과 id값을 toDoObj로 객체 생성
  toDos.push(toDoObj); // toDos배열에 toDoObj값 푸쉬
  saveToDos(); // localStorage 저장 함수 호출
}

function handleSubmit(event) {
  event.preventDefault(); // 기본 설정되어있는 이벤트 중단
  const currentValue = toDoInput.value; //toDoInput(input)에 입력된 값을 currentValue에 저장
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //localStorage에 값이 있는 경우 실행
    const parsedToDos = JSON.parse(loadedToDos); // localStorage에 있는 값을 객체로 생성
    parsedToDos.forEach(function (toDo) {
      // parsedToDos 각 배열 요소에 한번 씩 실행
      paintToDo(toDo.text); // parsedToDos에 텍스트 값으로 화면에 그려주는 paintToDo함수 호출
    });
  }
}

function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}

init();
