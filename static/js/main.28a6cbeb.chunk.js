(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/ic_location_on_white_24px.9106449c.svg"},23:function(e,t,n){e.exports=n.p+"static/media/ic_location_on_black_24px.4489927c.svg"},26:function(e,t,n){e.exports=n(55)},31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),i=(n(31),n(2)),s=n(3),u=n(5),l=n(4),p=n(6),h=(n(33),n(7)),d=n(1),f=n(25),m="https://free-code-camp-w-1502827287345.appspot.com",g=function(e,t){return e+Object.keys(t).reduce(function(e,n,r){return e+(0===r?"?":"&")+n+"="+t[n]},"")},E=function(){return new Promise(function(e,t){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(n){var r=n.coords,a=r.latitude,o=r.longitude;a&&o?e({locName:"".concat(a,", ").concat(o),loc:{lat:a,lon:o}}):t(new Error("Could not get latitude and longitude"))},t):t(new Error("Geolocation not available"))})},v=function(e){return function(t){var n=t.lat,r=t.lon,a=t.id;return a?fetch("".concat(e,"?id=").concat(encodeURIComponent(a))):n&&r?fetch("".concat(e,"?lat=").concat(encodeURIComponent(n),"&lon=").concat(encodeURIComponent(r))):Promise.resolve(new Error("Must include either id or lat and lon parameters."))}},w=v("".concat(m,"/api/v1/weather/current")),y=v("".concat(m,"/api/v1/weather/daily")),O=function(e){return{type:"SET_LAT_LON",lat:e.lat,lon:e.lon}},_=function(e){return{type:"SET_LOC_NAME",name:e}},S=function(e){return function(e){var t=e.lat,n=e.lon;return fetch(g("".concat(m,"/api/v1/geocode/decode"),{lat:t,lon:n})).then(function(e){if(e.status>=400)throw new Error("Bad response");return e.json()}).catch(function(e){throw e}).then(function(e){return Object.keys(e).map(function(t){return e[t]}).filter(function(e){return e.address_components})})}(e.loc).catch(function(t){return{results:[{formatted_address:e.locName,address_components:[]}]}})},b=function(){return fetch("https://ipinfo.io/json").then(function(e){if(e.status>=400)throw new Error("Bad response");return e.json()}).catch(function(e){throw e}).then(function(e){var t,n=e.city,r=e.country,a=(e.postal,e.loc);if(!(a||n&&r))throw new Error("Unable to get location from IP address.");if(a){var o=a.split(",").map(function(e){return e.trim()}),c=Object(f.a)(o,2);t={lat:c[0],lon:c[1]}}return{locName:"".concat(n,", ").concat(r),loc:t}}).catch(function(e){throw e}).catch(E).catch(function(e){return{locName:"Hell's Kitchen, New York City",loc:{lat:40.7630299,lon:-73.9950965}}})},W=function(e){var t=e.filter(function(e){for(var t=e.address_components,n=0;n<t.length;n++){var r=t[n].types;if(r.indexOf("point_of_interest")>-1||r.indexOf("establishment")>-1||r.indexOf("street_number")>-1||r.indexOf("route")>-1)return!1}return!0}).slice(0,1);return t=0===t.length&&e.length>0?e[0]:0===t.length?{}:t[0]},T={name:"New York, NY",lat:40.712775,lon:-74.005973},j={forecastWeather:{list:[]},currentWeather:{main:{temp:void 0},weather:[]}},R=(n(39),n(21)),N=n.n(R),k=function(e){return function(t,n){t(function(e){return{type:"UPDATE_SEARCH_FIELD",searchFieldText:e}}(e));var r=n().lookupLocation;if(r.debounceLookupSuggestions&&r.debounceLookupSuggestions.cancel(),e){var a=N()(function(){return(n=e,fetch(g("".concat(m,"/api/v1/geocode/encode"),{address:encodeURIComponent(n)})).then(function(e){if(e.status>=400)throw new Error("Bad response");return e.json()}).catch(function(e){throw e}).then(function(e){return Object.keys(e).map(function(t){return e[t]}).filter(function(e){return e.address_components})})).then(function(e){return t({type:"UPDATE_SUGGESTIONS",suggestions:e})});var n},600,{maxWait:1e3});a(),t(function(e){return{type:"DEBOUNCE_LOOKUP_SUGGESTIONS",fn:e}}(a))}}},C={editingSearchField:!1,searchField:"",suggestions:[]},F=n(22),A=n.n(F),L=n(23),U=n.n(L),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).componentDidUpdate=function(e){!1===e.editing&&!0===n.props.editing&&n.searchField.focus()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"location-box-wrapper ".concat(this.props.sky)},a.a.createElement("div",{className:"location-box".concat(this.props.editing?" editing":"")},a.a.createElement("div",{className:"location-icon",onClick:this.props.editSearchField},a.a.createElement("img",{src:this.props.editing?U.a:A.a,alt:"Location Pin"})),this.props.editing?a.a.createElement("input",{value:this.props.searchField,onChange:this.props.updateSearchField,onBlur:function(t){return setTimeout(e.props.blurSearchField,50)},className:"location-search-field",ref:function(t){e.searchField=t}}):a.a.createElement("div",{className:"location-string",onClick:this.props.editSearchField},this.props.locationName)),this.props.locationSuggestions&&this.props.locationSuggestions.length>0&&a.a.createElement("div",{className:"location-suggestions"},this.props.locationSuggestions.map(function(t,n){var r=t.formatted_address,o=t.geometry,c=t.place_id;return a.a.createElement("div",{onClick:e.props.selectLocation(r,{lat:o.location.lat,lon:o.location.lng}),key:"".concat(n,"-").concat(c)},r)})))}}]),t}(r.PureComponent),D=Object(h.b)(function(e){var t=e.location,n=e.lookupLocation,r=e.sky;return{locationName:t.name,locationSuggestions:n.suggestions,searchField:n.searchField,editing:n.editingSearchField,sky:r}},function(e){return{editSearchField:function(t){return e({type:"EDIT_SEARCH_FIELD"})},updateSearchField:function(t){return e(k(t.target.value))},blurSearchField:function(){return e({type:"BLUR_SEARCH_FIELD"})},selectLocation:function(t,n){return function(r){e(_(t)),e(O(n))}}}})(H),I=(n(49),n(51),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,t);return Math.round(e*n)/n}),P=function(e){return I(M(e))},x=function(e){return I(G(e))},G=function(e){return 1.8*e-459.67},M=function(e){return e-273.15},B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).convert=function(e){return"F"===n.props.temperatureSystem?x(e):P(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("span",{onClick:this.props.toggle,className:"temp"},a.a.createElement("span",null,this.props.kelvin?this.convert(this.props.kelvin):"--"),a.a.createElement("span",{className:"temp-unit"},String.fromCharCode(176),this.props.temperatureSystem))}}]),t}(r.PureComponent),Y=Object(h.b)(function(e){return{temperatureSystem:e.temperatureSystem}},function(e){return{toggle:function(){return e({type:"TOGGLE_TEMPERATURE_SYSTEM"})}}})(B),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"current-weather"},this.props.pending&&a.a.createElement("div",{className:"pending"},"Updating..."),this.props.error&&a.a.createElement("div",{className:"error"},this.props.error),a.a.createElement("div",{className:"current-weather-icons"},this.props.currentWeather.weather.map(function(e,t){var n=e.main,r=e.icon;return a.a.createElement("div",{key:"weather-icon-".concat(n,"-").concat(t)},a.a.createElement("img",{src:"images/weather-icons/svg/".concat(r,".svg"),alt:n}))})),a.a.createElement("div",{className:"current-weather-temp"},a.a.createElement("div",{className:"temp-live"},a.a.createElement(Y,{kelvin:this.props.currentWeather.main.temp}))),a.a.createElement("div",{className:"current-weather-description"},this.props.currentWeather.weather.map(function(e){return e.description}).join(", ")))}}]),t}(r.PureComponent);K.defaultProps={currentWeather:{weather:[],main:{}},pending:!1,error:void 0};var J=K,$=(n(53),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).today=(new Date).getDay(),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){this.today=(new Date).getDay()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"forecast-weather"},this.props.pending&&a.a.createElement("div",{className:"pending"},"Updating..."),this.props.error&&a.a.createElement("div",{className:"error"},this.props.error),this.props.forecastWeather.list&&this.props.forecastWeather.list.map(function(t,n){var r=t.temp,o=t.weather,c=e.today+n,i={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"}[c>6?c-7:c];return a.a.createElement("div",{className:"forecast-weather-day",key:"forecast-weather-".concat(n)},a.a.createElement("div",{className:"forecast-weekday"},i),a.a.createElement("div",{className:"forecast-temperature"},a.a.createElement(Y,{kelvin:r.max}),a.a.createElement(Y,{kelvin:r.min})),a.a.createElement("div",{className:"forecast-day-icon"},o.map(function(e,t){var r=e.main,o=e.icon;return a.a.createElement("img",{src:"images/weather-icons/svg/".concat(o,".svg"),alt:r,key:"forecast-day-".concat(n,"-icon-").concat(t)})})),a.a.createElement("div",{className:"forecast-day-description"},o.map(function(e){return e.description}).join(", ")))}))}}]),t}(r.PureComponent));$.defaultProps={forecastWeather:{list:[]},pending:!1,error:void 0};var q=$,z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).componentWillReceiveProps=function(e){var t=n.props.location,r=t.lat,a=t.lon,o=e.location,c=o.lat,i=o.lon,s=c!==r||i!==a,u=e.currentWeather.dt,l=Date.now()-6e5>parseInt(u,10);(s||l)&&n.props.getForecasts(e.location)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.determineLocation()}},{key:"render",value:function(){return a.a.createElement("div",{className:"weather-container ".concat(this.props.sky,"-bg")},a.a.createElement(D,null),a.a.createElement("div",{className:"weather-forecasts"},a.a.createElement(J,{currentWeather:this.props.currentWeather.data,pending:this.props.currentWeather.pending,error:this.props.currentWeather.error}),a.a.createElement(q,{forecastWeather:this.props.forecastWeather.data,pending:this.props.forecastWeather.pending,error:this.props.forecastWeather.error})))}}]),t}(r.Component),Q=Object(h.b)(function(e){var t=e.location,n=e.weather,r=e.sky;return{location:t,currentWeather:n.currentWeather,forecastWeather:n.forecastWeather,sky:r}},function(e){return{determineLocation:function(){return e(function(e,t){e(_("Fetching location...")),b().then(function(t){e(O(t.loc)),S(t).then(function(t){return e(_(W(t).formatted_address||""))})})})},getForecasts:function(t){return e(function(e){var t=e.lat,n=e.lon;return function(e,r){var a={};e({type:"FETCH_CURRENT_WEATHER"}),w({lat:t,lon:n}).then(function(e){return e.status>=400?e.json().then(function(e){var t=e.message;throw new Error(t)}):e.json()}).then(function(t){return a.currentWeather=t,e({type:"FETCH_FORECAST_WEATHER"}),y({id:t.id})},function(e){return a.currentWeather=e,a}).then(function(e){return e.status>=400?e.json().then(function(e){var t=e.message;throw new Error(t)}):e.json()}).then(function(e){return a.forecastWeather=e,a},function(e){return a.forecastWeather=e,a}).then(function(t){var n,r,a;console.log(t),t.currentWeather&&t.currentWeather instanceof Error===!1?(e((n=t.currentWeather.dt,r=t.currentWeather.sys.sunrise,a=t.currentWeather.sys.sunset,t.currentWeather.clouds.all,{type:"SET_SKY",sky:n>=r&&n<=a?"day":"night"})),e({type:"SET_CURRENT_WEATHER",payload:t.currentWeather})):e({type:"SET_CURRENT_WEATHER_ERROR",payload:"Could not get current weather: "+t.currentWeather.message}),t.forecastWeather&&t.forecastWeather instanceof Error===!1?e(function(e){return{type:"SET_FORECAST_WEATHER",payload:e}}(t.forecastWeather)):e(function(e){return{type:"SET_FORECAST_WEATHER_ERROR",payload:e}}("Could not get forecast: "+t.forecastWeather.message))})}}(t))}}})(z),V=n(9),X=n(24),Z=[X.a],ee=Object(V.d)(Object(V.c)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOC_NAME":return Object(d.a)({},e,{name:t.name});case"SET_LAT_LON":return Object(d.a)({},e,{lat:t.lat,lon:t.lon});default:return e}},lookupLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEBOUNCE_LOOKUP_SUGGESTIONS":return Object(d.a)({},e,{debounceLookupSuggestions:t.fn});case"UPDATE_SUGGESTIONS":return Object(d.a)({},e,{suggestions:e.editingSearchField?t.suggestions:[]});case"UPDATE_SEARCH_FIELD":return Object(d.a)({},e,{searchField:t.searchFieldText});case"EDIT_SEARCH_FIELD":return Object(d.a)({},e,{editingSearchField:!0});case"BLUR_SEARCH_FIELD":return e.debounceLookupSuggestions&&e.debounceLookupSuggestions.cancel(),Object(d.a)({},e,{editingSearchField:!1,searchField:"",suggestions:[]});default:return e}},temperatureSystem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"F";switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_TEMPERATURE_SYSTEM":return"F"===e?"C":"F";default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENT_WEATHER":return Object(d.a)({},e,{currentWeather:Object(d.a)({},e.currentWeather,{pending:!0,error:void 0,dt:Date.now()})});case"FETCH_FORECAST_WEATHER":return Object(d.a)({},e,{forecastWeather:Object(d.a)({},e.forecastWeather,{pending:!0,error:void 0})});case"SET_CURRENT_WEATHER_ERROR":return Object(d.a)({},e,{currentWeather:Object(d.a)({},e.currentWeather,{pending:!1,error:t.payload})});case"SET_FORECAST_WEATHER_ERROR":return Object(d.a)({},e,{forecastWeather:Object(d.a)({},e.forecastWeather,{pending:!1,error:t.payload})});case"SET_CURRENT_WEATHER":return Object(d.a)({},e,{currentWeather:{data:t.payload,pending:!1,error:void 0}});case"SET_FORECAST_WEATHER":return Object(d.a)({},e,{forecastWeather:{data:t.payload,pending:!1,error:void 0}});default:return e}},sky:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SKY":return t.sky;default:return e}}}),function(){try{var e=localStorage.getItem("fcc-weather-app");return null==e?void 0:JSON.parse(e)}catch(t){return}}(),V.a.apply(void 0,Z));ee.subscribe(function(){var e=ee.getState();!function(e){try{localStorage.setItem("fcc-weather-app",JSON.stringify(e))}catch(t){}}(Object(d.a)({},e,{location:{name:e.location.name}}))});var te=ee,ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(h.a,{store:te},a.a.createElement(Q,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/fcc-weather-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/fcc-weather-app","/service-worker.js");ne?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):re(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):re(e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.28a6cbeb.chunk.js.map