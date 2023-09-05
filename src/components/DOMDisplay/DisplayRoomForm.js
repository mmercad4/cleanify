const createRoomForm = () => {
  const form = document.createElement("form");
  form.id = "roomForm";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "room name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  return form;
};

export default createRoomForm;
