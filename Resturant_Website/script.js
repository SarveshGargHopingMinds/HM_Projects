const allMenuButton = document.getElementById('all-menu');
const breakfastMenuButton = document.getElementById('breakfastmenu');
const lunchMenuButton = document.getElementById('lunchmenu');
const dinnerMenuButton = document.getElementById('dinnermenu');
const sweetsMenuButton = document.getElementById('sweetsmenu');
const menuSections = document.querySelectorAll('.menu-section');

allMenuButton.addEventListener('click', () => {
    menuSections.forEach((section) => {
        section.style.display = 'block';
    });
});

breakfastMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none'; 
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id === 'breakfast');
    filteredSections.forEach(section => {
        section.style.display = 'block';
 
         
    });
});

lunchMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none';
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='lunch');
    filteredSections.forEach(section => {
        section.style.display = 'block'; 
    });
});


dinnerMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none';
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='dinner');
    filteredSections.forEach(section => {
        section.style.display = 'block'; 
    });
});


sweetsMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none';
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='sweets');
    filteredSections.forEach(section => {
        section.style.display = 'block';
    });
});


menuSections.forEach((section) => {
    section.style.display = 'none';
});

 