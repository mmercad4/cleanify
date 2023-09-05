function task(name, cleanliness, frequency, lastCleaned = false) {
  return {
    name: name,
    cleanliness: cleanliness,
    frequency: frequency,
    lastCleaned: lastCleaned,
  };
}

export default task;
