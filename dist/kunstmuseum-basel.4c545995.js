// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dKE9B":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c81e90764c545995";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cyufO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "heatmap", ()=>heatmap);
var _couleurDominanteJs = require("./couleurDominante.js");
var _datasJs = require("../datas.js");
const heatmap = async (nb, museum)=>{
    // définir le nombre de carrés sur une ligne/colonne
    const x = nb;
    // taille des carrés
    const squareSize = 80;
    const colorInfo = [];
    const promises = (0, _datasJs.arts)[museum].map((e)=>(0, _couleurDominanteJs.getDomColor)(e.image));
    for await (const res of promises)colorInfo.push(res);
    console.log(colorInfo);
    console.log((0, _datasJs.arts)[museum]);
    // créer le tableau de carrés
    let count = 0;
    const table = document.createElement("table");
    for(let i = 0; i < x; i++){
        const row = document.createElement("tr");
        for(let j = 0; j < x; j++){
            const cell = document.createElement("td");
            const red = colorInfo[count][0];
            const green = colorInfo[count][1];
            const blue = colorInfo[count][2];
            const alpha = 1.0; // Opacité, de 0 à 1.0
            console.log(red, green, blue);
            const rgbColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            cell.style.width = squareSize + "px";
            cell.style.height = squareSize + "px";
            cell.style.backgroundColor = rgbColor;
            //tooltip
            //element pour tooltip
            const artwork = (0, _datasJs.arts)[museum][count];
            console.log(artwork);
            const info = `Artiste: ${(0, _datasJs.arts)[museum][count].artiste}
			\nTitre: ${(0, _datasJs.arts)[museum][count].titre}
			\nDate: ${(0, _datasJs.arts)[museum][count].date}`;
            const displayInfo = (event)=>{
                const tooltip = document.createElement("div");
                tooltip.innerText = info;
                tooltip.style.position = "absolute";
                tooltip.style.backgroundColor = "white";
                tooltip.style.border = "1px solid black";
                tooltip.style.padding = "5px";
                tooltip.style.left = event.pageX + "px";
                tooltip.style.top = event.pageY + "px";
                document.body.appendChild(tooltip);
                event.target.tooltip = tooltip;
            };
            const hideInfo = (event)=>{
                document.body.removeChild(event.target.tooltip);
            };
            cell.addEventListener("mouseover", displayInfo);
            cell.addEventListener("mouseout", hideInfo);
            //fin tooltip
            // ouvrir la page de l'oeuvre
            cell.addEventListener("click", ()=>{
                openArtworkPage(artwork);
            });
            row.appendChild(cell);
            count++;
        }
        table.appendChild(row);
    }
    // ajouter le tableau à la page
    document.querySelector(".heatmap-container").appendChild(table);
};

},{"./couleurDominante.js":"8raMS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../datas.js":"bMuUu"}],"8raMS":[function(require,module,exports) {
//import de ColorThief afin de pouvoir extraire la couleur dominante
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDomColor", ()=>getDomColor);
var _colorThiefMjs = require("../../node_modules/colorthief/dist/color-thief.mjs");
var _colorThiefMjsDefault = parcelHelpers.interopDefault(_colorThiefMjs);
const getDomColor = (src)=>{
    const colorThief = new (0, _colorThiefMjsDefault.default)();
    return new Promise(async (resolve, reject)=>{
        const img = await loadImage(src);
        if (img.complete) resolve(colorThief.getColor(img));
    });
};
const loadImage = (path)=>{
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.src = path;
        img.onload = ()=>{
            resolve(img);
        };
        img.onerror = (e)=>{
            console.error(path);
            reject(e);
        };
    });
};

},{"../../node_modules/colorthief/dist/color-thief.mjs":"3BgUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BgUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
if (!t) var t = {
    map: function(t, r) {
        var n = {};
        return r ? t.map(function(t, o) {
            return n.index = o, r.call(n, t);
        }) : t.slice();
    },
    naturalOrder: function(t, r) {
        return t < r ? -1 : t > r ? 1 : 0;
    },
    sum: function(t, r) {
        var n = {};
        return t.reduce(r ? function(t, o, e) {
            return n.index = e, t + r.call(n, o);
        } : function(t, r) {
            return t + r;
        }, 0);
    },
    max: function(r, n) {
        return Math.max.apply(null, n ? t.map(r, n) : r);
    }
};
var r = function() {
    var r = 5, n = 8 - r, o = 1e3;
    function e(t, n, o) {
        return (t << 2 * r) + (n << r) + o;
    }
    function u(t) {
        var r = [], n = !1;
        function o() {
            r.sort(t), n = !0;
        }
        return {
            push: function(t) {
                r.push(t), n = !1;
            },
            peek: function(t) {
                return n || o(), void 0 === t && (t = r.length - 1), r[t];
            },
            pop: function() {
                return n || o(), r.pop();
            },
            size: function() {
                return r.length;
            },
            map: function(t) {
                return r.map(t);
            },
            debug: function() {
                return n || o(), r;
            }
        };
    }
    function a(t, r, n, o, e, u, a) {
        var i1 = this;
        i1.r1 = t, i1.r2 = r, i1.g1 = n, i1.g2 = o, i1.b1 = e, i1.b2 = u, i1.histo = a;
    }
    function i1() {
        this.vboxes = new u(function(r, n) {
            return t.naturalOrder(r.vbox.count() * r.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    function c(r, n) {
        if (n.count()) {
            var o = n.r2 - n.r1 + 1, u = n.g2 - n.g1 + 1, a = t.max([
                o,
                u,
                n.b2 - n.b1 + 1
            ]);
            if (1 == n.count()) return [
                n.copy()
            ];
            var i1, c, f, s, h = 0, v = [], l = [];
            if (a == o) for(i1 = n.r1; i1 <= n.r2; i1++){
                for(s = 0, c = n.g1; c <= n.g2; c++)for(f = n.b1; f <= n.b2; f++)s += r[e(i1, c, f)] || 0;
                v[i1] = h += s;
            }
            else if (a == u) for(i1 = n.g1; i1 <= n.g2; i1++){
                for(s = 0, c = n.r1; c <= n.r2; c++)for(f = n.b1; f <= n.b2; f++)s += r[e(c, i1, f)] || 0;
                v[i1] = h += s;
            }
            else for(i1 = n.b1; i1 <= n.b2; i1++){
                for(s = 0, c = n.r1; c <= n.r2; c++)for(f = n.g1; f <= n.g2; f++)s += r[e(c, f, i1)] || 0;
                v[i1] = h += s;
            }
            return v.forEach(function(t, r) {
                l[r] = h - t;
            }), function(t) {
                var r, o, e, u, a, c = t + "1", f = t + "2", s = 0;
                for(i1 = n[c]; i1 <= n[f]; i1++)if (v[i1] > h / 2) {
                    for(e = n.copy(), u = n.copy(), a = (r = i1 - n[c]) <= (o = n[f] - i1) ? Math.min(n[f] - 1, ~~(i1 + o / 2)) : Math.max(n[c], ~~(i1 - 1 - r / 2)); !v[a];)a++;
                    for(s = l[a]; !s && v[a - 1];)s = l[--a];
                    return e[f] = a, u[c] = e[f] + 1, [
                        e,
                        u
                    ];
                }
            }(a == o ? "r" : a == u ? "g" : "b");
        }
    }
    return a.prototype = {
        volume: function(t) {
            var r = this;
            return r._volume && !t || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1)), r._volume;
        },
        count: function(t) {
            var r = this, n = r.histo;
            if (!r._count_set || t) {
                var o, u, a, i1 = 0;
                for(o = r.r1; o <= r.r2; o++)for(u = r.g1; u <= r.g2; u++)for(a = r.b1; a <= r.b2; a++)i1 += n[e(o, u, a)] || 0;
                r._count = i1, r._count_set = !0;
            }
            return r._count;
        },
        copy: function() {
            var t = this;
            return new a(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo);
        },
        avg: function(t) {
            var n = this, o = n.histo;
            if (!n._avg || t) {
                var u, a, i1, c, f = 0, s = 1 << 8 - r, h = 0, v = 0, l = 0;
                for(a = n.r1; a <= n.r2; a++)for(i1 = n.g1; i1 <= n.g2; i1++)for(c = n.b1; c <= n.b2; c++)f += u = o[e(a, i1, c)] || 0, h += u * (a + .5) * s, v += u * (i1 + .5) * s, l += u * (c + .5) * s;
                n._avg = f ? [
                    ~~(h / f),
                    ~~(v / f),
                    ~~(l / f)
                ] : [
                    ~~(s * (n.r1 + n.r2 + 1) / 2),
                    ~~(s * (n.g1 + n.g2 + 1) / 2),
                    ~~(s * (n.b1 + n.b2 + 1) / 2)
                ];
            }
            return n._avg;
        },
        contains: function(t) {
            var r = this, o = t[0] >> n;
            return gval = t[1] >> n, bval = t[2] >> n, o >= r.r1 && o <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2;
        }
    }, i1.prototype = {
        push: function(t) {
            this.vboxes.push({
                vbox: t,
                color: t.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(t) {
                return t.color;
            });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(t) {
            for(var r = this.vboxes, n = 0; n < r.size(); n++)if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
            return this.nearest(t);
        },
        nearest: function(t) {
            for(var r, n, o, e = this.vboxes, u = 0; u < e.size(); u++)((n = Math.sqrt(Math.pow(t[0] - e.peek(u).color[0], 2) + Math.pow(t[1] - e.peek(u).color[1], 2) + Math.pow(t[2] - e.peek(u).color[2], 2))) < r || void 0 === r) && (r = n, o = e.peek(u).color);
            return o;
        },
        forcebw: function() {
            var r = this.vboxes;
            r.sort(function(r, n) {
                return t.naturalOrder(t.sum(r.color), t.sum(n.color));
            });
            var n = r[0].color;
            n[0] < 5 && n[1] < 5 && n[2] < 5 && (r[0].color = [
                0,
                0,
                0
            ]);
            var o = r.length - 1, e = r[o].color;
            e[0] > 251 && e[1] > 251 && e[2] > 251 && (r[o].color = [
                255,
                255,
                255
            ]);
        }
    }, {
        quantize: function(f, s) {
            if (!f.length || s < 2 || s > 256) return !1;
            var h = function(t) {
                var o, u = new Array(1 << 3 * r);
                return t.forEach(function(t) {
                    o = e(t[0] >> n, t[1] >> n, t[2] >> n), u[o] = (u[o] || 0) + 1;
                }), u;
            }(f);
            h.forEach(function() {});
            var v = function(t, r) {
                var o, e, u, i1 = 1e6, c = 0, f = 1e6, s = 0, h = 1e6, v = 0;
                return t.forEach(function(t) {
                    (o = t[0] >> n) < i1 ? i1 = o : o > c && (c = o), (e = t[1] >> n) < f ? f = e : e > s && (s = e), (u = t[2] >> n) < h ? h = u : u > v && (v = u);
                }), new a(i1, c, f, s, h, v, r);
            }(f, h), l = new u(function(r, n) {
                return t.naturalOrder(r.count(), n.count());
            });
            function g(t, r) {
                for(var n, e = t.size(), u = 0; u < o;){
                    if (e >= r) return;
                    if (u++ > o) return;
                    if ((n = t.pop()).count()) {
                        var a = c(h, n), i1 = a[0], f = a[1];
                        if (!i1) return;
                        t.push(i1), f && (t.push(f), e++);
                    } else t.push(n), u++;
                }
            }
            l.push(v), g(l, .75 * s);
            for(var p = new u(function(r, n) {
                return t.naturalOrder(r.count() * r.volume(), n.count() * n.volume());
            }); l.size();)p.push(l.pop());
            g(p, s);
            for(var b = new i1; p.size();)b.push(p.pop());
            return b;
        }
    };
}().quantize, n = function(t) {
    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = t.naturalWidth, this.height = this.canvas.height = t.naturalHeight, this.context.drawImage(t, 0, 0, this.width, this.height);
};
n.prototype.getImageData = function() {
    return this.context.getImageData(0, 0, this.width, this.height);
};
var o = function() {};
o.prototype.getColor = function(t, r) {
    return void 0 === r && (r = 10), this.getPalette(t, 5, r)[0];
}, o.prototype.getPalette = function(t, o, e) {
    var u = function(t) {
        var r = t.colorCount, n = t.quality;
        if (void 0 !== r && Number.isInteger(r)) {
            if (1 === r) throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
            r = Math.max(r, 2), r = Math.min(r, 20);
        } else r = 10;
        return (void 0 === n || !Number.isInteger(n) || n < 1) && (n = 10), {
            colorCount: r,
            quality: n
        };
    }({
        colorCount: o,
        quality: e
    }), a = new n(t), i1 = function(t, r, n) {
        for(var o, e, u, a, i1, c = t, f = [], s = 0; s < r; s += n)e = c[0 + (o = 4 * s)], u = c[o + 1], a = c[o + 2], (void 0 === (i1 = c[o + 3]) || i1 >= 125) && (e > 250 && u > 250 && a > 250 || f.push([
            e,
            u,
            a
        ]));
        return f;
    }(a.getImageData().data, a.width * a.height, u.quality), c = r(i1, u.colorCount);
    return c ? c.palette() : null;
}, o.prototype.getColorFromUrl = function(t, r, n) {
    var o = this, e = document.createElement("img");
    e.addEventListener("load", function() {
        var u = o.getPalette(e, 5, n);
        r(u[0], t);
    }), e.src = t;
}, o.prototype.getImageData = function(t, r) {
    var n = new XMLHttpRequest;
    n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
        if (200 == this.status) {
            var t = new Uint8Array(this.response);
            i = t.length;
            for(var n = new Array(i), o = 0; o < t.length; o++)n[o] = String.fromCharCode(t[o]);
            var e = n.join(""), u = window.btoa(e);
            r("data:image/png;base64," + u);
        }
    }, n.send();
}, o.prototype.getColorAsync = function(t, r, n) {
    var o = this;
    this.getImageData(t, function(t) {
        var e = document.createElement("img");
        e.addEventListener("load", function() {
            var t = o.getPalette(e, 5, n);
            r(t[0], this);
        }), e.src = t;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bMuUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arts", ()=>arts);
const arts = {
    bernmuseum: [
        {
            artiste: "Alice Marie Louise Bailly (1872–1938)",
            titre: "Jeune musicien (Hans Jegerlehner)",
            date: "1926",
            dimensions: {
                hauteur: "34",
                longueur: "65",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1926",
            image: "/assets/images/bernmuseum/fK77.jpg",
            provenance: {
                nom: "Alice Bailly",
                pays: "Lausanne",
                annee: "1926",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK77",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5457",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Ferdinand Hodler (1853–1918)",
            titre: "Le b\xfbcheron",
            date: "1910",
            dimensions: {
                hauteur: "262",
                longueur: "212",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1910",
            image: "/assets/images/bernmuseum/fK1179_KF100-3793.jpg",
            provenance: {
                nom: "Ferdinand Hodler",
                pays: "Genf",
                annee: "1910",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK1179",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9569",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Morgenthaler, Ernst (1887–1962)",
            titre: "Vue depuis la fen\xeatre",
            date: "1949",
            dimensions: {
                hauteur: "100",
                longueur: "80",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1950",
            image: "/assets/images/bernmuseum/fK1759.jpg",
            provenance: {
                nom: "Ernst Morgenthaler",
                pays: "Z\xfcrich",
                annee: "1949–1950",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK1759",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7775",
            licence: "CC BY-NC-ND 3.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern, Bern"
        },
        {
            artiste: "Karl Stauffer-Bern (1857–1891)",
            titre: "Portrait d'un homme \xe0 la barbe rouge\xe2tre",
            date: "1880",
            dimensions: {
                hauteur: "44",
                longueur: "36.2",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1892",
            image: "/assets/images/bernmuseum/GKS7.jpg",
            provenance: {
                nom: "Nachlass Stauffer-Bern",
                pays: "Biel",
                annee: "1891–1892",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS7",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6435",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Karl Stauffer-Bern (1857–1891)",
            titre: "\xc9tude sur cr\xe2ne",
            date: "1880-1881",
            dimensions: {
                hauteur: "29",
                longueur: "40",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1892",
            image: "/assets/images/bernmuseum/GKS19.jpg",
            provenance: {
                nom: "Nachlass Stauffer-Bern",
                pays: "Biel",
                annee: "1891–1892",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS19",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6436",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Durheim, Johann Ludwig Rudolf (1811–1895)",
            titre: "Femmes sur le rivage du Nil pr\xe8s de Gizeh",
            date: "1849",
            dimensions: {
                hauteur: "23.7",
                longueur: "37.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1895",
            image: "/assets/images/bernmuseum/GKS129.jpg",
            provenance: {
                nom: "Nachlass Durheim",
                pays: "Bern",
                annee: "1895",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS129",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6442",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Boltraffio, Giovanni Antonio (1467–1516)",
            titre: "Portrait d'un jeune homme",
            date: "vers 1500",
            dimensions: {
                hauteur: "49.3",
                longueur: "40.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1897",
            image: "/assets/images/bernmuseum/GKS183.jpg",
            provenance: {
                nom: "Eduard von Ernst-Marcuard",
                pays: "Berna",
                annee: "?–1892–1897",
                pour: "Confederazione svizzera"
            },
            numeroinventaire: "GKS183",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6449",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Vig\xe9e-Le Brun, Elisabeth (1755–1842)",
            titre: "F\xeate d\xb4Unspunnen",
            date: "1808-1809",
            dimensions: {
                hauteur: "84",
                longueur: "114",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1910",
            image: "/assets/images/bernmuseum/GKS483.jpg",
            provenance: {
                nom: "Dr. Theodor Engelmann",
                pays: "B\xe2le",
                annee: "?–1910",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS483",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5565",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Max Alfred Buri (1868–1915)",
            titre: "Portrait de la fille Hedwig",
            date: "1913",
            dimensions: {
                hauteur: "110",
                longueur: "81",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1917",
            image: "/assets/images/bernmuseum/GKS528.jpg",
            provenance: {
                nom: "Frida Buri-Schenk",
                pays: "Brienz",
                annee: "1915–1917",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS528",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5575",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Max Alfred Buri (1868–1915)",
            titre: "Autoportrait",
            date: "1897",
            dimensions: {
                hauteur: "42",
                longueur: "42",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1919",
            image: "/assets/images/bernmuseum/GKS551.jpg",
            provenance: {
                nom: "Nachlass Max Buri",
                pays: "M\xfcnchen, DE",
                annee: "1915–1919",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS551",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6657",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Ferdinand Hodler (1853–1918)",
            titre: "L'Elu",
            date: "1893-1894",
            dimensions: {
                hauteur: "219",
                longueur: "296",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1920",
            image: "/assets/images/bernmuseum/GKS590.jpg",
            provenance: {
                nom: "Berthe Hodler-Jacques",
                pays: "Genf",
                annee: "1920",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS590",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5580",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Calame, Alexandre (1810–1864)",
            titre: "Le grand Eiger, soleil levant",
            date: "1844",
            dimensions: {
                hauteur: "106.2",
                longueur: "139.9",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1921",
            image: "/assets/images/bernmuseum/GKS595.jpg",
            provenance: {
                nom: " Frank Puaux",
                pays: "Paris",
                annee: "?–1921",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS595",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5582",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Breslau, Louise Catherine (1856–1927)",
            titre: "Le th\xe9 de cinq heure",
            date: "1883",
            dimensions: {
                hauteur: "150.5",
                longueur: "151.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1925",
            image: "/assets/images/bernmuseum/GKS653.jpg",
            provenance: {
                nom: "Louise Catherine Breslau",
                pays: "Neuilly sur-Seine, FR",
                annee: "1883–1925",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS653",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6665",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Auguste Baud-Bovy (1848–1899)",
            titre: "Portrait du peintre Albert Gos",
            date: "1879",
            dimensions: {
                hauteur: "113.7",
                longueur: "85.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1930",
            image: "/assets/images/bernmuseum/GKS726.jpg",
            provenance: {
                nom: "Exposition de m\xe9moire Auguste Baud-Bovy",
                pays: "Kunsthaus Zurich",
                annee: "20.2.–19.3.1930",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS726",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6673",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Inconnu / Unbekannt / Ignoto",
            titre: "Autel des tr\xe9pass\xe9s",
            date: "1505",
            dimensions: {
                hauteur: "149",
                longueur: "62",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "",
            image: "/assets/images/bernmuseum/GKS810_Werktag.jpg",
            provenance: {
                nom: "Th\xe9odora de Saussure/de la Rive",
                pays: "Genthod/GE",
                annee: "1882–1935",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS810/1-2",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9649",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern, Bern"
        },
        {
            artiste: "Niklaus (Niclaus) (I.) Manuel, genannt Deutsch (1484–1530)",
            titre: "Saint Antoine tent\xe9 par la femme",
            date: "1518 - 1520",
            dimensions: {
                hauteur: "101",
                longueur: "126",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1936",
            image: "/assets/images/bernmuseum/GKS855_GKS200-112.jpg",
            provenance: {
                nom: "Comtesse Hedwige Rey (geb. Branicki)",
                pays: "Indre-et-Loire, FR",
                annee: "?–1936",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS855",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9640",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Manuel, genannt Deutsch, Niklaus (Niclaus) (I.) (1484–1530)",
            titre: "Saint Antoine soigne les malades et les poss\xe9d\xe9s",
            date: "1518-1520",
            dimensions: {
                hauteur: "101",
                longueur: "126",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1936",
            image: "/assets/images/bernmuseum/GKS856.jpg",
            provenance: {
                nom: "Comtesse Hedwige Rey (geb. Branicki)",
                pays: "Indre-et-Loire, FR",
                annee: "?–1936",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS856",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6684",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Inconnu / Unbekannt / Ignoto",
            titre: "Saint B\xe9at avec le dragon",
            date: "vers 1520",
            dimensions: {
                hauteur: "136",
                longueur: "75",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1937",
            image: "/assets/images/bernmuseum/GKS865_GKS200-1889_Vorderseite.JPG",
            provenance: {
                nom: "Galerie Otto Schatzker",
                pays: "Wien",
                annee: "?−1937",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS865",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8828",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern, Bern"
        },
        {
            artiste: "Anker, Albert (1831–1910)",
            titre: "La cr\xeache en promenade sur le pont de Kirchenfeld \xe0 Berne",
            date: "1900",
            dimensions: {
                hauteur: "76",
                longueur: "127",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1944",
            image: "/assets/images/bernmuseum/GKS915.jpg",
            provenance: {
                nom: "Dr. Fritz Nathan",
                pays: "St. Gallen",
                annee: "?–1944",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS915",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5619",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Barth\xe9lemy Menn (1815–1893)",
            titre: "Jeune fille au bord d'un lac",
            date: "avant 1893",
            dimensions: {
                hauteur: "30.4",
                longueur: "43.2",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1947",
            image: "/assets/images/bernmuseum/GKS937_Vorderseite_G1638.jpg",
            provenance: {
                nom: "Oskar Reinhart",
                pays: "Winterthour",
                annee: "?–1947",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS937",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9643",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Joseph Plepp (1595–1642)",
            titre: "Nature morte avec Salade, cerises, fromage et verre de vin",
            date: "1632",
            dimensions: {
                hauteur: "37",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1948",
            image: "/assets/images/bernmuseum/GKS941_GKS200-120.jpg",
            provenance: {
                nom: "Galerie Theodor Fischer",
                pays: "Luzern",
                annee: "1948",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS941",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9644",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Joseph Plepp (1595–1642)",
            titre: "Nature morte avec cerises et framboises",
            date: "1615 - 1642",
            dimensions: {
                hauteur: "32.5",
                longueur: "55.8",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1953",
            image: "/assets/images/bernmuseum/GKS985_Vorderseite_G1766.jpg",
            provenance: {
                nom: "Adine Ganzoni",
                pays: "Genf",
                annee: "?–1953",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS985",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9671",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Joseph Heintz der \xc4ltere (1564–1609)",
            titre: "Portrait d'Albrecht Fugger von Kirchberg und Weissenhorn",
            date: "1598",
            dimensions: {
                hauteur: "87",
                longueur: "69",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1955",
            image: "/assets/images/bernmuseum/GKS998_Vorderseite_G1816.jpg",
            provenance: {
                nom: "The Arcade Gallery Ltd.",
                pays: "London",
                annee: "1955",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS998",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9680",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Joseph Heintz der \xc4ltere (1564–1609)",
            titre: "Portrait de Veronika Fugger",
            date: "1598",
            dimensions: {
                hauteur: "87",
                longueur: "70",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1955",
            image: "/assets/images/bernmuseum/GKS999_GKS200-127.jpg",
            provenance: {
                nom: "The Arcade Gallery Ltd.",
                pays: "London",
                annee: "1955",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS999",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8915",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Wolfgang Adam T\xf6pffer (1766–1847)",
            titre: "Paysage et sc\xe8ne de genre devant le Mont-Blanc depuis le moulin de la Fayet",
            date: "1815",
            dimensions: {
                hauteur: "87.5",
                longueur: "69",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1964s",
            image: "/assets/images/bernmuseum/GKS1054_GKS200-137.jpg",
            provenance: {
                nom: "Dr. Fritz Nathan",
                pays: "Zurich",
                annee: "1964",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1054",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8997",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Cuno Amiet (1868–1961)",
            titre: "Le peintre en plein air",
            date: "1916",
            dimensions: {
                hauteur: "48",
                longueur: "42",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1967",
            image: "/assets/images/bernmuseum/GKS1066-57_Vorderseite_A 9462.jpg",
            provenance: {
                nom: "Dr. Marguerite Schuler",
                pays: "Muri/BE",
                annee: "1967",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1066/57",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9687",
            licence: "All rights reserved",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Anker, Albert (1831–1910)",
            titre: "Bi\xe8re et radis",
            date: "1898",
            dimensions: {
                hauteur: "32.8",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1961",
            image: "/assets/images/bernmuseum/GKS1098.jpg",
            provenance: {
                nom: "Marie-Charlotte Quinche",
                pays: "Neuenburg",
                annee: "?–1961",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1098",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5677",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Otto Friedrich Meyer-Amden (1885–1933)",
            titre: "Ange \xe0 t\xeate inclin\xe9e",
            date: "1908-1912",
            dimensions: {
                hauteur: "24",
                longueur: "16",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1975",
            image: "/assets/images/bernmuseum/GKS1107.jpg",
            provenance: {
                nom: "Galerie Kurt Meissner",
                pays: "Z\xfcrich",
                annee: "1955–1975",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1107",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8132",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Otto Friedrich Meyer-Amden (1885–1933)",
            titre: "Jeune fille assise dans une robe d'\xe9t\xe9 blanche",
            date: "1900 - 1933",
            dimensions: {
                hauteur: "24",
                longueur: "16",
                profondeur: ""
            },
            objet: "Dessin",
            anneeacquisition: "1975",
            image: "/assets/images/bernmuseum/GKS1109_Vorderseite_A9148.jpg",
            provenance: {
                nom: "Galerie Kurt Meissner",
                pays: "Z\xfcrich",
                annee: "1955–1975",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1109",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9702",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Otto Friedrich Meyer-Amden (1885–1933)",
            titre: "Putti d'apr\xe8s Rapha\xebl, Miniature",
            date: "avant 1906",
            dimensions: {
                hauteur: "3",
                longueur: "5.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1976",
            image: "/assets/images/bernmuseum/GKS1119-3_Vorderseite_A9197.jpg",
            provenance: {
                nom: "Galerie Feilchenfeldt",
                pays: "Z\xfcrich",
                annee: "?–1976",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1119/3",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9707",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Louis Ren\xe9 Moilliet (1880–1962)",
            titre: "Portrait de C\xe9cile",
            date: "1913",
            dimensions: {
                hauteur: "46",
                longueur: "38",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1986",
            image: "/assets/images/bernmuseum/GKS1176_GKS200-156.jpg",
            provenance: {
                nom: "Claire (Kay) Oederlin",
                pays: "La Tour-de-Peilz/VD",
                annee: "1962–1986",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1176",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9646",
            licence: "All rights reserved",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Albert Anker (1831–1910)",
            titre: "Jeune fille tricotant",
            date: "1890 - 1910",
            dimensions: {
                hauteur: "32.7",
                longueur: "25.3",
                profondeur: ""
            },
            objet: "Dessin",
            anneeacquisition: "1989",
            image: "/assets/images/bernmuseum/GKS1213_Vorderseite_A1989.282.jpg",
            provenance: {
                nom: "Joseph Georges und Margot Bloch",
                pays: "Z\xfcrich",
                annee: "?–1989",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1213",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9647",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Karl Stauffer-Bern (1857–1891)",
            titre: "Portrait du constructeur Oscar Titz",
            date: "1883",
            dimensions: {
                hauteur: "126.5",
                longueur: "90.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1991",
            image: "/assets/images/bernmuseum/GKS1225_GKS200-218_ungerahmt.jpg",
            provenance: {
                nom: "Robert Cavegn",
                pays: "Felsburg, DE",
                annee: "1989–1991",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1225",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9260",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Joseph Werner d. J. (1637–1710)",
            titre: "Ulysse d\xe9masque Achille d\xe9guis\xe9 en jeune femme, dans le palais du roi Lycom\xe8de",
            date: "1678",
            dimensions: {
                hauteur: "75",
                longueur: "61",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1992",
            image: "/assets/images/bernmuseum/GKS1232_GKS200-713.jpg",
            provenance: {
                nom: "Galerie R\xf6mer",
                pays: "Z\xfcrich",
                annee: "1991–1992",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1232",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9264",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Karl Durheim (1810–1890)",
            titre: "Portrait de Albert Anker avec Friedrich Fetscherin (\xe0 gauche) et August L\xf6rtscher (\xe0 droite), deux amis de T\xfcbingen",
            date: "1853",
            dimensions: {
                hauteur: "10.8",
                longueur: "16.2",
                profondeur: ""
            },
            objet: "Photographie",
            anneeacquisition: "2000",
            image: "/assets/images/bernmuseum/GKS1279_GKS200-1773.jpg",
            provenance: {
                nom: "Peter Herzog",
                pays: "Basel",
                annee: "?–2000",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1279",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/930",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        },
        {
            artiste: "Giovanni Ulrico Giacometti (1868–1933)",
            titre: "Enfants au soleil",
            date: "1910",
            dimensions: {
                hauteur: "91.3",
                longueur: "100",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "2000",
            image: "/assets/images/bernmuseum/GKS1282_GKS200-714.jpg",
            provenance: {
                nom: "Christie's",
                pays: "Zurigo",
                annee: "2000",
                pour: "Confederazione Svizzera"
            },
            numeroinventaire: "GKS1282",
            emplacement: "Kunstmuseum Bern",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9304",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Bern"
        }
    ],
    baselmuseum: [
        {
            artiste: "Hans Berger (1882–1977)",
            titre: "La Bachette",
            date: "1934",
            dimensions: {
                hauteur: "130",
                longueur: "170",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1934",
            image: "/assets/images/baselmuseum/fk191_KF200-11086_ungerahmt.JPG",
            provenance: {
                nom: "Hans Berger",
                pays: "Genf",
                annee: "1934",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK191",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9557",
            licence: "All rights reserved",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Giacometti, Giovanni Ulrico (1868–1933)",
            titre: "Paysage d'automne",
            date: "1927",
            dimensions: {
                hauteur: "101",
                longueur: "105.3",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1928",
            image: "/assets/images/baselmuseum/fK930.jpg",
            provenance: {
                nom: "Giovanni Ulrico Giacometti",
                pays: "Stampa/GR",
                annee: "1927–1928",
                pour: "Confederazione svizzera"
            },
            numeroinventaire: "fK930",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7014",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Martin, Eug\xe8ne Louis",
            titre: "Le viaduc",
            date: "1937",
            dimensions: {
                hauteur: "60",
                longueur: "73",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1938",
            image: "/assets/images/baselmuseum/fK1572.jpg",
            provenance: {
                nom: "Eug\xe8ne Martin",
                pays: "Gen\xe8ve",
                annee: "1937–1938",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK1572",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5879",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Meyer-Amden, Otto Friedrich",
            titre: "Paysage d'\xe9toiles, cha\xeene de montagne",
            date: "1931",
            dimensions: {
                hauteur: "100.5",
                longueur: "101",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1933",
            image: "/assets/images/baselmuseum/fK1707.jpg",
            provenance: {
                nom: "Otto Meyer-Amden",
                pays: "Z\xfcrich",
                annee: "1931–1933",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK1707",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5891",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Meyer-Amden, Otto Friedrich",
            titre: "Lac de Walenstadt de nuit",
            date: "1931",
            dimensions: {
                hauteur: "100",
                longueur: "125",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1933",
            image: "/assets/images/baselmuseum/fK1708.jpg",
            provenance: {
                nom: "Otto Meyer-Amden",
                pays: "Z\xfcrich",
                annee: "1931–1933",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK1708",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5892",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Karl Stauffer-Bern",
            titre: "Portrait de Gustav Freytag",
            date: "1886",
            dimensions: {
                hauteur: "41.5",
                longueur: "31",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1896",
            image: "/assets/images/baselmuseum/fK2353.jpg",
            provenance: {
                nom: "Karl Stauffer-Bern",
                pays: "Berlin",
                annee: "1886–1891",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK2353",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5965",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Feuerbach, Anselm",
            titre: "La mort de Pierre l'Ar\xe9tin",
            date: "1854",
            dimensions: {
                hauteur: "267.5",
                longueur: "176.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1895",
            image: "/assets/images/baselmuseum/GKS118.jpg",
            provenance: {
                nom: "Anselm Feuerbach",
                pays: "M\xfcnchen",
                annee: "1854",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS118",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7483",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Cuyp, Aelbert Jacobsz",
            titre: "Officier avec cheval",
            date: "1640",
            dimensions: {
                hauteur: "36",
                longueur: "48",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1896",
            image: "/assets/images/baselmuseum/GKS165.jpg",
            provenance: {
                nom: "Aelbert Jacobsz, Cuyp",
                pays: "Dordrecht, NL",
                annee: "1640",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS165",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7484",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Salzburger, Meister",
            titre: "La crucifixion du Christ",
            date: "1470",
            dimensions: {
                hauteur: "215.5",
                longueur: "89.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1896",
            image: "/assets/images/baselmuseum/GKS181.jpg",
            provenance: {
                nom: "Unbekannter Meister, Salzburg",
                pays: "Basel",
                annee: "1896",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS181",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6448",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Holbein, Ambrosius",
            titre: "Portrait de Hans Herbst (Herbster)",
            date: "1516",
            dimensions: {
                hauteur: "39.5",
                longueur: "26.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1899",
            image: "/assets/images/baselmuseum/GKS208.jpg",
            provenance: {
                nom: "Ambrosius Holbein",
                pays: "Basel",
                annee: "1516",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS208",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5546",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Oberrheinische Schule",
            titre: "12 sc\xe8nes de la Passion du Christ",
            date: "1425-1450",
            dimensions: {
                hauteur: "111.8",
                longueur: "128",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1899",
            image: "/assets/images/baselmuseum/GKS211.jpg",
            provenance: {
                nom: "Oberrheinische Schule",
                pays: "DE",
                annee: "1425–1450",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS211",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6452",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Monogrammist H F",
            titre: "Portrait d'un jeune homme",
            date: "1524",
            dimensions: {
                hauteur: "49.5",
                longueur: "38",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1900",
            image: "/assets/images/baselmuseum/GKS227.jpg",
            provenance: {
                nom: "Monogrammist H F",
                pays: "Basel",
                annee: "1524",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS227",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5550",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Holbein, Ambrosius",
            titre: "Portrait id\xe9alis\xe9 de l'empereur Justinien",
            date: "1514-1515",
            dimensions: {
                hauteur: "69.5",
                longueur: "68",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1900",
            image: "/assets/images/baselmuseum/GKS228.jpg",
            provenance: {
                nom: "Ambrosius Holbein",
                pays: "Basel",
                annee: "1514/1515",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS228",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5551",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Troy de, Jean Fran\xe7ois",
            titre: "Diane et Act\xe9on",
            date: "1734",
            dimensions: {
                hauteur: "131.5",
                longueur: "196.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1900",
            image: "/assets/images/baselmuseum/GKS230.jpg",
            provenance: {
                nom: "Jean-Fran\xe7ois de Troy",
                pays: "Paris, FR",
                annee: "1734",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS230",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5552",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "Portrait de Jakob M\xe4hly comme \xe9tudiant",
            date: "1848",
            dimensions: {
                hauteur: "32.5",
                longueur: "24.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1901",
            image: "/assets/images/baselmuseum/GKS281.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Basel",
                annee: "1848",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS281",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7485",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "T\xeate d'un Romain",
            date: "1863",
            dimensions: {
                hauteur: "46.5",
                longueur: "36.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1901",
            image: "/assets/images/baselmuseum/GKS282.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Florenz",
                annee: "1863",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS282",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7486",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "La peste",
            date: "1897-1898",
            dimensions: {
                hauteur: "30.9",
                longueur: "22.5",
                profondeur: ""
            },
            objet: "Dessin",
            anneeacquisition: "1901",
            image: "/assets/images/baselmuseum/GKS284.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "San Domenico, IT ",
                annee: "1898–1901",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS284",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6455",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Sandreuter Hans",
            titre: "For\xeat de ch\xe2taigniers \xe0 Bignasco",
            date: "1896",
            dimensions: {
                hauteur: "96",
                longueur: "147.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1902",
            image: "/assets/images/baselmuseum/GKS322.jpg",
            provenance: {
                nom: "Hans Sandreuter",
                pays: "Basel",
                annee: "1896–1901",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS322",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6459",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "Une groupe d'arbres au bord de la rivi\xe8re",
            date: "1851",
            dimensions: {
                hauteur: "15.7",
                longueur: "20.9",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1902",
            image: "/assets/images/baselmuseum/GKS331.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Basel",
                annee: "1851",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS331",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6462",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Kick Simon",
            titre: "Officier et soldats dans des quartiers inconnus",
            date: "1645-1650",
            dimensions: {
                hauteur: "72",
                longueur: "71",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1902",
            image: "/assets/images/baselmuseum/GKS335.jpg",
            provenance: {
                nom: "Simon Kick",
                pays: "Amsterdam",
                annee: "1645/1650",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS335",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8063",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Hess Hieronymus",
            titre: "L'assassinat du roi Albrecht",
            date: "1829",
            dimensions: {
                hauteur: "44",
                longueur: "44",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1903",
            image: "/assets/images/baselmuseum/GKS342.jpg",
            provenance: {
                nom: "Hieronymus Hess",
                pays: "Basel",
                annee: "1829",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS342",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6464",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Giovanni Segantini",
            titre: "\xc0 l'abreuvoir (vaches au joug)",
            date: "1888",
            dimensions: {
                hauteur: "84.1",
                longueur: "141.2",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1904",
            image: "/assets/images/baselmuseum/GKS344.jpg",
            provenance: {
                nom: "Giovanni Segantini",
                pays: "Savognin",
                annee: "1888",
                pour: "Confederazione svizzera"
            },
            numeroinventaire: "GKS344",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5560",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Kunstmuseum Basel"
        },
        {
            artiste: "Flinck Govaert",
            titre: "Golgatha",
            date: "1649",
            dimensions: {
                hauteur: "119",
                longueur: "90",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1904",
            image: "/assets/images/baselmuseum/GKS347.jpg",
            provenance: {
                nom: "Govaert Flinck",
                pays: "Amsterdam",
                annee: "1649",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS347",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6465",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Baldung Hans",
            titre: "La Sainte Anne trinitaire",
            date: "1512-1513",
            dimensions: {
                hauteur: "70",
                longueur: "48.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1909",
            image: "/assets/images/baselmuseum/GKS477.jpg",
            provenance: {
                nom: "Hans Baldung",
                pays: "Freiburg",
                annee: "1512/13",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS477",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6474",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Basler Schule",
            titre: "Volet d'autel gauche, \xe0 l'int\xe9rieur: Saint Antoine",
            date: "1500-1599",
            dimensions: {
                hauteur: "131.5",
                longueur: "48.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1910",
            image: "/assets/images/baselmuseum/GKS491.jpg",
            provenance: {
                nom: "Basler Schule",
                pays: "Kirchgemeinde B\xfcsserach",
                annee: "1910",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS491",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6650",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Basler Schule",
            titre: "Volet d'autel droit, \xe0 l'int\xe9rieur: saint Christophe",
            date: "1500-1599",
            dimensions: {
                hauteur: "131.5",
                longueur: "49",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1910",
            image: "/assets/images/baselmuseum/GKS492.jpg",
            provenance: {
                nom: "Basler Schule",
                pays: "Kirchgemeinde B\xfcsserach",
                annee: "1910",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS492",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6651",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "Le printemps",
            date: "1862",
            dimensions: {
                hauteur: "33.5",
                longueur: "57",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1917",
            image: "/assets/images/baselmuseum/GKS525.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Basel",
                annee: "1862",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS525",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5574",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "Autoportrait",
            date: "1861",
            dimensions: {
                hauteur: "39.5",
                longueur: "31",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1917",
            image: "/assets/images/baselmuseum/GKS526_GKS200-1102.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Weimar",
                annee: "1861–1901",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS526",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9636",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Martin P. B\xfchler"
        },
        {
            artiste: "Hess Hieronymus",
            titre: "Donner \xe0 manger aux affam\xe9s – Donner \xe0 boire \xe0 ceux qui ont soif. Sainte \xc9lisabeth de Hongrie",
            date: "1846",
            dimensions: {
                hauteur: "53",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1919",
            image: "/assets/images/baselmuseum/GKS579-1.jpg",
            provenance: {
                nom: "Hieronymus Hess",
                pays: "Basel",
                annee: "1846",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS579/1",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7494",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Basel"
        },
        {
            artiste: "Hess Hieronymus",
            titre: "Accueillir les p\xe8lerins. Jean de Leyde abrite Albrecht D\xfcrer",
            date: "1846",
            dimensions: {
                hauteur: "53",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1919",
            image: "/assets/images/baselmuseum/GKS579-2.jpg",
            provenance: {
                nom: "Hieronymus Hess",
                pays: "Basel",
                annee: "1846",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS579/2",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7495",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Basel"
        },
        {
            artiste: "Hess Hieronymus",
            titre: "V\xeatir ceux qui sont nus. Saint Martin partage son manteau avec un mendiant",
            date: "1846",
            dimensions: {
                hauteur: "53",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1919",
            image: "/assets/images/baselmuseum/GKS579-3.jpg",
            provenance: {
                nom: "Hieronymus Hess",
                pays: "Basel",
                annee: "1846",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS579/3",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7496",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Basel"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "L'\xcele des morts (premi\xe8re version)",
            date: "1880",
            dimensions: {
                hauteur: "111",
                longueur: "155",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1920",
            image: "/assets/images/baselmuseum/GKS588.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Florenz",
                annee: "1880",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS588",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5579",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Schule Konrad Witz",
            titre: "Volet d'autel (\xe0 l'int\xe9rieur): Nativity",
            date: "1445-1450",
            dimensions: {
                hauteur: "136",
                longueur: "165",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1927",
            image: "/assets/images/baselmuseum/GKS671-1.jpg",
            provenance: {
                nom: "Schule Konrad Witz",
                pays: "St. Gallen",
                annee: "1445/1450",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS671/1",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6669",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Schule Konrad Witz",
            titre: "Volet d'autel (face externe): L'incr\xe9dulit\xe9 de saint Thomas et le Christ et la Vierge interc\xe9dant aupr\xe8s de Dieu le P\xe8re",
            date: "1445-1450",
            dimensions: {
                hauteur: "136",
                longueur: "165",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1927",
            image: "/assets/images/baselmuseum/GKS671-2.jpg",
            provenance: {
                nom: "Schule Konrad Witz",
                pays: "St. Gallen",
                annee: "1445/1450",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS671/2",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6670",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Witz Konrad",
            titre: "L'ange de l'annonciation",
            date: "1435",
            dimensions: {
                hauteur: "86.5",
                longueur: "69",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1929",
            image: "/assets/images/baselmuseum/GKS713.jpg",
            provenance: {
                nom: "Konrad Witz",
                pays: "Basel",
                annee: "1435",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS713",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6671",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Arnold B\xf6cklin",
            titre: "Les disciples d'Emma\xfcs",
            date: "1868",
            dimensions: {
                hauteur: "230.5",
                longueur: "301.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1943",
            image: "/assets/images/baselmuseum/GKS911.jpg",
            provenance: {
                nom: "Arnold B\xf6cklin",
                pays: "Basel",
                annee: "1868",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS911",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6691",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Ferdinand Hodler",
            titre: "Portrait de Madame Maria Rosa Krebs-Sch\xfcpbach",
            date: "1876",
            dimensions: {
                hauteur: "169.5",
                longueur: "92",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1950",
            image: "/assets/images/baselmuseum/GKS954.jpg",
            provenance: {
                nom: "Ferdinand Hodler",
                pays: "Genf",
                annee: "1876",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS954",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7505",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Urs Graf der \xc4ltere",
            titre: "Lansquenet avec banni\xe8re",
            date: "1527",
            dimensions: {
                hauteur: "20.4",
                longueur: "11.3",
                profondeur: ""
            },
            objet: "Gravure",
            anneeacquisition: "1951",
            image: "/assets/images/baselmuseum/GKS960_GKS200-122.jpg",
            provenance: {
                nom: "Urs Graf",
                pays: "Solothurn",
                annee: "1527",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS960",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8903",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Basel"
        },
        {
            artiste: "Ferdinand Hodler",
            titre: "La pension",
            date: "1879",
            dimensions: {
                hauteur: "38",
                longueur: "46",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1952",
            image: "/assets/images/baselmuseum/GKS978.jpg",
            provenance: {
                nom: "Ferdinand Hodler",
                pays: "Genf",
                annee: "1879",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS978",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7507",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Martin P. B\xfchler, Basel"
        },
        {
            artiste: "Ernst St\xfcckelberg",
            titre: "Portrait de Marie Elisabeth Br\xfcstlein",
            date: "1866",
            dimensions: {
                hauteur: "100.5",
                longueur: "78.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1954",
            image: "/assets/images/baselmuseum/GKS997.jpg",
            provenance: {
                nom: "Ernst St\xfcckelberger",
                pays: "Basel",
                annee: "1866–1903",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS997",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6702",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Marius Etienne Fran\xe7ois Borgeaud",
            titre: "Mariage breton (Mairie de Rochefort-en-Terre)",
            date: "1913",
            dimensions: {
                hauteur: "60.5",
                longueur: "73",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1956",
            image: "/assets/images/baselmuseum/GKS1007_GKS200-1069.jpg",
            provenance: {
                nom: "Marius Etienne Fran\xe7ois Borgeaud",
                pays: "Lausanne",
                annee: "1913–1924",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1007",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8941",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Martin P. B\xfchler"
        },
        {
            artiste: "Otto Friedrich Meyer-Amden",
            titre: "Vaccination",
            date: "1919",
            dimensions: {
                hauteur: "26",
                longueur: "21",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1963",
            image: "/assets/images/baselmuseum/GKS1050_GKS200-1070.jpg",
            provenance: {
                nom: "Otto Friedrich Meyer-Amden",
                pays: "Bern",
                annee: "1919–1921",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1050",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8995",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Pablo Picasso",
            titre: "Sur la plage II",
            date: "1921",
            dimensions: {
                hauteur: "25.6",
                longueur: "31.4",
                profondeur: ""
            },
            objet: "Gravure",
            anneeacquisition: "1972",
            image: "/assets/images/baselmuseum/GKS1093_13_GKS200-1963_Vorderseite.jpg",
            provenance: {
                nom: "Pablo Picasso",
                pays: "Paris",
                annee: "1921",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1093/13",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9130",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Jonas H\xe4nggi"
        },
        {
            artiste: "Alberto Giacometti",
            titre: "Les Pieds dans le plat",
            date: "1933",
            dimensions: {
                hauteur: "13",
                longueur: "9.6",
                profondeur: ""
            },
            objet: "Dessin",
            anneeacquisition: "1975",
            image: "/assets/images/baselmuseum/GKS1111_GKS200-1114_the best.jpg",
            provenance: {
                nom: "Alberto Giacometti",
                pays: "Paris",
                annee: "1933",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1111",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9209",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Martin P. B\xfchler"
        },
        {
            artiste: "Frank Buchser",
            titre: "Jeune femme en kimono rouge",
            date: "1870 - 1889",
            dimensions: {
                hauteur: "91",
                longueur: "70",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1984",
            image: "/assets/images/baselmuseum/GKS1162_GKS200-1074.jpg",
            provenance: {
                nom: "Frank Buchser",
                pays: "Solothurn",
                annee: "1870/1889",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1162",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9241",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Martin P. B\xfchler"
        },
        {
            artiste: "Johann Jakob Frey",
            titre: "Montagnes dans la campagne romaine",
            date: "1836-1838",
            dimensions: {
                hauteur: "24",
                longueur: "34",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1986",
            image: "/assets/images/baselmuseum/GKS1170.jpg",
            provenance: {
                nom: "Johann Jakob Frey",
                pays: "Rom",
                annee: "1836/38–1865",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1170",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7521",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Kunstmuseum Basel, Martin P. B\xfchler"
        },
        {
            artiste: "Johann Jakob Frey",
            titre: "Les temples de Paestum sous la pluie",
            date: "1839-1842",
            dimensions: {
                hauteur: "13",
                longueur: "24",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1986",
            image: "/assets/images/baselmuseum/GKS1171.jpg",
            provenance: {
                nom: "Johann Jakob Frey",
                pays: "Rom",
                annee: "1839/42–1865",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1171",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6734",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Johann Jakob Frey",
            titre: "Ciel orageux sur la campagne romaine",
            date: "1850",
            dimensions: {
                hauteur: "21",
                longueur: "28.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1986",
            image: "/assets/images/baselmuseum/GKS1172.jpg",
            provenance: {
                nom: "Johann Jakob Frey",
                pays: "Rom",
                annee: "1850–1865",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1172",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/6735",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Adrian Zingg",
            titre: "Album Amicorum",
            date: "1757 - 1790",
            dimensions: {
                hauteur: "12.4",
                longueur: "19.5",
                profondeur: "2.7"
            },
            objet: "Dessin",
            anneeacquisition: "2003",
            image: "/assets/images/baselmuseum/GKS1289_GKS200-1081.jpg",
            provenance: {
                nom: "Adrian Zingg",
                pays: "Bern",
                annee: "1757/1790–1816",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "GKS1289",
            emplacement: "Kunstmuseum Basel",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9319",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        }
    ],
    lausannemuseum: [
        {
            artiste: "Charles-Louis-Eug\xe8ne Burnand",
            titre: "La fuite de Charles le T\xe9m\xe9raire",
            date: "1894 - 1895",
            dimensions: {
                hauteur: "320",
                longueur: "540",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1896",
            image: "/assets/images/lausannemuseum/fk460_Vorderseite.jpg",
            provenance: {
                nom: "Charles-Louis-Eug\xe8ne Burnand",
                pays: "Paris",
                annee: "1894/1895–1896",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK460",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9565",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "H\xe9bert Juliette Charlotte",
            titre: "Portrait de Juste Olivier",
            date: "1885",
            dimensions: {
                hauteur: "10",
                longueur: "6.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1896",
            image: "/assets/images/lausannemuseum/fK1129.jpg",
            provenance: {
                nom: "Juliette Charlotte H\xe9bert",
                pays: "Gen\xe8ve",
                annee: "1885–1896",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK1129",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5830",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Hermanjat, Jacques-Elie-Abraham",
            titre: "Bords du L\xe9man",
            date: "1927",
            dimensions: {
                hauteur: "94",
                longueur: "92",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1927",
            image: "/assets/images/lausannemuseum/fK1147.jpg",
            provenance: {
                nom: "Abraham Hermanjat",
                pays: "Aubonne",
                annee: "1927",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK1147",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7065",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "H\xfcgin, Karl Otto",
            titre: "Au caf\xe9",
            date: "1936",
            dimensions: {
                hauteur: "65.3",
                longueur: "100.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1936",
            image: "/assets/images/lausannemuseum/fK1273.jpg",
            provenance: {
                nom: "Karl H\xfcgin",
                pays: "Z\xfcrich",
                annee: "1936",
                pour: "Schweizerische Eidgenossenschaft"
            },
            numeroinventaire: "fK1273",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7682",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Luigi Monteverde",
            titre: "Raisins et pampres",
            date: "1889",
            dimensions: {
                hauteur: "57",
                longueur: "76",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1891",
            image: "/assets/images/lausannemuseum/fK1725_KF100-6378.jpg",
            provenance: {
                nom: "Luigi Monteverde",
                pays: "Lugano",
                annee: "1889–1891",
                pour: "Confederazione Svizzera"
            },
            numeroinventaire: "fK1725",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9578",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Muyden van Jacques Alfred",
            titre: "Les premiers pas (\xe9tude)",
            date: "1854",
            dimensions: {
                hauteur: "56.5",
                longueur: "48",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1899",
            image: "/assets/images/lausannemuseum/fK1801.jpg",
            provenance: {
                nom: "Jacques Alfred van Muyden",
                pays: "Gen\xe8ve",
                annee: "1854–1898",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK1801",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/7784",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Ravel Edouard",
            titre: "F\xeate patronale au Val d'H\xe9rens",
            date: "1889",
            dimensions: {
                hauteur: "211",
                longueur: "166",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1891",
            image: "/assets/images/lausannemuseum/fK2028.jpg",
            provenance: {
                nom: "Edouard Ravel",
                pays: "Gen\xe8ve",
                annee: "1889–1891",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "fK2028",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8320",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Rossi Luigi",
            titre: "Route de montagne. Valle di Blenio-Lottigna",
            date: "1872",
            dimensions: {
                hauteur: "31",
                longueur: "43.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1925",
            image: "/assets/images/lausannemuseum/fK2108.jpg",
            provenance: {
                nom: "Luigi Rossi",
                pays: "Milano",
                annee: "1872–1923",
                pour: "Confederazione svizzera"
            },
            numeroinventaire: "fK2108",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8335",
            licence: "Public Domain Mark 1.0",
            credit: "Federal Art Collection, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Gleyre Marc-Charles-Gabriel",
            titre: "Jeune fille dans un int\xe9rieur pomp\xe9ien. Sappho",
            date: "1867",
            dimensions: {
                hauteur: "108",
                longueur: "72",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1909",
            image: "/assets/images/lausannemuseum/GKS475.jpg",
            provenance: {
                nom: "Charles Gleyre",
                pays: "Paris",
                annee: "1867",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS475",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5564",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Bi\xe9ler Ernest",
            titre: "L'eau myst\xe9rieuse",
            date: "1911",
            dimensions: {
                hauteur: "144",
                longueur: "376",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1913",
            image: "/assets/images/lausannemuseum/GKS512.jpg",
            provenance: {
                nom: "Ernst Bi\xe9ler",
                pays: "Savi\xe8se",
                annee: "1911–1913",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS512",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5569",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "F\xe9lix Edouard Vallotton",
            titre: "Nature morte: fruits et l\xe9gumes",
            date: "1914",
            dimensions: {
                hauteur: "65.5",
                longueur: "81.3",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1927",
            image: "/assets/images/lausannemuseum/GKS666.jpg",
            provenance: {
                nom: "F\xe9lix Valloton",
                pays: "Paris",
                annee: "1914",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS666",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5594",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "F\xe9lix Edouard Vallotton",
            titre: "Portrait des parents de l'artiste",
            date: "1886",
            dimensions: {
                hauteur: "102",
                longueur: "126.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1927",
            image: "/assets/images/lausannemuseum/GKS667.jpg",
            provenance: {
                nom: "F\xe9lix Valloton",
                pays: "Vallorbe",
                annee: "1886",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS667",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5595",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "Portrait de famille avec la Basilique de Maxence",
            date: "1791",
            dimensions: {
                hauteur: "60",
                longueur: "72",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1932",
            image: "/assets/images/lausannemuseum/GKS742_GKS200-3210_Vorderseite.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Paris",
                annee: "1791",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS742",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8803",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des beaux-arts Lausanne, Lausanne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "Portrait de famille avec le Colis\xe9e",
            date: "1791",
            dimensions: {
                hauteur: "60",
                longueur: "72",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1932",
            image: "/assets/images/lausannemuseum/GKS743_GKS200-3212_Vorderseite.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Rome",
                annee: "1791",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS743",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8804",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des beaux-arts Lausanne, Lausanne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "La joueuse de harpe",
            date: "1787 - 1789",
            dimensions: {
                hauteur: "63",
                longueur: "75",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1935",
            image: "/assets/images/lausannemuseum/GKS815_GKS200-111.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Rome",
                annee: "1787/1789",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS815",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8823",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Charles Alexandre Giron",
            titre: "Nature morte",
            date: "1875",
            dimensions: {
                hauteur: "45.5",
                longueur: "37",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1939",
            image: "/assets/images/lausannemuseum/GKS884_Vorderseite.jpg",
            provenance: {
                nom: "Charles Alexandre Giron",
                pays: "Paris",
                annee: "1875",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS884",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8835",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des beaux-arts Lausanne, Lausanne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "Portrait de famille dans un paysage",
            date: "1794",
            dimensions: {
                hauteur: "41",
                longueur: "33.2",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1950",
            image: "/assets/images/lausannemuseum/GKS956_GKS200-1412.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Paris",
                annee: "1794",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS956",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/8899",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des beaux-arts Lausanne, Lausanne"
        },
        {
            artiste: "F\xe9lix Edouard Vallotton",
            titre: "Vue cavali\xe8re de La Cagne",
            date: "1921",
            dimensions: {
                hauteur: "81",
                longueur: "60",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1953",
            image: "/assets/images/lausannemuseum/GKS989.jpg",
            provenance: {
                nom: "F\xe9lix Vallotton",
                pays: "Cagnes",
                annee: "1921–1925",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS989",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5646",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Wilhelm Gimmi",
            titre: "Nu assis",
            date: "1957",
            dimensions: {
                hauteur: "46.5",
                longueur: "38",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1967",
            image: "/assets/images/lausannemuseum/GKS1066_70_GKS200-3208_Vorderseite.jpg",
            provenance: {
                nom: "Wilhelm Gimmi",
                pays: "Chexbres",
                annee: "1957",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1066/70",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9072",
            licence: "All rights reserved",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "Le colin-maillard",
            date: "1790",
            dimensions: {
                hauteur: "104",
                longueur: "115.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1979",
            image: "/assets/images/lausannemuseum/GKS1132_GKS200-1410.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Rome",
                annee: "1790",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1132",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9222",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "F\xe9lix Edouard Vallotton",
            titre: "La chaste Suzanne",
            date: "1922",
            dimensions: {
                hauteur: "54",
                longueur: "73",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1993",
            image: "/assets/images/lausannemuseum/GKS1240_GKS200-526.jpg",
            provenance: {
                nom: "F\xe9lix Vallotton",
                pays: "Paris",
                annee: "1922–1925",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1240",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9267",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Marc-Charles-Gabriel Gleyre",
            titre: "La danse des bacchantes",
            date: "1849",
            dimensions: {
                hauteur: "147",
                longueur: "243",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "1995",
            image: "/assets/images/lausannemuseum/GKS1251_GKS200-2698_Vorderseite.jpg",
            provenance: {
                nom: "Marc-Charles-Gabriel Gleyre",
                pays: "Paris",
                annee: "1849",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1251",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9273",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Mus\xe9e cantonal des Beaux-Arts, Lausanne"
        },
        {
            artiste: "F\xe9lix Edouard Vallotton",
            titre: "Femmes nues aux chats",
            date: "1896-1898",
            dimensions: {
                hauteur: "41",
                longueur: "52",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "2002",
            image: "/assets/images/lausannemuseum/GKS1286.jpg",
            provenance: {
                nom: "F\xe9lix Vallotton",
                pays: "Paris",
                annee: "1896",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1286",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/5714",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne"
        },
        {
            artiste: "Jacques Sablet",
            titre: "Bord de mer au cr\xe9puscule avec paysans napolitains dansant la Tarantella",
            date: "1799",
            dimensions: {
                hauteur: "155",
                longueur: "212",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "2016",
            image: "/assets/images/lausannemuseum/GKS1310_GKS200-370.jpg",
            provenance: {
                nom: "Jacques Sablet",
                pays: "Rome",
                annee: "1803–1844",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1310",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9330",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Nora Rupp, Lausanne"
        },
        {
            artiste: "Jean Fran\xe7ois Sablet",
            titre: "Vestales versant de l'encens",
            date: "1783",
            dimensions: {
                hauteur: "174.7",
                longueur: "143.5",
                profondeur: ""
            },
            objet: "Peinture",
            anneeacquisition: "2011",
            image: "/assets/images/lausannemuseum/GKS1312_GKS200-328.jpg",
            provenance: {
                nom: "Jean Fran\xe7ois Sablet",
                pays: "Paris",
                annee: "1783",
                pour: "Conf\xe9d\xe9ration suisse"
            },
            numeroinventaire: "GKS1312",
            emplacement: "Mus\xe9e cantonal des Beaux-Arts, Lausanne",
            lien: "https://kdb.e-pics.ethz.ch/catalog/KdB/r/9332",
            licence: "Public Domain Mark 1.0",
            credit: "Gottfried Keller Foundation, Swiss Federal Office of Culture, Berne, Photo: Nora Rupp, Lausanne"
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dKE9B"], null, "parcelRequire6426")

//# sourceMappingURL=kunstmuseum-basel.4c545995.js.map
