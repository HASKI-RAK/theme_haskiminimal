export const init = () => {
    if(window.self !== window.top){
        let continuebutton = document.getElementsByClassName("continuebutton");
        if(continuebutton !== undefined && continuebutton !== null) {
            continuebutton.forEach(button => {
                button.style.visibility = "hidden";
            });
        }
    }
};