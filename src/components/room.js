function room(name, cleanliness, tasks, frequency, lastCleaned = false) {
  return {
    name: name,
    cleanliness: cleanliness,
    tasks: tasks,
    frequency: frequency,
    lastCleaned: lastCleaned,
  };
}

export default room;
