function room(name, cleanliness, tasks, frequency, lastCleaned = false) {
  return {
    name: name,
    cleanliness: cleanliness,
    tasks: tasks,
  };
}

export default room;
