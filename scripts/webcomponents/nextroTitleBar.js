class NextroTitleBar extends HTMLElement {
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
        *{
            font-family: 'Poppins';
            font-size: 1.5rem;
            box-sizing:border-box;
            user-select:none;
        }
        .logo{
            margin-left:10px;
        }
        .title-bar{
            box-sizing:border-box;
            background-color:#0747a6;
            height:56px;
            padding:10px;
            position:relative;
        }
        .nextro-title{
            color:white;
            font-weight:bold;
            margin-left:8px;
            letter-spacing:2px;
        }
        .normal-anchor{
            color:white;
            border-bottom:none;
            font-size:1rem;
            font-weight:300;
            display:block;
            text-align:center;
            text-decoration: none;
            transition:letter-spacing .2s ease-in-out;
            margin-right:3px;
            width:120px;
        }
        .normal-anchor:hover{
            border-bottom:2px solid white;
            font-size:1.063rem;
            letter-spacing:1.2px;
        }
        .ham-anchor{
            color:white;
            border-bottom:none;
            font-size:1rem;
            font-weight:300;
            display:block;
            text-decoration: none;
            width:96px;
            height:42px;
        }
        .ham-anchor:hover{
            font-size:1.083rem;
        }
        .selected-ham-anchor{
            font-size:1.083rem;
            font-weight:bold;
        }
        .selected-tab{
            border-bottom:none !important;
            font-size:1.188rem !important;
            font-weight:bold;
            letter-spacing:1.2px;
            position:relative;
            top:-2.5px;
        }
        .home-wid{
            width:80px;
        }
        .contact-us-mr{
            margin-right:15px;
        }
        .menu-nav-bar{
            display:none;
        }
        .menu-icon{
            width: 33px;
            height: 4px;
            background-color: white;
            margin: 6px 0;
        }
        .ham-content{
            position:absolute;
            height:200px;
            width:150px;
            background-color:#0747a6;
            top:53px;
            right:0px;
            text-decoration:none;
            padding-top:22px;
            opacity:0;
            z-index:-10;
            transition:opacity 0.35s;
        }
        .menu-nav-bar{
            cursor:pointer;
        }
        .ham-show{
            opacity:1;
            z-index:10;
        }
        button,a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        }
        /*Media queries*/
        @media only screen and (max-width: 700px) {
            .normal-nav-bar {
                display:none;
            }
            .menu-nav-bar{
                display:block;
            }
        }
        </style>
        <div class="title-bar flex-row justify-sb">
           <div class="title-con-1 flex-row align-cen">
              <svg class="logo animate__animated animate__bounce" width="35" height="35" viewBox="0 0 534 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 75C0 75 43 75 59.5 75C76 75 103.5 89 103.5 124.5C103.5 226.406 103.5 451.397 103.5 466.323C103.5 485.661 132.5 505 132.5 505H2.5C2.5 505 31.5 488.505 31.5 466.323C31.5 448.253 30 215.948 30 124.5C30 102 0 75 0 75Z" fill="white" />
                <path d="M533.5 505C533.5 505 490.5 505 474 505C457.5 505 430 491 430 455.5C430 353.594 430 128.603 430 113.677C430 94.3386 401 75 401 75H531C531 75 502 91.4947 502 113.677C502 131.747 503.5 364.052 503.5 455.5C503.5 478 533.5 505 533.5 505Z" fill="white" />
                <path d="M364 108C364 135.931 364.767 195.971 365.138 248.5C365.168 252.844 357.638 248.5 289.5 183.5C273.5 168.237 288.674 94.1233 280 67C274.192 48.8383 238 50.5 238 72.5C238 79.2885 237.997 143.662 238 166.5C238.001 170.576 239.224 175.5 244.5 182C279 224.5 365.337 292.637 365.332 298C365.31 325.258 364.966 344 364 344C361.705 344 205 201.281 182.5 170.5C165.799 147.652 164 120.815 164 108C164 51 208.772 8 264 8C319.228 8 364 52.7715 364 108Z" fill="white" />
                <path d="M165.332 473C165.332 445.069 164.565 385.029 164.194 332.5C164.164 328.156 171.694 332.5 239.832 397.5C255.832 412.763 240.658 486.877 249.332 514C255.141 532.162 291.332 530.5 291.332 508.5C291.332 501.711 291.335 437.338 291.332 414.5C291.332 410.424 290.109 405.5 284.832 399C250.332 356.5 163.996 288.363 164 283C164.022 255.742 164.366 237 165.332 237C167.627 237 324.332 379.719 346.832 410.5C363.533 433.348 365.332 460.185 365.332 473C365.332 530 320.561 573 265.332 573C210.104 573 165.332 528.228 165.332 473Z" fill="white" />
              </svg>
              <h1 class="nextro-title">Nextro</h1>
           </div>
           <div class="title-con-2 flex-row align-cen">
              <div id="ham-burger" class="menu-nav-bar" >
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
              </div>
              <div class="normal-nav-bar flex-row">
                <a id="nn-home" my-name="home" href="/" class="normal-anchor home-wid perfect-cen">Home</a>
                <a id="nn-services" my-name="services" href="/services.html" class="normal-anchor perfect-cen">Services</a>
                <a id="nn-about" my-name="about" href="#" class="normal-anchor perfect-cen">About Us</a>
                <a id="nn-contact" my-name="contact" href="#" class="normal-anchor contact-us-mr sperfect-cen">Contact Us</a>
              </div>
           </div>
           <div id="ham-content" class="ham-content flex-col align-cen">
                <a  id="hh-home" href="/" class="ham-anchor">Home</a>
                <a  id="hh-services" href="/services.html" class="ham-anchor">Services</a>
                <a  id="hh-about" href="#" class="ham-anchor">About Us</a>
                <a  id="hh-contact" href="#" class="ham-anchor">Contact Us</a>
           </div>
        </div>
        `;

        const hamIcon =  this.shadowRoot.querySelector('#ham-burger');
        const hamContent =  this.shadowRoot.querySelector('#ham-content');
        // normal anchor
        const nnHome = this.shadowRoot.querySelector('#nn-home');
        const nnServices = this.shadowRoot.querySelector('#nn-services');
        const nnAbout = this.shadowRoot.querySelector('#nn-about');
        const nnContact = this.shadowRoot.querySelector('#nn-contact');
        this.normalAnchObj = {
            home:nnHome,services:nnServices,about:nnAbout,contact:nnContact
        };
        //ham anchor
        const hhHome = this.shadowRoot.querySelector('#hh-home');
        const hhServices = this.shadowRoot.querySelector('#hh-services');
        const hhAbout = this.shadowRoot.querySelector('#hh-about');
        const hhContact = this.shadowRoot.querySelector('#hh-contact');
        this.hamAnchObj = {
            home:hhHome,services:hhServices,about:hhAbout,contact:hhContact
        };
        // Listerners
        hamIcon.addEventListener('click',()=>{
            hamContent.classList.toggle("ham-show");
        });
        window.addEventListener('resize',()=>{
            hamContent.classList.remove("ham-show");
        });
    }
    connectedCallback() {  }

    static get observedAttributes() {
        return ['selected-tab'];
    }
    addAnchorHighlightClass(ref){
        ref.classList.add('selected-tab')
    }
    handleSelectedTab(val,obj){
        for(let key in obj)
        {
            if(key.toLowerCase() === val.toLowerCase())
            {
                this.addAnchorHighlightClass(obj[key]);
            }
        }
    }
    attributeChangedCallback(attrName,oldVal,newVal) {
        if(attrName === 'selected-tab')
        {
            this.handleSelectedTab(newVal,this.normalAnchObj);
            this.handleSelectedTab(newVal,this.hamAnchObj);
        }
    }
    disconnectedCallback() {  }
  }
customElements.define('nextro-title-bar',NextroTitleBar);