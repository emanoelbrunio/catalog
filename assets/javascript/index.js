const t1 = [
    {
        title: 'Adeus, passado',
        duration: 67
    },
    {
        title: 'Estranhas',
        duration: 45
    },
    {
        title: 'Vá falar com sapos',
        duration: 45
    },
    {
        title: 'Hermanos',
        duration: 45
    },
    {
        title: 'Wildfire',
        duration: 45
    },
    {
        title: 'IT-19',
        duration: 45
    },
]

const persons = [
    {
        name: 'Norman Reedus',
        nameSerie: 'Daryl Dixon'
    },
    {
        name: 'Andrew Lincoln',
        nameSerie: 'Rick Grimes'
    },
    {
        name: 'Melissa McBride',
        nameSerie: 'Carol Peletier'
    },
    {
        name: 'Lauren Cohan',
        nameSerie: 'Maggie Greene'
    },
    {
        name: 'Jeffrey Morgan',
        nameSerie: 'Negan'
    },
    {
        name: 'Danai Gurira',
        nameSerie: 'Michonne'
    },
    {
        name: 'Chandler Riggs',
        nameSerie: 'Carl Grimes'
    },
    {
        name: 'Steven Yeun',
        nameSerie: 'Glenn Rhee'
    },
    {
        name: 'Josh McDermitt',
        nameSerie: 'Eugene Porter'
    },
    {
        name: 'Christian Serratos',
        nameSerie: 'Rosita Espinosa'
    },
    {
        name: 'Ross Marquand',
        nameSerie: 'Aaron'
    },
    {
        name: 'Seth Gilliam',
        nameSerie: 'Gabriel Stokes'
    },
    {
        name: 'Alanna Masterson',
        nameSerie: 'Tara Chambler'
    },
    {
        name: 'Lennie James',
        nameSerie: 'Morgan Jones'
    },
    {
        name: 'Khary Payton',
        nameSerie: 'Ezekiel'
    },
   
]

let divEps = document.querySelector('.episodes');

// função que retorna a string HTML do episódio
function eps(i, title, duration) {
    return (
        `
        <img src="assets/imagens/temporadas/t1e${i}.jpg" alt="">
        <div class="divTitles">
            <h4 class="titleEps">${i}. ${title}</h4>
            <h4 class="duration">${duration} min.</h4>
        </div>
        <button class="cta">Assistir</button>
        `
    )
}

for (let i = 1; i <= 6; i++) {
  const item = document.createElement("li");
  item.classList.add('eps');
  item.innerHTML = eps(i, t1[i-1].title, t1[i-1].duration);
  divEps.appendChild(item);
}



//-----------------------------------------

let divPersons = document.querySelector('.persons');
function person(i, name, nameSerie) {
    return (
        `
        <img src="assets/imagens/persons/p${i}.jpeg" alt="">
        <div class="divNames">
            <h4 class="name">${name}</h4>
            <h4 class="nameSerie">${nameSerie}</h4>
        </div>
        `
    )
}

for (let i = 1; i <= 15; i++) {
  const item = document.createElement("li");
  item.classList.add('person');
  item.innerHTML = person(i, persons[i-1].name, persons[i-1].nameSerie);
  divPersons.appendChild(item);
}

