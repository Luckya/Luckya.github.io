let lcolor = document.getElementById("lcolor")
let rcolor = document.getElementById("rcolor")

lcolor.addEventListener("mouseover",() => {
    lcolor.style.backgroundColor="rgba(70, 0, 0, 1)"
})
lcolor.addEventListener("mouseout",() => {
    lcolor.style.backgroundColor="rgb(151, 29, 29)"
})

rcolor.addEventListener("mouseover",() => {
    rcolor.style.backgroundColor="rgba(0, 0, 0, 1)"
})
rcolor.addEventListener("mouseout",() => {
    rcolor.style.backgroundColor="rgb(38, 36, 36)"
})