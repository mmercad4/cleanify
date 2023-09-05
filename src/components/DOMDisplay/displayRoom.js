import rooms from "../rooms";

const displayRoom = (e) => {
  e.preventDefault();
  const card = e.target.closest(".card__room");
  const name = card.querySelector(".room__heading").textContent;

  const room = rooms.find((room) => room.name === name);

};

export default displayRoom;
