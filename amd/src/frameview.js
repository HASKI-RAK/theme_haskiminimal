export const init = () => {
    let element = document.getElementById("page-header");
    element.style.visibility = 'hidden';
    element.style.height = '0px';
    element = document.getElementById('theme_boost-drawers-courseindex');
    element.style.visibility = 'hidden';
    element = document.querySelector('.navbar.fixed-top.navbar-light.bg-white.navbarexpand');
    element.style.visibility = 'hidden';
    element.style.height = '0px';
    element = document.getElementById('page');
    element.style.marginRight = '0px';
    element.style.marginTop = '0px';
    element = document.getElementsByClassName('activity-navigation')[0];
    element.style.visibility = 'hidden';
    element = document.getElementById('moremenu-6537ebdab6f5a-nav-tabs');
    element.style.visibility = 'hidden';
};