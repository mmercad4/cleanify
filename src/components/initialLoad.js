import { displayNav } from "./DOMDisplay/displayNav";
import { displayRooms } from "./DOMDisplay/displayRooms";
import { displayNewRoomBtn } from "./DOMDisplay/displayNewRoomBtn";
import { displayNewRoomPage } from "./DOMDisplay/displayNewRoomPage";

const initialLoad = () => {
  const body = document.body;
  body.innerHTML = "";
  displayNav();
  displayRooms();
  displayNewRoomBtn();
};

export default initialLoad;
