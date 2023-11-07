export const init = () => {
    if(window.self !== window.top){
        let element = document.getElementById("page-header");
        element.style.display = 'none';
        element.style.height = '0px';
        element = document.getElementById('theme_boost-drawers-courseindex');
        element.style.display = 'none';
        element = document.querySelector('.navbar.fixed-top.navbar-light.bg-white');
        element.style.visibility = 'hidden';
        element.style.height = '0px';
        element = document.querySelector('#page.drawers.show-drawer-left.drag-container');
        element.style.marginLeft = '0px';
        element.style.marginTop = '0px';
        element.style.height = '100%';
        element = document.getElementsByClassName('activity-navigation')[0];
        element.style.visibility = 'hidden';
        element = document.querySelector('.nav.more-nav.nav-tabs');
        element.style.visibility = 'hidden';
        element.style.height = '0px';
    }
};