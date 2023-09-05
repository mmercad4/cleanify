import addRoom from "../addRoom";
import createTaskForm from "./createTaskForm";

const createRoomForm = () => {
  const form = document.createElement("form");
  form.id = "roomForm";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "room name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";

  const continueBtn = document.createElement("button");
  continueBtn.className = "roomTask__button";
  continueBtn.textContent = "Start adding tasks ➡️";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(continueBtn);

  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const room = nameInput.value;
    addRoom(room);
    createTaskForm();
  });

  return form;
};

export default createRoomForm;
