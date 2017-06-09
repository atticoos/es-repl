module.exports = function appendUniquely(baseCollection, collection) {
  return collection.reduce((appendedCollection, item) => {
    return appendedCollection.indexOf(item) === -1
      ? appendedCollection.concat(item)
      : appendedCollection
  }, baseCollection)
}
