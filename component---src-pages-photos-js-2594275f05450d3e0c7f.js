(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),c=a(155),o=(a(154),a(151),a(157));t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Photos"}),r.a.createElement(o.a,{styling:"HeaderGroup",title:"Photos",LinkedOne:"Harrison Tate",LinkedTwo:"Flare",firstLink:"/Photos",secondLink:"",thirdLink:"/flare"}),r.a.createElement("div",{className:"altPhotos"}),r.a.createElement("div",{id:"img-container",className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:a(203),alt:"buidling under construction in distance"}),r.a.createElement("img",{src:a(204),alt:"shopping center in leeds"}),r.a.createElement("img",{src:a(205),alt:"two Photographers down narrow street"}),r.a.createElement("img",{src:a(206),alt:"a couple on a bridge"}),r.a.createElement("img",{src:a(207),alt:"teenager on steps in a street"}),r.a.createElement("img",{src:a(208),alt:"a reflection of a highstreet"}),r.a.createElement("img",{src:a(209),alt:"dog running in field"}),r.a.createElement("img",{src:a(210),alt:"tenager in a narrow street"})),r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:a(211),alt:"teenager in middel of water feature"}),r.a.createElement("img",{src:a(212),alt:"groom at wedding"}),r.a.createElement("img",{src:a(213),alt:"two tenagers"}),r.a.createElement("img",{src:a(214),alt:"tenager in a narrow street"}),r.a.createElement("img",{src:a(215),alt:"pigeon near stepps"}),r.a.createElement("img",{src:a(216),alt:"woman on a escalator"}),r.a.createElement("img",{src:a(217),alt:"tenager jumping between rocks"})),r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:a(218),alt:"tenager stood next to yellow bollard"}),r.a.createElement("img",{src:a(219),alt:"long exposure cars passing"}),r.a.createElement("img",{src:a(220),alt:"teenager sat on wall"}),r.a.createElement("img",{src:a(221),alt:"port skyline"}),r.a.createElement("img",{src:a(222),alt:"port skyline"}),r.a.createElement("img",{src:a(223),alt:"couple walking down beach"}),r.a.createElement("img",{src:a(224),alt:"teenagers down a street"}),r.a.createElement("img",{src:a(225),alt:"a teenager walking down a street"}))),r.a.createElement("footer",null,r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson"))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(144),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(147),p=a.n(l);a.d(t,"PageRenderer",function(){return p.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(150),l=a.n(s),p=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(p.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(146),l=a(150),p=a.n(l),d=function(e){e.props;var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:n})};d.propTypes={children:o.a.node.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(144),c=a.n(i),o=a(4),s=a.n(o),l=a(0),p=a.n(l),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return p.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},p.a.createElement("div",{className:this.props.styling},p.a.createElement(c.a,{to:this.props.firstLink},p.a.createElement("h1",null,this.props.title)),p.a.createElement(c.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),p.a.createElement(c.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(p.a.Component);d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""},t.a=d},203:function(e,t,a){e.exports=a.p+"static/crane-r9-min-ae93b94f585aa88b5d8cf6f26b1a78ce.jpg"},204:function(e,t,a){e.exports=a.p+"static/DSC_0206-a12e3fc38a40727723cbff1f71a84808.jpg"},205:function(e,t,a){e.exports=a.p+"static/abi-and-elise-86c6356ce86cb5ef55066984b577cbba.jpg"},206:function(e,t,a){e.exports=a.p+"static/DSC_0294-1f6dc9a23b5e5b379feacbc6fde9de27.jpg"},207:function(e,t,a){e.exports=a.p+"static/DSC_0947-f85ec20a5bc1a23ab634d7f70dfbd25b.jpg"},208:function(e,t,a){e.exports=a.p+"static/GWINDOW-f114b76094be9c05bec2d5a4bb2c9290.jpg"},209:function(e,t,a){e.exports=a.p+"static/JAYGO-390af94c99ce320b42a6afa60cf4fc09.jpg"},210:function(e,t,a){e.exports=a.p+"static/greens-c17433c32c49c79ed8918a62bf84eca3.jpg"},211:function(e,t,a){e.exports=a.p+"static/SAM-BL-min-b160679ec4d2d5db9dda17d534177557.jpg"},212:function(e,t,a){e.exports=a.p+"static/160-min-deaa58ab9a42646ee0c8530b60ae6f72.jpg"},213:function(e,t,a){e.exports=a.p+"static/harry6-cb3c79514a784ed8a87dc75ea52082af.jpg"},214:function(e,t,a){e.exports=a.p+"static/b-and-w-min-df6c2edd0a1bb457d2f2d96dfe0e4ac9.jpg"},215:function(e,t,a){e.exports=a.p+"static/B-P-min-88bf53a4b81ff366522908e0242670d2.jpg"},216:function(e,t,a){e.exports=a.p+"static/BL-EL-min-c463b77a00e4a6cbc8f33b0bff685a6e.jpg"},217:function(e,t,a){e.exports=a.p+"static/jjj-5c6b75d425cb9c8f345ad6d31dc4cc85.jpg"},218:function(e,t,a){e.exports=a.p+"static/A.B-YELLOW-min-e2c71e5da178cbd3132a0db9e28059c9.jpg"},219:function(e,t,a){e.exports=a.p+"static/bloody-york-at-2-min-486fbd0a9e7b0f118048030908e66556.jpg"},220:function(e,t,a){e.exports=a.p+"static/DSC_0213-0659482cc957d03ae0feecafae23a465.jpg"},221:function(e,t,a){e.exports=a.p+"static/crsn-min-764a0ac4a819e756118e307ea2c7a842.jpg"},222:function(e,t,a){e.exports=a.p+"static/DSC_0082-min-b42472b5775995e90191f3944053c6c1.jpg"},223:function(e,t,a){e.exports=a.p+"static/DSC_5621-min-a7795756c8245689cf7386c8e17ed0ed.jpg"},224:function(e,t,a){e.exports=a.p+"static/DSC_0976-f862f61353e882c865169db9c5ba529c.jpg"},225:function(e,t,a){e.exports=a.p+"static/green-JH-eb075667d312fecb6f327a7bc0b83820.jpg"}}]);
//# sourceMappingURL=component---src-pages-photos-js-2594275f05450d3e0c7f.js.map