(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(147),c=(a(164),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{className:"leftCard",alt:e.alternative,src:e.image}))});t.default=function(){return r.a.createElement("div",{className:"container2"},r.a.createElement(o.a,{title:"Flare"}),r.a.createElement(i.a,{title:"Flae",Link2:"Harrison Tate"}),r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{className:"FlareLogo",alt:"",src:a(165)})),r.a.createElement(c,{image:a(166),text:""}),r.a.createElement(c,{image:a(167),text:""}),r.a.createElement(c,{image:a(168),text:""}),r.a.createElement(c,{image:a(169),text:""}),r.a.createElement(c,{image:a(170),text:""}),r.a.createElement("div",{className:"heroTitles"},r.a.createElement("iframe",{title:"lookbook2",allowFullScreen:!0,src:"https://www.youtube.com/embed/sjHPpqmbYNo",rel:"0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})))}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(143),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(149),l=a.n(s),u=a(144);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var f="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Harrison Tate",description:"This is a portfolio site for Harrison Tate.",author:"@OliverParkinson"}}}}},152:function(e,t,a){"use strict";var n=a(142),r=a.n(n),i=(a(145),a(0)),o=a.n(i);t.a=function(e){return o.a.createElement("div",{className:"HeaderScrolled"},o.a.createElement("div",{className:"HeaderGroup"},o.a.createElement(r.a,{to:"/"},o.a.createElement("h1",null,"Harrison Tate")),o.a.createElement(r.a,{className:"Photos",to:"/Photos"},"Photos"),o.a.createElement(r.a,{className:"Lookbook",to:"/flare"},"Flare")))}},164:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/FlareLogoCompressed-min-3ac27a64999d842945c0a64490754fa6.png"},166:function(e,t,a){e.exports=a.p+"static/AIDAN2GIF-30955d892655dd627668698a689255bb.gif"},167:function(e,t,a){e.exports=a.p+"static/MEGIF-2db0a1e83a61ffdad91d93299e2a02d9.gif"},168:function(e,t,a){e.exports=a.p+"static/MOSHED-8fad1fafe6ac18ec98d370fff817cd7d.gif"},169:function(e,t,a){e.exports=a.p+"static/giffy3-04232e1a06a19d66880737bf444076cd.gif"},170:function(e,t,a){e.exports=a.p+"static/giffy1-0c2daf612f3bcfd60f35d94237d6f429.gif"}}]);
//# sourceMappingURL=component---src-pages-flare-js-81175226d9d3dc2fd5a2.js.map