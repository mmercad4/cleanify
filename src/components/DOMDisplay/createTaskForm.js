const createTaskForm = () => {
  const form = document.createElement("form");
  form.id = "roomForm";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "name";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";

  const frequencyLabel = document.createElement("label");
  frequencyLabel.textContent = "frequency";
  const frequencyInput = document.createElement("input");
  frequencyInput.type = "number";
  frequencyInput.name = "frequency";

  const cleanlinessLabel = document.createElement("label");
  cleanlinessLabel.textContent = "State of the room now?";
  const cleanlinessInput = document.createElement("input");
  cleanlinessInput.type = "range";
  cleanlinessInput.name = "cleanliness";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(frequencyLabel);
  form.appendChild(frequencyInput);
  form.appendChild(cleanlinessLabel);
  form.appendChild(cleanlinessInput);

  return form;
};

export default createTask;
