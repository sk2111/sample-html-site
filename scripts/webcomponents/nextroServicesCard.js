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
        .cd-mar{
            margin-top:25px;
        }
        .card-container{
            height:55px;
            background-color:#f2f2f2;
            border-radius:5px;
            padding:0px 30px;
            cursor:pointer;
        }
        .title-sty{
            color:#616161;
            font-weight:bold;
            font-size:13px;
        }
        .icon-sty{
            height:25px;
            transform:rotate(90deg);
            transition:transform 0.75s;
        }
        .rotate-down{
            transform:rotate(-90deg);
        }
        .content{
            padding:15px 40px;
        }
        .content-sty{
            text-align:justify;
            color:#646464;
            font-size: 0.8125rem;
            line-height: 27px;
            letter-spacing: 1px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="cd-mar">
            <div id="header-con" class="card-container flex-row align-cen justify-sb">
                <div id="title" class="title-sty"></div>
                <img id="arrow" class="icon-sty" src="/assets/icons/right-cheveron.svg">
            </div>
            <div class="content">
                <p id="content-data" class="content-sty"></p>
            </div>
        </div>
        `;
        const headerCon = this.shadowRoot.querySelector("#header-con"); 
        


        headerCon.addEventListener('click',(e)=>{this.headerConClickHandler(e)});
    }
    connectedCallback() {  
        this.arrowRef = this.shadowRoot.querySelector("#arrow");
        console.log(this.arrowRef);
    }
    headerConClickHandler(e){
        this.arrowRef.classList.toggle('rotate-down');
    }
    static get observedAttributes() {
        return ['card-title','card-data'];
    }
    handleCardTitle(val){
        let title = this.shadowRoot.querySelector('#title');
        title.innerText = val;
    }
    handleCardData(val){
        let description = this.shadowRoot.querySelector('#content-data');
        description.innerText = val;
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-title')
        {
            this.handleCardTitle(newVal);
        }
        if(attrName === 'card-data')
        {
            this.handleCardData(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-services-card',NextroServicesCard);