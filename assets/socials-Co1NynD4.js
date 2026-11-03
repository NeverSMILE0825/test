import{b as e,c as t,g as n,l as r,o as i,s as a,v as o}from"./wui-text-BsGPdoGw.js";import{C as s,H as c,M as l,U as u,V as d,b as f,j as p,l as m,r as h,t as g,v as _,w as v,y}from"./ModalController-BOPPHKjJ.js";import{t as b}from"./wui-loading-thumbnail-C5VcXpZN.js";import{t as x}from"./AlertController-qJzjThSJ.js";import{n as S,r as C,t as w}from"./wui-list-social-DekXfDQG.js";import"./wui-icon-box-CfdNUob5.js";import{t as T}from"./ConstantsUtil-C1qdKpER.js";import{t as E}from"./SIWXUtil-CRSHJayQ.js";import"./wui-button-CUl2uKCT.js";import"./wui-icon-F-TY97Fe.js";import"./wui-qr-code-ok1kaGZ4.js";import"./wui-shimmer-BR_jaRst.js";var D=n`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=_.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.remoteFeatures=l.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=s.state.plan.hasExceededUsageLimit,this.unsubscribe.push(_.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),l.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let t=this.remoteFeatures?.socials||[],n=!!this.authConnector,r=t?.length,i=f.state.view===`ConnectSocials`;return(!n||!r)&&!i?null:(i&&!r&&(t=u.DEFAULT_SOCIALS),e` <wui-flex flexDirection="column" gap="2">
      ${t.map(t=>e`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){this.hasExceededUsageLimit?f.push(`UsageExceeded`):e&&await S(e)}async handlePwaFrameLoad(){if(d.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof C&&await this.authConnector.provider.init()}catch(e){x.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}};k.styles=D,O([t()],k.prototype,`tabIdx`,void 0),O([a()],k.prototype,`connectors`,void 0),O([a()],k.prototype,`authConnector`,void 0),O([a()],k.prototype,`remoteFeatures`,void 0),O([a()],k.prototype,`isPwaLoading`,void 0),O([a()],k.prototype,`hasExceededUsageLimit`,void 0),k=O([r(`w3m-social-login-list`)],k);var A=n`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends o{constructor(){super(),this.unsubscribe=[],this.checked=b.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:n}=l.state,r=l.state.features?.legalCheckbox,a=!!(t||n)&&!!r&&!this.checked,o=a?-1:void 0;return e`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="01"
        class=${i(a?`disabled`:void 0)}
      >
        <w3m-social-login-list tabIdx=${i(o)}></w3m-social-login-list>
      </wui-flex>
    `}};M.styles=A,j([a()],M.prototype,`checked`,void 0),M=j([r(`w3m-connect-socials-view`)],M);var N=n`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e[`ease-out-power-2`]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends o{constructor(){super(),this.unsubscribe=[],this.socialProvider=h.getAccountData()?.socialProvider,this.socialWindow=h.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.remoteFeatures=l.state.remoteFeatures,this.address=h.getAccountData()?.address,this.connectionsByNamespace=m.getConnections(h.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=_.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===T.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let t=this.parseURLError(e.data.resultUri);if(t){this.handleSocialError(t);return}this.closeSocialWindow(),this.updateMessage();let n=e.data.resultUri;this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}}),await m.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:n},this.authConnector.chain),this.socialProvider&&(c.setConnectedSocialProvider(this.socialProvider),v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:d.parseError(e)}})}}else f.goBack(),p.showError(`Untrusted Origin`),this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:`Untrusted Origin`}})}},w.EmbeddedWalletAbortController.signal.addEventListener(`abort`,()=>{this.closeSocialWindow()}),this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(f.replace(`ProfileWallets`),p.showSuccess(`New Wallet Added`),this.address=e.address):(g.state.open||l.state.enableEmbedded)&&g.close())}}),l.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1),!h.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return e`
      <wui-flex
        data-error=${i(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${i(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??`Social`}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?`error`:`secondary`}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let t=y.state.themeVariables[`--w3m-border-radius-master`],n=t?parseInt(t.replace(`px`,``),10):4;return e`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}parseURLError(e){try{let t=e.indexOf(`error=`);return t===-1?null:e.substring(t+6)}catch{return null}}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&f.state.view===`ConnectingSocial`&&f.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.message=this.error?`Something went wrong`:this.connecting?`Retrieving user data`:`Connect in the provider window`}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),h.setAccountProp(`socialWindow`,void 0,h.state.activeChain))}};F.styles=N,P([a()],F.prototype,`socialProvider`,void 0),P([a()],F.prototype,`socialWindow`,void 0),P([a()],F.prototype,`error`,void 0),P([a()],F.prototype,`connecting`,void 0),P([a()],F.prototype,`message`,void 0),P([a()],F.prototype,`remoteFeatures`,void 0),F=P([r(`w3m-connecting-social-view`)],F);var I=n`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=class extends o{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=h.getAccountData()?.socialProvider,this.uri=h.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=l.state.remoteFeatures,this.authConnector=_.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),l.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate),!h.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),e`${this.platformTemplate()}`}platformTemplate(){return d.isMobile()?e`${this.mobileTemplate()}`:e`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?e`${this.loadingTemplate()}`:e`${this.qrTemplate()}`}qrTemplate(){return e` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return e`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`5`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return e` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`10`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let t=y.state.themeVariables[`--w3m-border-radius-master`],n=t?parseInt(t.replace(`px`,``),10):4;return e`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(c.setConnectedSocialProvider(this.socialProvider),v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}})),this.loading=!0;let e=m.getConnections(this.authConnector.chain).length>0;await m.connectExternal(this.authConnector,this.authConnector.chain);let t=this.remoteFeatures?.multiWallet;this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}),this.loading=!1,(!l.state.siwx||await E.isAuthenticated())&&(e&&t?(f.replace(`ProfileWallets`),p.showSuccess(`New Wallet Added`)):g.close())}catch(e){this.socialProvider&&v.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:d.parseError(e)}}),f.goBack(),p.showError(e)}}mobileLinkTemplate(){return e`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&d.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,n=y.state.themeVariables[`--apkt-qr-color`]??y.state.themeVariables[`--w3m-qr-color`];return e` <wui-qr-code
      size=${t}
      theme=${y.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${i(n)}
    ></wui-qr-code>`}copyTemplate(){let t=!this.uri||!this.ready;return e`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(d.copyToClopboard(this.uri),p.showSuccess(`Link copied`))}catch{p.showError(`Failed to copy`)}}};R.styles=I,L([a()],R.prototype,`socialProvider`,void 0),L([a()],R.prototype,`uri`,void 0),L([a()],R.prototype,`ready`,void 0),L([a()],R.prototype,`loading`,void 0),L([a()],R.prototype,`remoteFeatures`,void 0),R=L([r(`w3m-connecting-farcaster-view`)],R);export{M as W3mConnectSocialsView,R as W3mConnectingFarcasterView,F as W3mConnectingSocialView};