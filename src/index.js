import * as aboutModal from './scripts/modal.js';

document.addEventListener('DOMContentLoaded', ()=> {
    const openModalButton = document.getElementById('aboutButton');
    const closeModalButton = document.getElementById('closeButton');
    const overlay = document.getElementById('overlay');
    
    openModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        debugger
        aboutModal.openModal(modal);
    });
    
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('aboutModal');
        aboutModal.closeModal(modal);
    });
});
