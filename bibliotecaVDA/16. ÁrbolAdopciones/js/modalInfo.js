
const overlay = document.getElementById('overlay');
const closeButtons = document.getElementsByClassName('closeModal');
const openModal = document.getElementById('openModal');


for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', () => {
        overlay.style.opacity = '0'; // Cambiar la opacidad del overlay a 0
        setTimeout(() => {
            overlay.style.display = 'none'; 
            openModal.style.display = 'block'
        }, 500);
    });
}

openModal.addEventListener('click', () => {
    overlay.style.opacity = '1'; 
        setTimeout(() => {
            overlay.style.display = 'block';
            openModal.style.display = 'none'
        }, 50);
});