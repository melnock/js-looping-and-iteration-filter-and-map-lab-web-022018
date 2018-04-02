// Code your solution here:
function driversWithRevenueOver(arr, num){
  return arr.filter(driver => driver.revenue > num )
}

function driverNamesWithRevenueOver(arr, num){
  return driversWithRevenueOver(arr, num).map(driver => driver.name)
}

function exactMatch(arr, search){
  const key = Object.keys(search)[0]
  const value = Object.values(search)[0]
  return arr.filter(driver => driver[key] === value)
}

function exactMatchToList(arr, search){
  return exactMatch(arr, search).map(driver => driver.name)
}
