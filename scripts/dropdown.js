
document.addEventListener('click', event => {
    const isDropdownButton = event.target.classList.contains('dropdown-button');
    if(!isDropdownButton && event.target.closest('.dropdown-menu') != null){
        return;
    }

    let toggledDropdown;
    if(isDropdownButton) {
        toggledDropdown = event.target.closest('.dropdown-menu');
        toggledDropdown.classList.toggle('active');
    }

    document.querySelectorAll('.dropdown-menu').forEach(element => {
        if (element === toggledDropdown){
            return;
        }
        element.classList.remove('active');
    });
});

document.querySelectorAll('.dropdown-menu').forEach(element => {
    element.addEventListener('mouseleave', event => {
            element.classList.remove('active');
    });
});

// Change theme
document.addEventListener('click', event => {
    const themeItem = event.target.closest('.theme-item');
    if(!themeItem){
        return;
    }
    if(event.target.closest('.dropdown-menu').classList.contains('active')){
        document.body.className = themeItem.dataset.theme;
    }
});