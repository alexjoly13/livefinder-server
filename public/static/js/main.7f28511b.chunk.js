(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),l=a.n(c),s=(a(84),a(3)),i=a(4),o=a(6),m=a(5),u=a(7),d=a(203),h=a(78),p=(a(85),a(201)),E=(a(86),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"HomePage"},r.a.createElement("div",{className:"home-card"},r.a.createElement("img",{className:"logo",src:"images/logo.png",alt:"logo"}),r.a.createElement("h1",null,"Live Finder."),r.a.createElement("h2",null,"Enjoy the full experience with Spotify"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,"To enjoy the full experience, we recommand you to sync your acount with spotify. You also can sync your spotify account to facebook to live the social experience and see who is up for a live!"),r.a.createElement("div",null,r.a.createElement("a",{href:"".concat("\u201c\u201d","/auth/spotify")},"Connect with Spotify"),r.a.createElement("a",{href:"#0"},"Connect with Deezer"),r.a.createElement("a",{href:"#0"},"Connect with Apple Music ")),r.a.createElement("hr",null)),r.a.createElement("div",{className:"home-card"},r.a.createElement("h1",null,"Live Me Alone."),r.a.createElement("h2",null,"Don't want the full experience ?"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,"Don't worrie, you can still enjoy the app and discover new bands and lives. And if you want to sync later on, you still can come back to this screen."),r.a.createElement(p.a,{className:"big-btn",to:"/generic"},"Don't connect")))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("p",null,"Failed to connect"))}}]),t}(n.Component),f=a(34),y=a(47),g=a.n(y).a.create({baseURL:"\u201c\u201d",withCredentials:!0});function N(e){throw e.response&&e.response.data?console.log("API ERROR",e.response.data):console.log("React Code Error",e),alert("ERROR ! SOMETHING WENT WRONG !"),e}a(108);var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={topArtists:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/userInfo").catch(N).then(function(t){e.setState({topArtists:t.data})})}},{key:"render",value:function(){var e=this.state.topArtists;return r.a.createElement("section",{className:"padding-top off-grid-section desktop-cards-section"},r.a.createElement("div",{className:"desktop-card-heading"},r.a.createElement("h3",null,"Your next recommended concerts."),r.a.createElement("p",null,"Check out the next concerts from the artists you most listened to."),r.a.createElement("hr",{className:"small-hr"})),r.a.createElement("div",null,e.map(function(e){return r.a.createElement("div",{key:e.resultsPage.results.event[0].performance[0].displayName},r.a.createElement("h3",null,"#",e.resultsPage.results.event[0].performance[0].displayName),r.a.createElement("div",{className:"inline-carousel desktop-caroussel"},e.resultsPage.results.event.map(function(e){return r.a.createElement("div",{key:e.displayName},r.a.createElement("div",{className:"inline-card"},r.a.createElement("span",{className:"outline-text"},e.type),r.a.createElement("span",{className:"card-btn"}),r.a.createElement("div",{className:"card-text"},r.a.createElement(f.a,{to:(t=e,"/concert-info/".concat(t.id))},r.a.createElement("h4",null,e.venue.displayName),r.a.createElement("hr",null),r.a.createElement("h3",null,e.displayName)))));var t})))})))}}]),t}(n.Component),k=a(48),O=a(77),j=a(33);a(186),a(187);var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={artistConcerts:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/similar-artist").catch(N).then(function(t){e.setState({artistConcerts:t.data})})}},{key:"render",value:function(){var e=this.state.artistConcerts;return r.a.createElement("section",{className:""},r.a.createElement("h3",null,"You may also like."),r.a.createElement("p",null,"Discover some concerts we think you might enjoy"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("div",null,e.map(function(e){return r.a.createElement("div",{className:"inline-carousel",key:e.resultsPage.results.event[0].displayName},r.a.createElement("div",{className:"inline-carousel"},e.resultsPage.results.event.map(function(e){return r.a.createElement("div",{key:e.id,className:"inline-thin-card"},r.a.createElement("div",{className:"card-thin-img"},r.a.createElement("p",{className:"date-day"},e.start.date.slice(5,7)),r.a.createElement("p",{className:"date-month"},e.start.date.slice(8)),r.a.createElement("p",{className:"date-year"},e.start.date.slice(0,4))),r.a.createElement("div",{className:"text-thin-card"},r.a.createElement("h4",null,e.venue.displayName),r.a.createElement(f.a,{to:(t=e,"/concert-info/".concat(t.id))},r.a.createElement("h3",null,e.performance[0].displayName))));var t})))})))}}]),t}(n.Component);a(188);var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={topFrenchArtists:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/top-french").catch(N).then(function(t){e.setState({topFrenchArtists:t.data})})}},{key:"render",value:function(){var e=this.state.topFrenchArtists;return r.a.createElement("section",{className:"desktop-cards-section"},r.a.createElement("div",{className:"desktop-card-heading flex-item1"},r.a.createElement("h3",null,"Trending lives around you."),r.a.createElement("p",null,"Discover concerts from bands that are trending around you (updated every Fridays)."),r.a.createElement("hr",{className:"small-hr"})),r.a.createElement("div",{className:"flex-item2"},e.map(function(e){return r.a.createElement("div",{key:e.resultsPage.results.event[0].id},r.a.createElement("hr",null),r.a.createElement("h3",null,e.resultsPage.results.event[0].performance[0].displayName),r.a.createElement("div",{className:"inline-carousel desktop-caroussel"},e.resultsPage.results.event.map(function(e){return r.a.createElement("div",{key:e.displayName},r.a.createElement("div",{className:"inline-card-v2"},r.a.createElement("span",{className:"outline-text"},e.type),r.a.createElement("span",{className:"card-btn"}),r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"inline-card-v2-text"},r.a.createElement(f.a,{to:(t=e,"/concert-info/".concat(t.id))},r.a.createElement("h4",null,e.venue.displayName),r.a.createElement("hr",null),r.a.createElement("h3",null,e.displayName))))));var t})))})))}}]),t}(n.Component);var I=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("section",{className:"AttendingEvent"},r.a.createElement("div",{className:"AttendingEvent-text"},r.a.createElement("h3",null,"Your Attending Concert"),r.a.createElement("p",null,"Here are your next live events planned."),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("div",{className:"flex-small-cards"},e.concert.map(function(e){return r.a.createElement("div",{key:e.id,className:"small-card"},r.a.createElement("div",{className:"small-card-text"},r.a.createElement("div",{className:"small-card-date"},r.a.createElement("p",null,e.start.date),r.a.createElement("p",null,e.venue.displayName)),r.a.createElement("div",null,r.a.createElement(f.a,{to:(t=e,"/concert-info/".concat(t.id))},r.a.createElement("h3",null,e.performance[0].displayName)))));var t}))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement(p.a,{to:"/connected"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1378/1378756.svg",alt:"lol"}))),r.a.createElement("div",null,r.a.createElement(p.a,{to:"/user-dashboard"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/747/747376.svg",alt:"lol"}))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={topArtists:[],topArtistName:[],concertArray:[],currentUser:{concert:[]}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props,n=a.match,r=a.history;n.params.loginToken&&(e=n.params,g.post("/auth/token-login",e).catch(N)).then(function(e){console.log("Logged-In"),r.replace("/connected"),t.props.loggedIn(e.data)})}},{key:"logoutClick",value:function(){var e=this;g.get("/logout").catch(N).then(function(t){console.log("LOGGED OUT"),e.props.loggedIn(null)})}},{key:"render",value:function(){var e=this,t={fadeInDown:{animation:"x 1.5s",animationName:O.a.keyframes(k.fadeInDown,"fadeInDown")}},a=this.props.currentUser;return console.log(a),this.props.currentUser?r.a.createElement("section",{className:"Connected"},r.a.createElement(j.a,null,r.a.createElement("header",{className:"Header"},r.a.createElement(A,{style:t.fadeInDown}),r.a.createElement("div",{className:"header-card",style:t.fadeInDown},r.a.createElement("div",{className:"header-text"},r.a.createElement("div",{className:"img-flex"},r.a.createElement("img",{className:"profilPic",src:this.props.currentUser.image,alt:""})),r.a.createElement("h1",null,"Hi ",this.props.currentUser.fullName),r.a.createElement("hr",null),r.a.createElement("h2",null,"Kean for new concerts?"),r.a.createElement("p",null,"Check out the next live bands arround, any trending concerts arround any more."),r.a.createElement("small",null,r.a.createElement(p.a,{to:"/"},r.a.createElement("button",{className:"outline-text-black",onClick:function(){return e.logoutClick()}},"Log Out"))))))),r.a.createElement(b,Object.assign({},this.props,{style:t.fadeInDown})),r.a.createElement(I,Object.assign({},this.props,{style:t.fadeInDown})),r.a.createElement(w,Object.assign({},this.props,{style:t.fadeInDown})),r.a.createElement(C,Object.assign({},this.props,{style:t.fadeInDown}))):r.a.createElement("p",null,"Loading...")}}]),t}(n.Component);a(196);var D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={concertsParis:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/concerts-paris").catch(N).then(function(t){e.setState({concertsParis:t.data})})}},{key:"render",value:function(){var e=this.state.concertsParis;return r.a.createElement("section",{className:"NextConcertsParis"},r.a.createElement("h3",null,"Next Concerts in Paris"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,"See the upcomming event in Paris"),r.a.createElement("div",{className:"column-card-flex"},e.map(function(e){return r.a.createElement("div",{className:"column-card"},r.a.createElement(f.a,{to:(t=e,"/concert-info/".concat(t.id))},r.a.createElement("p",null,r.a.createElement("span",null,e.type)),r.a.createElement("h3",null,e.displayName),r.a.createElement("p",null,r.a.createElement("span",null,e.venue.displayName))));var t})))}}]),t}(n.Component),S=(a(197),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={franceTopArtists:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/generic").catch(N).then(function(t){e.setState({franceTopArtists:t.data.artist})})}},{key:"oneImg",value:function(e){return Object.values(e)}},{key:"render",value:function(){var e=this,t=this.state.franceTopArtists;return r.a.createElement("section",{className:"GenericInfosHome"},r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(f.a,{to:"/"},r.a.createElement("h1",{className:"btn-home"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/130/130882.svg",alt:""})))),r.a.createElement("div",null,r.a.createElement("span",{className:"outline-text"},"GENERIC"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h1",null,"Hello.",r.a.createElement("br",null)," You are not connected?"),r.a.createElement("h2",null,"Don't panic, we got your back!"),r.a.createElement("p",null,"You are currently on the unsynchronised page. You will discover artits and lives that are famous around you :)"))),r.a.createElement("h3",null,"Top Artists in France"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,"Discover what french people like to listen right now"),t.map(function(t){return r.a.createElement("div",{className:"column-card-with-image",key:t.mbid},r.a.createElement("img",{src:e.oneImg(t.image[4]),alt:"artist picto"}),r.a.createElement("div",{className:"column-card-with-image-text"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.listeners," Listeners")))}),r.a.createElement(D,null))}}]),t}(n.Component)),U=(a(198),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={songkick:[],lastfm:[],isSubmitSuccessful:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkingIfAttending",value:function(e){var t=this.props.match.params.concertId,a=this.props.currentUser.concert,n=[];a.forEach(function(e){n.push(e.id)});return n.some(function(e){return e-t===0})}},{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match.params;(e=a.concertId,g.get("/concert-info/".concat(e)).catch(N)).then(function(e){var a=t.state.lastfm,n=t.state.songkick;n.push(e.data[0]),a.push(e.data[1]),t.setState({songkick:n,lastfm:a})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a,n=this.props.match.params;(a=n.concertId,g.post("/concert-info/".concat(a)).catch(N)).then(function(e){t.props.addConcertToUser(e.data),t.setState({isSubmitSuccessful:!0})})}},{key:"oneImg",value:function(e){return Object.values(e)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.isSubmitSuccessful,t.lastfm),n=t.songkick,c=this.props.currentUser;return this.checkingIfAttending(c)?r.a.createElement("section",{className:"ConcertInfo"},a.map(function(t){return r.a.createElement("div",{key:t.name},r.a.createElement("div",null,r.a.createElement(A,null)),r.a.createElement("img",{className:"bk-img",src:e.oneImg(t.image[4]),alt:"artist picto"}),r.a.createElement("div",null,r.a.createElement("div",{className:"artist-header"},r.a.createElement("div",{className:"artist-card"},r.a.createElement("img",{className:"",src:e.oneImg(t.image[4]),alt:"artist picto"})),r.a.createElement("h1",null,t.name),r.a.createElement("h4",null,"Total listeners: ",t.stats.listeners)),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Similar Artists."),r.a.createElement("div",{className:"inline-small-carousel"},t.similar.artist.map(function(t){return r.a.createElement("div",{className:"inline-small-card",key:t.url},r.a.createElement("h4",null,t.name),r.a.createElement("img",{src:e.oneImg(t.image[2]),alt:"artist picto"}))})),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Genre."),r.a.createElement("div",{className:"genre-sec"},t.tags.tag.map(function(e){return r.a.createElement("div",{key:e.url},r.a.createElement("h5",null,e.name))})),r.a.createElement("div",{className:"summary"},r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Bio."),r.a.createElement("p",null,t.bio.summary))))}),r.a.createElement("div",{className:"concert-card"},n.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{className:"concert-date"},e.start.date)),r.a.createElement("p",null,r.a.createElement("span",{className:"concert-place"},e.venue.displayName)),r.a.createElement("h1",null,e.displayName),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,e.type),r.a.createElement("p",null,e.venue.street,", ",e.location.city,","," ",e.venue.zip))}),r.a.createElement("h2",null,"Great! You are already attending this concert ."))):r.a.createElement("section",{className:"ConcertInfo"},a.map(function(t){return r.a.createElement("div",{key:t.mbid},r.a.createElement("div",null,r.a.createElement(A,null)),r.a.createElement("img",{className:"bk-img",src:e.oneImg(t.image[4]),alt:"artist picto"}),r.a.createElement("div",null,r.a.createElement("div",{className:"artist-header"},r.a.createElement("div",{className:"artist-card"},r.a.createElement("img",{className:"",src:e.oneImg(t.image[4]),alt:"artist picto"})),r.a.createElement("h1",null,t.name),r.a.createElement("h3",null,"Total listeners: ",t.stats.listeners)),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Similar Artists."),r.a.createElement("div",{className:"inline-small-carousel"},t.similar.artist.map(function(t){return r.a.createElement("div",{className:"inline-small-card",key:t.url},r.a.createElement("h4",null,t.name),r.a.createElement("img",{src:e.oneImg(t.image[2]),alt:"artist picto"}))})),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Genre."),r.a.createElement("div",{className:"genre-sec"},t.tags.tag.map(function(e){return r.a.createElement("div",{key:e.url},r.a.createElement("h5",null,e.name))})),r.a.createElement("div",{className:"summary"},r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("h3",null,"Bio."),r.a.createElement("p",null,t.bio.summary))))}),r.a.createElement("div",{className:"concert-card"},n.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,r.a.createElement("span",{className:"concert-date"},e.start.date)),r.a.createElement("h1",null,e.displayName),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("p",null,e.type),r.a.createElement("p",null,e.venue.displayName),r.a.createElement("p",null,e.venue.street,",",e.location.city,","," ",e.venue.zip))}),r.a.createElement("button",{className:"btn from-top",onClick:function(t){return e.handleSubmit(t)}},r.a.createElement("h3",null,"ATTENDING"))))}}]),t}(n.Component)),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={lastfm:[],songkick:[],spotify:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/test").catch(N).then(function(t){var a=e.state.lastfm,n=e.state.songkick;a.push(t.data),e.setState({songkick:n,lastfm:a})})}},{key:"oneImg",value:function(e){return Object.values(e)}},{key:"render",value:function(){var e=this.state,t=e.lastfm;e.songkick;return console.log("Lastfm DATAq",t),r.a.createElement("section",null,r.a.createElement("h1",null,"TEST"))}}]),t}(n.Component);a(199);var T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={relatedArtists:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/spotiPlayer").catch(N).then(function(t){e.setState({relatedArtists:t.data.artists})})}},{key:"render",value:function(){var e=function(e){var t=Math.floor(14*Math.random())+1,a=t+5;return e.slice(t,a)}(this.state.relatedArtists);return r.a.createElement("section",{className:"spotiPlayer"},r.a.createElement("h3",null,"Discover some Artists with us"),r.a.createElement("p",null,"Check the Random Players to discover or remember new artists"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("ul",null,e.map(function(e){var t="https://open.spotify.com/embed/artist/".concat(e.id),a="https://open.spotify.com/follow/1/?uri=spotify:artist:".concat(e.id,"&size=basic&theme=light");return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("iframe",{title:e.name,src:t,width:"300",height:"80",frameBorder:"10",allowtransparency:"true",allow:"encrypted-media"}),r.a.createElement("div",null,r.a.createElement("iframe",{title:e.name,src:a,width:"300",height:"56",scrolling:"no",frameborder:"0",allowtransparency:"true"})))})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={playListArray:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.get("/get-top-playlist").catch(N).then(function(t){var a=e.state.playListArray;t.data.items.forEach(function(e){a.push(e)}),e.setState({playListArray:a})})}},{key:"render",value:function(){var e=this.state.playListArray;return r.a.createElement("section",null,r.a.createElement("h3",null,"Your favourite Playlists"),r.a.createElement("p",null,"See the playlist you have created here"),r.a.createElement("hr",{className:"small-hr"}),r.a.createElement("ul",null,e.map(function(e){var t="https://open.spotify.com/embed/user/spotify/playlist/".concat(e.id);return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("iframe",{title:e.name,src:t,width:"300",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))})))}}]),t}(n.Component);var L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t,a=this;(t=e.id,g.delete("/delete-concert/".concat(t)).catch(N)).then(function(e){a.props.onConcertDelete(e.data)})}},{key:"render",value:function(){var e=this,t=this.props.currentUser;return r.a.createElement("section",null,r.a.createElement("header",{className:"Header"},r.a.createElement(A,null),r.a.createElement("div",{className:"header-card"},r.a.createElement("div",{className:"header-text"},r.a.createElement("div",{className:"img-flex"},r.a.createElement("img",{className:"profilPic",src:t.image,alt:""})),r.a.createElement("h1",null,"dashboard"),r.a.createElement("h2",null,t.fullName),r.a.createElement("p",null,"We display for you some of the informations regarding your account"),r.a.createElement("hr",null)))),r.a.createElement("div",{className:"padding-top desktop-cards-section"},r.a.createElement("div",null,r.a.createElement("h3",null,"Your next concerts."),r.a.createElement("p",null,"Here are some of the concert you are attending:"),r.a.createElement("hr",{className:"small-hr"}),t.concert.map(function(t){return r.a.createElement("div",{className:"inline-thin-card"},r.a.createElement("div",{className:"card-thin-img"},r.a.createElement("p",{className:"date-day"},t.start.date.slice(5,7)),r.a.createElement("p",{className:"date-month"},t.start.date.slice(8)),r.a.createElement("p",{className:"date-year"},t.start.date.slice(0,4))),r.a.createElement("div",{className:"text-thin-card"},r.a.createElement("h4",null,t.venue.displayName),r.a.createElement(f.a,{to:(a=t,"/concert-info/".concat(a.id))},r.a.createElement("h3",null,t.performance[0].displayName))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn-delete",onClick:function(){return e.handleSubmit(t)}},"x")));var a})),r.a.createElement("div",null,r.a.createElement(T,this.props)),r.a.createElement("div",null,r.a.createElement(M,null))))}}]),t}(n.Component),R=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e));var n=localStorage.getItem("currentUser");return n&&(n=JSON.parse(n)),a.state={currentUser:n},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"updateUser",value:function(e){e?localStorage.setItem("currentUser",JSON.stringify(e)):localStorage.removeItem("currentUser"),this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;this.state.currentUser;return r.a.createElement("section",{className:"App"},r.a.createElement("div",{className:"body"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{path:"/connected/:loginToken?",render:function(t){return r.a.createElement(x,{currentUser:e.state.currentUser,loggedIn:function(t){return e.updateUser(t)},match:t.match,history:t.history})}}),r.a.createElement(h.a,{path:"/top-french",component:C}),r.a.createElement(h.a,{path:"/similar-artist",component:w}),r.a.createElement(h.a,{path:"/concert-info/:concertId",render:function(t){return r.a.createElement(U,{match:t.match,currentUser:e.state.currentUser,addConcertToUser:function(t){return e.updateUser(t)}})}}),r.a.createElement(h.a,{path:"/spotiPlayer",component:T}),r.a.createElement(h.a,{path:"/playListPlayer",component:M}),r.a.createElement(h.a,{path:"/generic",component:S}),r.a.createElement(h.a,{path:"/test",component:P}),r.a.createElement(h.a,{path:"/attending-event",render:function(){return r.a.createElement(I,{currentUser:e.state.currentUser})}}),r.a.createElement(h.a,{path:"/user-dashboard",render:function(){return r.a.createElement(L,{currentUser:e.state.currentUser,onConcertDelete:function(t){return e.updateUser(t)}})}}),r.a.createElement(h.a,{component:v}))),r.a.createElement("footer",null,r.a.createElement("p",null,"Made with \ud83c\udfb8 at Ironhack Paris")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(202);l.a.render(r.a.createElement(G.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a(200)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.7f28511b.chunk.js.map