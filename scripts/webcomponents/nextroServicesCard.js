class NextroServicesCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      /*html*/
      this.shadowRoot.innerHTML = `
        <style>
        :host{
            width:100%;
        }
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
            height:55px;
            background-color:#f2f2f2;
            border-radius:5px;
            padding:0px 30px;
        }
        .title-sty{
            color:#616161;
            font-weight:bold;
            font-size:13px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div>
            <div class="card-container flex-row align-cen">
                <div id="title" class="title-sty"></div>
            </div>
        </div>

        `;
        
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['card-title','card-description'];
    }
    handleCardTitle(val){
        let title = this.shadowRoot.querySelector('#title');
        title.innerText = val;
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-title')
        {
            this.handleCardTitle(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-services-card',NextroServicesCard);