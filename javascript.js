const gridContainer = document.getElementById('gridContainer')
const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeVale = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')

function setCurrentColor(newColor) {
  currentColor = newColor
}

let currentMode = 'color'
function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

colorPicker.oninput = (e) => 
setCurrentColor(e.target.value)
colorBtn.onclick = () =>
setCurrentMode('color') 
rainbowBtn.onclick = () =>
setCurrentMode('rainbow')
eraserBtn.onclick = () =>
setCurrentMode('eraser')
clearBtn.onclick = () =>
resetGrid()
sizeSlider.onmousemove = (e) =>
updateSizeValue(e.target.value)
sizeSlider.onchange = (e) =>
changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  resetGrid()
}

function updateSizeValue(value) {
  sizeVale.innerHTML = `${value} x ${value}`
}

function resetGrid() {
  clearGrid()
  setupGrid(currentSize)
}

function clearGrid() {
  gridContainer.innerHTML = ''
}

let currentSize = 16

function setupGrid(size) {
  gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < (size * size); i++) {
    let gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')

    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)

    gridContainer.appendChild(gridElement)
  }
}

let currentColor = '#2C3333'

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = 
    Math.floor(Math.random() * 256)
      const randomG =
    Math.floor(Math.random() * 256)
      const randomB = 
    Math.floor(Math.random() * 256)
        e.target.style.backgroundColor
    = `rgb(${randomR}, ${randomG}, ${randomB})`
    
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor
    = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#FFF9CA'
    }
  }

  function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    } if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }

    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active') 
    } else if (newMode === 'color') {
       colorBtn.classList.add('active')
    }
  }


    window.onload = () => {
      setupGrid(16)
      activateButton('color')
    }


