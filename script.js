const toggleEl = document.getElementById('toggle'),
  boxesEl = document.getElementById('boxes')

toggleEl.addEventListener('click', (e) => {
  toggleEl.classList.toggle('toggle--checked')
  boxesEl.classList.toggle('boxes--annually')
})
