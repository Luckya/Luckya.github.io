import {animes} from "./data.js"


console.log(animes)

animes.forEach((anime)=>{
    const container = document.getElementById('container')

    let div = document.createElement('div')
    div.setAttribute("id", "anime_div")

    let span = document.createElement('span')
    span.setAttribute("class","episode_amount")

    let img = document.createElement('img')
    img.setAttribute("src", anime.anime_url)

    let p = document.createElement('p')
    p.innerHTML = anime.name

    let ul_element = document.createElement("ul")

    anime.tags.forEach((i)=>{
        let li_element = document.createElement("li")
        li_element.innerHTML = i
        ul_element.appendChild(li_element)
    })

    container.appendChild(div)
    div.appendChild(span)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(ul_element)
})
