var index, newLoad, i, currentLifts, loadFactor, changedLiftId, refLifts, balancedLoads, tempLifts;

function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string' || object[propPath] !== undefined) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object

  for (let i = 0; i < propsNamesList.length; i++) {
    if (!result || result[propsNamesList[i]] === undefined) {
      return
    }

    result = result[propsNamesList[i]]
  }

  return result
}


  currentLifts = (getObjectProperty(___arguments.context.pageData, 'currentLifts'));
  refLifts = (getObjectProperty(___arguments.context.pageData, 'referenceLifts'));
  changedLiftId = (getObjectProperty(___arguments.context.getComponentDataStoreByUid('d8a91d2884b8c231c928ca78c2a85e76'), 'liftId'));
  tempLifts = [];
  balancedLoads = [];
  index = 1;
  for (var i_index in refLifts) {
    i = refLifts[i_index];
    loadFactor = (getObjectProperty(i, 'liftLoad')) / (getObjectProperty((refLifts[(changedLiftId - 1)]), 'liftLoad'));
    newLoad = Math.round(___arguments.value * loadFactor);
    currentLifts[(index - 1)] = ({ [`liftId`]: (getObjectProperty(i, 'liftId')),[`liftName`]: (getObjectProperty(i, 'liftName')),[`liftLoad`]: newLoad });
    index = index + 1;
  }