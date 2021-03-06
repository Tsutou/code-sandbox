import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromCompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromCompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(div);
};

const deleteFromCompleteList = (targetView) => {
  document.getElementById("imcomplete-list").removeChild(targetView);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
