function modalControls() {
    const modal = document.getElementById("for-you-modal");
    const forYouButton = document.getElementById("for-you-button");

    const openModal = () => modal.classList.add("show");
    const closeModal = () => modal.classList.remove("show");
    const saveUserOption = option => localStorage.userOption = option;

    forYouButton.addEventListener("click", event => openModal());

    modal.addEventListener("click", event => {
        if(event.target.id === "for-you-modal") {
            closeModal();
        }

        if(event.target.classList.contains("option")) {
            saveUserOption(event.target.id);
        }
    });
}

modalControls();
