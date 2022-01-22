function modalControls() {

    const forYouButton = document.getElementById("for-you-button");
    const contactButton = document.getElementById("contact-button");

    const controls = {
        openModal: function(modalID) {
            const modal = document.getElementById(modalID);
            modal.classList.add("show");
        },

        closeModal: function(modalID) {
            const modal = document.getElementById(modalID);

            if(modal.classList.contains("modal-container") && modal.classList.contains("show")) {
                modal.classList.remove("show");
            }
        },

        saveUserOption: function(option) {
            localStorage.userOption = option;
        }
    }

    forYouButton.addEventListener("click", () => controls.openModal("for-you-modal"));
    contactButton.addEventListener("click", () => controls.openModal("contact-modal"));
    

    document.addEventListener("click", event => {
        const element = event.target;

        if(element.classList.contains("option")) {
            controls.saveUserOption(element.id);
        }

        if(element.classList.contains("modal-container")) {
            controls.closeModal(element.id);
        }
    } );
    
}

modalControls();
