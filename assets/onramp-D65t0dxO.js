import{b as e,c as t,g as n,l as r,o as i,s as a,v as o}from"./wui-text-BsGPdoGw.js";import{B as s,D as c,E as l,M as u,V as d,b as f,g as p,j as m,l as h,r as g,t as _,w as v,y}from"./ModalController-BOPPHKjJ.js";import{t as b}from"./OnRampController-Bsdu3Jqt.js";import{t as x}from"./wui-loading-thumbnail-C5VcXpZN.js";import"./wui-list-item-DEaMx81q.js";import"./wui-icon-F-TY97Fe.js";import"./wui-image-Cln5likD.js";import"./wui-loading-spinner-DiC-Kf96.js";import"./wui-visual-5cYXYPxT.js";import"./w3m-onramp-providers-footer-32Imf2r0.js";import"./wui-button-CUl2uKCT.js";import"./wui-icon-box-CfdNUob5.js";import"./wui-link-CcJ-7PJu.js";import"./wui-input-text-B07YvXax.js";var S=n`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.paymentCurrency,this.currencies=b.state.paymentCurrencies,this.currencyImages=c.state.currencyImages,this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),c.subscribeKey(`currencyImages`,e=>this.currencyImages=e),x.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:n}=u.state,r=u.state.features?.legalCheckbox,a=!!(t||n)&&!!r&&!this.checked;return e`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        class=${i(a?`disabled`:void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
    `}currenciesTemplate(t=!1){return this.currencies.map(n=>e`
        <wui-list-item
          imageSrc=${i(this.currencyImages?.[n.id])}
          @click=${()=>this.selectCurrency(n)}
          variant="image"
          tabIdx=${i(t?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${n.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(b.setPaymentCurrency(e),_.close())}};w.styles=S,C([a()],w.prototype,`selectedCurrency`,void 0),C([a()],w.prototype,`currencies`,void 0),C([a()],w.prototype,`currencyImages`,void 0),C([a()],w.prototype,`checked`,void 0),w=C([r(`w3m-onramp-fiat-select-view`)],w);var T=n`
  button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    border: none;
    outline: none;
    background-color: ${({tokens:e})=>e.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:e})=>e[3]};
    transition: background-color ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:e})=>e[10]};
    min-width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
    border-radius: calc(
      ${({borderRadius:e})=>e[4]} - calc(${({spacing:e})=>e[3]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:e})=>e[3]};
    height: ${({spacing:e})=>e[3]};
    border-radius: calc(${({spacing:e})=>e[3]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.core.glass010},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
  }
`,E=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D=class extends o{constructor(){super(...arguments),this.disabled=!1,this.color=`inherit`,this.label=``,this.feeRange=``,this.loading=!1,this.onClick=null}render(){return e`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${i(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?e`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:e`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let t=g.getAllRequestedCaipNetworks()?.filter(e=>e?.assets?.imageId)?.slice(0,5);return e`
      <wui-flex class="networks">
        ${t?.map(t=>e`
            <wui-flex class="network-icon">
              <wui-image src=${i(l.getNetworkImage(t))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};D.styles=[T],E([t({type:Boolean})],D.prototype,`disabled`,void 0),E([t()],D.prototype,`color`,void 0),E([t()],D.prototype,`name`,void 0),E([t()],D.prototype,`label`,void 0),E([t()],D.prototype,`feeRange`,void 0),E([t({type:Boolean})],D.prototype,`loading`,void 0),E([t()],D.prototype,`onClick`,void 0),D=E([r(`w3m-onramp-provider-item`)],D);var O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends o{constructor(){super(),this.unsubscribe=[],this.providers=b.state.providers,this.unsubscribe.push(b.subscribeKey(`providers`,e=>{this.providers=e}))}render(){return e`
      <wui-flex flexDirection="column" .padding=${[`0`,`3`,`3`,`3`]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(g.state.activeChain??`eip155`)).map(t=>e`
          <w3m-onramp-provider-item
            label=${t.label}
            name=${t.name}
            feeRange=${t.feeRange}
            @click=${()=>{this.onClickProvider(t)}}
            ?disabled=${!t.url}
            data-testid=${`onramp-provider-${t.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){b.setSelectedProvider(e),f.push(`BuyInProgress`),d.openHref(b.state.selectedProvider?.url||e.url,`popupWindow`,`width=600,height=800,scrollbars=yes`),v.sendEvent({type:`track`,event:`SELECT_BUY_PROVIDER`,properties:{provider:e.name,isSmartAccount:p(g.state.activeChain)===s.ACCOUNT_TYPES.SMART_ACCOUNT}})}};O([a()],k.prototype,`providers`,void 0),k=O([r(`w3m-onramp-providers-view`)],k);var A=n`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.purchaseCurrencies,this.tokens=b.state.purchaseCurrencies,this.tokenImages=c.state.tokenImages,this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),c.subscribeKey(`tokenImages`,e=>this.tokenImages=e),x.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:n}=u.state,r=u.state.features?.legalCheckbox,a=!!(t||n)&&!!r&&!this.checked;return e`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        class=${i(a?`disabled`:void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
    `}currenciesTemplate(t=!1){return this.tokens.map(n=>e`
        <wui-list-item
          imageSrc=${i(this.tokenImages?.[n.symbol])}
          @click=${()=>this.selectToken(n)}
          variant="image"
          tabIdx=${i(t?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${n.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${n.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(b.setPurchaseCurrency(e),_.close())}};M.styles=A,j([a()],M.prototype,`selectedCurrency`,void 0),j([a()],M.prototype,`tokens`,void 0),j([a()],M.prototype,`tokenImages`,void 0),j([a()],M.prototype,`checked`,void 0),M=j([r(`w3m-onramp-token-select-view`)],M);var N=n`
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

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e[`01`]} ${({spacing:e})=>e[2]};
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=b.state.selectedProvider,this.uri=h.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(b.subscribeKey(`selectedProvider`,e=>{this.selectedOnRampProvider=e}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let t=`Continue in external window`;this.error?t=`Buy failed`:this.selectedOnRampProvider&&(t=`Buy in ${this.selectedOnRampProvider?.label}`);let n=this.error?`Buy can be declined from your side or due to and error on the provider app`:`We’ll notify you once your Buy is processed`;return e`
      <wui-flex
        data-error=${i(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${i(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`4`,`0`,`0`,`0`]}
        >
          <wui-text variant="md-medium" color=${this.error?`error`:`primary`}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${n}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${[`0`,`5`,`5`,`5`]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,d.openHref(this.selectedOnRampProvider.url,`popupWindow`,`width=600,height=800,scrollbars=yes`))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?e`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let t=y.state.themeVariables[`--w3m-border-radius-master`],n=t?parseInt(t.replace(`px`,``),10):4;return e`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)m.showError(`No link found`),f.goBack();else try{d.copyToClopboard(this.selectedOnRampProvider.url),m.showSuccess(`Link copied`)}catch{m.showError(`Failed to copy`)}}};F.styles=N,P([a()],F.prototype,`intervalId`,void 0),P([a()],F.prototype,`selectedOnRampProvider`,void 0),P([a()],F.prototype,`uri`,void 0),P([a()],F.prototype,`ready`,void 0),P([a()],F.prototype,`showRetry`,void 0),P([a()],F.prototype,`buffering`,void 0),P([a()],F.prototype,`error`,void 0),P([t({type:Boolean})],F.prototype,`isMobile`,void 0),P([t()],F.prototype,`onRetry`,void 0),F=P([r(`w3m-buy-in-progress-view`)],F);var I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends o{render(){return e`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`10`,`5`,`10`]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${f.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};L=I([r(`w3m-what-is-a-buy-view`)],L);var R=n`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[2]};
    height: 40px;
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    min-width: 95px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=class extends o{constructor(){super(),this.unsubscribe=[],this.type=`Token`,this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=c.state.currencyImages,this.tokenImages=c.state.tokenImages,this.unsubscribe.push(b.subscribeKey(`purchaseCurrency`,e=>{e&&this.type!==`Fiat`&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),b.subscribeKey(`paymentCurrency`,e=>{e&&this.type!==`Token`&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),b.subscribe(e=>{this.currencies=this.type===`Fiat`?e.purchaseCurrencies.map(this.formatPurchaseCurrency):e.paymentCurrencies.map(this.formatPaymentCurrency)}),c.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){b.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let t=this.selectedCurrency?.symbol||``,n=this.currencyImages[t]||this.tokenImages[t];return e`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?e` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>_.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${i(n)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:e`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};B.styles=R,z([t({type:String})],B.prototype,`type`,void 0),z([t({type:Number})],B.prototype,`value`,void 0),z([a()],B.prototype,`currencies`,void 0),z([a()],B.prototype,`selectedCurrency`,void 0),z([a()],B.prototype,`currencyImages`,void 0),z([a()],B.prototype,`tokenImages`,void 0),B=z([r(`w3m-onramp-input`)],B);var V=n`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:e})=>e[8]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U={USD:`$`,EUR:`€`,GBP:`£`},W=[100,250,500,1e3],G=class extends o{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=g.state.activeCaipAddress,this.loading=_.state.loading,this.paymentCurrency=b.state.paymentCurrency,this.paymentAmount=b.state.paymentAmount,this.purchaseAmount=b.state.purchaseAmount,this.quoteLoading=b.state.quotesLoading,this.unsubscribe.push(g.subscribeKey(`activeCaipAddress`,e=>this.caipAddress=e),_.subscribeKey(`loading`,e=>{this.loading=e}),b.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return e`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${W.map(t=>e`<wui-button
                  variant=${this.paymentAmount===t?`accent-secondary`:`neutral-secondary`}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(t)}
                  >${`${U[this.paymentCurrency?.id||`USD`]} ${t}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?e`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:e`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||_.open({view:`OnRampProviders`})}openModal(){_.open({view:`Connect`})}async onPaymentAmountChange(e){b.setPaymentAmount(Number(e.detail)),await b.getQuote()}async selectPresetAmount(e){b.setPaymentAmount(e),await b.getQuote()}};G.styles=V,H([t({type:Boolean})],G.prototype,`disabled`,void 0),H([a()],G.prototype,`caipAddress`,void 0),H([a()],G.prototype,`loading`,void 0),H([a()],G.prototype,`paymentCurrency`,void 0),H([a()],G.prototype,`paymentAmount`,void 0),H([a()],G.prototype,`purchaseAmount`,void 0),H([a()],G.prototype,`quoteLoading`,void 0),G=H([r(`w3m-onramp-widget`)],G);export{F as W3mBuyInProgressView,k as W3mOnRampProvidersView,w as W3mOnrampFiatSelectView,M as W3mOnrampTokensView,G as W3mOnrampWidget,L as W3mWhatIsABuyView};