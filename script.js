function showContent(contentId) {
    // Hide all content elements
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Show the selected content element
    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    // Update the active class for buttons
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}