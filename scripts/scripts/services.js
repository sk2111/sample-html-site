const accountsSec1 = document.querySelector("#sec-1-sub-accounts");
const taxationSec1 = document.querySelector("#sec-1-sub-taxation");
const financeSec1 = document.querySelector("#sec-1-sub-finance");
const viewAccount = document.querySelector("#sec-1-view-1");
const viewTaxation = document.querySelector("#sec-1-view-2");
const viewFinance = document.querySelector("#sec-1-view-3");

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
    hideAllViews(){
        viewAccount.classList.add('dp-view-none');
        viewTaxation.classList.add('dp-view-none');
        viewFinance.classList.add('dp-view-none');
    }
    removeDpNoneForView(name)
    {
        if(name === 'accounts'){
            viewAccount.classList.remove("dp-view-none");
            viewAccount.classList.add("animate__animated","animate__fadeIn");
        }
        if(name === 'taxation'){
            viewTaxation.classList.remove("dp-view-none");
            viewTaxation.classList.add("animate__animated","animate__fadeIn");
        }
        if(name === 'finance'){
            viewFinance.classList.remove("dp-view-none");
            viewFinance.classList.add("animate__animated","animate__fadeIn");
        }
    }
    subTabChanged(e){
        this.clearAllHighlights();
        this.hideAllViews();
        let childNodes = e.childNodes;
        let name = e.getAttribute('myname');
        // add highlighted tab class
        e.classList.add("highlighted-tab");
        // show view for respective tab
        this.removeDpNoneForView(name);
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