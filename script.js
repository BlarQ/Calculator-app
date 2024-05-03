const input = document.getElementById('display')
const button = document.getElementById('buttonEqual')
const buttonRes = document.getElementById('buttonRes')
const buttonDel = document.getElementById('buttonDel')
const bgToggler = document.getElementById('bgToggler')
const textColor = document.getElementById('head')
const textColor1 = document.getElementById('head1')
const textColor2 = document.getElementById('head2')
const textColor3 = document.getElementById('head3')
const textColor4 = document.getElementById('head4')


//Delete Function
const deleteButton =() => {
    input.value = input.value.slice(0, -1)
}

buttonDel.addEventListener('click', deleteButton)

//Reset Function
const resetButton = () => {
    input.value = ''
}

buttonRes.addEventListener('click', resetButton)

//Compute Function(Equal to)
const computeResult = () => {
    try{
        const result = eval(input.value)
        input.value = result
    }
    catch(err){
        input.value = 'Error'
    }
}

button.addEventListener('click', computeResult)

//Background Color Functions
const colors = ['white', '#3e4d80', '#1d2951']
const tColor = ['black', 'white', 'cyan']

colorIndex = 0
tColorIndex = 0

const bgColor = () => {
    document.body.style.backgroundColor = colors[colorIndex]
    colorIndex++
    colorIndex === colors.length ? colorIndex = 0 : colorIndex
    textColor.style.color = tColor[tColorIndex]
    textColor1.style.color = tColor[tColorIndex]
    textColor2.style.color = tColor[tColorIndex]
    textColor3.style.color = tColor[tColorIndex]
    textColor4.style.color = tColor[tColorIndex]
    tColorIndex++
    tColorIndex === tColor.length ? tColorIndex = 0 : tColorIndex
}

bgToggler.addEventListener('click', bgColor)

// const togglerAnim = ()  => {
//     currentLeft = parseInt(bgToggler.style.left) || 0
//     bgToggler.style.left = (currentLeft + 10) + 'px'
// }

// bgToggler.addEventListener('click', togglerAnim)