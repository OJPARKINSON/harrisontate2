(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(146),i=a(149),c=a(7),s=a.n(c),l=a(142),p=a.n(l),u=a(4),d=a.n(u),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return n.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},n.a.createElement("div",{className:"HeaderGroup"},n.a.createElement(p.a,{to:""},n.a.createElement("h1",{className:"firstPage"},"Harrison Tate")),n.a.createElement(p.a,{className:"Photos",to:"/Photos"},"Photos"),n.a.createElement(p.a,{className:"Lookbook",to:"/flare"},"Lookbook")))},t}(n.a.Component);m.propTypes={siteTitle:d.a.string},m.defaultProps={siteTitle:""};var f=m;t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement(f,null),n.a.createElement("div",{className:"Hero"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"heroTitles"},n.a.createElement("h2",null,"Pictures")),n.a.createElement("div",{className:"imageContainer"},n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxMMZH1bW/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"",src:a(170)})),n.a.createElement("a",{href:"https://www.instagram.com/p/BpEXqeoBfRJ/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Chimney",src:a(171)})),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxOQ5nhG9/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"person and red pipe",src:a(172)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMx1iSniv_/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Dock through ship window",src:a(173)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/Bg3SYQIDuQr/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"",src:a(174)})," "),n.a.createElement("img",{alt:"",src:a(175)}),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxNGAH_wc/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"",src:a(176)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BpEXh0LBNDt/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"",src:a(177)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BoJIQR-hdet/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"",src:a(178)}))),n.a.createElement("div",{className:"heroTitles"},n.a.createElement("h2",null,"Lookbook"),n.a.createElement("iframe",{title:"lookbook",allowFullScreen:!0,src:"https://www.youtube.com/embed/sjHPpqmbYNo",rel:"0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(144),p=a.n(l);a.d(t,"PageRenderer",function(){return p.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=n.a.createContext({}),m=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},146:function(e,t,a){"use strict";var r=a(147),n=a(0),o=a.n(n),i=a(4),c=a.n(i),s=a(143),l=a(145),p=a.n(l),u=function(e){e.props;var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("div",null,o.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:r})};u.propTypes={children:c.a.node.isRequired},t.a=u},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){"use strict";var r=a(150),n=a(0),o=a.n(n),i=a(4),c=a.n(i),s=a(145),l=a.n(s),p=a(143);function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return o.a.createElement(p.StaticQuery,{query:d,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},170:function(e,t,a){e.exports=a.p+"static/4-312dc16b8770f2a0623d2b091a182e82.jpg"},171:function(e,t,a){e.exports=a.p+"static/Dfg-69ab9f4c90effe2ba972e855b49094b9.jpg"},172:function(e,t,a){e.exports=a.p+"static/90-31a244f3dd44d783d7beea4ee34c85cd.jpg"},173:function(e,t,a){e.exports=a.p+"static/Blas-2662904f4fc3b250ddc4b536ae93a2f7.jpg"},174:function(e,t,a){e.exports=a.p+"static/BLJ-37dabec39ab2baac9eccaaf1583ba749.jpg"},175:function(e,t,a){e.exports=a.p+"static/Bluy2-04ec7c916b101e123d92986ffdf9fad0.jpg"},176:function(e,t,a){e.exports=a.p+"static/D-63765c5251352a218bcf9d19406a99b6.jpg"},177:function(e,t,a){e.exports=a.p+"static/64tygh-5bfce69db7e14c129add964852c2bb05.jpg"},178:function(e,t,a){e.exports=a.p+"static/ktcg-37cd90099a62a988d2a7ebcba908332c.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-a37b161eccc68429fc22.js.map