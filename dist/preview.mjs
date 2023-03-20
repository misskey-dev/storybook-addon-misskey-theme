import { useGlobals, useEffect } from '@storybook/preview-api';

var o="misskeyTheme";var s=(e,n)=>{let[m]=useGlobals(),r=m[o],{theme:l}=n.globals;return useEffect(()=>{c(r);},[r,l]),e()};function c(e){e?document.documentElement.dataset.misskeyTheme=e:delete document.documentElement.dataset.misskeyTheme;}var p={decorators:[s],globals:{[o]:!1}},S=p;

export { S as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.mjs.map