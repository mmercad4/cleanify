import { displayNav } from "./DOMDisplay/displayNav";
import { displayRooms } from "./DOMDisplay/displayRooms";
import { displayNewRoomBtn } from "./DOMDisplay/displayNewRoomBtn";

const initialLoad = () => {
  displayNav();
  displayRooms();
  displayNewRoomBtn();
};

export default initialLoad;
