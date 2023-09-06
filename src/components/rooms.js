import room from "./room";

const room1 = room("bedroom", 20, [
  {
    name: "Take out the trash",
    cleanliness: 80,
    frequency: 2,
    lastCleaned: 5,
  },
  {
    name: "Dishes",
    cleanliness: 50,
    frequency: 1,
    lastCleaned: 3,
  },
  {
    name: "Mop and sweep",
    cleanliness: 20,
    frequency: 3,
    lastCleaned: 2,
  },
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
