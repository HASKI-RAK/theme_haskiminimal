export const init = () => {
    if(window.self !== window.top){
        let continuebutton = document.getElementsByClassName("continuebutton");
        if(continuebutton !== undefined && continuebutton !== null) {
            continuebutton.forEach(button => {
                button.style.visibility = "hidden";
            });
        }
        let element = document.getElementById("page-header");
        if(element !== null && element !== undefined){
            element.style.display = 'none';
            element.style.height = '0px';
        }
        element = document.getElementById('theme_boost-drawers-courseindex');
        if(element !== null && element !== undefined){
          element.style.display = 'none';
        }
        element = document.querySelector('.navbar.fixed-top.navbar-light.bg-white');
        if(element !== null  && element !== undefined){
            element.style.visibility = 'hidden';
            element.style.height = '0px';
        }
        element = document.querySelector('#page.drawers.show-drawer-left.drag-container');
        if(element !== null  && element !== undefined){
                    element.style.marginLeft = '0px';
        element.style.marginTop = '0px';
        element.style.height = '100%';
        }
        element = document.getElementsByClassName('activity-navigation')[0];
        if(element !== null  && element !== undefined){
            element.style.visibility = 'hidden';
        }
        element = document.querySelector('.nav.more-nav.nav-tabs');
        if(element !== null  && element !== undefined){
            element.style.visibility = 'hidden';
            element.style.height = '0px';
        }
    }
};