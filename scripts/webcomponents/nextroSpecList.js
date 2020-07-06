class NextroSpecList extends HTMLElement {
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
        .spec-list-con{
            width:290px;
        }
        .description{
            color:#424242;
            font-size:0.89rem;
            line-height:22px;
            margin-top:10px;
        }
        #card-title{
            color:#424242;
            font-size:1.313rem;
            font-weight:bold;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="spec-list-con">
            <div class="flex-row align-cen">
                <div id="card-title"></div>
            </div>
            <div id="card-description" class="description"></div>
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
customElements.define('nextro-spec-list',NextroSpecList);