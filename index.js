const colorInput = document.getElementById('favcolor');
const type = document.getElementById('scheme-select')
const btn = document.getElementById('btn')
const displayColors = document.getElementById('palette')



let seedValue = ''
let colorType = ''

colorInput.addEventListener('input', () => {
      seedValue  =  colorInput.value.replace('#', '');
});
      

btn.addEventListener('click' , function(){
    colorType = type.value.toLowerCase()
    getColor()
})


// https://www.thecolorapi.com/scheme?hex=21a690&mode=Monochrome&count=5

function getColor(){
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedValue}&mode=${colorType}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colorArr = data.colors.map(c => c.hex.value)
        renderColor(colorArr)
        // console.log(colorArr)
    })
    .catch(err => console.log(err))
}
  

function renderColor(colors){
    let html = ''
    for(let c of colors){
        html += `<div class="color" style="background:${c}">
            <span>${c}</span>
            </div>`
    }
    displayColors.innerHTML = html
    
    
}
