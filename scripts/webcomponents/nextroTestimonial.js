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
            margin-left:10px;
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
        .quotes{
            font-size:80px;
            color: #4f4f4f;
        }
        .rq{
            position:relative;
            
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="testimonial-con flex-row perfect-cen">
          <div class="testi-holder flex-row align-cen">
             <div class="image-wrapper">
                <img class="face" src="/assets/face/sample-face.jpg">
             </div>
             <div class="flex-row align-cen">
                <span id="card-description" class="card-description"></span>
             </div>
          </div>
        </div>
        `;

        this.cardDescription =  this.shadowRoot.querySelector('#card-description');
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['img-src','card-description'];
    }
    handleDescriptionText(val){
        this.cardDescription.innerText = val;
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-description')
        {
            this.handleDescriptionText(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-testimonial-card',NextroTestimonialCard);