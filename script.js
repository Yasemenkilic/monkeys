const gozukapali = document.querySelector('.kapali');
const gozuacik = document.querySelector('.acik');

gozukapali.addEventListener('click', () => {
    if (gozuacik.classList.contains('acik')) {
        gozuacik.classList.add('active');
        gozukapali.classList.remove('active');
    }
}  );

gozuacik.addEventListener('click', () => {
    if (gozukapali.classList.contains('kapali')) {
        gozukapali.classList.add('active');
        gozuacik.classList.remove('active');
    }
} );