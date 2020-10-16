const Random = collection => {
  const totalCount = collection.length;
  const randomElementIndex = Math.floor(Math.random() * totalCount);
  const randomElement = collection[randomElementIndex];

  return randomElement;
}

export default Random;