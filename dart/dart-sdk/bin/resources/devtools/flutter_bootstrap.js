(()=>{var C={blink:!0,gecko:!1,webkit:!1,unknown:!1},R=()=>navigator.vendor==="Google Inc."||navigator.userAgent.includes("Edg/")?"blink":navigator.vendor==="Apple Computer, Inc."?"webkit":navigator.vendor===""&&navigator.userAgent.includes("Firefox")?"gecko":"unknown",L=R(),x=()=>typeof ImageDecoder>"u"?!1:L==="blink",K=()=>typeof Intl.v8BreakIterator<"u"&&typeof Intl.Segmenter<"u",B=()=>{let i=[0,97,115,109,1,0,0,0,1,5,1,95,1,120,0];return WebAssembly.validate(new Uint8Array(i))},p={browserEngine:L,hasImageCodecs:x(),hasChromiumBreakIterators:K(),supportsWasmGC:B(),crossOriginIsolated:window.crossOriginIsolated};function c(...i){return new URL(T(...i),document.baseURI).toString()}function T(...i){return i.filter(e=>!!e).map((e,r)=>r===0?I(e):z(I(e))).filter(e=>e.length).join("/")}function z(i){let e=0;for(;e<i.length&&i.charAt(e)==="/";)e++;return i.substring(e)}function I(i){let e=i.length;for(;e>0&&i.charAt(e-1)==="/";)e--;return i.substring(0,e)}function E(i,e){return i.canvasKitBaseUrl?i.canvasKitBaseUrl:e.engineRevision&&!e.useLocalCanvasKit?T("https://www.gstatic.com/flutter-canvaskit",e.engineRevision):"canvaskit"}var v=class{constructor(){this._scriptLoaded=!1}setTrustedTypesPolicy(e){this._ttPolicy=e}async loadEntrypoint(e){let{entrypointUrl:r=c("main.dart.js"),onEntrypointLoaded:t,nonce:n}=e||{};return this._loadJSEntrypoint(r,t,n)}async load(e,r,t,n,s){s??=o=>{o.initializeEngine(t).then(u=>u.runApp())};let{entryPointBaseUrl:a}=t;if(e.compileTarget==="dart2wasm")return this._loadWasmEntrypoint(e,r,a,s);{let o=e.mainJsPath??"main.dart.js",u=c(a,o);return this._loadJSEntrypoint(u,s,n)}}didCreateEngineInitializer(e){typeof this._didCreateEngineInitializerResolve=="function"&&(this._didCreateEngineInitializerResolve(e),this._didCreateEngineInitializerResolve=null,delete _flutter.loader.didCreateEngineInitializer),typeof this._onEntrypointLoaded=="function"&&this._onEntrypointLoaded(e)}_loadJSEntrypoint(e,r,t){let n=typeof r=="function";if(!this._scriptLoaded){this._scriptLoaded=!0;let s=this._createScriptTag(e,t);if(n)console.debug("Injecting <script> tag. Using callback."),this._onEntrypointLoaded=r,document.head.append(s);else return new Promise((a,o)=>{console.debug("Injecting <script> tag. Using Promises. Use the callback approach instead!"),this._didCreateEngineInitializerResolve=a,s.addEventListener("error",o),document.head.append(s)})}}async _loadWasmEntrypoint(e,r,t,n){if(!this._scriptLoaded){this._scriptLoaded=!0,this._onEntrypointLoaded=n;let{mainWasmPath:s,jsSupportRuntimePath:a}=e,o=c(t,s),u=c(t,a);this._ttPolicy!=null&&(u=this._ttPolicy.createScriptURL(u));let m=(await import(u)).compileStreaming(fetch(o)),l;e.renderer==="skwasm"?l=(async()=>{let d=await r.skwasm;return window._flutter_skwasmInstance=d,{skwasm:d.wasmExports,skwasmWrapper:d,ffi:{memory:d.wasmMemory}}})():l=Promise.resolve({}),await(await(await m).instantiate(await l,{loadDynamicModule:async(d,b)=>{let j=fetch(c(t,d)),_=c(t,b);this._ttPolicy!=null&&(_=this._ttPolicy.createScriptURL(_));let A=import(_);return[await j,await A]}})).invokeMain()}}_createScriptTag(e,r){let t=document.createElement("script");t.type="application/javascript",r&&(t.nonce=r);let n=e;return this._ttPolicy!=null&&(n=this._ttPolicy.createScriptURL(e)),t.src=n,t}};async function W(i,e,r){if(e<0)return i;let t,n=new Promise((s,a)=>{t=setTimeout(()=>{a(new Error(`${r} took more than ${e}ms to resolve. Moving on.`,{cause:W}))},e)});return Promise.race([i,n]).finally(()=>{clearTimeout(t)})}var h=class{setTrustedTypesPolicy(e){this._ttPolicy=e}loadServiceWorker(e){if(!e)return console.debug("Null serviceWorker configuration. Skipping."),Promise.resolve();if(!("serviceWorker"in navigator)){let o="Service Worker API unavailable.";return window.isSecureContext||(o+=`
The current context is NOT secure.`,o+=`
Read more: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts`),Promise.reject(new Error(o))}let{serviceWorkerVersion:r,serviceWorkerUrl:t=c(`flutter_service_worker.js?v=${r}`),timeoutMillis:n=4e3}=e,s=t;this._ttPolicy!=null&&(s=this._ttPolicy.createScriptURL(s));let a=navigator.serviceWorker.register(s).then(o=>this._getNewServiceWorker(o,r)).then(this._waitForServiceWorkerActivation);return W(a,n,"prepareServiceWorker")}async _getNewServiceWorker(e,r){if(!e.active&&(e.installing||e.waiting))return console.debug("Installing/Activating first service worker."),e.installing||e.waiting;if(e.active.scriptURL.endsWith(r))return console.debug("Loading from existing service worker."),e.active;{let t=await e.update();return console.debug("Updating service worker."),t.installing||t.waiting||t.active}}async _waitForServiceWorkerActivation(e){if(!e||e.state==="activated")if(e){console.debug("Service worker already active.");return}else throw new Error("Cannot activate a null service worker!");return new Promise((r,t)=>{e.addEventListener("statechange",()=>{e.state==="activated"&&(console.debug("Activated new service worker."),r())})})}};var g=class{constructor(e,r="flutter-js"){let t=e||[/\.js$/,/\.mjs$/];window.trustedTypes&&(this.policy=trustedTypes.createPolicy(r,{createScriptURL:function(n){if(n.startsWith("blob:"))return n;let s=new URL(n,window.location),a=s.pathname.split("/").pop();if(t.some(u=>u.test(a)))return s.toString();console.error("URL rejected by TrustedTypes policy",r,":",n,"(download prevented)")}}))}};var k=i=>{let e=WebAssembly.compileStreaming(fetch(i));return(r,t)=>((async()=>{let n=await e,s=await WebAssembly.instantiate(n,r);t(s,n)})(),{})};var U=(i,e,r,t)=>(window.flutterCanvasKitLoaded=(async()=>{if(window.flutterCanvasKit)return window.flutterCanvasKit;let n=r.hasChromiumBreakIterators&&r.hasImageCodecs;if(!n&&e.canvasKitVariant=="chromium")throw"Chromium CanvasKit variant specifically requested, but unsupported in this browser";let s=n&&e.canvasKitVariant!=="full",a=t;e.canvasKitVariant=="experimentalWebParagraph"?a=c(a,"experimental_webparagraph"):s&&(a=c(a,"chromium"));let o=c(a,"canvaskit.js");i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let u=k(c(a,"canvaskit.wasm")),w=await import(o);return window.flutterCanvasKit=await w.default({instantiateWasm:u}),window.flutterCanvasKit})(),window.flutterCanvasKitLoaded);var P=async(i,e,r,t)=>{let s=!r.hasImageCodecs||!r.hasChromiumBreakIterators?"skwasm_heavy":"skwasm",a=c(t,`${s}.js`),o=a;i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let u=k(c(t,`${s}.wasm`));return await(await import(o)).default({skwasmSingleThreaded:!r.crossOriginIsolated||e.forceSingleThreadedSkwasm,instantiateWasm:u,locateFile:(m,l)=>{if(m.endsWith(".ww.js")){let y=c(t,m);return URL.createObjectURL(new Blob([`
"use strict";

let eventListener;
eventListener = (message) => {
    const pendingMessages = [];
    const data = message.data;
    data["instantiateWasm"] = (info,receiveInstance) => {
        const instance = new WebAssembly.Instance(data["wasm"], info);
        return receiveInstance(instance, data["wasm"])
    };
    import(data.js).then(async (skwasm) => {
        await skwasm.default(data);

        removeEventListener("message", eventListener);
        for (const message of pendingMessages) {
            dispatchEvent(message);
        }
    });
    removeEventListener("message", eventListener);
    eventListener = (message) => {

        pendingMessages.push(message);
    };

    addEventListener("message", eventListener);
};
addEventListener("message", eventListener);
`],{type:"application/javascript"}))}return url},mainScriptUrlOrBlob:a})};var S=class{async loadEntrypoint(e){let{serviceWorker:r,...t}=e||{},n=new g,s=new h;s.setTrustedTypesPolicy(n.policy),await s.loadServiceWorker(r).catch(o=>{console.warn("Exception while loading service worker:",o)});let a=new v;return a.setTrustedTypesPolicy(n.policy),this.didCreateEngineInitializer=a.didCreateEngineInitializer.bind(a),a.loadEntrypoint(t)}async load({serviceWorkerSettings:e,onEntrypointLoaded:r,nonce:t,config:n}={}){n??={};let s=_flutter.buildConfig;if(!s)throw"FlutterLoader.load requires _flutter.buildConfig to be set";let a=n.wasmAllowList?.[p.browserEngine]??C[p.browserEngine],o=d=>{switch(d){case"skwasm":return p.supportsWasmGC&&a;default:return!0}},u=(d,b)=>d.renderer==b,w=d=>d.compileTarget==="dart2wasm"&&!p.supportsWasmGC||n.renderer&&!u(d,n.renderer)?!1:o(d.renderer),m=s.builds.find(w);if(!m)throw"FlutterLoader could not find a build compatible with configuration and environment.";let l={};l.flutterTT=new g,e&&(l.serviceWorkerLoader=new h,l.serviceWorkerLoader.setTrustedTypesPolicy(l.flutterTT.policy),await l.serviceWorkerLoader.loadServiceWorker(e).catch(d=>{console.warn("Exception while loading service worker:",d)}));let y=E(n,s);m.renderer==="canvaskit"?l.canvasKit=U(l,n,p,y):m.renderer==="skwasm"&&(l.skwasm=P(l,n,p,y));let f=new v;return f.setTrustedTypesPolicy(l.flutterTT.policy),this.didCreateEngineInitializer=f.didCreateEngineInitializer.bind(f),f.load(m,l,n,t,r)}};window._flutter||(window._flutter={});window._flutter.loader||(window._flutter.loader=new S);})();
//# sourceMappingURL=flutter.js.map

if (!window._flutter) {
  window._flutter = {};
}
_flutter.buildConfig = {"engineRevision":"36ea2bdeab611e908967b6fa57659998f600a2cb","builds":[{"compileTarget":"dart2wasm","renderer":"skwasm","mainWasmPath":"main.dart.wasm","jsSupportRuntimePath":"main.dart.mjs"},{"compileTarget":"dart2js","renderer":"canvaskit","mainJsPath":"main.dart.js"}]};


// Unregister the old custom DevTools service worker (if it exists). It was
// removed in: https://github.com/flutter/devtools/pull/5331
function unregisterDevToolsServiceWorker() {
  if ('serviceWorker' in navigator) {
    const DEVTOOLS_SW = 'service_worker.js';
    const FLUTTER_SW = 'flutter_service_worker.js';
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            const activeWorker = registration.active;
            if (activeWorker != null) {
                const url = activeWorker.scriptURL;
                if (url.includes(DEVTOOLS_SW) && !url.includes(FLUTTER_SW)) {
                    registration.unregister();
                }
            }
        }
    });
  }
}

// This query parameter must match the String value specified by
// `DevToolsQueryParameters.wasmKey`. See
// devtools/packages/devtools_app/lib/src/shared/query_parameters.dart
const wasmQueryParameterKey = 'wasm';

// Calls the DevTools server API to read the user's wasm preference.
async function getDevToolsWasmPreference() {
  // Note: when the DevTools server is running on a different port than the
  // DevTools web app, this request path will be incorrect and the request
  // will fail. This is okay because DevTools cannot be built with WASM when
  // running from `flutter run` anyway.
  const request = 'api/getPreferenceValue?key=experiment.wasm';
  try {
    const response = await fetch(request);
    if (!response.ok) {
      console.warn(`[${response.status} response] ${request}`);
      return false;
    }

    // The response text should be an encoded boolean value ("true" or "false").
    const wasmEnabled = JSON.parse(await response.text());
    return wasmEnabled === true || wasmEnabled === 'true';
  } catch (error) {
    console.error('Error fetching experiment.wasm preference value:', error);
    return false;
  }
}

// Returns whether DevTools should be loaded with the skwasm renderer based on the
// value of the 'wasm' query parameter or the wasm setting from the DevTools
// preference file.
async function shouldUseSkwasm() {
  const searchParams = new URLSearchParams(window.location.search);
  const wasmEnabledFromQueryParameter = searchParams.get(wasmQueryParameterKey) === 'true';
  const wasmEnabledFromDevToolsPreference = await getDevToolsWasmPreference();
  return wasmEnabledFromQueryParameter === true || wasmEnabledFromDevToolsPreference === true;
}

// Sets or removes the 'wasm' query parameter based on whether DevTools should
// be loaded with the skwasm renderer.
function updateWasmQueryParameter(useSkwasm) {
  const url = new URL(window.location.href);
  if (useSkwasm) {
    url.searchParams.set(wasmQueryParameterKey, 'true');
  } else {
    url.searchParams.delete(wasmQueryParameterKey);
  }
  // Update the browser's history without reloading. This is a no-op if the wasm
  // query parameter does not actually need to be updated.
  window.history.pushState({}, '', url);
}

// Bootstrap app for 3P environments:
async function bootstrapAppFor3P() {
  const useSkwasm = await shouldUseSkwasm();

  // Ensure the 'wasm' query parameter in the URL is accurate for the renderer
  // DevTools will be loaded with.
  updateWasmQueryParameter(useSkwasm);

  const rendererForLog = useSkwasm ? 'skwasm' : 'canvaskit';
  console.log('Attempting to load DevTools with ' + rendererForLog + ' renderer.');

  const rendererConfig = useSkwasm ? {} : { renderer: 'canvaskit' };
  _flutter.loader.load({
    serviceWorkerSettings: {
      serviceWorkerVersion: "190923535",
    },
    config: {
      canvasKitBaseUrl: 'canvaskit/',
      ...rendererConfig,
    }
  });
}

// Bootstrap app for 1P environments:
function bootstrapAppFor1P() {
  _flutter.loader.load();
}

unregisterDevToolsServiceWorker();
bootstrapAppFor3P();
