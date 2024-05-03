const input = document.getElementById('display')
const button = document.getElementById('buttonEqual')
const buttonRes = document.getElementById('buttonRes')
const buttonDel = document.getElementById('buttonDel')
const bgToggler = document.getElementById('bgToggler')


const deleteButton =() => {
    input.value = input.value.slice(0, -1)
}

buttonDel.addEventListener('click', deleteButton)

const resetButton = () => {
    input.value = ''
}

buttonRes.addEventListener('click', resetButton)

const computeResult = () => {
    const result = eval(input.value)
    input.value = result
}

button.addEventListener('click', computeResult)

// const bgColor = () => {
//     document.body.style.backgroundColor ='cyan'
//     document.body.style.backgroundColor ='green'
// }

// bgToggler.addEventListener('click', bgColor)

const colors = ['white', '#3e4d80', '#1d2951']

colorIndex = 0

const bgColor = () => {
    document.body.style.backgroundColor = colors[colorIndex]
    colorIndex++
    colorIndex === colors.length ? colorIndex = 0 : colorIndex
}

bgToggler.addEventListener('click', bgColor)

// const togglerAnim = ()  => {
//     currentLeft = parseInt(bgToggler.style.left) || 0
//     bgToggler.style.left = (currentLeft + 10) + 'px'
// }

// bgToggler.addEventListener('click', togglerAnim)