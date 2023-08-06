let numberBtn = document.querySelectorAll('.number');
let arr = Array.from(numberBtn);

let clear = document.querySelector('.clear')
let del = document.querySelector('.delete')
let equal = document.querySelector('.equal')

let output = document.querySelector('.output');
arr.map((item) => {
  item.addEventListener('click', () => {
    output.value += item.value;
  })
})

clear.addEventListener('click', () => {
  output.value = ''
})

del.addEventListener('click', () => {
  output.value = output.value.toString().slice(0, -1)
})

equal.addEventListener('click', () => {
  output.value = eval(output.value)

})