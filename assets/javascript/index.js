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

let divEps = document.querySelector('.episodes');

// função que retorna a string HTML do episódio
function eps(i, title, duration) {
    return (
        `
        <img src="assets/imagens/t1e${i}.jpg" alt="">
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

console.log('opaaaaa')