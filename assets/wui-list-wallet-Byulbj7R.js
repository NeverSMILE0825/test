import{b as e,w as t}from"./ModalController-BOPPHKjJ.js";import"./wui-network-image-DWR7TF8D.js";import{b as n,c as r,d as i,g as a,l as o,o as s,p as c,s as l,v as u}from"./wui-text-BsGPdoGw.js";import"./wui-icon-box-CFj7nng-.js";import"./w3m-onramp-providers-footer-32Imf2r0.js";import{t as d}from"./wui-tag-B2qTELV7.js";var f=a`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`,p=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},m=class extends u{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status=`hide`,this.view=e.state.view}firstUpdated(){this.status=d.hasFooter()?`show`:`hide`,this.unsubscribe.push(e.subscribeKey(`view`,e=>{this.view=e,this.status=d.hasFooter()?`show`:`hide`,this.status===`hide`&&document.documentElement.style.setProperty(`--apkt-footer-height`,`0px`)})),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=`${t.contentRect.height}px`;document.documentElement.style.setProperty(`--apkt-footer-height`,e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return n`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return d.hasFooter()?n` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case`Networks`:return this.templateNetworksFooter();case`Connect`:case`ConnectWallets`:case`OnRampFiatSelect`:case`OnRampTokenSelect`:return n`<w3m-legal-footer></w3m-legal-footer>`;case`OnRampProviders`:return n`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return n` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){t.sendEvent({type:`track`,event:`CLICK_NETWORK_HELP`}),e.push(`WhatIsANetwork`)}getWrapper(){return this.shadowRoot?.querySelector(`div.container`)}};m.styles=[f],p([l()],m.prototype,`status`,void 0),p([l()],m.prototype,`view`,void 0),m=p([o(`w3m-footer`)],m);var h=a`
  :host {
    display: block;
    width: inherit;
  }
`,g=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_=class extends u{constructor(){super(),this.unsubscribe=[],this.viewState=e.state.view,this.history=e.state.history.join(`,`),this.unsubscribe.push(e.subscribeKey(`view`,()=>{this.history=e.state.history.join(`,`),document.documentElement.style.setProperty(`--apkt-duration-dynamic`,`var(--apkt-durations-lg)`)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty(`--apkt-duration-dynamic`,`0s`)}render(){return n`${this.templatePageContainer()}`}templatePageContainer(){return n`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=e.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case`AccountSettings`:return n`<w3m-account-settings-view></w3m-account-settings-view>`;case`Account`:return n`<w3m-account-view></w3m-account-view>`;case`AllWallets`:return n`<w3m-all-wallets-view></w3m-all-wallets-view>`;case`ApproveTransaction`:return n`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case`BuyInProgress`:return n`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case`ChooseAccountName`:return n`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case`Connect`:return n`<w3m-connect-view></w3m-connect-view>`;case`Create`:return n`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case`ConnectingWalletConnect`:return n`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case`ConnectingWalletConnectBasic`:return n`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case`ConnectingExternal`:return n`<w3m-connecting-external-view></w3m-connecting-external-view>`;case`ConnectingSiwe`:return n`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case`ConnectWallets`:return n`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case`ConnectSocials`:return n`<w3m-connect-socials-view></w3m-connect-socials-view>`;case`ConnectingSocial`:return n`<w3m-connecting-social-view></w3m-connecting-social-view>`;case`DataCapture`:return n`<w3m-data-capture-view></w3m-data-capture-view>`;case`DataCaptureOtpConfirm`:return n`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case`Downloads`:return n`<w3m-downloads-view></w3m-downloads-view>`;case`EmailLogin`:return n`<w3m-email-login-view></w3m-email-login-view>`;case`EmailVerifyOtp`:return n`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case`EmailVerifyDevice`:return n`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case`GetWallet`:return n`<w3m-get-wallet-view></w3m-get-wallet-view>`;case`Networks`:return n`<w3m-networks-view></w3m-networks-view>`;case`SwitchNetwork`:return n`<w3m-network-switch-view></w3m-network-switch-view>`;case`ProfileWallets`:return n`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case`Transactions`:return n`<w3m-transactions-view></w3m-transactions-view>`;case`OnRampProviders`:return n`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case`OnRampTokenSelect`:return n`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case`OnRampFiatSelect`:return n`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case`UpgradeEmailWallet`:return n`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case`UpdateEmailWallet`:return n`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case`UpdateEmailPrimaryOtp`:return n`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case`UpdateEmailSecondaryOtp`:return n`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case`UnsupportedChain`:return n`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case`Swap`:return n`<w3m-swap-view></w3m-swap-view>`;case`SwapSelectToken`:return n`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case`SwapPreview`:return n`<w3m-swap-preview-view></w3m-swap-preview-view>`;case`WalletSend`:return n`<w3m-wallet-send-view></w3m-wallet-send-view>`;case`WalletSendSelectToken`:return n`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case`WalletSendPreview`:return n`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case`WalletSendConfirmed`:return n`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case`WhatIsABuy`:return n`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case`WalletReceive`:return n`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case`WalletCompatibleNetworks`:return n`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case`WhatIsAWallet`:return n`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case`ConnectingMultiChain`:return n`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case`WhatIsANetwork`:return n`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case`ConnectingFarcaster`:return n`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case`SwitchActiveChain`:return n`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case`RegisterAccountName`:return n`<w3m-register-account-name-view></w3m-register-account-name-view>`;case`RegisterAccountNameSuccess`:return n`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case`SmartSessionCreated`:return n`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case`SmartSessionList`:return n`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case`SIWXSignMessage`:return n`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case`Pay`:return n`<w3m-pay-view></w3m-pay-view>`;case`PayLoading`:return n`<w3m-pay-loading-view></w3m-pay-loading-view>`;case`PayQuote`:return n`<w3m-pay-quote-view></w3m-pay-quote-view>`;case`FundWallet`:return n`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case`PayWithExchange`:return n`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case`PayWithExchangeSelectAsset`:return n`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case`UsageExceeded`:return n`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case`SmartAccountSettings`:return n`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return n`<w3m-connect-view></w3m-connect-view>`}}};_.styles=[h],g([l()],_.prototype,`viewState`,void 0),g([l()],_.prototype,`history`,void 0),_=g([o(`w3m-router`)],_);var v=a`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`,y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=4,x=class extends u{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<b;return n`${this.walletImages.slice(0,b).map(({src:e,walletName:t})=>n`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${s(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(b-this.walletImages.length)].map(()=>n` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};x.styles=[c,v],y([r({type:Array})],x.prototype,`walletImages`,void 0),x=y([o(`wui-all-wallets-image`)],x);var S=a`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:`ton`,tron:`tron`,stellar:void 0},T=class extends u{constructor(){super(...arguments),this.walletImages=[],this.imageSrc=``,this.name=``,this.size=`md`,this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor=`accent-100`}render(){return this.dataset.size=this.size,n`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${s(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){return this.namespaces?.length?n`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((e,t)=>n`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(this.namespaces?.length??0)*2-t}
              class="namespace-icon"
            >
              <wui-icon
                name=${s(w[e])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`)}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n`<wui-wallet-image
        size=${s(this.size===`sm`?`sm`:`md`)}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?n`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?n`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?n`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};T.styles=[c,i,S],C([r({type:Array})],T.prototype,`walletImages`,void 0),C([r()],T.prototype,`imageSrc`,void 0),C([r()],T.prototype,`name`,void 0),C([r()],T.prototype,`size`,void 0),C([r()],T.prototype,`tagLabel`,void 0),C([r()],T.prototype,`tagVariant`,void 0),C([r()],T.prototype,`walletIcon`,void 0),C([r()],T.prototype,`tabIdx`,void 0),C([r({type:Array})],T.prototype,`namespaces`,void 0),C([r({type:Boolean})],T.prototype,`disabled`,void 0),C([r({type:Boolean})],T.prototype,`showAllWallets`,void 0),C([r({type:Boolean})],T.prototype,`loading`,void 0),C([r({type:String})],T.prototype,`loadingSpinnerColor`,void 0),T=C([o(`wui-list-wallet`)],T);export{m as n,_ as t};