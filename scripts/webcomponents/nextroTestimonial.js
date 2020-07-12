class NextroTestimonialCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      /*html*/
      this.shadowRoot.innerHTML = `
        <style>
        /* Resuable style*/
        .flex-row{
            display:flex;
        }
        .flex-col{
            display:flex;
            flex-direction:column;
        }
        .justify-sb{
            justify-content:space-between;
        }
        .align-cen{
            align-items:center;
        }
        .perfect-cen{
            justify-content:center;
            align-items:center;
        }
        /* Component specific style*/
        .testimonial-con{
            box-sizing:border-box;
            width:95vw;
            max-width:1600px;
            height:150px;
            background-color:white;
            clip-path: polygon(5% 0%, 100% 0, 95% 100%, 0% 100%);
            padding:25px 70px 25px 85px;
        }
        .image-wrapper{
            height:100px;
            width:150px;
            border-radius:50px;
            overflow:hidden;
        }
        .face{
            height:100px;
            width:100px;
            position:relative;
            top:5px;
        }
        .card-description{
            font-size:1.1rem;
            color:#757575;
            margin-left:30px;
            line-height:28px;
            font-style:italic;
        }
        .card-description::before {
            content:'“';
            font-size: 50px;
            color:#4f4f4f;
            vertical-align: -.4em;
        }   
        .card-description::after {
            content:'”';
            font-size: 50px;
            color:#4f4f4f;
            vertical-align: -.4em;
        }
        .rating-con{
            display:flex;
            justify-content:flex-end;
            position:relative;
            right:50px;
            bottom:15px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="testimonial-con">
          <div class="testi-holder flex-row align-cen">
             <div class="image-wrapper">
                <img class="face" src="/assets/face/sample-face.jpg">
             </div>
             <div class="flex-row align-cen">
                <span id="card-description" class="card-description"></span>
             </div>
          </div>
          <div id="rating-box" class="rating-con">

          </div>
        </div>
        `;
        this.cardDescription =  this.shadowRoot.querySelector('#card-description');
        this.ratingBox =  this.shadowRoot.querySelector('#rating-box');
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['img-src','card-description','rating'];
    }
    handleDescriptionText(val){
        this.cardDescription.innerText = val;
    }
    handleRating(val){
        let viewTemplate='';
        let template = `<div style="margin-right:5px;"><svg width="25" height="25" viewBox="0 0 512 512"><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" style="fill: #0747a6;stroke: #757575;stroke-linejoin:round;stroke-width: 10px;"/></svg></div>`;
        for(let i = 0; i < Number(val) ; i++)
        {
            viewTemplate +=template; 
        }
        viewTemplate = '<div style="color:#4f4f4f;font-weight:bold;">Rating &nbsp&nbsp;&nbsp; </div>'+viewTemplate;
        this.ratingBox.innerHTML = viewTemplate;
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-description')
        {
            this.handleDescriptionText(newVal);
        }
        if(attrName === 'rating')
        {
            this.handleRating(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-testimonial-card',NextroTestimonialCard);