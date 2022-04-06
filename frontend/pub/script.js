const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json()
}

//kapcsoszárojel, egy objectumból kivonjuk a kulcsokat  (object destructuring)

const plusComponentForDesign = () => {
    return `
        <div class="verticalLine"></div>
        <hr class="horizontalLine">
        <div class="staticFilter"></div>
    `
}

const beerComponent = ({title, sub, text}) => {
    return `
        <section class="image ${title}"></section>
        <section class="heading">
            <h1>${title}</h1>
        </section>
        <section class="text">
            <div class="staticFilter2"></div>
            <div class="textLine">
                <p class="mark1">„</p>
                <div>
                    <h2>${sub}</h2>
                    <h3>${text}</h3>
                </div>
                <p class="mark2">”</p>
            </div>
        </section>
    `
}

const loadEvent = async () => {
    const bodyElement = document.querySelector('body');
    const rootElement = document.getElementById("root");
    const result = await parseJSON("/beers")
    
    bodyElement.insertAdjacentHTML('afterbegin', plusComponentForDesign())

    rootElement.insertAdjacentHTML(
        'beforeend',
        result.cards.map( beer => beerComponent(beer) ).join("")
    )
}
window.addEventListener("load", loadEvent);