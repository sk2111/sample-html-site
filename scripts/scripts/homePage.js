const sec2Accounts = document.querySelector('#accounts-card-sec-2');
const sec2Taxation = document.querySelector('#taxation-card-sec-2');
const sec2Finance = document.querySelector('#finance-card-sec-2');

// section 3 reference
const sec3round0 = document.querySelector('#sec-3-round-0');
const sec3round1 = document.querySelector('#sec-3-round-1');
const sec3round2 = document.querySelector('#sec-3-round-2');
const sec3View0  = document.querySelector('#sec-3-view-0');
const sec3View1  = document.querySelector('#sec-3-view-1');
const sec3View2  = document.querySelector('#sec-3-view-2');

// Section 2 : Animation logic
//  Observer to find whether element isvisible in screen for section 2
let isSec2AnimationDone = false; 
const observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        console.log('Element has just become visible in screen');
        if(!isSec2AnimationDone)
        {
            isSec2AnimationDone = true;
            setTimeout(()=>{
                sec2Accounts.classList.remove('dp-none');
                sec2Taxation.classList.remove('dp-none');
                sec2Finance.classList.remove('dp-none');
            },70);
        }
    }
        
}, { threshold: [1] });
observer.observe(document.querySelector("#sec-2-card-con"));

// Section 3 : arrow shift logic
class commonHelpers {
    constructor(){}
    removeClass(arr,className){
        arr.forEach(element => {
            element.classList.remove(className);
        });
    }
    addClass(element,className){
        element.classList.add(className);
    }
}
class SwitchViewHandlerSec3 extends commonHelpers{
    constructor(){
        super();
        this.currentViewIndex = 0;
        this.roundRef = {
            0:sec3round0,1:sec3round1,2:sec3round2,
        };
        this.viewRef = {
            0:sec3View0,1:sec3View1,2:sec3View2,
        };
    }
    changeRoundIndex(){
        //clear all blue classes
        this.removeClass(Object.values(this.roundRef),'blue-color-background');
        // assign blue class to selected index
        this.addClass(this.roundRef[this.currentViewIndex],'blue-color-background');
    }
    moveSec3Right(){
        if(this.currentViewIndex === 2)
        {
            this.currentViewIndex = 0;
        }
        else{
            this.currentViewIndex += 1;
        }
        // change round color to new index
        this.changeRoundIndex();
        // change view index
    }
    moveSec3Left(){
       if(this.currentViewIndex === 0)
       {
        this.currentViewIndex = 2;
       }
       else{
        this.currentViewIndex -= 1;
       }
       // change round color to new index
       this.changeRoundIndex();
       // change view index
    }
}

const switchViewHandlerIns = new SwitchViewHandlerSec3();


