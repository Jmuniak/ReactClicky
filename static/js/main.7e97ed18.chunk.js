(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),o=a.n(c),s=(a(14),a(3)),r=a(4),l=a(7),u=a(5),m=a(8),d=(a(15),a(6));a(16);var g=function(e){return i.a.createElement("div",{className:"jumbotron text-center"},i.a.createElement("h1",null,e.children),i.a.createElement("p",null,"Try to click all 12 images without clicking the same image twice"),i.a.createElement("div",{className:"current-score"},i.a.createElement("h3",null,"Your Current Score is: ",e.currentScore)),i.a.createElement("div",{className:"best-score"},i.a.createElement("h3",null,"Your Best Score is: ",e.bestScore)),i.a.createElement("div",{className:"rounds-played"},i.a.createElement("h3",null,"Rounds Played: ",e.roundsPlayed)),i.a.createElement("div",{className:"click-count"},i.a.createElement("h3",null,"Click Count: ",e.clickCount)),i.a.createElement("div",{className:"alert-div"},i.a.createElement("h3",null,e.alert)))};a(17);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var k=function(e){var t=e.imagesJSON,a=e.handlePlayerGuess,n=e.handleIncrement;return i.a.createElement("div",{className:"row justify-content-center"},t.map((function(e){return i.a.createElement("div",{className:"card img-container justify-content-center col-3","data-id":e.id,key:e.id},i.a.createElement("img",{onClick:function(e){return a(e)&&n(e)},className:"card-img","data-id":e.id,key:e.id,alt:e.name,src:e.image}))})))},p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={clickCount:0,imagesJSON:d,imagesGuessed:[],currentScore:0,bestScore:0,alert:"Click an image to begin",roundsPlayed:0},a.handleIncrement=function(){a.setState({clickCount:a.state.clickCount+1})},a.handleDecrement=function(){a.setState({clickCount:a.state.clickCount-1})},a.checkImageId=function(e){return a.state.imagesGuessed.find((function(t){return t===e}))?"Incorrect":"Correct"},a.handlePlayerGuess=function(e){var t=a.state.clickCount,n=e.target.dataset.id,i=a.checkImageId(n);console.log("Current Guess: ".concat(n)),console.log("Guess Chek: ".concat(i));var c=a.state.bestScore,o=a.state.currentScore,s=a.state.alert,r=a.state.imagesGuessed,l=a.state.roundsPlayed;if("Incorrect"===i)s="You already clicked that image this round!",c=o>c?o:c,o=0,l++,r=[],console.log("Current Score: ".concat(o,", Best Score: ").concat(c)),console.log("Alert: ".concat(s)),console.log("Images Guessed Already: ".concat(r));else if(s="Correct, no matches yet this round!",r.push(n),c=++o>c?o:c,console.log("Images Guessed Already: ".concat(r)),console.log("Alert: ".concat(s)),12===o){var u=(t+1)/(l+1);s="You Win! it took you ".concat(t+1," clicks and ").concat(l+1," rounds to Win\n        Your average is ").concat(u," clicks per round")}a.setState({imagesJSON:a.state.imagesJSON.sort((function(){return Math.random()-.5})),alert:s,clickCount:t+1,roundsPlayed:l,currentScore:o,bestScore:c,imagesGuessed:r})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,null,i.a.createElement(g,{currentScore:this.state.currentScore,bestScore:this.state.bestScore,roundsPlayed:this.state.roundsPlayed,clickCount:this.state.clickCount,alert:this.state.alert},"The `Don't Match` Memory Game!"),i.a.createElement(k,{imagesJSON:this.state.imagesJSON,handlePlayerGuess:this.handlePlayerGuess,handleIncrement:this.handleIncrement})))}}]),t}(n.Component);o.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7e97ed18.chunk.js.map