// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let u="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=u}}function l(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===u}};

