import{M as e,V as t,b as n,j as r,l as i,r as a,rt as o,t as s,v as c,w as l}from"./ModalController-BOPPHKjJ.js";import{t as u}from"./SIWXUtil-CRSHJayQ.js";import{C as d,b as f,g as p,l as m,s as h,v as g}from"./wui-text-BsGPdoGw.js";import{t as _}from"./w3m-email-otp-widget-CmGWyXci.js";import"./wui-icon-box-CfdNUob5.js";import"./wui-link-CcJ-7PJu.js";import{n as v,t as y}from"./ref-CMkOaKAb.js";import"./wui-button-CUl2uKCT.js";import"./wui-email-input-BvNzuGPe.js";import{t as b}from"./ConstantsUtil-DGp_2YOH.js";var x=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},S=class extends _{constructor(){super(...arguments),this.onOtpSubmit=async o=>{try{if(this.authConnector){let t=a.state.activeChain,c=i.getConnections(t),d=e.state.remoteFeatures?.multiWallet,f=c.length>0;if(await this.authConnector.provider.connectOtp({otp:o}),l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),t)await i.connectExternal(this.authConnector,t);else throw Error(`Active chain is not set on ChainController`);if(e.state.remoteFeatures?.emailCapture)return;if(e.state.siwx){await u.isAuthenticated()&&s.close();return}if(f&&d){n.replace(`ProfileWallets`),r.showSuccess(`New Wallet Added`);return}s.close()}}catch(e){throw l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}))}}};S=x([m(`w3m-email-verify-otp-view`)],S);var C=p`
  wui-icon-box {
    height: ${({spacing:e})=>e[16]};
    width: ${({spacing:e})=>e[16]};
  }
`,w=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},T=class extends g{constructor(){super(),this.email=n.state.data?.email,this.authConnector=c.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error(`w3m-email-verify-device-view: No email provided`);if(!this.authConnector)throw Error(`w3m-email-verify-device-view: No auth connector provided`);return f`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`6`,`3`,`6`,`3`]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),l.sendEvent({type:`track`,event:`DEVICE_REGISTERED_FOR_EMAIL`}),l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),n.replace(`EmailVerifyOtp`,{email:this.email})}catch{n.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error(`w3m-email-login-widget: Unable to resend email`);this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),r.showSuccess(`Code email resent`)}}catch(e){r.showError(e)}finally{this.loading=!1}}};T.styles=C,w([h()],T.prototype,`loading`,void 0),T=w([m(`w3m-email-verify-device-view`)],T);var E=d`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,D=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends g{constructor(){super(...arguments),this.formRef=y(),this.initialEmail=n.state.data?.email??``,this.redirectView=n.state.data?.redirectView,this.email=``,this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){return f`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${v(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=c.getAuthConnector();if(!t)throw Error(`w3m-update-email-wallet: Auth connector not found`);let r=await t.provider.updateEmail({email:this.email});l.sendEvent({type:`track`,event:`EMAIL_EDIT`}),r.action===`VERIFY_SECONDARY_OTP`?n.push(`UpdateEmailSecondaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):n.push(`UpdateEmailPrimaryOtp`,{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){r.showError(e),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?f`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${n.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:f`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};O.styles=E,D([h()],O.prototype,`email`,void 0),D([h()],O.prototype,`loading`,void 0),O=D([m(`w3m-update-email-wallet-view`)],O);var k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends _{constructor(){super(),this.email=n.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),n.replace(`UpdateEmailSecondaryOtp`,n.state.data))}catch(e){throw l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onStartOver=()=>{n.replace(`UpdateEmailWallet`,n.state.data)}}};A=k([m(`w3m-update-email-primary-otp-view`)],A);var j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends _{constructor(){super(),this.email=n.state.data?.newEmail,this.redirectView=n.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_PASS`}),this.redirectView&&n.reset(this.redirectView))}catch(e){throw l.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_FAIL`,properties:{message:t.parseError(e)}}),e}},this.onStartOver=()=>{n.replace(`UpdateEmailWallet`,n.state.data)}}};M=j([m(`w3m-update-email-secondary-otp-view`)],M);var N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends g{constructor(){super(),this.authConnector=c.getAuthConnector(),this.isEmailEnabled=e.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(c.state.connectors),this.connectors=c.state.connectors,c.subscribeKey(`connectors`,e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error(`w3m-email-login-view: Email is not enabled`);if(!this.isAuthEnabled)throw Error(`w3m-email-login-view: No auth connector provided`);return f`<wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===b.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};N([h()],P.prototype,`connectors`,void 0),P=N([m(`w3m-email-login-view`)],P);export{P as W3mEmailLoginView,_ as W3mEmailOtpWidget,T as W3mEmailVerifyDeviceView,S as W3mEmailVerifyOtpView,A as W3mUpdateEmailPrimaryOtpView,M as W3mUpdateEmailSecondaryOtpView,O as W3mUpdateEmailWalletView};