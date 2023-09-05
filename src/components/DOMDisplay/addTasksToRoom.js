import rooms from "../rooms";
import task from "../task";
import initialLoad from "../initialLoad";

const addTaskToRoom = (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#roomForm input[name='name']");
  const frequencyInput = document.querySelector(
    "#roomForm input[name='frequency']"
  );
  const cleanlinessInput = document.querySelector(
    "#roomForm input[name='cleanliness']"
  );

  const name = nameInput.value;
  const cleanliness = cleanlinessInput.value;
  const frequency = frequencyInput.value;

  const newTask = task(name, cleanliness, frequency);

  const room = rooms[rooms.length - 1];

  room.tasks = [];

  room.tasks.push(newTask);

  room.cleanliness = cleanliness;

  initialLoad();
};

export default addTaskToRoom;
