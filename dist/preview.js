'use strict';

var previewApi = require('@storybook/preview-api');

var o="misskeyTheme";var s=(e,n)=>{let[m]=previewApi.useGlobals(),r=m[o],{theme:l}=n.globals;return previewApi.useEffect(()=>{c(r);},[r,l]),e()};function c(e){e?document.documentElement.dataset.misskeyTheme=e:delete document.documentElement.dataset.misskeyTheme;}var p={decorators:[s],globals:{[o]:!1}},S=p;

module.exports = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.js.map