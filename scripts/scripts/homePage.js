const sec2Accounts = document.querySelector('#accounts-card-sec-2');
const sec2Taxation = document.querySelector('#taxation-card-sec-2');
const sec2Finance = document.querySelector('#finance-card-sec-2');

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