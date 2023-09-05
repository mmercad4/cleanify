import room from "./room";

const room1 = room("bedroom", 20, [
  "Sweep",
  "dust fan",
  "Clean Erin's Desk",
  "Empty out the fridge",
  ,
  "Empty out the fridge",
  ,
  "Empty out the fridge",
  ,
  "Empty out the fridge",
]);

const room2 = room("Kitchen", 60, [
  "mop",
  "Clean Dishes",
  "Empty out the fridge",
  "Empty out the fridge",
]);

const room3 = room("Office", 100, [
  "Clean monitors",
  "clean cat litter",
  "Wipe down and reset desk",
]);

const rooms = [room1, room2, room3];

export default rooms;
