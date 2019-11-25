module.exports = {
  intToBoolean
};

function intToBoolean(obj) {
  if (Array.isArray(obj)) {
    const convertedArray = obj.map(item => {
      item.completed = Boolean(item.completed);
      return item;
    });

    return convertedArray;
  } else {
    const convertedObject = {
      ...obj,
      completed: Boolean(obj.completed)
    };

    return convertedObject;
  }
}
