import{r as e}from"./rolldown-runtime-DLMaRju-.js";import{C as t,b as n,c as r,d as i,g as a,l as o,o as s,p as c,s as l,t as u,u as d,v as f}from"./wui-text-BsGPdoGw.js";import{B as ee,C as p,D as te,E as m,H as ne,M as h,O as re,Q as ie,S as ae,T as oe,U as g,V as _,X as se,b as v,f as ce,g as le,j as y,l as b,n as ue,r as x,rt as S,t as C,v as w,w as T,x as de,y as fe}from"./ModalController-BOPPHKjJ.js";import"./wui-image-65HTwQOa.js";import"./wui-loading-spinner-CA2pzwLZ.js";import"./wui-avatar-BbBVhnbX.js";import"./wui-icon-box-CFj7nng-.js";import{n as pe,t as me}from"./wui-list-wallet-Byulbj7R.js";import"./wui-icon-link-Do60_7VW.js";import"./wui-list-item-DEaMx81q.js";import"./wui-button-CUl2uKCT.js";import{t as E}from"./ExchangeController-DZRqrwdp.js";import"./wui-icon-F-TY97Fe.js";import{n as D,t as he}from"./wui-network-image-DWR7TF8D.js";import{t as ge}from"./MathUtil-B2UslVSw.js";import{t as _e}from"./wui-tag-B2qTELV7.js";import"./w3m-activity-list-byy1cGH_.js";import"./wui-list-token-GZ9pKhD8.js";import"./w3m-tooltip-D8jZBGU2.js";import"./wui-icon-box-CfdNUob5.js";import"./wui-separator-CmKcRNo9.js";import{n as ve,t as ye}from"./ref-CMkOaKAb.js";import"./wui-input-text-B0wKiLAM.js";import"./wui-shimmer-BNb8cNFq.js";import"./wui-shimmer-BR_jaRst.js";import"./wui-loading-spinner-DiC-Kf96.js";import{t as be}from"./wui-loading-thumbnail-C5VcXpZN.js";import"./w3m-onramp-providers-footer-32Imf2r0.js";import{t as O}from"./ConstantsUtil-DGp_2YOH.js";import{t as xe}from"./AlertController-qJzjThSJ.js";import"./wui-email-input-BvNzuGPe.js";import{n as Se,r as Ce,t as we}from"./wui-list-social-DekXfDQG.js";import"./wui-link-CcJ-7PJu.js";import{On as Te,h as Ee}from"./ccip-Bk8ZpG2t.js";import{Q as De,X as Oe,Z as ke,n as Ae,r as je,y as Me}from"./_esm-B5OYcN34.js";import{t as Ne}from"./SIWXUtil-CRSHJayQ.js";import"./wui-qr-code-ok1kaGZ4.js";import{t as Pe}from"./NavigationUtil-CLCRNDHF.js";import"./wui-visual-5cYXYPxT.js";import"./wui-input-text-B07YvXax.js";function Fe(e,t={}){let{key:n=`fallback`,name:r=`Fallback`,rank:i=!1,shouldThrow:a=Ie,retryCount:o,retryDelay:s}=t;return(({chain:t,pollingInterval:c=4e3,timeout:l,...u})=>{let d=e,f=()=>{},ee=je({key:n,name:r,async request({method:e,params:n},r){let i,o=async(s=0)=>{let c=d[s]({...u,chain:t,retryCount:0,timeout:l});try{let t=await c.request({method:e,params:n},r);return f({method:e,params:n,response:t,transport:c,status:`success`}),t}catch(r){if(f({error:r,method:e,params:n,transport:c,status:`error`}),a(r)||e===`eth_sendRawTransactionSync`&&r instanceof Te&&r.walk(e=>e?.code===4)||s===d.length-1||(i??=d.slice(s+1).some(n=>{let{include:r,exclude:i}=n({chain:t}).config.methods||{};return r?r.includes(e):!i||!i.includes(e)}),!i))throw r;return o(s+1)}};return o()},retryCount:o,retryDelay:s,type:`fallback`},{onResponse:e=>f=e,transports:d.map(e=>e({chain:t,retryCount:0}))});if(i){let e=typeof i==`object`?i:{};Le({chain:t,interval:e.interval??c,onTransports:e=>d=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:d,weights:e.weights})}return ee})}function Ie(e){return!!(`code`in e&&typeof e.code==`number`&&(e.code===Oe.code||e.code===ke.code||e.code===De.code||Ee.nodeMessage.test(e.message)||e.code===5e3))}function Le({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:i=10,timeout:a=1e3,transports:o,weights:s={}}){let{stability:c=.7,latency:l=.3}=s,u=[],d=async()=>{let s=await Promise.all(o.map(async t=>{let n=t({chain:e,retryCount:0,timeout:a}),i=Date.now(),o,s;try{await(r?r({transport:n}):n.request({method:`net_listening`})),s=1}catch{s=0}finally{o=Date.now()}return{latency:o-i,success:s}}));u.push(s),u.length>i&&u.shift();let f=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));n(o.map((e,t)=>{let n=u.map(e=>e[t].latency),r=1-n.reduce((e,t)=>e+t,0)/n.length/f,i=u.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return a===0?[0,t]:[l*r+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await Me(t),d()};d()}var Re={ConnectorExplorerIds:{[S.CONNECTOR_ID.COINBASE]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[S.CONNECTOR_ID.COINBASE_SDK]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[S.CONNECTOR_ID.BASE_ACCOUNT]:`fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa`,[S.CONNECTOR_ID.SAFE]:`225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f`,[S.CONNECTOR_ID.LEDGER]:`19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927`,[S.CONNECTOR_ID.OKX]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[O.METMASK_CONNECTOR_NAME]:`c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96`,[O.TRUST_CONNECTOR_NAME]:`4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0`,[O.SOLFLARE_CONNECTOR_NAME]:`1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79`,[O.PHANTOM_CONNECTOR_NAME]:`a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393`,[O.COIN98_CONNECTOR_NAME]:`2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01`,[O.MAGIC_EDEN_CONNECTOR_NAME]:`8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6`,[O.BACKPACK_CONNECTOR_NAME]:`2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0`,[O.BITGET_CONNECTOR_NAME]:`38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662`,[O.FRONTIER_CONNECTOR_NAME]:`85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041`,[O.XVERSE_CONNECTOR_NAME]:`2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b`,[O.LEATHER_CONNECTOR_NAME]:`483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13`,[O.OKX_CONNECTOR_NAME]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[O.BINANCE_CONNECTOR_NAME]:`2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25`},NetworkImageIds:{1:`ba0ba0cd-17c6-4806-ad93-f9d174f17900`,42161:`3bff954d-5cb0-47a0-9a23-d20192e74600`,43114:`30c46e53-e989-45fb-4549-be3bd4eb3b00`,56:`93564157-2e8e-4ce7-81df-b264dbee9b00`,250:`06b26297-fe0c-4733-5d6b-ffa5498aac00`,10:`ab9c186a-c52f-464b-2906-ca59d760a400`,137:`41d04d42-da3b-4453-8506-668cc0727900`,5e3:`e86fae9b-b770-4eea-e520-150e12c81100`,295:`6a97d510-cac8-4e58-c7ce-e8681b044c00`,11155111:`e909ea0a-f92a-4512-c8fc-748044ea6800`,84532:`a18a7ecd-e307-4360-4746-283182228e00`,1301:`4eeea7ef-0014-4649-5d1d-07271a80f600`,130:`2257980a-3463-48c6-cbac-a42d2a956e00`,10143:`0a728e83-bacb-46db-7844-948f05434900`,143:`0a728e83-bacb-46db-7844-948f05434900`,100:`02b53f6a-e3d4-479e-1cb4-21178987d100`,9001:`f926ff41-260d-4028-635e-91913fc28e00`,324:`b310f07f-4ef7-49f3-7073-2a0a39685800`,314:`5a73b3dd-af74-424e-cae0-0de859ee9400`,4689:`34e68754-e536-40da-c153-6ef2e7188a00`,1088:`3897a66d-40b9-4833-162f-a2c90531c900`,1284:`161038da-44ae-4ec7-1208-0ea569454b00`,1285:`f1d73bb6-5450-4e18-38f7-fb6484264a00`,7777777:`845c60df-d429-4991-e687-91ae45791600`,42220:`ab781bbc-ccc6-418d-d32d-789b15da1f00`,8453:`7289c336-3981-4081-c5f4-efc26ac64a00`,1313161554:`3ff73439-a619-4894-9262-4470c773a100`,2020:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,2021:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,80094:`e329c2c9-59b0-4a02-83e4-212ff3779900`,2741:`fc2427d1-5af9-4a9c-8da5-6f94627cd900`,30:`fb7e1624-99e3-4c36-ea01-4cfe46c4a300`,31:`2eb3d92a-3d77-42aa-87c9-190adb144800`,"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":`a1b58899-f671-4276-6a5e-56ca5bd59700`,"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":`a1b58899-f671-4276-6a5e-56ca5bd59700`,EtWTRABZaYq6iMfeYKouRu166VU2xqa1:`a1b58899-f671-4276-6a5e-56ca5bd59700`,"000000000019d6689c085ae165831e93":`0b4838db-0161-4ffe-022d-532bf03dba00`,"000000000933ea01ad0ee984209779ba":`39354064-d79b-420b-065d-f980c4b78200`,"00000008819873e925422c1ff0f99f7c":`b3406e4a-bbfc-44fb-e3a6-89673c78b700`,"-239":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"-3":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"0x2b6653dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0x94a9059e":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0xcd8690dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`,pubnet:``,testnet:``},ConnectorImageIds:{[S.CONNECTOR_ID.COINBASE]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[S.CONNECTOR_ID.COINBASE_SDK]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[S.CONNECTOR_ID.BASE_ACCOUNT]:`bba2c8be-7fd1-463e-42b1-796ecb0ad200`,[S.CONNECTOR_ID.SAFE]:`461db637-8616-43ce-035a-d89b8a1d5800`,[S.CONNECTOR_ID.LEDGER]:`54a1aa77-d202-4f8d-0fb2-5d2bb6db0300`,[S.CONNECTOR_ID.WALLET_CONNECT]:`ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400`,[S.CONNECTOR_ID.INJECTED]:`07ba87ed-43aa-4adf-4540-9e6a2b9cae00`},ConnectorNamesMap:{[S.CONNECTOR_ID.INJECTED]:`Browser Wallet`,[S.CONNECTOR_ID.WALLET_CONNECT]:`WalletConnect`,[S.CONNECTOR_ID.COINBASE]:`Coinbase`,[S.CONNECTOR_ID.COINBASE_SDK]:`Coinbase`,[S.CONNECTOR_ID.BASE_ACCOUNT]:`Base Account`,[S.CONNECTOR_ID.LEDGER]:`Ledger`,[S.CONNECTOR_ID.SAFE]:`Safe`},ConnectorTypesMap:{[S.CONNECTOR_ID.INJECTED]:`INJECTED`,[S.CONNECTOR_ID.WALLET_CONNECT]:`WALLET_CONNECT`,[S.CONNECTOR_ID.EIP6963]:`ANNOUNCED`,[S.CONNECTOR_ID.AUTH]:`AUTH`,[S.CONNECTOR_ID.COINBASE]:`EXTERNAL`,[S.CONNECTOR_ID.COINBASE_SDK]:`EXTERNAL`,[S.CONNECTOR_ID.BASE_ACCOUNT]:`EXTERNAL`,[O.CONNECTOR_TYPE_AUTH]:`AUTH`},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},ze=`rpc.walletconnect.org`;function Be(e,t){let n=new URL(`https://rpc.walletconnect.org/v1/`);return n.searchParams.set(`chainId`,e),n.searchParams.set(`projectId`,t),n.toString()}var Ve=`near:mainnet.solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp.eip155:1101.eip155:56.eip155:42161.eip155:7777777.eip155:59144.eip155:324.solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1.eip155:5000.solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz.eip155:80084.eip155:5003.eip155:100.eip155:8453.eip155:42220.eip155:1313161555.eip155:17000.eip155:1.eip155:300.eip155:1313161554.eip155:1329.eip155:84532.eip155:421614.eip155:11155111.eip155:8217.eip155:43114.solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z.eip155:999999999.eip155:11155420.eip155:80002.eip155:97.eip155:43113.eip155:137.eip155:10.eip155:1301.eip155:80094.eip155:80069.eip155:560048.eip155:31.eip155:2818.eip155:57054.eip155:911867.eip155:534351.eip155:1112.eip155:534352.eip155:1111.eip155:146.eip155:130.eip155:1284.eip155:30.eip155:2810.eip155:55931.bip122:000000000019d6689c085ae165831e93.bip122:000000000933ea01ad0ee984209779ba.tron:0x2b6653dc.tron:0xcd8690dc`.split(`.`),He={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===ze}catch{n=!1}if(n){let n=new URL(e);return n.searchParams.has(`projectId`)||n.searchParams.set(`projectId`,t),n.toString()}return e},isCaipNetwork(e){return`chainNamespace`in e&&`caipNetworkId`in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:S.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${S.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){let r=e.rpcUrls?.default?.http?.[0];return Ve.includes(t)?Be(t,n):r||``},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){let i=this.getChainNamespace(e),a=this.getCaipNetworkId(e),o=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,a,n),c=e?.rpcUrls?.chainDefault?.http?.[0]||o,l=r?.[a]?.map(e=>e.url)||[],u=[...l,...s?[s]:[]],d=[...l];return c&&!d.includes(c)&&d.push(c),{...e,chainNamespace:i,caipNetworkId:a,assets:{imageId:Re.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:u},chainDefault:{http:d}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){return e.map(e=>He.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:r,projectId:n}))},getViemTransport(e,t,n){let r=[];return n?.forEach(e=>{r.push(Ae(e.url,e.config))}),Ve.includes(e.caipNetworkId)&&r.push(Ae(Be(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":`text/plain`}}})),e?.rpcUrls?.default?.http?.forEach(e=>{r.push(Ae(e))}),Fe(r)},extendWagmiTransports(e,t,n){if(Ve.includes(e.caipNetworkId)){let r=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return Fe([n,Ae(r)])}return n},getUnsupportedNetwork(e){return{id:e.split(`:`)[1],caipNetworkId:e,name:S.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(`:`)[0],nativeCurrency:{name:``,decimals:0,symbol:``},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){let t=ne.getActiveCaipNetworkId(),n=x.getAllRequestedCaipNetworks(),r=Array.from(x.state.chains?.keys()||[]),i=t?.split(`:`)[0],a=i?r.includes(i):!1,o=n?.find(e=>e.caipNetworkId===t);return a&&!o&&t?this.getUnsupportedNetwork(t):o||e||n?.[0]}},Ue=a`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`,k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends f{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address=``,this.profileName=``,this.charsStart=4,this.charsEnd=6}render(){return n`
      <button
        ?disabled=${this.disabled}
        class=${s(this.balance?void 0:`local-no-balance`)}
        data-error=${s(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){let e=this.networkSrc?n`<wui-image src=${this.networkSrc}></wui-image>`:n` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return n`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return n`<wui-text variant="md-regular" color="inherit">
      ${this.address?d.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){let e=this.loading?n`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:n`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return n`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};A.styles=[c,i,Ue],k([r()],A.prototype,`networkSrc`,void 0),k([r()],A.prototype,`avatarSrc`,void 0),k([r()],A.prototype,`balance`,void 0),k([r({type:Boolean})],A.prototype,`isUnsupportedChain`,void 0),k([r({type:Boolean})],A.prototype,`disabled`,void 0),k([r({type:Boolean})],A.prototype,`loading`,void 0),k([r()],A.prototype,`address`,void 0),k([r()],A.prototype,`profileName`,void 0),k([r()],A.prototype,`charsStart`,void 0),k([r()],A.prototype,`charsEnd`,void 0),A=k([o(`wui-account-button`)],A);var j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=`show`,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=h.state.allowUnsupportedChain?!0:!x.state.activeChain||x.checkIfSupportedNetwork(x.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(x.getAccountData(this.namespace)),this.setNetworkData(x.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)},e),x.subscribeChainProp(`networkState`,t=>{this.setNetworkData(t),this.isSupported=x.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(te.subscribeNetworkImages(()=>{this.networkImage=m.getNetworkImage(this.network)}),x.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),x.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)}),x.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=m.getNetworkImage(e),this.isSupported=!e?.chainNamespace||x.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!x.state.activeChain)return null;let e=this.balance===`show`,t=typeof this.balanceVal!=`string`,{formattedText:r}=_.parseBalance(this.balanceVal,this.balanceSymbol);return n`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!h.state.allowUnsupportedChain&&!this.isSupported}
        address=${s(_.getPlainAddress(this.caipAddress))}
        profileName=${s(this.profileName)}
        networkSrc=${s(this.networkImage)}
        avatarSrc=${s(this.profileImage)}
        balance=${e?r:``}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:``}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||h.state.allowUnsupportedChain?C.open({namespace:this.namespace}):C.open({view:`UnsupportedChain`})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await m.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=m.getNetworkImage(e.caipNetwork))}};j([r({type:Boolean})],M.prototype,`disabled`,void 0),j([r()],M.prototype,`balance`,void 0),j([r()],M.prototype,`charsStart`,void 0),j([r()],M.prototype,`charsEnd`,void 0),j([r()],M.prototype,`namespace`,void 0),j([l()],M.prototype,`caipAddress`,void 0),j([l()],M.prototype,`balanceVal`,void 0),j([l()],M.prototype,`balanceSymbol`,void 0),j([l()],M.prototype,`profileName`,void 0),j([l()],M.prototype,`profileImage`,void 0),j([l()],M.prototype,`network`,void 0),j([l()],M.prototype,`networkImage`,void 0),j([l()],M.prototype,`isSupported`,void 0);var We=class extends M{};We=j([o(`w3m-account-button`)],We);var Ge=class extends M{};Ge=j([o(`appkit-account-button`)],Ge);var Ke=t`
  :host {
    display: block;
    width: max-content;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?x.getAccountData(this.namespace)?.caipAddress:x.state.activeCaipAddress,this.namespace?this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(x.subscribeKey(`activeCaipAddress`,e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?n`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${s(this.balance)}
            .charsStart=${s(this.charsStart)}
            .charsEnd=${s(this.charsEnd)}
            namespace=${s(this.namespace)}
          >
          </appkit-account-button>
        `:n`
          <appkit-connect-button
            size=${s(this.size)}
            label=${s(this.label)}
            loadingLabel=${s(this.loadingLabel)}
            namespace=${s(this.namespace)}
          ></appkit-connect-button>
        `}};P.styles=Ke,N([r({type:Boolean})],P.prototype,`disabled`,void 0),N([r()],P.prototype,`balance`,void 0),N([r()],P.prototype,`size`,void 0),N([r()],P.prototype,`label`,void 0),N([r()],P.prototype,`loadingLabel`,void 0),N([r()],P.prototype,`charsStart`,void 0),N([r()],P.prototype,`charsEnd`,void 0),N([r()],P.prototype,`namespace`,void 0),N([l()],P.prototype,`caipAddress`,void 0);var qe=class extends P{};qe=N([o(`w3m-button`)],qe);var Je=class extends P{};Je=N([o(`appkit-button`)],Je);var Ye=a`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`,Xe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ze=class extends f{constructor(){super(...arguments),this.size=`md`,this.variant=`primary`,this.loading=!1,this.text=`Connect Wallet`}render(){return n`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){let e={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},t={primary:`invert`,secondary:`accent-primary`};return this.loading?n`<wui-loading-spinner
      color=${t[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:n` <wui-text variant=${e[this.size]} color=${t[this.variant]}>
        ${this.text}
      </wui-text>`}};Ze.styles=[c,i,Ye],Xe([r()],Ze.prototype,`size`,void 0),Xe([r()],Ze.prototype,`variant`,void 0),Xe([r({type:Boolean})],Ze.prototype,`loading`,void 0),Xe([r()],Ze.prototype,`text`,void 0),Ze=Xe([o(`wui-connect-button`)],Ze);var Qe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$e=class extends f{constructor(){super(),this.unsubscribe=[],this.size=`md`,this.label=`Connect Wallet`,this.loadingLabel=`Connecting...`,this.open=C.state.open,this.loading=this.namespace?C.state.loadingNamespaceMap.get(this.namespace):C.state.loading,this.unsubscribe.push(C.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-connect-button
        size=${s(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:``}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?C.close():this.loading||C.open({view:`Connect`,namespace:this.namespace})}};Qe([r()],$e.prototype,`size`,void 0),Qe([r()],$e.prototype,`label`,void 0),Qe([r()],$e.prototype,`loadingLabel`,void 0),Qe([r()],$e.prototype,`namespace`,void 0),Qe([l()],$e.prototype,`open`,void 0),Qe([l()],$e.prototype,`loading`,void 0);var et=class extends $e{};et=Qe([o(`w3m-connect-button`)],et);var tt=class extends $e{};tt=Qe([o(`appkit-connect-button`)],tt);var nt=a`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`,rt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},it=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size=`lg`}render(){return n`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:`sm-regular`,md:`md-regular`,lg:`lg-regular`}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?n` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?n`<wui-image src=${this.imageSrc}></wui-image>`:n` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};it.styles=[c,i,nt],rt([r()],it.prototype,`imageSrc`,void 0),rt([r({type:Boolean})],it.prototype,`isUnsupportedChain`,void 0),rt([r({type:Boolean})],it.prototype,`disabled`,void 0),rt([r()],it.prototype,`size`,void 0),it=rt([o(`wui-network-button`)],it);var at=t`
  :host {
    display: block;
    width: max-content;
  }
`,ot=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends f{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=x.state.activeCaipNetwork,this.networkImage=m.getNetworkImage(this.network),this.caipAddress=x.state.activeCaipAddress,this.loading=C.state.loading,this.isSupported=h.state.allowUnsupportedChain?!0:!x.state.activeChain||x.checkIfSupportedNetwork(x.state.activeChain),this.unsubscribe.push(te.subscribeNetworkImages(()=>{this.networkImage=m.getNetworkImage(this.network)}),x.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),x.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=m.getNetworkImage(e),this.isSupported=!e?.chainNamespace||x.checkIfSupportedNetwork(e.chainNamespace),m.fetchNetworkImage(e?.assets?.imageId)}),C.subscribeKey(`loading`,e=>this.loading=e))}firstUpdated(){m.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||x.checkIfSupportedNetwork(this.network.chainNamespace);return n`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!h.state.allowUnsupportedChain&&!e}
        imageSrc=${s(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!h.state.allowUnsupportedChain?`Switch Network`:this.network.name:this.label?this.label:this.caipAddress?`Unknown Network`:`Select Network`}onClick(){this.loading||(T.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),C.open({view:`Networks`}))}};F.styles=at,ot([r({type:Boolean})],F.prototype,`disabled`,void 0),ot([r({type:String})],F.prototype,`label`,void 0),ot([l()],F.prototype,`network`,void 0),ot([l()],F.prototype,`networkImage`,void 0),ot([l()],F.prototype,`caipAddress`,void 0),ot([l()],F.prototype,`loading`,void 0),ot([l()],F.prototype,`isSupported`,void 0);var st=class extends F{};st=ot([o(`w3m-network-button`)],st);var ct=class extends F{};ct=ot([o(`appkit-network-button`)],ct);var lt=a`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`,ut=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dt=class extends f{constructor(){super(...arguments),this.label=``,this.description=``,this.icon=`wallet`}render(){return n`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};dt.styles=[c,i,lt],ut([r()],dt.prototype,`label`,void 0),ut([r()],dt.prototype,`description`,void 0),ut([r()],dt.prototype,`icon`,void 0),dt=ut([o(`wui-notice-card`)],dt);var ft=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pt=class extends f{constructor(){super(),this.unsubscribe=[],this.socialProvider=ne.getConnectedSocialProvider(),this.socialUsername=ne.getConnectedSocialUsername(),this.namespace=x.state.activeChain,this.unsubscribe.push(x.subscribeKey(`activeChain`,e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=w.getConnectorId(this.namespace),t=w.getAuthConnector();if(!t||e!==S.CONNECTOR_ID.AUTH)return this.style.cssText=`display: none`,null;let r=t.provider.getEmail()??``;return!r&&!this.socialUsername?(this.style.cssText=`display: none`,null):n`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??`mail`}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||v.push(`UpdateEmailWallet`,{email:e,redirectView:`Account`})}getAuthName(e){return this.socialUsername?this.socialProvider===`discord`&&this.socialUsername.endsWith(`0`)?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ft([l()],pt.prototype,`namespace`,void 0),pt=ft([o(`w3m-account-auth-button`)],pt);var mt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ht=class extends f{constructor(){super(),this.usubscribe=[],this.networkImages=te.state.networkImages,this.address=x.getAccountData()?.address,this.profileImage=x.getAccountData()?.profileImage,this.profileName=x.getAccountData()?.profileName,this.network=x.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=h.state.remoteFeatures,this.usubscribe.push(x.subscribeChainProp(`accountState`,e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),x.subscribeKey(`activeCaipNetwork`,e=>{e?.id&&(this.network=e)}),h.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-account-settings-view: No account provided`);let e=this.networkImages[this.network?.assets?.imageId??``];return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`0`,`5`,`3`,`5`]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${s(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${d.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:`middle`})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[`6`,`4`,`3`,`4`]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${s(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??`Unknown`}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=w.getConnectorId(e),r=w.getAuthConnector();return!x.checkIfNamesSupported()||!r||t!==S.CONNECTOR_ID.AUTH||this.profileName?null:n`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=w.getConnectorId(this.network?.chainNamespace),t=w.getAuthConnector(),{origin:r}=location;return!t||e!==S.CONNECTOR_ID.AUTH||r.includes(g.SECURE_SITE)?null:n`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=x.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onCopyAddress(){try{this.address&&(_.copyToClopboard(this.address),y.showSuccess(`Address copied`))}catch{y.showError(`Failed to copy`)}}smartAccountSettingsTemplate(){let e=this.network?.chainNamespace,t=x.checkIfSmartAccountEnabled(),r=w.getConnectorId(e);return!w.getAuthConnector()||r!==S.CONNECTOR_ID.AUTH||!t?null:n`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){v.push(`ChooseAccountName`)}onNetworks(){this.isAllowedNetworkSwitch()&&v.push(`Networks`)}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=b.getConnections(e).length>0,n=e&&w.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await b.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(v.push(`ProfileWallets`),y.showSuccess(`Wallet deleted`))}catch{T.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),y.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onGoToUpgradeView(){T.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),v.push(`UpgradeEmailWallet`)}onSmartAccountSettings(){v.push(`SmartAccountSettings`)}};mt([l()],ht.prototype,`address`,void 0),mt([l()],ht.prototype,`profileImage`,void 0),mt([l()],ht.prototype,`profileName`,void 0),mt([l()],ht.prototype,`network`,void 0),mt([l()],ht.prototype,`disconnecting`,void 0),mt([l()],ht.prototype,`remoteFeatures`,void 0),ht=mt([o(`w3m-account-settings-view`)],ht);var gt=a`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`,_t=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vt={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},yt={lg:`md`,md:`sm`,sm:`sm`},bt=class extends f{constructor(){super(...arguments),this.icon=`mobile`,this.size=`md`,this.label=``,this.active=!1}render(){return n`
      <button data-active=${this.active}>
        ${this.icon?n`<wui-icon size=${yt[this.size]} name=${this.icon}></wui-icon>`:``}
        <wui-text variant=${vt[this.size]}> ${this.label} </wui-text>
      </button>
    `}};bt.styles=[c,i,gt],_t([r()],bt.prototype,`icon`,void 0),_t([r()],bt.prototype,`size`,void 0),_t([r()],bt.prototype,`label`,void 0),_t([r({type:Boolean})],bt.prototype,`active`,void 0),bt=_t([o(`wui-tab-item`)],bt);var xt=a`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[`01`]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,St=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ct=class extends f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size=`md`,this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let r=t===this.activeTab;return n`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Ct.styles=[c,i,xt],St([r({type:Array})],Ct.prototype,`tabs`,void 0),St([r()],Ct.prototype,`onTabChange`,void 0),St([r()],Ct.prototype,`size`,void 0),St([l()],Ct.prototype,`activeTab`,void 0),Ct=St([o(`wui-tabs`)],Ct);var wt=a`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e[`ease-out-power-1`]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends f{constructor(){super(),this.unsubscribe=[],this.caipAddress=x.getAccountData()?.caipAddress,this.address=_.getPlainAddress(x.getAccountData()?.caipAddress),this.profileImage=x.getAccountData()?.profileImage,this.profileName=x.getAccountData()?.profileName,this.disconnecting=!1,this.balance=x.getAccountData()?.balance,this.balanceSymbol=x.getAccountData()?.balanceSymbol,this.features=h.state.features,this.remoteFeatures=h.state.remoteFeatures,this.namespace=x.state.activeChain,this.activeConnectorIds=w.state.activeConnectorIds,this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{this.address=_.getPlainAddress(e?.caipAddress),this.caipAddress=e?.caipAddress,this.balance=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),h.subscribeKey(`features`,e=>this.features=e),h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),w.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),x.subscribeKey(`activeChain`,e=>this.namespace=e),x.subscribeKey(`activeCaipNetwork`,e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?w.getConnectorById(e):void 0,r=m.getConnectorImage(t),{value:i,decimals:a,symbol:o}=_.parseBalance(this.balance,this.balanceSymbol);return n`<wui-flex
        flexDirection="column"
        .padding=${[`0`,`5`,`4`,`5`]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${s(this.caipAddress)}
          address=${s(_.getPlainAddress(this.caipAddress))}
          imageSrc=${s(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${i}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${o}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=!!this.features?.receive,r=this.remoteFeatures?.onramp&&e,i=E.isPayWithExchangeEnabled();return!r&&!t&&!i?null:n`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||g.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case`onramp`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&g.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?n` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=x.state.activeChain===S.CHAIN.EVM;return!e||!t?null:n`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){let e=this.features?.send,t=x.state.activeChain;if(!t)throw Error(`SendController:sendTemplate - namespace is required`);let r=g.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!r?null:n`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=x.state.activeChain;if(!e)throw Error(`AuthCardTemplate:authCardTemplate - namespace is required`);let t=w.getConnectorId(e),r=w.getAuthConnector(),{origin:i}=location;return!r||t!==S.CONNECTOR_ID.AUTH||i.includes(g.SECURE_SITE)?null:n`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){v.push(`FundWallet`)}handleClickSwap(){v.push(`Swap`)}handleClickSend(){v.push(`WalletSend`)}explorerBtnTemplate(){return x.getAccountData()?.addressExplorerUrl?n`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){T.sendEvent({type:`track`,event:`CLICK_TRANSACTIONS`,properties:{isSmartAccount:le(x.state.activeChain)===ee.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push(`Transactions`)}async onDisconnect(){try{this.disconnecting=!0;let e=b.getConnections(this.namespace).length>0,t=this.namespace&&w.state.activeConnectorIds[this.namespace],n=this.remoteFeatures?.multiWallet;await b.disconnect(n?{id:t,namespace:this.namespace}:{}),e&&n&&(v.push(`ProfileWallets`),y.showSuccess(`Wallet deleted`))}catch{T.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),y.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onExplorer(){let e=x.getAccountData()?.addressExplorerUrl;e&&_.openHref(e,`_blank`)}onGoToUpgradeView(){T.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),v.push(`UpgradeEmailWallet`)}onGoToProfileWalletsView(){v.push(`ProfileWallets`)}};L.styles=wt,I([l()],L.prototype,`caipAddress`,void 0),I([l()],L.prototype,`address`,void 0),I([l()],L.prototype,`profileImage`,void 0),I([l()],L.prototype,`profileName`,void 0),I([l()],L.prototype,`disconnecting`,void 0),I([l()],L.prototype,`balance`,void 0),I([l()],L.prototype,`balanceSymbol`,void 0),I([l()],L.prototype,`features`,void 0),I([l()],L.prototype,`remoteFeatures`,void 0),I([l()],L.prototype,`namespace`,void 0),I([l()],L.prototype,`activeConnectorIds`,void 0),L=I([o(`w3m-account-default-widget`)],L);var Tt=a`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`,Et=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dt=class extends f{constructor(){super(...arguments),this.dollars=`0`,this.pennies=`00`}render(){return n`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Dt.styles=[c,Tt],Et([r()],Dt.prototype,`dollars`,void 0),Et([r()],Dt.prototype,`pennies`,void 0),Dt=Et([o(`wui-balance`)],Dt);var Ot=a`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,kt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},At={sm:`sm-regular`,md:`md-regular`},jt=class extends f{constructor(){super(...arguments),this.placement=`top`,this.variant=`fill`,this.size=`md`,this.message=``}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,n`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${At[this.size]}>${this.message}</wui-text>`}};jt.styles=[c,i,Ot],kt([r()],jt.prototype,`placement`,void 0),kt([r()],jt.prototype,`variant`,void 0),kt([r()],jt.prototype,`size`,void 0),kt([r()],jt.prototype,`message`,void 0),jt=kt([o(`wui-tooltip`)],jt);var Mt=t`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,Nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pt=class extends f{render(){return n`<w3m-activity-list page="account"></w3m-activity-list>`}};Pt.styles=Mt,Pt=Nt([o(`w3m-account-activity-widget`)],Pt);var Ft=a`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,It=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lt=class extends f{constructor(){super(...arguments),this.icon=`card`,this.text=``,this.description=``,this.tag=void 0,this.disabled=!1}render(){return n`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?n`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?n`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Lt.styles=[c,i,Ft],It([r()],Lt.prototype,`icon`,void 0),It([r()],Lt.prototype,`text`,void 0),It([r()],Lt.prototype,`description`,void 0),It([r()],Lt.prototype,`tag`,void 0),It([r({type:Boolean})],Lt.prototype,`disabled`,void 0),Lt=It([o(`wui-list-description`)],Lt);var Rt=t`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,zt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bt=class extends f{constructor(){super(),this.unsubscribe=[],this.tokenBalance=x.getAccountData()?.tokenBalance,this.remoteFeatures=h.state.remoteFeatures,this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{this.tokenBalance=e?.tokenBalance}),h.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?n`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:n` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?n`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:n``}tokenItemTemplate(){return this.tokenBalance?.map(e=>n`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){v.push(`WalletReceive`)}onBuyClick(){T.sendEvent({type:`track`,event:`SELECT_BUY_CRYPTO`,properties:{isSmartAccount:le(x.state.activeChain)===ee.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push(`OnRampProviders`)}};Bt.styles=Rt,zt([l()],Bt.prototype,`tokenBalance`,void 0),zt([l()],Bt.prototype,`remoteFeatures`,void 0),Bt=zt([o(`w3m-account-tokens-widget`)],Bt);var Vt=a`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.network=x.state.activeCaipNetwork,this.profileName=x.getAccountData()?.profileName,this.address=x.getAccountData()?.address,this.currentTab=x.getAccountData()?.currentTab,this.tokenBalance=x.getAccountData()?.tokenBalance,this.features=h.state.features,this.namespace=x.state.activeChain,this.activeConnectorIds=w.state.activeConnectorIds,this.remoteFeatures=h.state.remoteFeatures}firstUpdated(){x.fetchTokenBalance(),this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{e?.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):C.close()}),w.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),x.subscribeKey(`activeChain`,e=>this.namespace=e),x.subscribeKey(`activeCaipNetwork`,e=>this.network=e),h.subscribeKey(`features`,e=>this.features=e),h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw Error(`w3m-account-features-widget: No account provided`);if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?w.getConnectorById(e):void 0,{icon:r,iconSize:i}=this.getAuthData();return n`<wui-flex
      flexDirection="column"
      .padding=${[`0`,`3`,`4`,`3`]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${r}
          iconSize=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||g.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>e===`send`||e===`receive`?!this.features?.[e]:e===`swaps`||e===`onramp`?!this.remoteFeatures?.[e]:!0))return null;let t=e.map(e=>e===`receive`||e===`onramp`?`fund`:e),r=[...new Set(t)];return n`<wui-flex gap="2">
      ${r.map(e=>{switch(e){case`fund`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.features?.receive,r=this.remoteFeatures?.onramp&&e,i=E.isPayWithExchangeEnabled();return!r&&!t&&!i?null:n`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=x.state.activeChain===S.CHAIN.EVM;return!e||!t?null:n`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){let e=this.features?.send,t=x.state.activeChain,r=g.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!r?null:n`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>x.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===S.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?n`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?n`<w3m-account-activity-widget></w3m-account-activity-widget>`:n`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=_.calculateBalance(this.tokenBalance),{dollars:t=`0`,pennies:r=`00`}=_.formatTokenBalance(e);return n`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return n`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=_e.getTabsByNamespace(x.state.activeChain);return e.length===0?null:n`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){x.setAccountProp(`currentTab`,e,this.namespace)}onFundWalletClick(){v.push(`FundWallet`)}onSwapClick(){this.network?.caipNetworkId&&!g.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?v.push(`UnsupportedChain`,{swapUnsupportedChain:!0}):(T.sendEvent({type:`track`,event:`OPEN_SWAP`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:le(x.state.activeChain)===ee.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push(`Swap`))}getAuthData(){let e=ne.getConnectedSocialProvider(),t=ne.getConnectedSocialUsername(),n=w.getAuthConnector()?.provider.getEmail()??``;return{name:de.getAuthName({email:n,socialUsername:t,socialProvider:e}),icon:e??`mail`,iconSize:e?`xl`:`md`}}onGoToProfileWalletsView(){v.push(`ProfileWallets`)}onSendClick(){T.sendEvent({type:`track`,event:`OPEN_SEND`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:le(x.state.activeChain)===ee.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push(`WalletSend`)}};z.styles=Vt,R([l()],z.prototype,`watchTokenBalance`,void 0),R([l()],z.prototype,`network`,void 0),R([l()],z.prototype,`profileName`,void 0),R([l()],z.prototype,`address`,void 0),R([l()],z.prototype,`currentTab`,void 0),R([l()],z.prototype,`tokenBalance`,void 0),R([l()],z.prototype,`features`,void 0),R([l()],z.prototype,`namespace`,void 0),R([l()],z.prototype,`activeConnectorIds`,void 0),R([l()],z.prototype,`remoteFeatures`,void 0),z=R([o(`w3m-account-wallet-features-widget`)],z);var Ht=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ut=class extends f{constructor(){super(),this.unsubscribe=[],this.namespace=x.state.activeChain,this.unsubscribe.push(x.subscribeKey(`activeChain`,e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=w.getConnectorId(this.namespace),t=w.getAuthConnector();return n`
      ${t&&e===S.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return n`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return n`<w3m-account-default-widget></w3m-account-default-widget>`}};Ht([l()],Ut.prototype,`namespace`,void 0),Ut=Ht([o(`w3m-account-view`)],Ut);var Wt=a`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends f{constructor(){super(...arguments),this.address=``,this.profileName=``,this.content=[],this.alt=``,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadge=void 0,this.iconBadgeSize=`md`,this.buttonVariant=`neutral-primary`,this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return n`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return n`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?n`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return n` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?n`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?n`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:n`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:n`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:r,description:i,enableButton:a,buttonType:o,buttonLabel:s,buttonVariant:c,tagVariant:l,tagLabel:u,alignItems:f=`flex-end`}){return n`
      <wui-flex justifyContent="space-between" alignItems=${f} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${r?n`<wui-text variant="sm-medium" color="secondary">${r}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${d.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?`end`:`middle`})}
            </wui-text>

            ${l&&u?n`<wui-tag variant=${l} size="sm">${u}</wui-tag>`:null}
          </wui-flex>

          ${i?n`<wui-text variant="sm-regular" color="secondary">${i}</wui-text>`:null}
        </wui-flex>

        ${a?this.buttonTemplate({buttonType:o,buttonLabel:s,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:r}){return n`
      <wui-button
        size="sm"
        variant=${r}
        @click=${e===`disconnect`?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e===`disconnect`?`wui-active-profile-wallet-item-disconnect-button`:`wui-active-profile-wallet-item-switch-button`}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent(`disconnect`,{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`switch`,{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent(`externalLink`,{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent(`more`,{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent(`copy`,{bubbles:!0,composed:!0}))}};V.styles=[c,i,Wt],B([r()],V.prototype,`address`,void 0),B([r()],V.prototype,`profileName`,void 0),B([r({type:Array})],V.prototype,`content`,void 0),B([r()],V.prototype,`alt`,void 0),B([r()],V.prototype,`imageSrc`,void 0),B([r()],V.prototype,`icon`,void 0),B([r()],V.prototype,`iconSize`,void 0),B([r()],V.prototype,`iconBadge`,void 0),B([r()],V.prototype,`iconBadgeSize`,void 0),B([r()],V.prototype,`buttonVariant`,void 0),B([r({type:Boolean})],V.prototype,`enableMoreButton`,void 0),B([r({type:Number})],V.prototype,`charsStart`,void 0),B([r({type:Number})],V.prototype,`charsEnd`,void 0),V=B([o(`wui-active-profile-wallet-item`)],V);var Gt=a`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=class extends f{constructor(){super(...arguments),this.address=``,this.profileName=``,this.alt=``,this.buttonLabel=``,this.buttonVariant=`accent-primary`,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadgeSize=`md`,this.rightIcon=`signOut`,this.rightIconSize=`md`,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return n`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?n`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?n`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:n`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return n`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${d.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return n`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${s(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent(`buttonClick`,{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent(`iconClick`,{bubbles:!0,composed:!0}))}};U.styles=[c,i,Gt],H([r()],U.prototype,`address`,void 0),H([r()],U.prototype,`profileName`,void 0),H([r()],U.prototype,`alt`,void 0),H([r()],U.prototype,`buttonLabel`,void 0),H([r()],U.prototype,`buttonVariant`,void 0),H([r()],U.prototype,`imageSrc`,void 0),H([r()],U.prototype,`icon`,void 0),H([r()],U.prototype,`iconSize`,void 0),H([r()],U.prototype,`iconBadge`,void 0),H([r()],U.prototype,`iconBadgeSize`,void 0),H([r()],U.prototype,`rightIcon`,void 0),H([r()],U.prototype,`rightIconSize`,void 0),H([r({type:Boolean})],U.prototype,`loading`,void 0),H([r({type:Number})],U.prototype,`charsStart`,void 0),H([r({type:Number})],U.prototype,`charsEnd`,void 0),U=H([o(`wui-inactive-profile-wallet-item`)],U);var Kt={getAuthData(e){let t=e.connectorId===S.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let n=e?.auth?.name??ne.getConnectedSocialProvider(),r=e?.auth?.username??ne.getConnectedSocialUsername(),i=w.getAuthConnector()?.provider.getEmail()??``;return{isAuth:!0,icon:n??`mail`,iconSize:n?`xl`:`md`,name:t?de.getAuthName({email:i,socialUsername:r,socialProvider:n}):void 0}}},qt=a`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`,W=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:`md`,ICON:`lightbulb`},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Jt={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`,tron:`tron`},Yt=[{namespace:`eip155`,icon:Jt.eip155,label:`EVM`},{namespace:`solana`,icon:Jt.solana,label:`Solana`},{namespace:`bip122`,icon:Jt.bip122,label:`Bitcoin`},{namespace:`ton`,icon:Jt.ton,label:`Ton`},{namespace:`tron`,icon:Jt.tron,label:`Tron`}],Xt={eip155:{title:`Add EVM Wallet`,description:`Add your first EVM wallet`},solana:{title:`Add Solana Wallet`,description:`Add your first Solana wallet`},bip122:{title:`Add Bitcoin Wallet`,description:`Add your first Bitcoin wallet`},ton:{title:`Add TON Wallet`,description:`Add your first TON wallet`},tron:{title:`Add TRON Wallet`,description:`Add your first TRON wallet`}},K=class extends f{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=x.state.activeChain,this.namespaces=Array.from(x.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=w.state.activeConnectorIds,this.lastSelectedAddress=``,this.lastSelectedConnectorId=``,this.isSwitching=!1,this.caipNetwork=x.state.activeCaipNetwork,this.user=x.getAccountData()?.user,this.remoteFeatures=h.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=x.getAccountData(this.namespace)?.caipAddress,this.profileName=x.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(b.subscribeKey(`connections`,()=>this.onConnectionsChange()),b.subscribeKey(`recentConnections`,()=>this.requestUpdate()),w.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),x.subscribeKey(`activeCaipNetwork`,e=>this.caipNetwork=e),x.subscribeChainProp(`accountState`,e=>{this.user=e?.user}),h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.chainListener=x.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(`.wallet-list`);if(!e)return;let t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener(`scroll`,t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){let e=this.namespace;if(!e)throw Error(`Namespace is not set`);return n`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=this.namespaces.map(e=>Yt.find(t=>t.namespace===e)).filter(Boolean);return e.length>1?n`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return n`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Jt[e]??Jt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?`Wallets`:`Wallet`}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>b.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return n`
      <wui-flex flexDirection="column" class=${u({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),r=this.activeConnectorIds[e],i=this.getPlainAddress();return n`
      ${i||r||t.length>0?n`<wui-flex
            flexDirection="column"
            .padding=${[`4`,`0`,`4`,`0`]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:r}=ce.getConnectionsData(e),i=w.getConnectorById(t),a=m.getConnectorImage(i),o=this.getPlainAddress();if(!o)return null;let s=e===S.CHAIN.BITCOIN,c=Kt.getAuthData({connectorId:t,accounts:[]}),l=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=r.find(e=>e.connectorId===t),d=u?.accounts.filter(e=>!D.isLowerCaseMatch(e.address,o));return n`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`0`,`4`]}>
        <wui-active-profile-wallet-item
          address=${o}
          alt=${i?.name}
          .content=${this.getProfileContent({address:o,connections:r,connectorId:t,namespace:e})}
          .charsStart=${G.ADDRESS_DISPLAY.START}
          .charsEnd=${G.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(o)?G.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(o)?G.BADGE.SIZE:void 0}
          imageSrc=${a}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(o)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{s&&u&&d?.[0]&&this.handleSwitchWallet(u,d[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(o)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${l?n`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return t.length===0?null:n`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=ce.getConnectionsData(e);return t.flatMap(e=>e.accounts).length===0?null:n`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,r){return e.filter(e=>e.accounts.length>0).map((e,i)=>{let a=w.getConnectorById(e.connectorId),o=m.getConnectorImage(a)??``,s=Kt.getAuthData(e);return e.accounts.map((a,c)=>{let l=i!==0||c!==0,u=this.isAccountLoading(e.connectorId,a.address);return n`
            <wui-flex flexDirection="column">
              ${l?n`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${a.address}
                alt=${e.connectorId}
                buttonLabel=${t?`Connect`:`Switch`}
                buttonVariant=${t?`neutral-secondary`:`accent-secondary`}
                rightIcon=${t?`bin`:`power`}
                rightIconSize="sm"
                class=${t?`recent-connection`:`active-connection`}
                data-testid=${t?`recent-connection`:`active-connection`}
                imageSrc=${o}
                .iconBadge=${this.isSmartAccount(a.address)?G.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(a.address)?G.BADGE.SIZE:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${u}
                .showBalance=${!1}
                .charsStart=${G.ADDRESS_DISPLAY.START}
                .charsEnd=${G.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,a.address,r)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:a.address,isRecentConnection:t,namespace:r})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return n`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:r}=this.getChainLabelInfo(e);return n`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${r}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=x.getAccountData(t)?.caipAddress,this.profileName=x.getAccountData(t)?.profileName,this.chainListener=x.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,n){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,this.caipNetwork?.chainNamespace!==n&&e?.caipNetwork&&(w.setFilterByNamespace(n),await x.switchActiveNetwork(e?.caipNetwork)),await b.switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?y.showSuccess(`Wallet switched`):e&&y.showSuccess(`Account switched`)}})}catch{y.showError(`Failed to switch wallet`)}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:n,isRecentConnection:r,namespace:i}=e;r?(ne.deleteAddressFromConnection({connectorId:t.connectorId,address:n,namespace:i}),b.syncStorageConnections(),y.showSuccess(`Wallet deleted`)):this.handleDisconnect(i,t.connectorId)}async handleDisconnect(e,t){try{await b.disconnect({id:t,namespace:e}),y.showSuccess(`Wallet disconnected`)}catch{y.showError(`Failed to disconnect wallet`)}}handleCopyAddress(e){_.copyToClopboard(e),y.showSuccess(`Address copied`)}handleMore(){v.push(`AccountSettings`)}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&_.openHref(`${t}/address/${e}`,`_blank`)}handleAddConnection(e){w.setFilterByNamespace(e),v.push(`Connect`,{addWalletForNamespace:e})}getChainLabelInfo(e){return Xt[e]??{title:`Add Wallet`,description:`Add your first wallet`}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>e.type===`smartAccount`);return t&&e?D.isLowerCaseMatch(t.address,e):!1}getPlainAddress(){return this.caipAddress?_.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:n}=ce.getConnectionsData(e),[r]=n.filter(e=>D.isLowerCaseMatch(e.connectorId,t));if(!t)return n;let i=e===S.CHAIN.BITCOIN,{address:a}=this.caipAddress?ie.parseCaipAddress(this.caipAddress):{},o=[...a?[a]:[]];return i&&r&&(o=r.accounts.map(e=>e.address)||[]),ce.excludeConnectorAddressFromConnections({connectorId:t,addresses:o,connections:n})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:n}=ce.getConnectionsData(e);return!!this.caipAddress||t.length>0||n.length>0}isAccountLoading(e,t){return D.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&D.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:n,connectorId:r,namespace:i}=e,[a]=n.filter(e=>D.isLowerCaseMatch(e.connectorId,r));if(i===S.CHAIN.BITCOIN&&a?.accounts.every(e=>typeof e.type==`string`))return this.getBitcoinProfileContent(a.accounts,t);let o=Kt.getAuthData({connectorId:r,accounts:[]});return[{address:t,tagLabel:`Active`,tagVariant:`success`,enableButton:!0,profileName:this.profileName,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`,...o.isAuth?{description:this.isSmartAccount(t)?`Smart Account`:`EOA Account`}:{}}]}getBitcoinProfileContent(e,t){let n=e.length>1,r=this.getPlainAddress();return e.map(e=>{let i=D.isLowerCaseMatch(e.address,r),a=`PAYMENT`;return e.type===`ordinal`&&(a=`ORDINALS`),{address:e.address,tagLabel:D.isLowerCaseMatch(e.address,t)?`Active`:void 0,tagVariant:D.isLowerCaseMatch(e.address,t)?`success`:void 0,enableButton:!0,...n?{label:a,alignItems:`flex-end`,buttonType:i?`disconnect`:`switch`,buttonLabel:i?`Disconnect`:`Switch`,buttonVariant:i?`neutral-secondary`:`accent-secondary`}:{alignItems:`center`,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&e.removeEventListener(`scroll`,()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty(`--connect-scroll--top-opacity`,ge.interpolate([0,G.SCROLL_THRESHOLD],G.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,ge.interpolate([0,G.SCROLL_THRESHOLD],G.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=ce.getConnectionsData(this.namespace);e.length===0&&v.reset(`ProfileWallets`)}this.requestUpdate()}};K.styles=qt,W([l()],K.prototype,`currentTab`,void 0),W([l()],K.prototype,`namespace`,void 0),W([l()],K.prototype,`namespaces`,void 0),W([l()],K.prototype,`caipAddress`,void 0),W([l()],K.prototype,`profileName`,void 0),W([l()],K.prototype,`activeConnectorIds`,void 0),W([l()],K.prototype,`lastSelectedAddress`,void 0),W([l()],K.prototype,`lastSelectedConnectorId`,void 0),W([l()],K.prototype,`isSwitching`,void 0),W([l()],K.prototype,`caipNetwork`,void 0),W([l()],K.prototype,`user`,void 0),W([l()],K.prototype,`remoteFeatures`,void 0),K=W([o(`w3m-profile-wallets-view`)],K);var Zt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qt=class extends f{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=x.state.activeCaipNetwork,this.features=h.state.features,this.remoteFeatures=h.state.remoteFeatures,this.exchangesLoading=E.state.isLoading,this.exchanges=E.state.exchanges,this.unsubscribe.push(h.subscribeKey(`features`,e=>this.features=e),h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),x.subscribeKey(`activeCaipNetwork`,e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),E.subscribeKey(`isLoading`,e=>this.exchangesLoading=e),E.subscribeKey(`exchanges`,e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){E.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await E.fetchExchanges())}render(){return n`
      <wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let e=await E.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find(e=>e.metadata.symbol===`USDC`)||e[0];t&&E.setPaymentAsset(t)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let e=this.remoteFeatures?.onramp,t=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!e||!t?null:n`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!E.isPayWithExchangeSupported()?null:n`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){return this.features?.receive?n`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){v.push(`OnRampProviders`)}onReceive(){v.push(`WalletReceive`)}onDepositFromExchange(){E.reset(),v.push(`PayWithExchange`,{redirectView:v.state.data?.redirectView})}};Zt([l()],Qt.prototype,`activeCaipNetwork`,void 0),Zt([l()],Qt.prototype,`features`,void 0),Zt([l()],Qt.prototype,`remoteFeatures`,void 0),Zt([l()],Qt.prototype,`exchangesLoading`,void 0),Zt([l()],Qt.prototype,`exchanges`,void 0),Qt=Zt([o(`w3m-fund-wallet-view`)],Qt);var $t=a`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`,en=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tn=class extends f{constructor(){super(...arguments),this.inputElementRef=ye(),this.checked=!1,this.disabled=!1,this.size=`md`}render(){return n`
      <label data-size=${this.size}>
        <input
          ${ve(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent(`switchChange`,{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};tn.styles=[c,i,$t],en([r({type:Boolean})],tn.prototype,`checked`,void 0),en([r({type:Boolean})],tn.prototype,`disabled`,void 0),en([r()],tn.prototype,`size`,void 0),tn=en([o(`wui-toggle`)],tn);var nn=a`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,rn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},an=class extends f{constructor(){super(...arguments),this.checked=!1}render(){return n`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`certifiedSwitchChange`,{detail:this.checked,bubbles:!0,composed:!0}))}};an.styles=[c,i,nn],rn([r({type:Boolean})],an.prototype,`checked`,void 0),an=rn([o(`wui-certified-switch`)],an);var on=a`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`,sn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cn=class extends f{constructor(){super(...arguments),this.inputComponentRef=ye(),this.inputValue=``}render(){return n`
      <wui-input-text
        ${ve(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?n`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||``}clearValue(){let e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value=``,this.inputValue=``,e.focus(),e.dispatchEvent(new Event(`input`)))}};cn.styles=[c,on],sn([r()],cn.prototype,`inputValue`,void 0),cn=sn([o(`wui-search-bar`)],cn);var ln=a`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,un=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dn=class extends f{constructor(){super(...arguments),this.type=`wallet`}render(){return n`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type===`network`?n` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${he}`:n`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};dn.styles=[c,i,ln],un([r()],dn.prototype,`type`,void 0),dn=un([o(`wui-card-select-loader`)],dn);var fn=t`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&d.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&d.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&d.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&d.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&d.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&d.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&d.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&d.getSpacingStyles(this.margin,3)};
    `,n`<slot></slot>`}};J.styles=[c,fn],q([r()],J.prototype,`gridTemplateRows`,void 0),q([r()],J.prototype,`gridTemplateColumns`,void 0),q([r()],J.prototype,`justifyItems`,void 0),q([r()],J.prototype,`alignItems`,void 0),q([r()],J.prototype,`justifyContent`,void 0),q([r()],J.prototype,`alignContent`,void 0),q([r()],J.prototype,`columnGap`,void 0),q([r()],J.prototype,`rowGap`,void 0),q([r()],J.prototype,`gap`,void 0),q([r()],J.prototype,`padding`,void 0),q([r()],J.prototype,`margin`,void 0),J=q([o(`wui-grid`)],J);var pn=a`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-1`]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,mn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends f{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId=``,this.walletQuery=``,this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type===`certified`;return n`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${s(e?`certified`:void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?n`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():n`
      <wui-wallet-image
        size="lg"
        imageSrc=${s(this.imageSrc)}
        name=${s(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return n`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=m.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await m.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,T.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:v.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Y.styles=pn,mn([l()],Y.prototype,`visible`,void 0),mn([l()],Y.prototype,`imageSrc`,void 0),mn([l()],Y.prototype,`imageLoading`,void 0),mn([l()],Y.prototype,`isImpressed`,void 0),mn([r()],Y.prototype,`explorerId`,void 0),mn([r()],Y.prototype,`walletQuery`,void 0),mn([r()],Y.prototype,`certified`,void 0),mn([r()],Y.prototype,`displayIndex`,void 0),mn([r({type:Object})],Y.prototype,`wallet`,void 0),Y=mn([o(`w3m-all-wallets-list-item`)],Y);var hn=a`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-inout-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,gn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_n=`local-paginator`,vn=class extends f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!p.state.wallets.length,this.wallets=p.state.wallets,this.mobileFullScreen=h.state.enableMobileFullScreen,this.unsubscribe.push(p.subscribeKey(`wallets`,e=>this.wallets=e))}firstUpdated(){this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return n`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector(`wui-grid`);e&&(await p.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>n`
        <wui-card-select-loader type="wallet" id=${s(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return ae.getWalletConnectWallets(this.wallets).map((e,t)=>n`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge===`certified`}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:n,count:r,mobileFilteredOutWalletsLength:i}=p.state,a=window.innerWidth<352?3:4,o=e.length+t.length,s=Math.ceil(o/a)*a-o+a;return s-=e.length?n.length%a:0,r===0&&n.length>0?null:r===0||[...n,...e,...t].length<r-(i??0)?this.shimmerTemplate(s,_n):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${_n}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:n}=p.state;n.length<t&&p.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){w.selectWalletConnector(e)}};vn.styles=hn,gn([l()],vn.prototype,`loading`,void 0),gn([l()],vn.prototype,`wallets`,void 0),gn([l()],vn.prototype,`badge`,void 0),gn([l()],vn.prototype,`mobileFullScreen`,void 0),vn=gn([o(`w3m-all-wallets-list`)],vn);var yn=t`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,bn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xn=class extends f{constructor(){super(...arguments),this.prevQuery=``,this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=h.state.enableMobileFullScreen,this.query=``}render(){return this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.onSearch(),this.loading?n`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await p.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=p.state,t=ae.markWalletsAsInstalled(e),r=ae.filterWalletsByWcSupport(t);return r.length?n`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[`0`,`3`,`3`,`3`]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map((e,t)=>n`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${this.badge===`certified`}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:n`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){w.selectWalletConnector(e)}};xn.styles=yn,bn([l()],xn.prototype,`loading`,void 0),bn([l()],xn.prototype,`mobileFullScreen`,void 0),bn([r()],xn.prototype,`query`,void 0),bn([r()],xn.prototype,`badge`,void 0),xn=bn([o(`w3m-all-wallets-search`)],xn);var Sn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cn=class extends f{constructor(){super(...arguments),this.search=``,this.badge=void 0,this.onDebouncedSearch=_.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return n`
      <wui-flex .padding=${[`1`,`3`,`3`,`3`]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge===`certified`}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?n`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:n`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge=`certified`,y.showSvg(`Only WalletConnect certified`,{icon:`walletConnectBrown`,iconColor:`accent-100`})):this.badge=void 0}qrButtonTemplate(){return _.isMobile()?n`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){v.push(`ConnectingWalletConnect`)}};Sn([l()],Cn.prototype,`search`,void 0),Sn([l()],Cn.prototype,`badge`,void 0),Cn=Sn([o(`w3m-all-wallets-view`)],Cn);var wn=a`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`,Tn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},En=class extends f{constructor(){super(...arguments),this.text=``,this.disabled=!1,this.size=`lg`,this.icon=`copy`,this.tabIdx=void 0}render(){this.dataset.size=this.size;let e=`${this.size}-regular`;return n`
      <button ?disabled=${this.disabled} tabindex=${s(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};En.styles=[c,i,wn],Tn([r()],En.prototype,`text`,void 0),Tn([r({type:Boolean})],En.prototype,`disabled`,void 0),Tn([r()],En.prototype,`size`,void 0),Tn([r()],En.prototype,`icon`,void 0),Tn([r()],En.prototype,`tabIdx`,void 0),En=Tn([o(`wui-list-button`)],En);var Dn=a`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`,On=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kn=class extends f{constructor(){super(),this.unsubscribe=[],this.formRef=ye(),this.email=``,this.loading=!1,this.error=``,this.remoteFeatures=h.state.remoteFeatures,this.hasExceededUsageLimit=p.state.plan.hasExceededUsageLimit,this.unsubscribe.push(h.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}),p.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){let e=b.hasAnyConnection(S.CONNECTOR_ID.AUTH);return n`
      <form ${ve(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${s(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?n`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?n`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?n`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=``}async onSubmitEmail(e){if(!_e.isValidEmail(this.email))xe.open({displayMessage:we.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},`warning`);else{if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===x.state.activeChain)){let e=x.getFirstCaipNetworkSupportsAuthConnector();if(e){v.push(`SwitchNetwork`,{network:e});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=w.getAuthConnector();if(!t)throw Error(`w3m-email-login-widget: Auth connector not found`);let{action:n}=await t.provider.connectEmail({email:this.email});if(T.sendEvent({type:`track`,event:`EMAIL_SUBMITTED`}),n===`VERIFY_OTP`)T.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),v.push(`EmailVerifyOtp`,{email:this.email});else if(n===`VERIFY_DEVICE`)v.push(`EmailVerifyDevice`,{email:this.email});else if(n===`CONNECT`){let e=this.remoteFeatures?.multiWallet;await b.connectExternal(t,x.state.activeChain),e?(v.replace(`ProfileWallets`),y.showSuccess(`New Wallet Added`)):v.replace(`Account`)}}catch(e){_.parseError(e)?.includes(`Invalid email`)?this.error=`Invalid email. Try again.`:y.showError(e)}finally{this.loading=!1}}}onFocusEvent(){T.sendEvent({type:`track`,event:`EMAIL_LOGIN_SELECTED`})}};kn.styles=Dn,On([r()],kn.prototype,`tabIdx`,void 0),On([l()],kn.prototype,`email`,void 0),On([l()],kn.prototype,`loading`,void 0),On([l()],kn.prototype,`error`,void 0),On([l()],kn.prototype,`remoteFeatures`,void 0),On([l()],kn.prototype,`hasExceededUsageLimit`,void 0),kn=On([o(`w3m-email-login-widget`)],kn);var An=a`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,jn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mn=class extends f{constructor(){super(...arguments),this.logo=`google`,this.disabled=!1,this.tabIdx=void 0}render(){return n`
      <button ?disabled=${this.disabled} tabindex=${s(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Mn.styles=[c,i,An],jn([r()],Mn.prototype,`logo`,void 0),jn([r({type:Boolean})],Mn.prototype,`disabled`,void 0),jn([r()],Mn.prototype,`tabIdx`,void 0),Mn=jn([o(`wui-logo-select`)],Mn);var Nn=a`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Pn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fn=2,In=6,Ln=class extends f{constructor(){super(),this.unsubscribe=[],this.walletGuide=`get-started`,this.tabIdx=void 0,this.connectors=w.state.connectors,this.remoteFeatures=h.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isPwaLoading=!1,this.hasExceededUsageLimit=p.state.plan.hasExceededUsageLimit,this.unsubscribe.push(w.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),p.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e=this.walletGuide===`explore`,t=this.remoteFeatures?.socials;return!t&&e?(t=g.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return e.length===2?n` <wui-flex gap="2">
        ${e.slice(0,Fn).map(e=>n`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${s(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:n` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${s(e[0])}
      text=${`Continue with ${d.capitalize(e[0])}`}
      tabIdx=${s(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t=this.walletGuide===`explore`;return this.authConnector&&e&&e.length!==0||!t||(e=g.DEFAULT_SOCIALS),!e||e.length<=Fn?null:e&&e.length>In?n`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>n`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${s(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${s(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?n`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>n`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${s(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){v.push(`ConnectSocials`)}async onSocialClick(e){if(this.hasExceededUsageLimit)v.push(`UsageExceeded`);else{if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===x.state.activeChain)){let e=x.getFirstCaipNetworkSupportsAuthConnector();if(e){v.push(`SwitchNetwork`,{network:e});return}}e&&await Se(e)}}async handlePwaFrameLoad(){if(_.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof Ce&&await this.authConnector.provider.init()}catch(e){xe.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}hasConnection(){return b.hasAnyConnection(S.CONNECTOR_ID.AUTH)}};Ln.styles=Nn,Pn([r()],Ln.prototype,`walletGuide`,void 0),Pn([r()],Ln.prototype,`tabIdx`,void 0),Pn([l()],Ln.prototype,`connectors`,void 0),Pn([l()],Ln.prototype,`remoteFeatures`,void 0),Pn([l()],Ln.prototype,`authConnector`,void 0),Pn([l()],Ln.prototype,`isPwaLoading`,void 0),Pn([l()],Ln.prototype,`hasExceededUsageLimit`,void 0),Ln=Pn([o(`w3m-social-login-widget`)],Ln);var Rn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zn=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=w.state.connectors,this.count=p.state.count,this.filteredCount=p.state.filteredWallets.length,this.isFetchingRecommendedWallets=p.state.isFetchingRecommendedWallets,this.unsubscribe.push(w.subscribeKey(`connectors`,e=>this.connectors=e),p.subscribeKey(`count`,e=>this.count=e),p.subscribeKey(`filteredWallets`,e=>this.filteredCount=e.length),p.subscribeKey(`isFetchingRecommendedWallets`,e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>e.id===`walletConnect`),{allWallets:t}=h.state;if(!e||t===`HIDE`||t===`ONLY_MOBILE`&&!_.isMobile())return null;let r=p.state.featured.length,i=this.count+r,a=i<10?i:Math.floor(i/10)*10,o=this.filteredCount>0?this.filteredCount:a,c=`${o}`;this.filteredCount>0?c=`${this.filteredCount}`:o<i&&(c=`${o}+`);let l=b.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT);return n`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${s(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){T.sendEvent({type:`track`,event:`CLICK_ALL_WALLETS`}),v.push(`AllWallets`,{redirectView:v.state.data?.redirectView})}};Rn([r()],zn.prototype,`tabIdx`,void 0),Rn([l()],zn.prototype,`connectors`,void 0),Rn([l()],zn.prototype,`count`,void 0),Rn([l()],zn.prototype,`filteredCount`,void 0),Rn([l()],zn.prototype,`isFetchingRecommendedWallets`,void 0),zn=Rn([o(`w3m-all-wallets-widget`)],zn);var Bn=a`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Vn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hn=class extends f{constructor(){super(),this.unsubscribe=[],this.explorerWallets=p.state.explorerWallets,this.connections=b.state.connections,this.connectorImages=te.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(b.subscribeKey(`connections`,e=>this.connections=e),te.subscribeKey(`connectorImages`,e=>this.connectorImages=e),p.subscribeKey(`explorerFilteredWallets`,e=>{this.explorerWallets=e?.length?e:p.state.explorerWallets}),p.subscribeKey(`explorerWallets`,e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),_.isTelegram()&&_.isIos()&&(this.loadingTelegram=!b.state.wcUri,this.unsubscribe.push(b.subscribeKey(`wcUri`,e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return de.connectorList().map((e,t)=>e.kind===`connector`?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return e.subtype===`walletConnect`?[]:e.subtype===`multiChain`?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){let r=e.connector,i=m.getConnectorImage(r)||this.connectorImages[r?.imageId??``],a=(this.connections.get(r.chain)??[]).some(e=>D.isLowerCaseMatch(e.connectorId,r.id)),o,c;e.subtype===`walletConnect`?(o=`qr code`,c=`accent`):e.subtype===`injected`||e.subtype===`announced`?(o=a?`connected`:`installed`,c=a?`info`:`success`):(o=void 0,c=void 0);let l=b.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT),u=e.subtype===`walletConnect`||e.subtype===`external`?l:!1;return n`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${s(i)}
        .installed=${!0}
        name=${r.name??`Unknown`}
        .tagVariant=${c}
        tagLabel=${s(o)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${s(this.tabIdx)}
        ?disabled=${u}
        rdnsId=${s(r.explorerWallet?.rdns||void 0)}
        walletRank=${s(r.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=v.state.data?.redirectView;if(e.subtype===`walletConnect`)w.setActiveConnector(e.connector),_.isMobile()?v.push(`AllWallets`):v.push(`ConnectingWalletConnect`,{redirectView:t});else if(e.subtype===`multiChain`)w.setActiveConnector(e.connector),v.push(`ConnectingMultiChain`,{redirectView:t});else if(e.subtype===`injected`)w.setActiveConnector(e.connector),v.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});else if(e.subtype===`announced`){if(e.connector.id===`walletConnect`){_.isMobile()?v.push(`AllWallets`):v.push(`ConnectingWalletConnect`,{redirectView:t});return}v.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet})}else v.push(`ConnectingExternal`,{connector:e.connector,redirectView:t})}renderWallet(e,t){let r=e.wallet,i=m.getWalletImage(r),a=b.hasAnyConnection(S.CONNECTOR_ID.WALLET_CONNECT),o=this.loadingTelegram,c=e.subtype===`recent`?`recent`:void 0,l=e.subtype===`recent`?`info`:void 0;return n`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${s(i)}
        name=${r.name??`Unknown`}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${s(this.tabIdx)}
        ?loading=${o}
        ?disabled=${a}
        rdnsId=${s(r.rdns||void 0)}
        walletRank=${s(r.order)}
        tagLabel=${s(c)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=v.state.data?.redirectView,n=x.state.activeChain;if(e.subtype===`featured`){w.selectWalletConnector(e.wallet);return}if(e.subtype===`recent`){if(this.loadingTelegram)return;w.selectWalletConnector(e.wallet);return}if(e.subtype===`custom`){if(this.loadingTelegram)return;v.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let r=n?w.getConnector({id:e.wallet.id,namespace:n}):void 0;r?v.push(`ConnectingExternal`,{connector:r,redirectView:t}):v.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t})}};Hn.styles=Bn,Vn([r({type:Number})],Hn.prototype,`tabIdx`,void 0),Vn([l()],Hn.prototype,`explorerWallets`,void 0),Vn([l()],Hn.prototype,`connections`,void 0),Vn([l()],Hn.prototype,`connectorImages`,void 0),Vn([l()],Hn.prototype,`loadingTelegram`,void 0),Hn=Vn([o(`w3m-connector-list`)],Hn);var Un=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wn=class extends f{constructor(){super(...arguments),this.tabIdx=void 0}render(){return n`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${s(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${s(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Un([r()],Wn.prototype,`tabIdx`,void 0),Wn=Un([o(`w3m-wallet-login-list`)],Wn);var Gn=a`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kn=470,Z=class extends f{constructor(){super(),this.unsubscribe=[],this.connectors=w.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.features=h.state.features,this.remoteFeatures=h.state.remoteFeatures,this.enableWallets=h.state.enableWallets,this.noAdapters=x.state.noAdapters,this.walletGuide=`get-started`,this.checked=be.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!x.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!x.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(w.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),h.subscribeKey(`features`,e=>{this.features=e}),h.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),h.subscribeKey(`enableWallets`,e=>this.enableWallets=e),x.subscribeKey(`noAdapters`,e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),be.subscribeKey(`isLegalCheckboxChecked`,e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect(),(this.shadowRoot?.querySelector(`.connect`))?.removeEventListener(`scroll`,this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener(`scroll`,this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=h.state,r=h.state.features?.legalCheckbox,i=!!(e||t)&&!!r&&this.walletGuide===`get-started`&&!this.checked,a={connect:!0,disabled:i},o=h.state.enableWalletGuide,s=this.enableWallets,c=this.isSocialEnabled||this.authConnector,l=i?-1:void 0;return n`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${[`0`,`0`,`4`,`0`]}
          class=${u(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${c&&s&&o&&this.walletGuide===`get-started`?[`0`,`3`,`0`,`3`]:[`0`,`3`,`3`,`3`]}
          >
            ${this.renderConnectMethod(l)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return _e.hasFooter()||!this.remoteFeatures?.reownBranding?null:n`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===O.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return S.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=ae.getConnectOrderMethod(this.features,this.connectors);return n`${t.map((t,r)=>{switch(t){case`email`:return n`${this.emailTemplate(e)} ${this.separatorTemplate(r,`email`)}`;case`social`:return n`${this.socialListTemplate(e)}
          ${this.separatorTemplate(r,`social`)}`;case`wallet`:return n`${this.walletListTemplate(e)}
          ${this.separatorTemplate(r,`wallet`)}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case`wallet`:return this.enableWallets;case`social`:return this.isSocialEnabled&&this.isAuthEnabled;case`email`:return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=ae.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){let r=this.checkIsThereNextMethod(e),i=this.walletGuide===`explore`;switch(t){case`wallet`:return this.enableWallets&&r&&!i?n`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case`email`:{let e=r===`social`;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&r?n`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case`social`:{let e=r===`email`;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&r?n`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:n`<w3m-email-login-widget tabIdx=${s(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:n`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${s(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){let t=this.enableWallets,r=this.features?.emailShowWallets===!1,i=this.features?.collapseWallets,a=r||i;return!t||(_.isTelegram()&&(_.isSafari()||_.isIos())&&b.connectWalletConnect().catch(e=>({})),this.walletGuide===`explore`)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&a?n`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${s(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:n`<w3m-wallet-login-list tabIdx=${s(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide===`explore`?null:n`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(e.scrollHeight>Kn?(e.style.setProperty(`--connect-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--connect-scroll--top-opacity`,ge.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,ge.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--connect-mask-image`,`none`),e.style.setProperty(`--connect-scroll--top-opacity`,`0`),e.style.setProperty(`--connect-scroll--bottom-opacity`,`0`)))}onContinueWalletClick(){v.push(`ConnectWallets`)}};Z.styles=Gn,X([l()],Z.prototype,`connectors`,void 0),X([l()],Z.prototype,`authConnector`,void 0),X([l()],Z.prototype,`features`,void 0),X([l()],Z.prototype,`remoteFeatures`,void 0),X([l()],Z.prototype,`enableWallets`,void 0),X([l()],Z.prototype,`noAdapters`,void 0),X([r()],Z.prototype,`walletGuide`,void 0),X([l()],Z.prototype,`checked`,void 0),X([l()],Z.prototype,`isEmailEnabled`,void 0),X([l()],Z.prototype,`isSocialEnabled`,void 0),X([l()],Z.prototype,`isAuthEnabled`,void 0),Z=X([o(`w3m-connect-view`)],Z);var qn=a`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
    min-width: 0;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  wui-button {
    flex-shrink: 0;
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,Jn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yn=class extends f{constructor(){super(...arguments),this.disabled=!1,this.label=``,this.buttonLabel=``}render(){return n`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Yn.styles=[c,i,qn],Jn([r({type:Boolean})],Yn.prototype,`disabled`,void 0),Jn([r()],Yn.prototype,`label`,void 0),Jn([r()],Yn.prototype,`buttonLabel`,void 0),Yn=Jn([o(`wui-cta-button`)],Yn);var Xn=a`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`,Zn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qn=class extends f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display=`none`,null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:a}=this.wallet,o=_.isMobile(),s=_.isIos(),c=_.isAndroid(),l=[t,r,a,i].filter(Boolean).length>1;return l&&!o?n`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${()=>v.push(`Downloads`,{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&a?n`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?n`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?n`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display=`none`,null)}onAppStore(){this.wallet?.app_store&&_.openHref(this.wallet.app_store,`_blank`)}onPlayStore(){this.wallet?.play_store&&_.openHref(this.wallet.play_store,`_blank`)}onHomePage(){this.wallet?.homepage&&_.openHref(this.wallet.homepage,`_blank`)}};Qn.styles=[Xn],Zn([r({type:Object})],Qn.prototype,`wallet`,void 0),Qn=Zn([o(`w3m-mobile-download-links`)],Qn);var $n=a`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
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
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
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

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends f{constructor(){super(),this.wallet=v.state.data?.wallet,this.connector=v.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon=`refresh`,this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=m.getConnectorImage(this.connector)??m.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??`Wallet`,this.isRetrying=!1,this.uri=b.state.wcUri,this.error=b.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel=`Try again`,this.secondaryLabel=`Accept connection request in the wallet`,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(b.subscribeKey(`wcUri`,e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),b.subscribeKey(`wcError`,e=>this.error=e)),(_.isTelegram()||_.isSafari())&&_.isIos()&&b.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),b.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?`Connection can be declined if a previous request is still active`:this.secondaryLabel,t=``;return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t=`Connection declined`)),n`
      <wui-flex
        data-error=${s(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${s(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`0`,`0`]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?`error`:`primary`}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?n`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?n`
              <wui-flex .padding=${[`0`,`5`,`5`,`5`]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}onTryAgain(){b.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=fe.state.themeVariables[`--w3m-border-radius-master`],t=e?parseInt(e.replace(`px`,``),10):4;return n`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(_.copyToClopboard(this.uri),y.showSuccess(`Link copied`))}catch{y.showError(`Failed to copy`)}}};$.styles=$n,Q([l()],$.prototype,`isRetrying`,void 0),Q([l()],$.prototype,`uri`,void 0),Q([l()],$.prototype,`error`,void 0),Q([l()],$.prototype,`ready`,void 0),Q([l()],$.prototype,`showRetry`,void 0),Q([l()],$.prototype,`label`,void 0),Q([l()],$.prototype,`secondaryBtnLabel`,void 0),Q([l()],$.prototype,`secondaryLabel`,void 0),Q([l()],$.prototype,`isLoading`,void 0),Q([r({type:Boolean})],$.prototype,`isMobile`,void 0),Q([r()],$.prototype,`onRetry`,void 0);var er=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tr=class extends ${constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=b.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=h.state.remoteFeatures,this.currentActiveConnectorId=w.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error(`w3m-connecting-view: No connector provided`);let e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.connector.name??`Unknown`,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:v.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(w.subscribeKey(`activeConnectorIds`,t=>{let n=t[e],r=this.remoteFeatures?.multiWallet,{redirectView:i}=v.state.data??{};n!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&r?(v.replace(`ProfileWallets`),y.showSuccess(`New Wallet Added`)):i?v.replace(i):C.close())}),b.subscribeKey(`connections`,this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==S.CONNECTOR_ID.COINBASE_SDK&&this.connector.id!==S.CONNECTOR_ID.BASE_ACCOUNT||!this.error)&&await b.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof re&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?T.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):T.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],n=this.remoteFeatures?.multiWallet;if(t.length===0)v.replace(`Connect`);else{let e=ce.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),r=ce.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);r.length===0?this.hasMultipleConnections&&n?(v.replace(`ProfileWallets`),y.showSuccess(`Wallet deleted`)):C.close():!e.every(e=>r.some(t=>D.isLowerCaseMatch(e.address,t.address)))&&n&&v.replace(`ProfileWallets`)}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>D.isLowerCaseMatch(t.connectorId,e.id))}};tr=er([o(`w3m-connecting-external-view`)],tr);var nr=t`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,rr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ir=class extends f{constructor(){super(),this.unsubscribe=[],this.activeConnector=w.state.activeConnector,this.unsubscribe.push(w.subscribeKey(`activeConnector`,e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${s(m.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`0`,`3`,`0`,`3`]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`2`,`0`]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e,t)=>e.name?n`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${s(m.getChainImage(e.chain))}
              name=${S.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain),n=v.state.data?.redirectView;t?t.id===`walletConnect`?_.isMobile()?v.push(`AllWallets`):v.push(`ConnectingWalletConnect`,{redirectView:n}):v.push(`ConnectingExternal`,{connector:t,redirectView:n,wallet:this.activeConnector?.explorerWallet}):y.showError(`Failed to find connector`)}};ir.styles=nr,rr([l()],ir.prototype,`activeConnector`,void 0),ir=rr([o(`w3m-connecting-multi-chain-view`)],ir);var ar=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},or=class extends f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return n`
      <wui-flex justifyContent="center" .padding=${[`0`,`0`,`4`,`0`]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>e===`browser`?{label:`Browser`,icon:`extension`,platform:`browser`}:e===`mobile`?{label:`Mobile`,icon:`mobile`,platform:`mobile`}:e===`qrcode`?{label:`Mobile`,icon:`mobile`,platform:`qrcode`}:e===`web`?{label:`Webapp`,icon:`browser`,platform:`web`}:e===`desktop`?{label:`Desktop`,icon:`desktop`,platform:`desktop`}:{label:`Browser`,icon:`extension`,platform:`unsupported`});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ar([r({type:Array})],or.prototype,`platforms`,void 0),ar([r()],or.prototype,`onSelectPlatfrom`,void 0),or=ar([o(`w3m-connecting-header`)],or);var sr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cr=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-browser: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:v.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=w.state,t=e.find(e=>e.type===`ANNOUNCED`&&e.info?.rdns===this.wallet?.rdns||e.type===`INJECTED`||e.name===this.wallet?.name);if(t)await b.connectExternal(t,t.chain);else throw Error(`w3m-connecting-wc-browser: No connector found`);(!h.state.siwx||await Ne.isAuthenticated())&&C.close()}catch(e){e instanceof re&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?T.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):T.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}};cr=sr([o(`w3m-connecting-wc-browser`)],cr);var lr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ur=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-desktop: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`desktop`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:v.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=_.formatNativeUrl(e,this.uri);b.setWcLinking({name:t,href:r}),b.setRecentWallet(this.wallet),_.openHref(n,`_blank`)}catch{this.error=!0}}};ur=lr([o(`w3m-connecting-wc-desktop`)],ur);var dr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fr=class extends ${constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=h.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{ce.onConnectMobile(this.wallet)},!this.wallet)throw Error(`w3m-connecting-wc-mobile: No wallet provided`);this.secondaryBtnLabel=`Open`,this.secondaryLabel=g.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.onHandleURI(),this.unsubscribe.push(b.subscribeKey(`wcUri`,()=>{this.onHandleURI()})),T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`mobile`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:v.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){b.setWcError(!1),this.onConnect?.()}};dr([l()],fr.prototype,`redirectDeeplink`,void 0),dr([l()],fr.prototype,`redirectUniversalLink`,void 0),dr([l()],fr.prototype,`target`,void 0),dr([l()],fr.prototype,`preferUniversalLinks`,void 0),dr([l()],fr.prototype,`isLoading`,void 0),fr=dr([o(`w3m-connecting-wc-mobile`)],fr);var pr=a`
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,mr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hr=class extends ${constructor(){super(),this.basic=!1}firstUpdated(){this.basic||T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet?.name??`WalletConnect`,platform:`qrcode`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:v.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`0`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;b.setWcLinking(void 0),b.setRecentWallet(this.wallet);let t=fe.state.themeVariables[`--apkt-qr-color`]??fe.state.themeVariables[`--w3m-qr-color`];return n` <wui-qr-code
      theme=${fe.state.themeMode}
      uri=${this.uri}
      imageSrc=${s(m.getWalletImage(this.wallet))}
      color=${s(t)}
      alt=${s(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return n`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};hr.styles=pr,mr([r({type:Boolean})],hr.prototype,`basic`,void 0),hr=mr([o(`w3m-connecting-wc-qrcode`)],hr);var gr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_r=class extends f{constructor(){if(super(),this.wallet=v.state.data?.wallet,!this.wallet)throw Error(`w3m-connecting-wc-unsupported: No wallet provided`);T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:v.state.view}})}render(){return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${s(m.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};_r=gr([o(`w3m-connecting-wc-unsupported`)],_r);var vr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yr=class extends ${constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error(`w3m-connecting-wc-web: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel=`Open`,this.secondaryLabel=g.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.updateLoadingState(),this.unsubscribe.push(b.subscribeKey(`wcUri`,()=>{this.updateLoadingState()})),T.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`web`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:v.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=_.formatUniversalUrl(e,this.uri);b.setWcLinking({name:t,href:r}),b.setRecentWallet(this.wallet),_.openHref(n,`_blank`)}catch{this.error=!0}}};vr([l()],yr.prototype,`isLoading`,void 0),yr=vr([o(`w3m-connecting-wc-web`)],yr);var br=a`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,xr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sr=class extends f{constructor(){super(),this.wallet=v.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!h.state.siwx,this.remoteFeatures=h.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return h.state.enableMobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),n`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:n`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){if(!(this.platform===`browser`||h.state.manualWCControl&&!e))try{let{wcPairingExpiry:t,status:n}=b.state,{redirectView:r}=v.state.data??{};if(e||h.state.enableEmbedded||_.isPairingExpired(t)||n===`connecting`){let e=b.getConnections(x.state.activeChain),t=this.remoteFeatures?.multiWallet,n=e.length>0;await b.connectWalletConnect({cache:`never`}),this.isSiwxEnabled||(n&&t?(v.replace(`ProfileWallets`),y.showSuccess(`New Wallet Added`)):r?v.replace(r):C.close())}}catch(e){if(e instanceof Error&&e.message.includes(`An error occurred when attempting to switch chain`)&&!h.state.enableNetworkSwitch&&x.state.activeChain){x.setActiveCaipNetwork(He.getUnsupportedNetwork(`${x.state.activeChain}:${x.state.activeCaipNetwork?.id}`)),x.showUnsupportedChainUI();return}e instanceof re&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?T.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):T.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),b.setWcError(!0),y.showError(e.message??`Connection error`),b.resetWcConnection(),v.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push(`qrcode`),this.platform=`qrcode`;return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,a=r?.map(({injected_id:e})=>e).filter(Boolean),o=[...i?[i]:a??[]],s=!h.state.isUniversalProvider&&o.length,c=e,l=n,u=b.checkInstalled(o),d=s&&u,f=t&&!_.isMobile();d&&!x.state.noAdapters&&this.platforms.push(`browser`),c&&this.platforms.push(_.isMobile()?`mobile`:`qrcode`),l&&this.platforms.push(`web`),f&&this.platforms.push(`desktop`);let ee=oe.isCustomDeeplinkWallet(this.wallet.id,x.state.activeChain);!d&&s&&!x.state.noAdapters&&!ee&&this.platforms.push(`unsupported`),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case`browser`:return n`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case`web`:return n`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case`desktop`:return n`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case`mobile`:return n`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case`qrcode`:return n`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return n`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?n`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector(`div`);t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}};Sr.styles=br,xr([l()],Sr.prototype,`platform`,void 0),xr([l()],Sr.prototype,`platforms`,void 0),xr([l()],Sr.prototype,`isSiwxEnabled`,void 0),xr([l()],Sr.prototype,`remoteFeatures`,void 0),xr([r({type:Boolean})],Sr.prototype,`displayBranding`,void 0),xr([r({type:Boolean})],Sr.prototype,`basic`,void 0),Sr=xr([o(`w3m-connecting-wc-view`)],Sr);var Cr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wr=class extends f{constructor(){super(),this.unsubscribe=[],this.isMobile=_.isMobile(),this.remoteFeatures=h.state.remoteFeatures,this.unsubscribe.push(h.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=p.state,{customWallets:r}=h.state,i=ne.getRecentWallets(),a=e.length||t.length||r?.length||i.length;return n`<wui-flex flexDirection="column" gap="2" .margin=${[`1`,`3`,`3`,`3`]}>
        ${a?n`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return n`<wui-flex flexDirection="column" .padding=${[`0`,`0`,`4`,`0`]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[`0`,`3`,`0`,`3`]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?n` <wui-flex flexDirection="column" .padding=${[`1`,`0`,`1`,`0`]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Cr([l()],wr.prototype,`isMobile`,void 0),Cr([l()],wr.prototype,`remoteFeatures`,void 0),wr=Cr([o(`w3m-connecting-wc-basic-view`)],wr);var Tr=t`
  .continue-button-container {
    width: 100%;
  }
`,Er=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dr=class extends f{constructor(){super(...arguments),this.loading=!1}render(){return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`,`0`,`4`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{_.openHref(Pe.URLS.FAQ,`_blank`)}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return n` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`,`6`,`0`,`6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return n`<wui-flex
      .padding=${[`0`,`8`,`0`,`8`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){v.push(`RegisterAccountName`),T.sendEvent({type:`track`,event:`OPEN_ENS_FLOW`,properties:{isSmartAccount:le(x.state.activeChain)===ee.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Dr.styles=Tr,Er([l()],Dr.prototype,`loading`,void 0),Dr=Er([o(`w3m-choose-account-name-view`)],Dr);var Or=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kr=class extends f{constructor(){super(...arguments),this.wallet=v.state.data?.wallet}render(){if(!this.wallet)throw Error(`w3m-downloads-view`);return n`
      <wui-flex gap="2" flexDirection="column" .padding=${[`3`,`3`,`4`,`3`]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?n`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?n`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?n`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?n`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(T.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),_.openHref(e.href,`_blank`))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:`chrome_store`})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:`app_store`})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:`play_store`})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:`homepage`})}};kr=Or([o(`w3m-downloads-view`)],kr);var Ar=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jr=`https://walletguide.walletconnect.network`,Mr=class extends f{render(){return n`
      <wui-flex flexDirection="column" .padding=${[`0`,`3`,`3`,`3`]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{_.openHref(`https://walletguide.walletconnect.network/`,`_blank`)}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=p.state,{customWallets:r}=h.state;return[...t,...r??[],...e].slice(0,4).map((e,t)=>n`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??`Unknown`}
          tagVariant="accent"
          size="sm"
          imageSrc=${s(m.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){T.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:`homepage`}}),_.openHref(e.homepage??jr,`_blank`)}};Mr=Ar([o(`w3m-get-wallet-view`)],Mr);var Nr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pr=class extends f{constructor(){super(...arguments),this.data=[]}render(){return n`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>n`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>n`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Nr([r({type:Array})],Pr.prototype,`data`,void 0),Pr=Nr([o(`w3m-help-widget`)],Pr);var Fr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ir=[{images:[`login`,`profile`,`lock`],title:`One login for all of web3`,text:`Log in to any app by connecting your wallet. Say goodbye to countless passwords!`},{images:[`defi`,`nft`,`eth`],title:`A home for your digital assets`,text:`A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.`},{images:[`browser`,`noun`,`dao`],title:`Your gateway to a new web`,text:`With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.`}],Lr=class extends f{render(){return n`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Ir}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){T.sendEvent({type:`track`,event:`CLICK_GET_WALLET_HELP`}),v.push(`GetWallet`)}};Lr=Fr([o(`w3m-what-is-a-wallet-view`)],Lr);var Rr=a`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
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
`,zr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Br=class extends f{constructor(){super(),this.unsubscribe=[],this.checked=be.state.isLegalCheckboxChecked,this.unsubscribe.push(be.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=h.state,r=h.state.features?.legalCheckbox,i=!!(e||t)&&!!r,a=i&&!this.checked,o=a?-1:void 0;return n`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?[`0`,`3`,`3`,`3`]:`3`}
        gap="2"
        class=${s(a?`disabled`:void 0)}
      >
        <w3m-wallet-login-list tabIdx=${s(o)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Br.styles=Rr,zr([l()],Br.prototype,`checked`,void 0),Br=zr([o(`w3m-connect-wallets-view`)],Br);var Vr=a`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Hr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ur=class extends f{render(){return n`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ur.styles=[c,Vr],Ur=Hr([o(`wui-loading-hexagon`)],Ur);var Wr=t`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Gr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kr=class extends f{constructor(){super(),this.network=v.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error(`w3m-network-switch-view: No network provided`);this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return n`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`10`,`5`]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${s(m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:n`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=w.getConnectorId(x.state.activeChain);return w.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?``:this.error?`Switch can be declined if chain is not supported by a wallet or previous request is still active`:`Accept connection request in your wallet`}getLabel(){let e=w.getConnectorId(x.state.activeChain);return w.getAuthConnector()&&e===S.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??`Unknown`} network...`:this.error?`Switch declined`:`Approve in wallet`}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}async onSwitchNetwork(){try{this.error=!1,x.state.activeChain!==this.network?.chainNamespace&&x.setIsSwitchingNamespace(!0),this.network&&(await x.switchActiveNetwork(this.network),await Ne.isAuthenticated()&&v.goBack())}catch{this.error=!0}}};Kr.styles=Wr,Gr([l()],Kr.prototype,`showRetry`,void 0),Gr([l()],Kr.prototype,`error`,void 0),Kr=Gr([o(`w3m-network-switch-view`)],Kr);var qr=a`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Jr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yr=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.name=`Ethereum`,this.disabled=!1}render(){return n`
      <button ?disabled=${this.disabled} tabindex=${s(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?n`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:n`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};Yr.styles=[c,i,qr],Jr([r()],Yr.prototype,`imageSrc`,void 0),Jr([r()],Yr.prototype,`name`,void 0),Jr([r()],Yr.prototype,`tabIdx`,void 0),Jr([r({type:Boolean})],Yr.prototype,`disabled`,void 0),Yr=Jr([o(`wui-list-network`)],Yr);var Xr=t`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,Zr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qr=class extends f{constructor(){super(),this.unsubscribe=[],this.network=x.state.activeCaipNetwork,this.requestedCaipNetworks=x.getCaipNetworks(),this.search=``,this.onDebouncedSearch=_.debounce(e=>{this.search=e},100),this.unsubscribe.push(te.subscribeNetworkImages(()=>this.requestUpdate()),x.subscribeKey(`activeCaipNetwork`,e=>this.network=e),x.subscribe(()=>{this.requestedCaipNetworks=x.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[`0`,`3`,`3`,`3`]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return n`
      <wui-flex gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){let e=x.getAllApprovedCaipNetworkIds(),t=_.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.filteredNetworks=this.search?t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):t,this.filteredNetworks?.map(e=>n`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${s(m.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${x.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(e){ue.onSwitchNetwork({network:e})}};Qr.styles=Xr,Zr([l()],Qr.prototype,`network`,void 0),Zr([l()],Qr.prototype,`requestedCaipNetworks`,void 0),Zr([l()],Qr.prototype,`filteredNetworks`,void 0),Zr([l()],Qr.prototype,`search`,void 0),Qr=Zr([o(`w3m-networks-view`)],Qr);var $r=a`
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

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
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

  .capitalize {
    text-transform: capitalize;
  }
`,ei=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ti={eip155:`eth`,solana:`solana`,bip122:`bitcoin`,polkadot:void 0},ni=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=v.state.data?.switchToChain,this.caipNetwork=v.state.data?.network,this.activeChain=x.state.activeChain}firstUpdated(){this.unsubscribe.push(x.subscribeKey(`activeChain`,e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?S.CHAIN_NAME_MAP[this.switchToChain]:`supported`;if(!this.switchToChain)return null;let t=S.CHAIN_NAME_MAP[this.switchToChain];return n`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`4`,`2`,`2`,`2`]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${s(ti[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(x.setIsSwitchingNamespace(!0),w.setFilterByNamespace(this.switchToChain),this.caipNetwork?await x.switchActiveNetwork(this.caipNetwork):x.setActiveNamespace(this.switchToChain),v.reset(`Connect`))}};ni.styles=$r,ei([r()],ni.prototype,`activeChain`,void 0),ni=ei([o(`w3m-switch-active-chain-view`)],ni);var ri=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ii=[{images:[`network`,`layers`,`system`],title:`The system’s nuts and bolts`,text:`A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.`},{images:[`noun`,`defiAlt`,`dao`],title:`Designed for different uses`,text:`Each network is designed differently, and may therefore suit certain apps and experiences.`}],ai=class extends f{render(){return n`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${ii}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{_.openHref(`https://ethereum.org/en/developers/docs/networks/`,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ai=ri([o(`w3m-what-is-a-network-view`)],ai);var oi=t`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,si=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ci=class extends f{constructor(){super(),this.swapUnsupportedChain=v.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=h.state.remoteFeatures,this.unsubscribe.push(te.subscribeNetworkImages(()=>this.requestUpdate()),h.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[`3`,`5`,`2`,`5`]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?n`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:n`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=x.getAllRequestedCaipNetworks(),t=x.getAllApprovedCaipNetworkIds(),r=_.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?r.filter(e=>g.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):r).map(e=>n`
        <wui-list-network
          imageSrc=${s(m.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=x.state.activeChain,t=b.getConnections(e).length>0,n=e&&w.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await b.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(v.push(`ProfileWallets`),y.showSuccess(`Wallet deleted`))}catch{T.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),y.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=x.getActiveCaipAddress(),n=x.getAllApprovedCaipNetworkIds();x.getNetworkProp(`supportsAllNetworks`,e.chainNamespace);let r=v.state.data;t?n?.includes(e.caipNetworkId)?await x.switchActiveNetwork(e):v.push(`SwitchNetwork`,{...r,network:e}):t||(x.setActiveCaipNetwork(e),v.push(`Connect`))}};ci.styles=oi,si([l()],ci.prototype,`disconnecting`,void 0),si([l()],ci.prototype,`remoteFeatures`,void 0),ci=si([o(`w3m-unsupported-chain-view`)],ci);var li=a`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`,ui=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},di=class extends f{constructor(){super(...arguments),this.icon=`externalLink`,this.text=``,this.type=`info`}render(){return n`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};di.styles=[c,i,li],ui([r()],di.prototype,`icon`,void 0),ui([r()],di.prototype,`text`,void 0),ui([r()],di.prototype,`type`,void 0),di=ui([o(`wui-banner`)],di);var fi=t`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,pi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},mi=class extends f{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n` <wui-flex flexDirection="column" .padding=${[`2`,`3`,`3`,`3`]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=x.getAllRequestedCaipNetworks(),t=x.getAllApprovedCaipNetworkIds(),r=x.state.activeCaipNetwork,i=x.checkIfSmartAccountEnabled(),a=_.sortRequestedNetworks(t,e);if(i&&le(r?.chainNamespace)===ee.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;a=[r]}return a.filter(e=>e.chainNamespace===r?.chainNamespace).map(e=>n`
        <wui-list-network
          imageSrc=${s(m.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};mi.styles=fi,mi=pi([o(`w3m-wallet-compatible-networks-view`)],mi);var hi=a`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    font-size: 48px;
  }
`,gi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_i=class extends f{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?`true`:`false`,n`${this.templateVisual()}`}templateVisual(){return this.imageSrc?n`<wui-image src=${this.imageSrc} alt=${this.alt??``}></wui-image>`:n`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};_i.styles=[c,hi],gi([r()],_i.prototype,`imageSrc`,void 0),gi([r()],_i.prototype,`alt`,void 0),gi([r({type:Boolean})],_i.prototype,`borderRadiusFull`,void 0),_i=gi([o(`wui-visual-thumbnail`)],_i);var vi=a`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,yi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bi=class extends f{constructor(){super(...arguments),this.dappImageUrl=h.state.metadata?.icons,this.walletImageUrl=x.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll(`wui-visual-thumbnail`);e?.[0]&&this.createAnimation(e[0],`translate(18px)`),e?.[1]&&this.createAnimation(e[1],`translate(-18px)`)}render(){return n`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:`translateX(0px)`},{transform:t}],{duration:1600,easing:`cubic-bezier(0.56, 0, 0.48, 1)`,direction:`alternate`,iterations:1/0})}};bi.styles=vi,bi=yi([o(`w3m-siwx-sign-message-thumbnails`)],bi);var xi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Si=class extends f{constructor(){super(...arguments),this.dappName=h.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return n`
      <wui-flex justifyContent="center" .padding=${[`8`,`0`,`6`,`0`]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[`0`,`20`,`5`,`20`]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??`Dapp`} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`0`,`10`,`4`,`10`]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`4`,`5`,`5`,`5`]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?`Cancelling...`:`Cancel`}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?`Signing...`:`Sign`}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Ne.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes(`OTP is required`)){y.showError({message:`Something went wrong. We need to verify your account again.`}),v.replace(`DataCapture`);return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Ne.cancelSignMessage().finally(()=>this.isCancelling=!1)}};xi([l()],Si.prototype,`isCancelling`,void 0),xi([l()],Si.prototype,`isSigning`,void 0),Si=xi([o(`w3m-siwx-sign-message-view`)],Si);var Ci=e({AppKitAccountButton:()=>Ge,AppKitButton:()=>Je,AppKitConnectButton:()=>tt,AppKitNetworkButton:()=>ct,W3mAccountButton:()=>We,W3mAccountSettingsView:()=>ht,W3mAccountView:()=>Ut,W3mAllWalletsView:()=>Cn,W3mButton:()=>qe,W3mChooseAccountNameView:()=>Dr,W3mConnectButton:()=>et,W3mConnectView:()=>Z,W3mConnectWalletsView:()=>Br,W3mConnectingExternalView:()=>tr,W3mConnectingMultiChainView:()=>ir,W3mConnectingWcBasicView:()=>wr,W3mConnectingWcView:()=>Sr,W3mDownloadsView:()=>kr,W3mFooter:()=>pe,W3mFundWalletView:()=>Qt,W3mGetWalletView:()=>Mr,W3mNetworkButton:()=>st,W3mNetworkSwitchView:()=>Kr,W3mNetworksView:()=>Qr,W3mProfileWalletsView:()=>K,W3mRouter:()=>me,W3mSIWXSignMessageView:()=>Si,W3mSwitchActiveChainView:()=>ni,W3mUnsupportedChainView:()=>ci,W3mWalletCompatibleNetworksView:()=>mi,W3mWhatIsANetworkView:()=>ai,W3mWhatIsAWalletView:()=>Lr});export{Ge as a,Je as i,ct as n,He as o,tt as r,Ci as t};