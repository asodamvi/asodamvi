/*! For license information please see 0.f394f7a8.chunk.js.LICENSE.txt */
(this.webpackJsonpasodamvi=this.webpackJsonpasodamvi||[]).push([[0],{62:function(t,e,n){"use strict";var r,i=n(3),o=n(18),a=n(1),s=n(4),u=n(63),c="0.4.30",f=1e4,l="w:0.4.30",d="FIS_v2",p=36e5,h=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),b=new s.b("installations","Installations",h);function v(t){return t instanceof s.c&&t.code.includes("request-failed")}function g(t){return"https://firebaseinstallations.googleapis.com/v1/projects/"+t.projectId+"/installations"}function y(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function j(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,e.json()];case 1:return n=i.sent(),r=n.error,[2,b.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function m(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function w(t,e){var n=e.refreshToken,r=m(t);return r.append("Authorization",function(t){return"FIS_v2 "+t}(n)),r}function O(t){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,t()];case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}}))}))}function S(t,e){var n=e.fid;return Object(a.b)(this,void 0,void 0,(function(){var e,r,i,o,s,u;return Object(a.d)(this,(function(a){switch(a.label){case 0:return e=g(t),r=m(t),i={fid:n,authVersion:d,appId:t.appId,sdkVersion:l},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,O((function(){return fetch(e,o)}))];case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3];case 2:return u=a.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:y(u.authToken)}];case 3:return[4,j("Create Installation",s)];case 4:throw a.sent()}}))}))}function I(t){return new Promise((function(e){setTimeout(e,t)}))}var _=/^[cdef][\w-]{21}$/;function C(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.f)([],Object(a.e)(e)))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return _.test(e)?e:""}catch(r){return""}}function k(t){return t.appName+"!"+t.appId}var T=new Map;function D(t,e){var n=k(t);x(n,e),function(t,e){var n=q();n&&n.postMessage({key:t,fid:e});E()}(n,e)}function x(t,e){var n,r,i=T.get(t);if(i)try{for(var o=Object(a.g)(i),s=o.next();!s.done;s=o.next()){(0,s.value)(e)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var P=null;function q(){return!P&&"BroadcastChannel"in self&&((P=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){x(t.data.key,t.data.fid)}),P}function E(){0===T.size&&P&&(P.close(),P=null)}var A,N="firebase-installations-store",B=null;function K(){return B||(B=Object(u.openDb)("firebase-installations-database",1,(function(t){switch(t.oldVersion){case 0:t.createObjectStore(N)}}))),B}function L(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o,s;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=k(t),[4,K()];case 1:return r=a.sent(),i=r.transaction(N,"readwrite"),[4,(o=i.objectStore(N)).get(n)];case 2:return s=a.sent(),[4,o.put(e,n)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),s&&s.fid===e.fid||D(t,e.fid),[2,e]}}))}))}function V(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e=k(t),[4,K()];case 1:return n=i.sent(),[4,(r=n.transaction(N,"readwrite")).objectStore(N).delete(e)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function F(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o,s,u;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=k(t),[4,K()];case 1:return r=a.sent(),i=r.transaction(N,"readwrite"),[4,(o=i.objectStore(N)).get(n)];case 2:return s=a.sent(),void 0!==(u=e(s))?[3,4]:[4,o.delete(n)];case 3:return a.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:a.sent(),a.label=6;case 6:return[4,i.complete];case 7:return a.sent(),!u||s&&s.fid===u.fid||D(t,u.fid),[2,u]}}))}))}function M(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,F(t,(function(n){var r=function(t){return z(t||{fid:C(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(b.create("app-offline"))};var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,S(t,e)];case 1:return n=i.sent(),[2,L(t,n)];case 2:return v(r=i.sent())&&409===r.customData.serverCode?[4,V(t)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,L(t,{fid:e.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(t,n)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:$(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))}))}function $(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return[4,J(t)];case 1:e=o.sent(),o.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,I(100)];case 3:return o.sent(),[4,J(t)];case 4:return e=o.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,M(t)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}}))}))}function J(t){return F(t,(function(t){if(!t)throw b.create("installation-not-found");return z(t)}))}function z(t){return 1===(e=t).registrationStatus&&e.registrationTime+f<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function R(t,e){var n=t.appConfig,r=t.platformLoggerProvider;return Object(a.b)(this,void 0,void 0,(function(){var t,i,o,s,u,c,f;return Object(a.d)(this,(function(a){switch(a.label){case 0:return t=function(t,e){var n=e.fid;return g(t)+"/"+n+"/authTokens:generate"}(n,e),i=w(n,e),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:l}},u={method:"POST",headers:i,body:JSON.stringify(s)},[4,O((function(){return fetch(t,u)}))];case 1:return(c=a.sent()).ok?[4,c.json()]:[3,3];case 2:return f=a.sent(),[2,y(f)];case 3:return[4,j("Generate Auth Token",c)];case 4:throw a.sent()}}))}))}function U(t,e){return void 0===e&&(e=!1),Object(a.b)(this,void 0,void 0,(function(){var n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return[4,F(t.appConfig,(function(r){if(!H(r))throw b.create("not-registered");var i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}(t)}(i))return r;if(1===i.requestStatus)return n=function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,G(t.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,I(100)];case 3:return i.sent(),[4,G(t.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,U(t,e)]:[2,r]}}))}))}(t,e),r;if(!navigator.onLine)throw b.create("app-offline");var o=function(t){var e={requestStatus:1,requestTime:Date.now()};return Object(a.a)(Object(a.a)({},t),{authToken:e})}(r);return n=function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,R(t,e)];case 1:return n=o.sent(),i=Object(a.a)(Object(a.a)({},e),{authToken:n}),[4,L(t.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!v(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,V(t.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(a.a)(Object(a.a)({},e),{authToken:{requestStatus:0}}),[4,L(t.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(t,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function G(t){return F(t,(function(t){if(!H(t))throw b.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+f<Date.now()?Object(a.a)(Object(a.a)({},t),{authToken:{requestStatus:0}}):t}))}function H(t){return void 0!==t&&2===t.registrationStatus}function Q(t){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,M(t)];case 1:return(e=n.sent().registrationPromise)?[4,e]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function W(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid;return g(t)+"/"+n}(t,e),r=w(t,e),i={method:"DELETE",headers:r},[4,O((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,j("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function X(t,e){var n=t.appConfig;return function(t,e){q();var n=k(t),r=T.get(n);r||(r=new Set,T.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=k(t),r=T.get(n);r&&(r.delete(e),0===r.size&&T.delete(n),E())}(n,e)}}function Y(t){return b.create("missing-app-config-values",{valueName:t})}(A=i.a).INTERNAL.registerComponent(new o.a("installations",(function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw Y("App Configuration");if(!t.name)throw Y("App Name");try{for(var r=Object(a.g)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!t.options[o])throw Y(o)}}catch(s){e={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,M(t.appConfig)];case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):U(t).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(t){return function(t,e){return void 0===e&&(e=!1),Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,Q(t.appConfig)];case 1:return n.sent(),[4,U(t,e)];case 2:return[2,n.sent().token]}}))}))}(n,t)},delete:function(){return function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n;return Object(a.d)(this,(function(r){switch(r.label){case 0:return[4,F(e=t.appConfig,(function(t){if(!t||0!==t.registrationStatus)return t}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw b.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw b.create("app-offline");case 3:return[4,W(e,n)];case 4:return r.sent(),[4,V(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(t){return X(n,t)}}}),"PUBLIC")),A.registerVersion("@firebase/installations",c)},63:function(t,e,n){!function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var i,o=new Promise((function(o,a){n(i=t[e].apply(t,r)).then(o,a)}));return o.request=i,o}function i(t,e,n){var i=r(t,e,n);return i.then((function(t){if(t)return new f(t,i.request)}))}function o(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function a(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function s(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function u(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function c(t){this._index=t}function f(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function p(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new d(n)}function h(t){this._db=t}function b(t,e,n){var i=r(indexedDB,"open",[t,e]),o=i.request;return o&&(o.onupgradeneeded=function(t){n&&n(new p(o.result,t.oldVersion,o.transaction))}),i.then((function(t){return new h(t)}))}function v(t){return r(indexedDB,"deleteDatabase",[t])}o(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(f.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),n(e._request).then((function(t){if(t)return new f(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},o(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},o(d,"_tx",["objectStoreNames","mode"]),s(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,c].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[c,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})})),t.openDb=b,t.deleteDb=v,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);
//# sourceMappingURL=0.f394f7a8.chunk.js.map