(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(152),o=a(154),s=(a(156),a(158),a(157));t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Photos"}),r.a.createElement(s.a,{styling:"HeaderGroup",title:"Photos",LinkedOne:"Harrison Tate",LinkedTwo:"Flare",firstLink:"/Photos",secondLink:"",thirdLink:"/flare"}),r.a.createElement("div",{className:"altPhotos"}),r.a.createElement("div",{id:"img-container",className:"row"},r.a.createElement("div",{className:"column"},t.allContentfulImages.edges.map(function(e){return r.a.createElement("img",{src:"https:"+e.node.image.file.url,key:"i"+e.node.title,id:"i"+e.node.title,alt:e.node.alternative})}))),r.a.createElement("footer",null,r.a.createElement("h3",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{href:"http://oliverparkinson.co.uk"},"Oliver Parkinson"))))};var l="1172988983"},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(148);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(151),c=a.n(l),d=a(146);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var p="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(146),c=a(151),d=a.n(c),u=function(e){e.props;var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"sample"},{name:"keywords",content:"sample, something"}]}),t)},data:n})};u.propTypes={children:s.a.node.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate"}}}}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(4),o=a.n(i),s=a(0),l=a.n(s),c=a(146),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).HandeleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.HandeleScroll)},a.render=function(){return l.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},l.a.createElement("div",{className:this.props.styling},l.a.createElement(c.a,{to:this.props.firstLink},l.a.createElement("h1",null,this.props.title)),l.a.createElement(c.a,{className:"Photos",to:this.props.secondLink},this.props.LinkedOne),l.a.createElement(c.a,{className:"Lookbook",to:this.props.thirdLink},this.props.LinkedTwo)))},t}(l.a.Component);d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""},t.a=d}}]);
//# sourceMappingURL=component---src-pages-photos-js-f64701b2904b73790bb9.js.map