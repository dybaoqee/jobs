(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);a(78),a(55),a(166),a(54),a(53);var n=a(0),r=a.n(n),l=a(151),o=function(e){var t=e.title,a=e.location,n=e.path;return r.a.createElement("a",{href:n,className:"job"},r.a.createElement("h3",null,t),r.a.createElement("small",{className:"location"},a))};a.d(t,"pageQuery",function(){return i});t.default=function(e){var t=e.data.allMarkdownRemark.edges.reduce(function(e,t){var a=t.node,n=a.frontmatter.area;return e[n]||(e[n]=[]),e[n].push(a),e},{});return r.a.createElement(l.a,null,r.a.createElement("div",null,Object.keys(t).map(function(e){return r.a.createElement("div",{className:"job-area"},r.a.createElement("h2",null,e),r.a.createElement("div",{className:"job-list"},t[e].map(function(e){return r.a.createElement(o,e.frontmatter)})))})))};var i="759539262"},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(144),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(145),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"EmCasa | Jobs",themeColor:"#F50057"}}}}},148:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(52),c=a(1),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(147),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(152),u=a.n(c),s=a(146),d=function(){return l.a.createElement("svg",{width:"30px",height:"30px",viewBox:"0 0 103 100",version:"1.1"},l.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.a.createElement("path",{d:"M51.4936189,13.0010555 C52.8155995,12.977002 54.1124355,13.3645822 55.2050973,14.1102902 L87.4610376,37.5840945 C89.5725408,39.2686724 90.4757142,42.0533379 89.7557688,44.659213 L77.4440366,82.633013 C76.4898819,85.1489627 74.1412926,86.862264 71.4577811,87 L31.5494108,87 C28.8640954,86.8673742 26.5130075,85.1522502 25.5631553,82.633013 L13.241446,44.659213 C12.5269977,42.0534621 13.4291945,39.2718077 15.5361773,37.5840945 L47.7921175,14.1102902 C48.8847793,13.3645822 50.1816153,12.977002 51.503596,13.0010555 M51.4734139,0.000556468759 C47.4162536,-0.0176751342 43.4554268,1.23783412 40.1478986,3.59053649 L7.85919383,27.0804058 C1.22851661,32.0859994 -1.56555728,40.7106985 0.868134958,48.6602857 L13.2023602,86.6600742 C15.8943958,94.5198422 23.2117119,99.8519369 31.5089473,100 L71.4578551,100 C79.7651745,99.8615162 87.096143,94.528202 89.7944038,86.6600742 L102.128629,48.6602857 C104.568501,40.7106494 101.773279,32.0824071 95.1375702,27.0804058 L62.8588527,3.59053649 C59.5309926,1.22567738 55.5441183,-0.0303352867 51.4634267,0.000556468759",id:"Shape",fill:"#FFFFFF"})))},m=function(e){var t=e.collapsed;return l.a.createElement("div",{className:t?"header collapsed":"header"},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("div",{className:"title"},!t&&l.a.createElement(d,null),t&&l.a.createElement("a",{href:"/"},l.a.createElement(d,null),l.a.createElement("h2",null,"Trabalhe na EmCasa"))),!t&&l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Trabalhe na EmCasa"),l.a.createElement("p",null,"Estamos revolucionando o mercado de real estate no Brasil. Temos oportunidades para trabalho remoto ou nas nossas sedes no RJ e SP. Conheça mais:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/watch?v=1f6a_1orGzM1",target:"_blank"},"O que é a EmCasa?")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/watch?v=vv2L-XVde_0&t=485s",target:"_blank"},"EmCasa na IstoÉ dinheiro")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.emcasa.com",target:"_blank"},"Visite nosso produto"))))))};m.propTypes={collapsed:i.a.bool};var p=m,f=(a(149),function(e){var t=e.children,a=e.internal;return l.a.createElement(s.StaticQuery,{query:"1606809331",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Trablahe na EmCasa"},{name:"keywords",content:"emcasa, startup, real estate tech"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(p,{collapsed:a,siteTitle:e.site.siteMetadata.title,themeColor:e.site.siteMetadata.themeColor}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),l.a.createElement("div",{className:"footer"}))},data:n})});f.propTypes={children:i.a.node.isRequired,internal:i.a.bool};t.a=f},166:function(e,t,a){var n=a(28),r=a(41);a(167)("keys",function(){return function(e){return r(n(e))}})},167:function(e,t,a){var n=a(6),r=a(18),l=a(17);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-pages-index-js-35dc2fabe8cd725b68c9.js.map