import{b as e,c as t,d as n,g as r,l as i,o as a,p as o,s,u as c,v as l}from"./wui-text-BsGPdoGw.js";import{E as u,O as d,U as f,V as p,X as m,b as h,c as g,i as _,j as v,l as y,r as b,t as x,tt as S,w as C}from"./ModalController-BOPPHKjJ.js";import{t as w}from"./SwapController-B1ur7qvb.js";import"./wui-button-CUl2uKCT.js";import"./wui-icon-box-CfdNUob5.js";import"./wui-separator-CmKcRNo9.js";import{n as T,t as E}from"./ref-CMkOaKAb.js";import"./wui-icon-F-TY97Fe.js";import"./wui-input-amount-BgWZ0TwV.js";import"./wui-link-CcJ-7PJu.js";import"./wui-token-button-B2kWX7xo.js";import"./wui-input-text-B07YvXax.js";import"./wui-list-token-GZ9pKhD8.js";import"./wui-image-65HTwQOa.js";import"./wui-avatar-BbBVhnbX.js";var D=r`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-size: ${({textSize:e})=>e.large};
    font-weight: ${({fontWeight:e})=>e.regular};
    line-height: ${({typography:e})=>e[`lg-regular`].lineHeight};
    letter-spacing: ${({typography:e})=>e[`lg-regular`].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends l{constructor(){super(...arguments),this.inputElementRef=E(),this.instructionElementRef=E(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=p.debounce(async e=>{if(!e.length){this.setReceiverAddress(``);return}let t=b.state.activeChain;if(p.isAddress(e,t))this.setReceiverAddress(e);else try{let t=await y.getEnsAddress(e);if(t){_.setReceiverProfileName(e),_.setReceiverAddress(t);let n=await y.getEnsAvatar(e);_.setReceiverProfileImageUrl(n||void 0)}}catch{this.setReceiverAddress(e)}finally{_.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?e` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${[`8`,`4`,`5`,`4`]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??``}
        ></textarea>
      </wui-flex>`:e` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${[`8`,`4`,`5`,`4`]}
    >
      <wui-text
        ${T(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${T(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??``}
        autocomplete="off"
      ></textarea>
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents=`none`,this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents=`auto`,this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:+!e},{opacity:+!!e}],{duration:100,easing:`ease`,fill:`forwards`}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();_.setReceiverAddress(e),this.focusInput()}onInputChange(e){let t=e.target;this.pasting=!1,this.value=e.target?.value,t.value&&!this.instructionHidden&&this.focusInput(),_.setLoading(!0),this.onDebouncedSearch(t.value)}setReceiverAddress(e){_.setReceiverAddress(e),_.setReceiverProfileName(void 0),_.setReceiverProfileImageUrl(void 0),_.setLoading(!1)}};k.styles=D,O([t()],k.prototype,`value`,void 0),O([t({type:Boolean})],k.prototype,`readOnly`,void 0),O([s()],k.prototype,`instructionHidden`,void 0),O([s()],k.prototype,`pasting`,void 0),k=O([i(`w3m-input-address`)],k);var A=r`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
    transition: all ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends l{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){let t=this.readOnly||!this.token;return e` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${[`5`,`3`,`4`,`3`]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${t}
          .value=${this.sendTokenAmount??``}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?e`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:e`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||h.push(`WalletSendSelectToken`)}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){let t=this.token.price*Number(this.sendTokenAmount);return e`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${t?`$${S.formatNumberToLocalString(t,2)}`:`Incorrect value`}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?e` <wui-text variant="sm-regular" color="secondary">
        ${c.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?e`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:e`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(e){_.setTokenAmount(String(e.detail))}onMaxClick(){if(this.token){let e=Number(this.token.quantity.decimals),t=S.bigNumber(this.token.quantity.numeric);if(!this.token.address&&this.gasPrice){let n=65000n*BigInt(this.gasPrice),r=S.bigNumber(n.toString()).div(S.bigNumber(10).pow(e)),i=t.minus(r);_.setTokenAmount(i.gt(0)?i.toFixed(e,0):`0`)}else _.setTokenAmount(t.toFixed(e,0))}}};M.styles=A,j([t({type:Object})],M.prototype,`token`,void 0),j([t({type:Boolean})],M.prototype,`readOnly`,void 0),j([t({type:String})],M.prototype,`sendTokenAmount`,void 0),j([t({type:Boolean})],M.prototype,`isInsufficientBalance`,void 0),j([t({type:String})],M.prototype,`gasPrice`,void 0),M=j([i(`w3m-input-token`)],M);var N=r`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F={INSUFFICIENT_FUNDS:`Insufficient Funds`,INCORRECT_VALUE:`Incorrect Value`,INVALID_ADDRESS:`Invalid Address`,ADD_ADDRESS:`Add Address`,ADD_AMOUNT:`Add Amount`,SELECT_TOKEN:`Select Token`,PREVIEW_SEND:`Preview Send`},I=class extends l{constructor(){super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=_.state.token,this.sendTokenAmount=_.state.sendTokenAmount,this.receiverAddress=_.state.receiverAddress,this.receiverProfileName=_.state.receiverProfileName,this.loading=_.state.loading,this.params=h.state.data?.send,this.caipAddress=b.getAccountData()?.caipAddress,this.disconnecting=!1,this.gasFee=w.state.gasFee,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());let e=b.subscribeKey(`activeCaipAddress`,t=>{!t&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,x.open({view:`Connect`,data:{redirectView:`WalletSend`}}).catch(()=>null),e())});this.unsubscribe.push(b.subscribeAccountStateProp(`caipAddress`,e=>{this.caipAddress=e}),_.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}),w.subscribeKey(`gasFee`,e=>{this.gasFee=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){await this.handleSendParameters()}render(){let t=this.getMessage(),n=!!this.params;return e` <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPrice=${this.gasFee}
          ?readOnly=${n}
          ?isInsufficientBalance=${t===F.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${n}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate(t)}
    </wui-flex>`}async fetchBalances(){await _.fetchTokenBalance(),_.fetchNetworkBalance()}async fetchNetworkPrice(){await w.getNetworkTokenPrice(),await w.getInitialGasPrice()}onButtonClick(){h.push(`WalletSendPreview`,{send:this.params})}onFundWalletClick(){h.push(`FundWallet`,{redirectView:`WalletSend`})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await y.disconnect()}finally{this.disconnecting=!1}}getMessage(){return this.token?this.sendTokenAmount?this.token.price&&!(Number(this.sendTokenAmount)*this.token.price)?F.INCORRECT_VALUE:S.bigNumber(this.sendTokenAmount).gt(this.token.quantity.numeric)?F.INSUFFICIENT_FUNDS:this.receiverAddress?p.isAddress(this.receiverAddress,b.state.activeChain)?F.PREVIEW_SEND:F.INVALID_ADDRESS:F.ADD_ADDRESS:F.ADD_AMOUNT:F.SELECT_TOKEN}buttonTemplate(t){let n=!t.startsWith(F.PREVIEW_SEND),r=t===F.INSUFFICIENT_FUNDS,i=!!this.params;return r&&!i?e`
        <wui-flex .margin=${[`4`,`0`,`0`,`0`]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:e`<wui-flex .margin=${[`4`,`0`,`0`,`0`]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${n}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${t}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}let e=Number(this.params.amount);if(isNaN(e)){v.showError(`Invalid amount`),this.loading=!1;return}let{namespace:t,chainId:n,assetAddress:r}=this.params;if(!f.SEND_PARAMS_SUPPORTED_CHAINS.includes(t)){v.showError(`Chain "${t}" is not supported for send parameters`),this.loading=!1;return}let i=b.getCaipNetworkById(n,t);if(!i)v.showError(`Network with id "${n}" not found`),this.loading=!1;else try{let{balance:t,name:n,symbol:a,decimals:o}=await g.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:r,caipNetwork:i});if(!n||!a||!o||!t){v.showError(`Token not found`);return}_.setToken({name:n,symbol:a,chainId:i.id.toString(),address:`${i.chainNamespace}:${i.id}:${r}`,value:0,price:0,quantity:{decimals:o.toString(),numeric:t.toString()},iconUrl:u.getTokenImage(a)??``}),_.setTokenAmount(String(e)),_.setReceiverAddress(this.params.to)}catch(e){console.error(`Failed to load token information:`,e),v.showError(`Failed to load token information`)}finally{this.loading=!1}}};I.styles=N,P([s()],I.prototype,`token`,void 0),P([s()],I.prototype,`sendTokenAmount`,void 0),P([s()],I.prototype,`receiverAddress`,void 0),P([s()],I.prototype,`receiverProfileName`,void 0),P([s()],I.prototype,`loading`,void 0),P([s()],I.prototype,`params`,void 0),P([s()],I.prototype,`caipAddress`,void 0),P([s()],I.prototype,`disconnecting`,void 0),P([s()],I.prototype,`gasFee`,void 0),I=P([i(`w3m-wallet-send-view`)],I);var L=r`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends l{constructor(){super(),this.unsubscribe=[],this.tokenBalances=_.state.tokenBalances,this.search=``,this.onDebouncedSearch=p.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(_.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return e`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){this.tokenBalances&&this.tokenBalances?.length!==0||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await _.fetchTokenBalance(),_.fetchNetworkBalance()}async fetchNetworkPrice(){await w.getNetworkTokenPrice()}templateSearchInput(){return e`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===b.state.activeCaipNetwork?.caipNetworkId),this.filteredTokens=this.search?this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens,e`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${[`0`,`3`,`0`,`3`]}
      >
        <wui-flex justifyContent="flex-start" .padding=${[`4`,`3`,`3`,`3`]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(t=>e`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):e`<wui-flex
                .padding=${[`20`,`0`,`0`,`0`]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){h.push(`OnRampProviders`)}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){_.setToken(e),_.setTokenAmount(void 0),h.goBack()}};z.styles=L,R([s()],z.prototype,`tokenBalances`,void 0),R([s()],z.prototype,`tokens`,void 0),R([s()],z.prototype,`filteredTokens`,void 0),R([s()],z.prototype,`search`,void 0),z=R([i(`w3m-wallet-send-select-token-view`)],z);var B=r`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends l{constructor(){super(...arguments),this.text=``}render(){return e`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?e`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?e`<wui-image src=${this.imageSrc}></wui-image>`:e`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};H.styles=[o,n,B],V([t({type:String})],H.prototype,`text`,void 0),V([t({type:String})],H.prototype,`address`,void 0),V([t({type:String})],H.prototype,`imageSrc`,void 0),H=V([i(`wui-preview-item`)],H);var U=r`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`,W=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=class extends l{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle=``,this.textValue=void 0}render(){return e`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?e`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?e` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:e`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};G.styles=[o,n,U],W([t()],G.prototype,`imageSrc`,void 0),W([t()],G.prototype,`textTitle`,void 0),W([t()],G.prototype,`textValue`,void 0),G=W([i(`wui-list-content`)],G);var K=r`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends l{constructor(){super(...arguments),this.params=h.state.data?.send}render(){return e` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${c.getTruncateString({string:this.receiverAddress??``,charsStart:4,charsEnd:4,truncate:`middle`})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?e` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${a(u.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&h.push(`Networks`,{network:e})}};J.styles=K,q([t()],J.prototype,`receiverAddress`,void 0),q([t({type:Object})],J.prototype,`caipNetwork`,void 0),q([s()],J.prototype,`params`,void 0),J=q([i(`w3m-wallet-send-details`)],J);var Y=r`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=class extends l{constructor(){super(),this.unsubscribe=[],this.token=_.state.token,this.sendTokenAmount=_.state.sendTokenAmount,this.receiverAddress=_.state.receiverAddress,this.receiverProfileName=_.state.receiverProfileName,this.receiverProfileImageUrl=_.state.receiverProfileImageUrl,this.caipNetwork=b.state.activeCaipNetwork,this.loading=_.state.loading,this.params=h.state.data?.send,this.unsubscribe.push(_.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),b.subscribeKey(`activeCaipNetwork`,e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return e` <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]}>
      <wui-flex gap="2" flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?c.roundNumber(Number(this.sendTokenAmount),6,5):`unknown`} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?c.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:`end`}):c.getTruncateString({string:this.receiverAddress?this.receiverAddress:``,charsStart:4,charsEnd:4,truncate:`middle`})}"
            address=${this.receiverAddress??``}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${[`6`,`0`,`0`,`0`]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${[`3`,`0`,`0`,`0`]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${[`4`,`0`,`0`,`0`]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){let t=this.token.price*Number(this.sendTokenAmount);return e`<wui-text variant="md-regular" color="primary"
        >$${t.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress)v.showError(`Please enter a valid amount and receiver address`);else try{await _.sendToken(),this.params?h.reset(`WalletSendConfirmed`):(v.showSuccess(`Transaction started`),h.replace(`Account`))}catch(e){let t=`Failed to send transaction`,n=e instanceof d&&e.originalName===m.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST,r=e instanceof d&&e.originalName===m.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;(n||r)&&(t=e.message),C.sendEvent({type:`track`,event:n?`SEND_REJECTED`:`SEND_ERROR`,properties:_.getSdkEventProperties(e)}),v.showError(t)}}onCancelClick(){h.goBack()}};Z.styles=Y,X([s()],Z.prototype,`token`,void 0),X([s()],Z.prototype,`sendTokenAmount`,void 0),X([s()],Z.prototype,`receiverAddress`,void 0),X([s()],Z.prototype,`receiverProfileName`,void 0),X([s()],Z.prototype,`receiverProfileImageUrl`,void 0),X([s()],Z.prototype,`caipNetwork`,void 0),X([s()],Z.prototype,`loading`,void 0),X([s()],Z.prototype,`params`,void 0),Z=X([i(`w3m-wallet-send-preview-view`)],Z);var Q=r`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,ee=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends l{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return e`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${[`1`,`3`,`4`,`3`]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){x.close()}};$.styles=Q,$=ee([i(`w3m-send-confirmed-view`)],$);export{$ as W3mSendConfirmedView,z as W3mSendSelectTokenView,Z as W3mWalletSendPreviewView,I as W3mWalletSendView};