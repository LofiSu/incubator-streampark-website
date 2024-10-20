"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1175],{53451:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=o(86070),i=o(76113);const s={id:"sso",title:"SSO Integration",sidebar_position:9},r=void 0,a={id:"platform/sso",title:"SSO Integration",description:"Background",source:"@site/docs/platform/9.SSO.md",sourceDirName:"platform",slug:"/platform/sso",permalink:"/docs/platform/sso",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/platform/9.SSO.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"sso",title:"SSO Integration",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to Build Platform",permalink:"/docs/platform/platform-build"},next:{title:"Flink on Kubernetes",permalink:"/docs/platform/k8s/flink-on-k8s"}},c={},l=[{value:"Background",id:"background",level:2},{value:"SSO login workflow",id:"sso-login-workflow",level:2},{value:"How to enable SSO login",id:"how-to-enable-sso-login",level:2},{value:"Note",id:"note",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"As an enterpise practice, it's common to apply Single sign-on (SSO) across all applications, so that user credential can be managed in a centralised and secure manner."}),"\n",(0,t.jsx)(n.p,{children:"Based on the fact that Streampark use Apache Shiro for authetication and authorization purpose, and we are going to use Pac4j framework to achive the Single Sign-On (SSO) support feature. Pac4j is recommented by Shiro community as SSO integration solution, and it's also applied by other Apache project, like Knox, Durid, Zeppelin, etc."}),"\n",(0,t.jsx)(n.h2,{id:"sso-login-workflow",children:"SSO login workflow"}),"\n",(0,t.jsx)(n.p,{children:"We come up three main use cases with the workflow shown below:"}),"\n",(0,t.jsx)(n.p,{children:"a) New user login when SSO is enabled"}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/new-user-login-process.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"b) Existing user login when SSO is enabled"}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/existing-user-login-process.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"c) User login when when SSO is not enabled"}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/user-login-sso-not-enabled.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"how-to-enable-sso-login",children:"How to enable SSO login"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enable the SSO from the ",(0,t.jsx)(n.code,{children:"application.yml"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\nspring:\n  profiles:\n    active: mysql #[h2,pgsql,mysql]\n    include: sso\n...\nsso:\n    # If turn to true, please provide the sso properties the application-sso.yml\n    enable: true\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select preferred 3rd party login approch, such as Github or Google auth, refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/pac4j/pac4j/blob/master/documentation/docs/config-module.md",children:"pac4j configuration guide"})," for more parameter setting details, and fill in the ",(0,t.jsx)(n.code,{children:"application-sso.yml"})," config as below:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pac4j:\n  callbackUrl: http://localhost:10000/callback\n  # Put all parameters under `properties`\n  # Check supported sso config parameters for different authentication clients from the below link\n  # https://github.com/pac4j/pac4j/blob/master/documentation/docs/config-module.md\n  properties:\n    # principalNameAttribute:\n    # Optional, change by authentication client\n    # Please replace and fill in your client config below when enabled SSO\n    principalNameAttribute: email\n    oidc:\n      type: google\n      id: xxx\n      secret: xxx\n      useNonce: true\n    # github:\n      # id: xxx\n      # secret: xxx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start the Streampark, and see whether it will redirect to external login page correctly and comple the authentication process:"}),"\n"]}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/github-login.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/google-login.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{src:"/doc/image/sso/login-success-redirect.png"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After new users loggining via SSO, their account will be added into streampark automatically at the backend. But admin still need to add the user under proper group manually, otherwise new user still cannot direct to the landing page after successful login."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Currently we only support ",(0,t.jsx)(n.code,{children:"OAuth"})," and ",(0,t.jsx)(n.code,{children:"OpenID Connect (OIDC)"})," as normal supported login approch, if you need to support ",(0,t.jsx)(n.code,{children:"Saml"}),", or ",(0,t.jsx)(n.code,{children:"CAS"}),", please go to the ",(0,t.jsx)(n.code,{children:"streampark-console/streampark-console-service/pom.xml"}),", change to include them in the below dependency:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"        \x3c!-- Include pac4j-config/core/oauth/oidc--\x3e\n        <dependency>\n            <groupId>org.pac4j</groupId>\n            <artifactId>pac4j-springboot</artifactId>\n            <version>${pac4jVersion}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>commons-collections</groupId>\n                    <artifactId>commons-collections</artifactId>\n                </exclusion>\n                \x3c!-- cas & opensaml is not supported--\x3e\n                <exclusion>\n                    <groupId>org.pac4j</groupId>\n                    <artifactId>pac4j-cas</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>org.pac4j</groupId>\n                    <artifactId>pac4j-saml-opensamlv3</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},76113:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(30758);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);