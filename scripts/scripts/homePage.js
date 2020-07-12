const sec2Accounts = document.querySelector('#accounts-card-sec-2');
const sec2Taxation = document.querySelector('#taxation-card-sec-2');
const sec2Finance = document.querySelector('#finance-card-sec-2');
const ACCOUNTS_TITLE_CONSTANT = "ACCOUNTS";
const TAXATION_TITLE_CONSTANT = "TAXATION";
const FINANCE_TITLE_CONSTANT = "FINANCE";
// section 3 reference
const sec3Container = document.querySelector("#sec-3-container");
const sec3TitleHeader = document.querySelector("#sec-3-titleHeader");
const sec3round0 = document.querySelector('#sec-3-round-0');
const sec3round1 = document.querySelector('#sec-3-round-1');
const sec3round2 = document.querySelector('#sec-3-round-2');
const sec3View0  = document.querySelector('#sec-3-view-0');
const sec3View1  = document.querySelector('#sec-3-view-1');
const sec3View2  = document.querySelector('#sec-3-view-2');
const sec3Anim   = document.querySelector('#sec3-anim-con');

// section 4 reference
const sec4Container = document.querySelector("#sec-4-container");
const sec4TitleHeader = document.querySelector("#sec-4-titleHeader");
const sec4round0 = document.querySelector('#sec-4-round-0');
const sec4round1 = document.querySelector('#sec-4-round-1');
const sec4round2 = document.querySelector('#sec-4-round-2');
const sec4View0  = document.querySelector('#sec-4-view-0');
const sec4View1  = document.querySelector('#sec-4-view-1');
const sec4View2  = document.querySelector('#sec-4-view-2');
const sec4Anim   = document.querySelector('#sec4-anim-con');
// section 5 reference
const sec5Container = document.querySelector("#sec-5-container");
const sec5TitleHeader = document.querySelector("#sec-5-titleHeader");
const sec5round0 = document.querySelector('#sec-5-round-0');
const sec5round1 = document.querySelector('#sec-5-round-1');
const sec5round2 = document.querySelector('#sec-5-round-2');
const sec5View0  = document.querySelector('#sec-5-view-0');
const sec5View1  = document.querySelector('#sec-5-view-1');
const sec5View2  = document.querySelector('#sec-5-view-2');
const sec5Anim   = document.querySelector('#sec5-anim-con');

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
// sec 3 : Animation logic - Accounts
let isSec3AnimationDone = false; 
const observer3 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        if(!isSec3AnimationDone)
        {
            isSec3AnimationDone = true;
            setTimeout(()=>{
               sec3Anim.classList.remove('visible-hidden');
               sec3Anim.classList.add("animate__animated","animate__fadeInUp");
            },70);
        }
    }
        
}, { threshold: [0.1] });
observer3.observe(document.querySelector("#sec3-anim-con"));
// sec 4 : Animation logic - TAXATION
let isSec4AnimationDone = false; 
const observer4 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        if(!isSec4AnimationDone)
        {
            isSec4AnimationDone = true;
            setTimeout(()=>{
               sec4Anim.classList.remove('visible-hidden');
               sec4Anim.classList.add("animate__animated","animate__fadeInUp");
            },70);
        }
    }
        
}, { threshold: [0.1] });
observer4.observe(document.querySelector("#sec4-anim-con"));
// sec 5 : Animation logic - Finance
let isSec5AnimationDone = false; 
const observer5 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        if(!isSec5AnimationDone)
        {
            isSec5AnimationDone = true;
            setTimeout(()=>{
               sec5Anim.classList.remove('visible-hidden');
               sec5Anim.classList.add("animate__animated","animate__fadeInUp");
            },70);
        }
    }
        
}, { threshold: [0.1] });
observer5.observe(document.querySelector("#sec5-anim-con"));
// Section 3 : arrow shift logic
class commonHelpers {
    constructor(){}
    removeClassArr(arr,...className){
        arr.forEach(element => {
            element.classList.remove(...className);
        });
    }
    addClassArr(arr,...className){
        arr.forEach(element => {
            element.classList.add(...className);
        });
    }
    removeClassElem(element,...className){
        element.classList.remove(...className);
    }
    addClassElem(element,...className){
        element.classList.add(...className);
    }
}
class SwitchViewHandlerSec extends commonHelpers{
    constructor(titleHeaders,roundRef,viewRef,secTitleRef){
        super();
        this.currentViewIndex = 0;
        this.lastViewIndex = 0;
        this.isArrowClicked;
        this.titleHeaders = titleHeaders;
        this.roundRef = roundRef;
        this.viewRef = viewRef;
        this.secTitleHeader = secTitleRef;
    }
    changeHeaderTitle(){
        this.secTitleHeader.innerHTML = '';
        this.secTitleHeader.innerHTML = this.titleHeaders[this.currentViewIndex];
        this.secTitleHeader.classList.remove("animate__animated","animate__fadeInUp");
        this.secTitleHeader.offsetHeight;//Forcing animation to occur since removing class and add class wont trigger layout operation
        this.secTitleHeader.classList.add("animate__animated","animate__fadeInUp");
    }
    changeViewIndex(){
        //hide everything
        this.addClassArr(Object.values(this.viewRef),'dp-view-none');
        // Bring view for selected index
        this.removeClassElem(this.viewRef[this.currentViewIndex],'dp-view-none');
        // Clear all animation class
        this.removeClassArr(Object.values(this.viewRef),"animate__animated","animate__fadeInRight","animate__fadeInLeft");
        // Add Class Elem for animation cheveron arrow
        if(this.isRightSideAnimation && this.isArrowClicked)
        {
            this.addClassElem(this.viewRef[this.currentViewIndex],"animate__animated","animate__fadeInRight");
        }
        else if(!this.isRightSideAnimation && this.isArrowClicked){
            this.addClassElem(this.viewRef[this.currentViewIndex],"animate__animated","animate__fadeInLeft");
        }
        // Add Class Elem animation forround btn click
        if(!this.isArrowClicked)
        {
            if(this.lastViewIndex < this.currentViewIndex)
            {
                this.addClassElem(this.viewRef[this.currentViewIndex],"animate__animated","animate__fadeInRight");
            }
            else{
                this.addClassElem(this.viewRef[this.currentViewIndex],"animate__animated","animate__fadeInLeft");
            }
        }
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
        //change header title
        this.changeHeaderTitle();
    }
    moveSecRight(){
        this.isRightSideAnimation = true;
        this.isArrowClicked = true;
        if(this.currentViewIndex === 2)
        {
            this.currentViewIndex = 0;
        }
        else{
            this.currentViewIndex += 1;
        }
        this._handleViewLogic();
    }
    moveSecLeft(){
       this.isRightSideAnimation = false;
       this.isArrowClicked = true;
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
        this.isArrowClicked = false;
        let compIndex = e.getAttribute('compIndex');
        this.lastViewIndex = this.currentViewIndex;
        this.currentViewIndex = Number(compIndex);
        this._handleViewLogic();
    }
}
const switchViewHandler3Ins = new SwitchViewHandlerSec(['Corporate Filings','Company Act','Full Auditing'],
                                                      {0:sec3round0,1:sec3round1,2:sec3round2},
                                                      {0:sec3View0,1:sec3View1,2:sec3View2},
                                                      sec3TitleHeader);
const switchViewHandler4Ins = new SwitchViewHandlerSec(['Start Up Services','New Services','Full Taxation'],
                                                      {0:sec4round0,1:sec4round1,2:sec4round2},
                                                      {0:sec4View0,1:sec4View1,2:sec4View2},
                                                      sec4TitleHeader);
const switchViewHandler5Ins = new SwitchViewHandlerSec(['Our Finance Expertise','Finance Services','Finance Consulting'],
                                                      {0:sec5round0,1:sec5round1,2:sec5round2},
                                                      {0:sec5View0,1:sec5View1,2:sec5View2},
                                                      sec5TitleHeader);


// AddEvent listener for scroll into section
window.addEventListener('nextro-card-scroll',(e)=>{
    let view = e.detail.cardTitle;
    if(view.toLowerCase() === ACCOUNTS_TITLE_CONSTANT.toLowerCase()){
        sec3Container.scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    if(view.toLowerCase() === TAXATION_TITLE_CONSTANT.toLowerCase()){
        sec4Container.scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    if(view.toLowerCase() === FINANCE_TITLE_CONSTANT.toLowerCase()){
        sec5Container.scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
});
// Add Event listner 
sec3Container.addEventListener('swipe-left',()=>{
    switchViewHandler3Ins.moveSecLeft();
})