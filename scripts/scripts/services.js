const accountsSec1 = document.querySelector("#sec-1-sub-accounts");
const taxationSec1 = document.querySelector("#sec-1-sub-taxation");
const financeSec1 = document.querySelector("#sec-1-sub-finance");

class servicesHandlerClass {
    constructor(){}
    clearAllHighlights(){
        let tabs = [accountsSec1,taxationSec1,financeSec1];
        tabs.forEach((element)=>{
            // clear highlighted tab
            element.classList.remove("highlighted-tab");
            // clear color in child nodes
            let childNodes = element.childNodes;
            childNodes.forEach(element => {
                if(element.localName === 'img')
                {
                    element.src ="/assets/logo/nextro_logo_gray.svg";
                }
                else if(element.localName === 'div'){
                    // Text div
                    element.style.color="#9e9e9e";
                }
            });
        });
    }
    subTabChanged(e){
        this.clearAllHighlights();
        let childNodes = e.childNodes;
        // add highlighted tab class
        e.classList.add("highlighted-tab");
        // color update to child nodes
        childNodes.forEach(element => {
            if(element.localName === 'img')
            {
                element.src ="/assets/logo/nextro_logo_skyblue.svg";
            }
            else if(element.localName === 'div'){
                // Text div
                element.style.color="#0747a6";
            }
        });
    }
}

const servicesHandler = new servicesHandlerClass();