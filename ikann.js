const btnEnggak = document.getElementById('btn-enggak');
let angka = 0;

btnEnggak.addEventListener('click', () => {
    angka++
    const array = [-40, 30, 100, -89, 50, 200, 24, 16]
    const nilai = array[Math.floor(Math.random() * array.length)]
    const nilai2 = array[Math.floor(Math.random() * array.length)]
    btnEnggak.style.transform = `translateY(${nilai}px) translateX(${nilai2}px)`

    if (angka > 5) {
        angka = 0;
        alert('Kok kamu Jahat banget sih sama Ikann?\nKali kali IYAIN aja biar Orang nya Senang :D')
    }
});
