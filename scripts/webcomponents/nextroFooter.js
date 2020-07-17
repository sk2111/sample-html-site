class NextroFooterCard extends HTMLElement {
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
        .footer-con{
            background-color:#0747a6;
            height:200px;
            padding:20px;
        }
        .main-con{
            height:100%;
        }
        .footer-sec-1,.footer-sec-2,.footer-sec-3{
            height:100%;
        }
        .logo{
            height:30px;
            width:30px;
        }
        .nextro-title{
            font-size:18px;
            color:white;
            letter-spacing:2px;
            margin-left:8px;
        }
        .cate-text{
            color:white;
            font-size:13px;
            margin-left:19px;
        }
        .copyright{
            color:white;
            font-size:11px;
            margin-top:20px;
            margin-left:10px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="footer-con">
          <div class="main-con flex-row">
            <div class="footer-sec-1 flex-col perfect-cen">
                <div class="flex-row align-cen">
                    <img class="logo" src="/assets/logo/nextro_logo_white.svg">
                    <h4 class="nextro-title">Nextro</h4>
                </div>
                <div class="flex-row align-cen">
                    <div class="cate-text">ACCOUNTS</div>
                    <div class="cate-text">TAXATION</div>
                    <div class="cate-text">FINANCE</div>
                </div>
                <div class="copyright">Copyrights © 2020 by Nextro Pvt.Ltd.</div>
            </div>
            <div class="footer-sec-2"></div>
            <div class="footer-sec-3"></div>
          </div>
        </div>
        `;

        const hamIcon =  this.shadowRoot.querySelector('#ham-burger');
        const hamContent =  this.shadowRoot.querySelector('#ham-content');
        // normal anchor
     
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['card-title','card-description'];
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'card-title')
        {
            this.handleSelectedTab(newVal,this.normalAnchObj);
            this.handleSelectedTab(newVal,this.hamAnchObj);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-footer-card',NextroFooterCard);