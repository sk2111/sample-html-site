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
        div,p{
            -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
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
            letter-spacing:1px;
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
            padding:0px 40px;
            position:relative;
            overflow:hidden;
            opacity:1;
            transition:height 0.85s,opacity 0.80s;
        }
        .content-sty{
            text-align:justify;
            color:#646464;
            font-size: 0.8125rem;
            line-height: 27px;
            letter-spacing: 1px;
            margin-bottom:0px;
            padding-top:15px;
            padding-bottom:35px;
        }
        .price-txt{
            color:#0747a6;
            font-size:14px;
            font-weight:bold;
            margin:0px;
            letter-spacing:1px;
        }
        .price-tag{
            position:absolute;
            right:35px;
            bottom: 0px;
            width:110px;
        }
        .price-amt{
            color:#0747a6;
            font-weight:bold;
            font-size:15px;
        }
        .mr-9{
            margin-right:9px;
        }
        .hider-con{
            height:0px !important;
            opacity:0;
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
            <div id="content-holder" class="content">
                <p id="content-data" class="content-sty"></p>
                <div class="flex-row align-cen price-tag">
                    <div class="price-txt mr-9">PRICE </div>
                    <div id="price-inject" class="price-amt"></div>
                </div>
            </div>
        </div>
        `;
        const headerCon = this.shadowRoot.querySelector("#header-con"); 
        


        headerCon.addEventListener('click',(e)=>{this.headerConClickHandler(e)});
    }
    setHeightWheneverViewChange(){
        this.contentRef.style.height = this.contentRef.clientHeight+"px";
    }
    connectedCallback() {  
        this.arrowRef = this.shadowRoot.querySelector("#arrow");
        this.contentRef = this.shadowRoot.querySelector("#content-holder");
        this.setHeightWheneverViewChange();
    }
    headerConClickHandler(e){
        this.arrowRef.classList.toggle('rotate-down');
        this.contentRef.classList.toggle('hider-con');
    }
    static get observedAttributes() {
        return ['card-title','card-data','price-data'];
    }
    handleCardTitle(val){
        let title = this.shadowRoot.querySelector('#title');
        title.innerText = val;
    }
    handleCardData(val){
        let description = this.shadowRoot.querySelector('#content-data');
        description.innerText = val;
    }
    handlePriceData(val){
        let price = this.shadowRoot.querySelector('#price-inject');
        price.innerText = val;
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
        if(attrName === 'price-data')
        {
            this.handlePriceData(newVal);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-services-card',NextroServicesCard);