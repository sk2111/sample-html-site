// class NextroListCard extends HTMLElement {
//     constructor() {
//       super();
//       this.attachShadow({ mode: "open" });
//       /*html*/
//       this.shadowRoot.innerHTML = `
//         <style>
//         /* Resuable style*/
//         .flex-row{
//             display:flex;
//         }
//         .flex-col{
//             display:flex;
//             flex-direction:column;
//         }
//         .justify-sb{
//             justify-content:space-between;
//         }
//         .align-cen{
//             align-items:center;
//         }
//         .perfect-cen{
//             justify-content:center;
//             align-items:center;
//         }
//         /* Component specific style*/
      
//         /*Media queries*/
//         @media only screen and (max-width: 700px) {
          
//         }
//         </style>
//         <div class="">
          
//         </div>
//         `;

//         const hamIcon =  this.shadowRoot.querySelector('#ham-burger');
//         const hamContent =  this.shadowRoot.querySelector('#ham-content');
//         // normal anchor
//         const nnHome = this.shadowRoot.querySelector('#nn-home');
//         const nnServices = this.shadowRoot.querySelector('#nn-services');
//         const nnAbout = this.shadowRoot.querySelector('#nn-about');
//         const nnContact = this.shadowRoot.querySelector('#nn-contact');
//         this.normalAnchObj = {
//             home:nnHome,services:nnServices,about:nnAbout,contact:nnContact
//         };
//         //ham anchor
//         const hhHome = this.shadowRoot.querySelector('#hh-home');
//         const hhServices = this.shadowRoot.querySelector('#hh-services');
//         const hhAbout = this.shadowRoot.querySelector('#hh-about');
//         const hhContact = this.shadowRoot.querySelector('#hh-contact');
//         this.hamAnchObj = {
//             home:hhHome,services:hhServices,about:hhAbout,contact:hhContact
//         };
//         // Listerners
//         hamIcon.addEventListener('click',()=>{
//             hamContent.classList.toggle("ham-show");
//         });
//         window.addEventListener('resize',()=>{
//             hamContent.classList.remove("ham-show");
//         });
//     }
//     connectedCallback() {  }

//     static get observedAttributes() {
//         return ['card-title','card-description'];
//     }
//     attributeChangedCallback(attrName,oldVal,newVal) {
//         if(attrName === 'card-title')
//         {
//             this.handleSelectedTab(newVal,this.normalAnchObj);
//             this.handleSelectedTab(newVal,this.hamAnchObj);
//         }
//     }
//     disconnectedCallback() {  }
//   }
// customElements.define('nextro-list-card',NextroListCard);