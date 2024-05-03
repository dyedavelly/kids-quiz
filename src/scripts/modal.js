
export function openModal(modal) {
    if(modal === null) return
    modal.classList.add('active');
}

export function closeModal(modal) {
    if(modal === null) return
    modal.classList.remove('active');
}

//export default {openModal, closeModal}