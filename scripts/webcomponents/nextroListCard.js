class NextroListCard extends HTMLElement {
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
        .card-container{
            border:#e0e0e0;
            border-radius:20px;
            padding:20px;
            background-color:white;
            width:320px;
            height:320px;
            margin:15px;
            position:relative;
            top:0px;
            transition:top .1s;
        }
        .card-container:hover{
            top:-3px;
            box-shadow:0px 0px 2px 0px #9e9e9e;
        }
        .title{
            font-size:0.9rem;
            font-weight:bold;
            letter-spacing:2px;
            color:#424242;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .blue-cl{
            border-top:2px solid #0747a6;
            width:85%;
        }
        .description{
            text-align:justify;
            color:#424242;
            font-size:13.5px;
            font-weight:500;
            letter-spacing:1px;
            line-height:30px;
            width:78%;
            height: 195px;
            overflow: hidden;
        }
        .full-wid{
            width:100%;
        }
        .card-btn{
            background-color: #0747a6;
            border:none;
            border-radius:20px;
            color:white;
            cursor:pointer;
            font-size: 0.75rem; 
            font-weight:bold;
            height:40px;
            width:140px;
            position: relative;
            letter-spacing:0.75px;
            top:0px;
            transition: top 0.2s;
        }
        .card-btn:hover{
            top:-3px;
        }
        .card-btn:active{
            top:0px;
        }
        .card-btn:focus{ 
            outline: none; 
        }
        input,
        textarea,
        button,
        select,
        a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
            .card-container:hover{
                top:0px;
                box-shadow:none;
            }
        }
        @media only screen and (max-width: 400px) {
            .card-container{
                width:250px;
                height:350px;
            }
            .description{
                height:230px;
                line-height:25px;
            }
            .card-btn{
                height:35px;
                width:100px;
                font-size:11px;
            }
        }
        @media only screen and (max-width: 300px) {
            .card-container{
                width:180px;
                height:250px;
            }
            .description{
                height:145px;
                line-height:17px;
                font-size:10px;
            }
            .card-btn{
                height:32px;
                width:90px;
                font-size:11px;
            }
        }
        </style>
        <div class="card-container">
            <h3 id="card-title" class="title"></h3>
            <div class="flex-row perfect-cen full-wid">
                <div class="blue-cl"></div>
            </div>
            <div class="flex-row perfect-cen full-wid">
                <p id="card-description" class="description"></p>
            </div>
            <div  class="flex-row perfect-cen">
                <button class="card-btn">View more</button>
            </div>
        </div>
        `;

        this.cardTitle = this.shadowRoot.querySelector("#card-title");
        this.cardDescription = this.shadowRoot.querySelector("#card-description");
     
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['card-title','card-description'];
    }

    handleCardTitle(val){
        this.cardTitle.innerText = val;
    }

    handleCardDescription(val){
        this.cardDescription.innerText = val;
    }

    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-title')
        {
            this.handleCardTitle(newVal);
        }
        if(attrName === 'card-description')
        {
            this.handleCardDescription(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-list-card',NextroListCard);