const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json()
}

//kapcsoszárojel, egy objectumból kivonjuk a kulcsokat  (object destructuring)


const beerComponent = ({title, sub, text}) => {
    return `
        <section class="image ${title}"></section>
        <section class="heading">
            <h1>${title}</h1>
        </section>
        <section class="text">
            <div class="verticalLine"></div>
            <h2>${sub}</h2>
            <h3>${text}</h3>
        </section>
    `
}

const loadEvent = async () => {
    const rootElement = document.getElementById("root");
    const result = await parseJSON("/beers")
    
    rootElement.insertAdjacentHTML(
        'beforeend',
        result.cards.map( beer => beerComponent(beer) ).join("")
    )
}
window.addEventListener("load", loadEvent);