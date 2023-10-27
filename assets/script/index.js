'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

// Get all avatar list elements
const avatarListElements = selectAll('.avatar-list');

// Get myAvatar element
const myAvatar = select('.myAvatar');

// Get the REMOVE and SAVE buttons
const removeButton = selectById('remove');
const saveButton = selectById('save');

// Add a click event listener to each avatar
avatarListElements.forEach((avatar, index) => {
    onEvent('click', avatar, () => {
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
onEvent('click', saveButton, () => {
    // Find the selected avatar
    const selectedAvatar = select('.selected');

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
onEvent('click', removeButton, () => {
    // Reset the background of myAvatar to the default
    myAvatar.style.backgroundImage = 'url("./assets/img/Default-Avatar.jpg")';
    // Disable the REMOVE button
    removeButton.setAttribute('disabled', 'disabled');
    // Disable the SAVE button
    saveButton.setAttribute('disabled', 'disabled');
});
