
const beers = {
    "id": "beers",
    "logo": "Best Beers",
    "button": "details",
    "cards": [
        {
            "title": "Mango Bay",
            "sub": "Mad Scientist Beer",
            "text": "Pale Ale - American"
        },
        {
            "title": "Távoli Galaxis",
            "sub": "Rothbeer Brewery",
            "text": "IPA - American"
        },
        {
            "title": "Flying Rabbit AIPA",
            "sub": "MONYO Brewing Co.",
            "text": "IPA - American"
        },
        {
            "title": "Liquid Cocaine",
            "sub": "Mad Scientist Beer",
            "text": "IPA - Imperial"
        },
        {
            "title": "Organic Chocolate Stout",
            "sub": "Samuel Smith Old Brewery",
            "text": "Stout - English"
        },
        {
            "title": "Bracia",
            "sub": "Thornbridge Brewery",
            "text": "Strong Ale - English"
        },
        {
            "title": "Oatmeal Stout",
            "sub": "Samuel Smith Old Brewery",
            "text": "Stout - Oatmeal"
        },
        {
            "title": "Black Tokyo Horizon",
            "sub": "BrewDog",
            "text": "Stout - American Imperial"
        },
        {
            "title": "Vintage Ale",
            "sub": "Fuller's",
            "text": "Old Ale"
        },
        {
            "title": "All the Leaves are Brown",
            "sub": "Tempest Brewing Company",
            "text": "Brown Ale - American"
        }
    ]
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
    const result = beers
    
    bodyElement.insertAdjacentHTML('afterbegin', plusComponentForDesign())

    rootElement.insertAdjacentHTML(
        'beforeend',
        result.cards.map( beer => beerComponent(beer) ).join("")
    )
}
window.addEventListener("load", loadEvent);