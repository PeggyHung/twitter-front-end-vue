(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3e514c4"],{"0f31":function(t,e,n){},"768e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"left-content"},[n("Navbar")],1),n("div",{staticClass:"middle-content scrollbar"},[n("header",[n("img",{staticClass:"vector-primary",attrs:{src:"https://i.imgur.com/PYbiwrX.png",alt:""},on:{click:function(e){return t.$router.back()}}}),n("div",{staticClass:"title"},[n("h5",[t._v(t._s(t.name))]),n("p",[t._v(t._s(t.tweetCount)+" 推文")])])]),n("div",{staticClass:"wrapper-follow-nav-pills"},[n("ul",[n("router-link",{staticClass:"to-follower",attrs:{to:{name:"follower"}}},[n("li",[t._v("追隨者")])]),n("li",{staticClass:"active"},[t._v("正在追隨")])],1)]),t.isLoading?n("Spinner"):n("div",t._l(t.users,(function(t){return n("FollowCard",{key:t.id,attrs:{"initial-user":t}})})),1)],1),n("div",{staticClass:"right-content"},[n("PopularList")],1)])},r=[],s=n("1da1"),o=(n("b0c0"),n("96cf"),n("d178")),i=n("d134"),c=n("f47d"),l=n("4cce"),u=n("6783"),d=n("2375"),v={components:{Navbar:o["a"],FollowCard:i["a"],PopularList:c["a"],Spinner:d["a"]},data:function(){return{user:{id:-1,name:"",totalTweetCount:0},users:[],name:"",tweetCount:0,isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchFollowingsTweets(t),this.getUserInfo(t)},methods:{fetchFollowingsTweets:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.isLoading=!0,n.next=4,u["a"].getFollowingsTweets(t);case 4:a=n.sent,r=a.data,e.users=r,e.isLoading=!1,n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),e.isLoading=!1,console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getUserInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].getUserCard(t);case 3:a=n.sent,r=a.data,e.name=r.name,e.tweetCount=r.tweetCount,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}}},p=v,w=(n("bd2c"),n("2877")),f=Object(w["a"])(p,a,r,!1,null,"662d728b",null);e["default"]=f.exports},"98c7":function(t,e,n){"use strict";n("d6e0")},bd2c:function(t,e,n){"use strict";n("0f31")},d134:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tweet"},[n("div",{staticClass:"tweet-img"},[n("router-link",{attrs:{to:{name:"user",params:{id:t.user.id}}}},[n("img",{staticClass:"user-photo",attrs:{src:t.user.avatar?t.user.avatar:t.avatarNone,alt:""}})])],1),n("div",{staticClass:"tweet-right"},[n("div",{staticClass:"tweet-right-top"},[n("div",{staticClass:"user"},[n("span",{staticClass:"user-name"},[t._v(t._s(t.user.name))])]),n("div",{staticClass:"btn"},[t.user.isFollowed?n("button",{staticClass:"btn-following",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollow(t.user.id)}}},[t._v(" 正在跟隨 ")]):n("button",{staticClass:"btn-follow",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollow(t.user)}}},[t._v(" 跟隨 ")])])]),n("div",{staticClass:"tweet-content"},[t._v(" "+t._s(t.user.introduction)+" ")])]),n("hr",{staticClass:"hr1"})])},r=[],s=n("1da1"),o=(n("96cf"),n("44c2")),i=n.n(o),c=n("4cce"),l={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser,avatarNone:i.a}},created:function(){},methods:{addFollow:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c["a"].addFollow(t);case 3:a=n.sent,console.log(a),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:e.user.isFollowed=!0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteFollow:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c["a"].removeFollow(t);case 3:a=n.sent,console.log("response",a),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:e.user.isFollowed=!1;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},u=l,d=(n("98c7"),n("2877")),v=Object(d["a"])(u,a,r,!1,null,"659717f1",null);e["a"]=v.exports},d6e0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-e3e514c4.f119daac.js.map