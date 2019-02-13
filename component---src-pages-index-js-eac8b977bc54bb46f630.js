(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(150),i=a(155);a(152),a(149);t.default=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(o.a,{title:"Home",keywords:["Harrison Tate","Portfolio","Photography"]}),n.a.createElement(i.a,{styling:"HeaderGroup",title:"Harrison Tate",LinkedOne:"Photos",LinkedTwo:"Lookbook",firstLink:"",secondLink:"/Photos",thirdLink:"/flare"}),n.a.createElement("div",{className:"Hero"},n.a.createElement("div",{className:"scroll-downs"},n.a.createElement("div",{className:"mousey"},n.a.createElement("div",{className:"scroller"})))),n.a.createElement("div",{className:"heroTitles"},n.a.createElement("h2",null,"Pictures")),n.a.createElement("div",{className:"imageContainer"},n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxMMZH1bW/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Chimney",src:a(191)})),n.a.createElement("a",{href:"https://www.instagram.com/p/BpEXqeoBfRJ/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Person and red pipe",src:a(192)})),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxOQ5nhG9/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Dock through ship window",src:a(193)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMx1iSniv_/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Ship corridor",src:a(194)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/Bg3SYQIDuQr/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Old office block with person stood infront",src:a(195)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BoJIIT3h-9I/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Person at art gallery",src:a(196)})),n.a.createElement("a",{href:"https://www.instagram.com/p/BkMxNGAH_wc/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Old TV",src:a(197)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BpEXh0LBNDt/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Person walking down street",src:a(198)})," "),n.a.createElement("a",{href:"https://www.instagram.com/p/BoJIQR-hdet/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Far crane though fence",src:a(199)}))),n.a.createElement("div",{className:"heroTitles"},n.a.createElement("h2",null,"Lookbook"),n.a.createElement(ResponsivePlayer,null)),n.a.createElement("footer",null,n.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",n.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson"))))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(145),p=a.n(l);a.d(t,"PageRenderer",function(){return p.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=n.a.createContext({}),m=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var r;e.exports=(r=a(147))&&r.default||r},147:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){},150:function(e,t,a){"use strict";var r=a(151),n=a(0),o=a.n(n),i=a(4),c=a.n(i),s=a(148),l=a.n(s),p=a(144);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return o.a.createElement(p.StaticQuery,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var u="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},152:function(e,t,a){},155:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(142),i=a.n(o),c=a(4),s=a.n(c),l=a(0),p=a.n(l),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return p.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},p.a.createElement("div",{className:this.props.styling},p.a.createElement(i.a,{to:this.props.firstLink},p.a.createElement("h1",null,this.props.title)),p.a.createElement(i.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),p.a.createElement(i.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(p.a.Component);d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""},t.a=d},191:function(e,t,a){e.exports=a.p+"static/4-312dc16b8770f2a0623d2b091a182e82.jpg"},192:function(e,t,a){e.exports=a.p+"static/Dfg-69ab9f4c90effe2ba972e855b49094b9.jpg"},193:function(e,t,a){e.exports=a.p+"static/90-31a244f3dd44d783d7beea4ee34c85cd.jpg"},194:function(e,t,a){e.exports=a.p+"static/Blas-2662904f4fc3b250ddc4b536ae93a2f7.jpg"},195:function(e,t,a){e.exports=a.p+"static/BLJ-37dabec39ab2baac9eccaaf1583ba749.jpg"},196:function(e,t,a){e.exports=a.p+"static/Bluy2-04ec7c916b101e123d92986ffdf9fad0.jpg"},197:function(e,t,a){e.exports=a.p+"static/D-63765c5251352a218bcf9d19406a99b6.jpg"},198:function(e,t,a){e.exports=a.p+"static/64tygh-5bfce69db7e14c129add964852c2bb05.jpg"},199:function(e,t,a){e.exports=a.p+"static/ktcg-37cd90099a62a988d2a7ebcba908332c.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-eac8b977bc54bb46f630.js.map