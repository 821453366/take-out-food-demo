function bestCharge(selectedItems) {
  let array_key = [];
  let count = [];

  selectedItems.forEach(item => {
    array_key.push(item.split("-"))
  })
  array_key.forEach(data => {
    if (data[1] === undefined)
      data[1] = 1
  })

  return
}
