import rooms from "../rooms";

const displayRooms = () => {
  const body = document.body;
  const roomsContainer = document.createElement("div");
  roomsContainer.className = "rooms__container";

  rooms.forEach((room) => {
    const roomCard = document.createElement("div");
    roomCard.className = "card__room";

    const roomHeading = document.createElement("h1");
    roomHeading.className = "room__heading";
    roomHeading.textContent = room.name;
    roomCard.appendChild(roomHeading);

    const roomTasks = document.createElement("p");
    roomTasks.className = "room__tasks";
    roomTasks.textContent = `${room.tasks.length} tasks`;
    roomCard.appendChild(roomTasks);

    const roomBarContainer = document.createElement("div");
    roomBarContainer.className = "room__barContainer";

    const roomCleanBar = document.createElement("div");
    roomCleanBar.className = "room__cleanBar";
    roomBarContainer.appendChild(roomCleanBar);
    roomCleanBar.textContent = room.cleanliness;

    const roomFillBar = document.createElement("div");
    roomFillBar.className = "room__fillBar";
    roomBarContainer.appendChild(roomFillBar);
    roomFillBar.textContent = room.cleanliness;
    roomFillBar.style.width = `${room.cleanliness / 10}rem`;

    roomCard.appendChild(roomBarContainer);

    const roomCleanTip = document.createElement("p");
    roomCleanTip.className = "room__cleanTip";
    roomCleanTip.textContent = `${room.cleanliness}% clean!`;
    roomCard.appendChild(roomCleanTip);

    roomsContainer.appendChild(roomCard);
  });

  body.appendChild(roomsContainer);
};

export { displayRooms };
