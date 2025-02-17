document.addEventListener("DOMContentLoaded", function(){
    const percentageSlider = document.getElementById('percentageSlider')
    const percentageValue = document.getElementById('percentageValue')

    percentageSlider.addEventListener("input", function(){
        percentageValue.textContent = `${percentageSlider.value}%`
    })
})

function calculatePercentage(){
    const percentageSlider = document.getElementById('percentageSlider').value
    const baseNumber = document.getElementById('baseNumber').value

    if(baseNumber ==""){
        alert("please enter a baseNumber")
        return
    }

    const result = (parseFloat(baseNumber) * parseFloat(percentageSlider) /100).toFixed(2)

    document.getElementById('result').innerHTML = `result: ${result}`

}