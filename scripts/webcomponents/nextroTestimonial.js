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
            background-color:white;
            clip-path: polygon(5% 0%, 100% 0, 95% 100%, 0% 100%);
            padding:25px 70px 0px 85px;
            margin-top:80px;
        }
        .testi-holder{
            flex-direction:row;
        }
        .image-wrapper{
            min-height:100px;
            min-width:100px;
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
            text-align: justify;
        }
        .card-description::before {
            content:'"';
            font-size: 40px;
            color:#4f4f4f;
            vertical-align: -.3em;
        }   
        .card-description::after {
            content:'"';
            font-size: 40px;
            color:#4f4f4f;
            vertical-align: -.2em;
        }
        .rating-con{
            display:flex;
            justify-content:flex-end;
            padding-right:30px;
            height:40px;
        }
        /*Media queries*/
        @media only screen and (min-width: 700px) and (max-width: 1000px) {
            .card-description{
                font-size:14.08px;
            }
        }
        @media only screen and (max-width: 600px) {
            .testi-holder{
                flex-direction:column;
            }
            .testimonial-con{
                padding: 25px 45px 25px 8px;
            }
            .card-description{
                margin-top:15px;
            }
            .rating-boxing{
                margin-top:15px !important;
            }
        }
        @media only screen and (max-width: 360px) {
            .rating-con{
                padding-right:5px;
            }
        }
        @media only screen and (max-width: 290px) {
            .rating-con{
              display:none;
            }
        }
        </style>
        <div class="testimonial-con">
          <div class="testi-holder flex-row align-cen">
             <div class="image-wrapper">
                <img id="face-img" class="face" src="">
             </div>
             <div class="flex-row align-cen">
                <span id="card-description" class="card-description"></span>
             </div>
          </div>
          <div id="rating-box" class="rating-con">

          </div>
        </div>
        `;
        this.faceImage =  this.shadowRoot.querySelector('#face-img');
        this.cardDescription =  this.shadowRoot.querySelector('#card-description');
        this.ratingBox =  this.shadowRoot.querySelector('#rating-box');
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['img-src','card-description','rating'];
    }
    handleImageSrc(val){
        this.faceImage.src = val;
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
        viewTemplate = '<div style="width:200px;margin-top:5px;" class="flex-row rating-boxing"><div style="color:#4f4f4f;font-weight:bold;margin-right:10px;font-size:16px;">Rating &nbsp&nbsp;&nbsp; </div>'+viewTemplate+'</div>';
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
        if(attrName === 'img-src')
        {
            this.handleImageSrc(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-testimonial-card',NextroTestimonialCard);