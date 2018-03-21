var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  object.key = value
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var updatedObject = object.key = value;
  return updatedObject
}