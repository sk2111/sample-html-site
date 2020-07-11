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
    removeClassArr(arr,className){
        arr.forEach(element => {
            element.classList.remove(className);
        });
    }
    addClassArr(arr,className){
        arr.forEach(element => {
            element.classList.add(className);
        });
    }
    removeClassElem(element,className){
        element.classList.remove(className);
    }
    addClassElem(element,className){
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
    changeViewIndex(){
        //hide everything
        this.addClassArr(Object.values(this.viewRef),'dp-view-none');
        // Bring view for selected index
        this.removeClassElem(this.viewRef[this.currentViewIndex],'dp-view-none');
    }
    changeRoundIndex(){
        //clear all blue classes
        this.removeClassArr(Object.values(this.roundRef),'blue-color-background');
        // assign blue class to selected index
        this.addClassElem(this.roundRef[this.currentViewIndex],'blue-color-background');
    }
    _handleViewLogic(){
        // change round color to new index
        this.changeRoundIndex();
        // change view index
        this.changeViewIndex();
    }
    moveSec3Right(){
        if(this.currentViewIndex === 2)
        {
            this.currentViewIndex = 0;
        }
        else{
            this.currentViewIndex += 1;
        }
        this._handleViewLogic();
    }
    moveSec3Left(){
       if(this.currentViewIndex === 0)
       {
        this.currentViewIndex = 2;
       }
       else{
        this.currentViewIndex -= 1;
       }
       this._handleViewLogic();
    }
    roundBtnClickSec3(e){
        let compIndex = e.getAttribute('compIndex');
        this.currentViewIndex = Number(compIndex);
        this._handleViewLogic();
    }
}

const switchViewHandlerIns = new SwitchViewHandlerSec3();


