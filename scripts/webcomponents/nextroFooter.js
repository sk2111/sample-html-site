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
        .locate-text{
            color:white;
            font-size:13px;
        }
        .copyright{
            color:white;
            font-size:11px;
            margin-top:15px;
            margin-left:10px;
        }
        .mt-10{
            margin-top:10px;
        }
        .phone{
            height:20px;
            width:20px;
        }
        .phone-con{
            width:210px;
        }
        .phone-text{
            margin-left:15px;
            letter-spacing:0.2px;
        }
        .email-text{
            margin-left:15px;
            letter-spacing:1px;
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
          
        }
        </style>
        <div class="footer-con">
          <div class="main-con flex-row perfect-cen">
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
                <div class="flex-row align-cen mt-10 phone-con">
                    <img class="phone" src="/assets/icons/phone.svg">
                    <div class="locate-text phone-text">9990303929 , 81249919200</div>
                </div>
                <div class="flex-row align-cen mt-10 phone-con">
                    <img class="phone" src="/assets/icons/email.svg">
                    <div class="locate-text email-text">info@nextroservices.com</div>
                </div>
                <div class="copyright">Copyrights © 2020 by Nextro Pvt.Ltd.</div>
            </div>
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