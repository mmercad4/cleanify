import room from "./room";
import rooms from "./rooms";

const addRoom = (roomName) => {
  const newRoom = room(roomName);
  rooms.push(newRoom);
};

export default addRoom;
