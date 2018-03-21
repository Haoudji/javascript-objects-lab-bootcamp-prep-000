var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  return object.assign()
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var updatedObject = object.key = value;
  return updatedObject
}