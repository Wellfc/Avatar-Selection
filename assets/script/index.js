'use strict';

// Get all avatar list elements
const avatarListElements = document.querySelectorAll('.avatar-list');

// Get myAvatar element
const myAvatar = document.querySelector('.myAvatar');

// Get the REMOVE and SAVE buttons
const removeButton = document.getElementById('remove');
const saveButton = document.getElementById('save');

// Add a click event listener to each avatar
avatarListElements.forEach((avatar, index) => {
    avatar.addEventListener('click', () => {
        // Remove any previously selected avatar
        avatarListElements.forEach((avatar) => {
            avatar.classList.remove('selected');
        });

        // Highlight the selected avatar
        avatar.classList.add('selected');

        // Enable the SAVE button
        saveButton.removeAttribute('disabled');
    });
});

// Add a click event listener to the SAVE button
saveButton.addEventListener('click', () => {
    // Find the selected avatar
    const selectedAvatar = document.querySelector('.selected');

    if (selectedAvatar) {
        // Set the selected avatar as the background of myAvatar
        myAvatar.style.backgroundImage = getComputedStyle(selectedAvatar).backgroundImage;
    }

    // Clear the selected avatar
    avatarListElements.forEach((avatar) => {
        avatar.classList.remove('selected');
    });

    // Enable the REMOVE button
    removeButton.removeAttribute('disabled', 'disabled');
});

// Add a click event listener to the REMOVE button
removeButton.addEventListener('click', () => {
    // Reset the background of myAvatar to the default
    myAvatar.style.backgroundImage = 'url("./assets/img/Default-Avatar.jpg")';
    // Disable the REMOVE button
    removeButton.setAttribute('disabled', 'disabled');
    // Disable the SAVE button
    saveButton.setAttribute('disabled', 'disabled');
});
