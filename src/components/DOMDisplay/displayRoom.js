import rooms from "../rooms";
import { displayNav } from "./displayNav";

const displayRoom = (e) => {
  const body = document.body;
  e.preventDefault();
  const card = e.target.closest(".card__room");
  const name = card.querySelector(".room__heading").textContent;

  const room = rooms.find((room) => room.name === name);

  body.innerHTML = "";
  displayNav();

  const roomContainer = document.createElement("div");
  roomContainer.className = "room__container";

  const heading = document.createElement("div");
  heading.className = "singleRoom__heading";
  heading.textContent = room.name.toUpperCase();

  body.appendChild(heading);

  const tasksContainer = document.createElement("div");
  tasksContainer.className = "rooms__container";

  room.tasks.forEach((task) => {
    const roomCard = document.createElement("div");
    roomCard.className = "card__room";

    const roomHeading = document.createElement("h1");
    roomHeading.className = "room__heading";
    roomHeading.textContent = task.name;
    roomCard.appendChild(roomHeading);

    const roomTasks = document.createElement("p");
    roomTasks.className = "room__tasks";
    roomTasks.textContent = `tasks`;
    roomCard.appendChild(roomTasks);

    const roomBarContainer = document.createElement("div");
    roomBarContainer.className = "room__barContainer";

    const roomCleanBar = document.createElement("div");
    roomCleanBar.className = "room__cleanBar";
    roomBarContainer.appendChild(roomCleanBar);
    roomCleanBar.textContent = task.cleanliness;

    const roomFillBar = document.createElement("div");
    roomFillBar.className = "room__fillBar";
    roomBarContainer.appendChild(roomFillBar);
    roomFillBar.textContent = task.cleanliness;
    roomFillBar.style.width = `${task.cleanliness / 10}rem`;

    roomCard.appendChild(roomBarContainer);

    const roomCleanTip = document.createElement("p");
    roomCleanTip.className = "room__cleanTip";
    roomCleanTip.textContent = `${task.cleanliness}% clean!`;
    roomCard.appendChild(roomCleanTip);

    tasksContainer.appendChild(roomCard);

    roomCard.addEventListener("click", displayRoom);
  });

  body.appendChild(tasksContainer);
};

export default displayRoom;
