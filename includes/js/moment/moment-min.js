(function(B){var O,aw="2.5.0",x=this,T=Math.round,Y,t=0,e=1,aK=2,s=3,ap=4,q=5,Q=6,ar={},ag=(typeof module!=="undefined"&&module.exports&&typeof require!=="undefined"),b=/^\/?Date\((\-?\d+)/i,aT=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ay=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,aj=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,X=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,f=/\d\d?/,Z=/\d{1,3}/,C=/\d{1,4}/,aZ=/[+\-]?\d{1,6}/,aP=/\d+/,G=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,n=/Z|[\+\-]\d\d:?\d\d/gi,j=/T/i,aH=/[\+\-]?\d+(\.\d{1,3})?/,W=/\d/,o=/\d\d/,aS=/\d{3}/,aG=/\d{4}/,ac=/[+\-]?\d{6}/,aD=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,R="YYYY-MM-DDTHH:mm:ssZ",aR=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],E=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],V=/([\+\-]|\d\d)/gi,aA="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),A={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},c={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},aO={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},af={},aJ="DDD w W M D d".split(" "),ah="M D H h m s w W".split(" "),aL={M:function(){return this.month()+1},MMM:function(i){return this.lang().monthsShort(this,i)},MMMM:function(i){return this.lang().months(this,i)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(i){return this.lang().weekdaysMin(this,i)},ddd:function(i){return this.lang().weekdaysShort(this,i)},dddd:function(i){return this.lang().weekdays(this,i)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return H(this.year()%100,2)},YYYY:function(){return H(this.year(),4)},YYYYY:function(){return H(this.year(),5)},YYYYYY:function(){var a1=this.year(),i=a1>=0?"+":"-";return i+H(Math.abs(a1),6)},gg:function(){return H(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return H(this.weekYear(),5)},GG:function(){return H(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return H(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return J(this.milliseconds()/100)},SS:function(){return H(J(this.milliseconds()/10),2)},SSS:function(){return H(this.milliseconds(),3)},SSSS:function(){return H(this.milliseconds(),3)},Z:function(){var a1=-this.zone(),i="+";if(a1<0){a1=-a1;i="-"}return i+H(J(a1/60),2)+":"+H(J(a1)%60,2)},ZZ:function(){var a1=-this.zone(),i="+";if(a1<0){a1=-a1;i="-"}return i+H(J(a1/60),2)+H(J(a1)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},S=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];function L(a1,i){return function(a2){return H(a1.call(this,a2),i)}}function g(i,a1){return function(a2){return this.lang().ordinal(i.call(this,a2),a1)}}while(aJ.length){Y=aJ.pop();aL[Y+"o"]=g(aL[Y],Y)}while(ah.length){Y=ah.pop();aL[Y+Y]=L(aL[Y],2)}aL.DDDD=L(aL.DDD,3);function aB(){}function I(i){aX(i);au(this,i)}function aa(a3){var a6=l(a3),a5=a6.year||0,a1=a6.month||0,i=a6.week||0,a9=a6.day||0,a7=a6.hour||0,a4=a6.minute||0,a8=a6.second||0,a2=a6.millisecond||0;this._milliseconds=+a2+a8*1000+a4*60000+a7*3600000;this._days=+a9+i*7;this._months=+a1+a5*12;this._data={};this._bubble()}function au(a2,a1){for(var a3 in a1){if(a1.hasOwnProperty(a3)){a2[a3]=a1[a3]}}if(a1.hasOwnProperty("toString")){a2.toString=a1.toString}if(a1.hasOwnProperty("valueOf")){a2.valueOf=a1.valueOf}return a2}function k(i){if(i<0){return Math.ceil(i)}else{return Math.floor(i)}}function H(a4,a3,a2){var a1=Math.abs(a4)+"",i=a4>=0;while(a1.length<a3){a1="0"+a1}return(i?(a2?"+":""):"-")+a1}function D(a3,a2,a6,a5){var a1=a2._milliseconds,a8=a2._days,i=a2._months,a4,a7;if(a1){a3._d.setTime(+a3._d+a1*a6)}if(a8||i){a4=a3.minute();a7=a3.hour()}if(a8){a3.date(a3.date()+a8*a6)}if(i){a3.month(a3.month()+i*a6)}if(a1&&!a5){O.updateOffset(a3)}if(a8||i){a3.minute(a4);a3.hour(a7)}}function a(i){return Object.prototype.toString.call(i)==="[object Array]"}function d(i){return Object.prototype.toString.call(i)==="[object Date]"||i instanceof Date}function aI(a6,a5,a2){var a1=Math.min(a6.length,a5.length),a3=Math.abs(a6.length-a5.length),a7=0,a4;for(a4=0;a4<a1;a4++){if((a2&&a6[a4]!==a5[a4])||(!a2&&J(a6[a4])!==J(a5[a4]))){a7++}}return a7+a3}function aN(a1){if(a1){var i=a1.toLowerCase().replace(/(.)s$/,"$1");a1=c[a1]||aO[i]||i}return a1}function l(a2){var a1={},i,a3;for(a3 in a2){if(a2.hasOwnProperty(a3)){i=aN(a3);if(i){a1[i]=a2[a3]}}}return a1}function am(a1){var i,a2;if(a1.indexOf("week")===0){i=7;a2="day"}else{if(a1.indexOf("month")===0){i=12;a2="month"}else{return}}O[a1]=function(a7,a4){var a6,a3,a8=O.fn._lang[a1],a5=[];if(typeof a7==="number"){a4=a7;a7=B}a3=function(ba){var a9=O().utc().set(a2,ba);return a8.call(O.fn._lang,a9,a7||"")};if(a4!=null){return a3(a4)}else{for(a6=0;a6<i;a6++){a5.push(a3(a6))}return a5}}}function J(i){var a2=+i,a1=0;if(a2!==0&&isFinite(a2)){if(a2>=0){a1=Math.floor(a2)}else{a1=Math.ceil(a2)}}return a1}function aV(i,a1){return new Date(Date.UTC(i,a1+1,0)).getUTCDate()}function aQ(i){return aE(i)?366:365}function aE(i){return(i%4===0&&i%100!==0)||i%400===0}function aX(i){var a1;if(i._a&&i._pf.overflow===-2){a1=i._a[e]<0||i._a[e]>11?e:i._a[aK]<1||i._a[aK]>aV(i._a[t],i._a[e])?aK:i._a[s]<0||i._a[s]>23?s:i._a[ap]<0||i._a[ap]>59?ap:i._a[q]<0||i._a[q]>59?q:i._a[Q]<0||i._a[Q]>999?Q:-1;if(i._pf._overflowDayOfYear&&(a1<t||a1>aK)){a1=aK}i._pf.overflow=a1}}function az(i){i._pf={empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function av(i){if(i._isValid==null){i._isValid=!isNaN(i._d.getTime())&&i._pf.overflow<0&&!i._pf.empty&&!i._pf.invalidMonth&&!i._pf.nullInput&&!i._pf.invalidFormat&&!i._pf.userInvalidated;if(i._strict){i._isValid=i._isValid&&i._pf.charsLeftOver===0&&i._pf.unusedTokens.length===0}}return i._isValid}function z(i){return i?i.toLowerCase().replace("_","-"):i}function u(i,a1){return a1._isUTC?O(i).zone(a1._offset||0):O(i).local()}au(aB.prototype,{set:function(a1){var a3,a2;for(a2 in a1){a3=a1[a2];if(typeof a3==="function"){this[a2]=a3}else{this["_"+a2]=a3}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]},monthsParse:function(a1){var a2,a4,a3;if(!this._monthsParse){this._monthsParse=[]}for(a2=0;a2<12;a2++){if(!this._monthsParse[a2]){a4=O.utc([2000,a2]);a3="^"+this.months(a4,"")+"|^"+this.monthsShort(a4,"");this._monthsParse[a2]=new RegExp(a3.replace(".",""),"i")}if(this._monthsParse[a2].test(a1)){return a2}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]},weekdaysParse:function(a4){var a1,a3,a2;if(!this._weekdaysParse){this._weekdaysParse=[]}for(a1=0;a1<7;a1++){if(!this._weekdaysParse[a1]){a3=O([2000,1]).day(a1);a2="^"+this.weekdays(a3,"")+"|^"+this.weekdaysShort(a3,"")+"|^"+this.weekdaysMin(a3,"");this._weekdaysParse[a1]=new RegExp(a2.replace(".",""),"i")}if(this._weekdaysParse[a1].test(a4)){return a1}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a1){var i=this._longDateFormat[a1];if(!i&&this._longDateFormat[a1.toUpperCase()]){i=this._longDateFormat[a1.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a2){return a2.slice(1)});this._longDateFormat[a1]=i}return i},isPM:function(i){return((i+"").toLowerCase().charAt(0)==="p")},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(i,a1,a2){if(i>11){return a2?"pm":"PM"}else{return a2?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a1,a2){var i=this._calendar[a1];return typeof i==="function"?i.apply(a2):i},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a3,a2,a1,a4){var i=this._relativeTime[a1];return(typeof i==="function")?i(a3,a2,a1,a4):i.replace(/%d/i,a3)},pastFuture:function(a2,i){var a1=this._relativeTime[a2>0?"future":"past"];return typeof a1==="function"?a1(i):a1.replace(/%s/i,i)},ordinal:function(i){return this._ordinal.replace("%d",i)},_ordinal:"%d",preparse:function(i){return i},postformat:function(i){return i},week:function(i){return y(i,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});function ae(a1,i){i.abbr=a1;if(!ar[a1]){ar[a1]=new aB()}ar[a1].set(i);return ar[a1]}function aU(i){delete ar[i]}function at(a5){var a4=0,a2,a7,a6,a3,a1=function(i){if(!ar[i]&&ag){try{require("./lang/"+i)}catch(a8){}}return ar[i]};if(!a5){return O.fn._lang}if(!a(a5)){a7=a1(a5);if(a7){return a7}a5=[a5]}while(a4<a5.length){a3=z(a5[a4]).split("-");a2=a3.length;a6=z(a5[a4+1]);a6=a6?a6.split("-"):null;while(a2>0){a7=a1(a3.slice(0,a2).join("-"));if(a7){return a7}if(a6&&a6.length>=a2&&aI(a3,a6,true)>=a2-1){break}a2--}a4++}return O.fn._lang}function ad(i){if(i.match(/\[[\s\S]/)){return i.replace(/^\[|\]$/g,"")}return i.replace(/\\/g,"")}function p(a3){var a4=a3.match(aj),a1,a2;for(a1=0,a2=a4.length;a1<a2;a1++){if(aL[a4[a1]]){a4[a1]=aL[a4[a1]]}else{a4[a1]=ad(a4[a1])}}return function(a5){var i="";for(a1=0;a1<a2;a1++){i+=a4[a1] instanceof Function?a4[a1].call(a5,a3):a4[a1]}return i}}function ai(i,a1){if(!i.isValid()){return i.lang().invalidDate()}a1=a0(a1,i.lang());if(!af[a1]){af[a1]=p(a1)}return af[a1](i)}function a0(a3,a4){var a1=5;function a2(i){return a4.longDateFormat(i)||i}X.lastIndex=0;while(a1>=0&&X.test(a3)){a3=a3.replace(X,a2);X.lastIndex=0;a1-=1}return a3}function al(a3,a2){var a1,i=a2._strict;switch(a3){case"DDDD":return aS;case"YYYY":case"GGGG":case"gggg":return i?aG:C;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?ac:aZ;case"S":if(i){return W}case"SS":if(i){return o}case"SSS":case"DDD":return i?aS:Z;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return G;case"a":case"A":return at(a2._l)._meridiemParse;case"X":return aH;case"Z":case"ZZ":return n;case"T":return j;case"SSSS":return aP;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?o:f;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return i?W:f;default:a1=new RegExp(aY(ao(a3.replace("\\","")),"i"));return a1}}function v(a1){a1=a1||"";var i=(a1.match(n)||[]),a4=i[i.length-1]||[],a3=(a4+"").match(V)||["-",0,0],a2=+(a3[1]*60)+J(a3[2]);return a3[0]==="+"?-a2:a2}function an(a4,a2,a3){var a1,i=a3._a;switch(a4){case"M":case"MM":if(a2!=null){i[e]=J(a2)-1}break;case"MMM":case"MMMM":a1=at(a3._l).monthsParse(a2);if(a1!=null){i[e]=a1}else{a3._pf.invalidMonth=a2}break;case"D":case"DD":if(a2!=null){i[aK]=J(a2)}break;case"DDD":case"DDDD":if(a2!=null){a3._dayOfYear=J(a2)}break;case"YY":i[t]=J(a2)+(J(a2)>68?1900:2000);break;case"YYYY":case"YYYYY":case"YYYYYY":i[t]=J(a2);break;case"a":case"A":a3._isPm=at(a3._l).isPM(a2);break;case"H":case"HH":case"h":case"hh":i[s]=J(a2);break;case"m":case"mm":i[ap]=J(a2);break;case"s":case"ss":i[q]=J(a2);break;case"S":case"SS":case"SSS":case"SSSS":i[Q]=J(("0."+a2)*1000);break;case"X":a3._d=new Date(parseFloat(a2)*1000);break;case"Z":case"ZZ":a3._useUTC=true;a3._tzm=v(a2);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a4=a4.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a4=a4.substr(0,2);if(a2){a3._w=a3._w||{};a3._w[a4]=a2}break}}function ab(a5){var a7,a6,ba=[],a3,a9,a2,bb,bc,a4,a8,a1;if(a5._d){return}a3=m(a5);if(a5._w&&a5._a[aK]==null&&a5._a[e]==null){a2=function(bd){var i=parseInt(bd,10);return bd?(bd.length<3?(i>68?1900+i:2000+i):i):(a5._a[t]==null?O().weekYear():a5._a[t])};bb=a5._w;if(bb.GG!=null||bb.W!=null||bb.E!=null){bc=r(a2(bb.GG),bb.W||1,bb.E,4,1)}else{a4=at(a5._l);a8=bb.d!=null?aW(bb.d,a4):(bb.e!=null?parseInt(bb.e,10)+a4._week.dow:0);a1=parseInt(bb.w,10)||1;if(bb.d!=null&&a8<a4._week.dow){a1++}bc=r(a2(bb.gg),a1,a8,a4._week.doy,a4._week.dow)}a5._a[t]=bc.year;a5._dayOfYear=bc.dayOfYear}if(a5._dayOfYear){a9=a5._a[t]==null?a3[t]:a5._a[t];if(a5._dayOfYear>aQ(a9)){a5._pf._overflowDayOfYear=true}a6=F(a9,0,a5._dayOfYear);a5._a[e]=a6.getUTCMonth();a5._a[aK]=a6.getUTCDate()}for(a7=0;a7<3&&a5._a[a7]==null;++a7){a5._a[a7]=ba[a7]=a3[a7]}for(;a7<7;a7++){a5._a[a7]=ba[a7]=(a5._a[a7]==null)?(a7===2?1:0):a5._a[a7]}ba[s]+=J((a5._tzm||0)/60);ba[ap]+=J((a5._tzm||0)%60);a5._d=(a5._useUTC?F:ak).apply(null,ba)}function ax(a1){var i;if(a1._d){return}i=l(a1._i);a1._a=[i.year,i.month,i.day,i.hour,i.minute,i.second,i.millisecond];ab(a1)}function m(a1){var i=new Date();if(a1._useUTC){return[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]}else{return[i.getFullYear(),i.getMonth(),i.getDate()]}}function N(a4){a4._a=[];a4._pf.empty=true;var a3=at(a4._l),a7=""+a4._i,a6,a2,ba,a5,a9,a1=a7.length,a8=0;ba=a0(a4._f,a3).match(aj)||[];for(a6=0;a6<ba.length;a6++){a5=ba[a6];a2=(a7.match(al(a5,a4))||[])[0];if(a2){a9=a7.substr(0,a7.indexOf(a2));if(a9.length>0){a4._pf.unusedInput.push(a9)}a7=a7.slice(a7.indexOf(a2)+a2.length);a8+=a2.length}if(aL[a5]){if(a2){a4._pf.empty=false}else{a4._pf.unusedTokens.push(a5)}an(a5,a2,a4)}else{if(a4._strict&&!a2){a4._pf.unusedTokens.push(a5)}}}a4._pf.charsLeftOver=a1-a8;if(a7.length>0){a4._pf.unusedInput.push(a7)}if(a4._isPm&&a4._a[s]<12){a4._a[s]+=12}if(a4._isPm===false&&a4._a[s]===12){a4._a[s]=0}ab(a4);aX(a4)}function ao(i){return i.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a1,a5,a4,a3,a2){return a5||a4||a3||a2})}function aY(i){return i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aM(a1){var a5,a3,a4,a2,a6;if(a1._f.length===0){a1._pf.invalidFormat=true;a1._d=new Date(NaN);return}for(a2=0;a2<a1._f.length;a2++){a6=0;a5=au({},a1);az(a5);a5._f=a1._f[a2];N(a5);if(!av(a5)){continue}a6+=a5._pf.charsLeftOver;a6+=a5._pf.unusedTokens.length*10;a5._pf.score=a6;if(a4==null||a6<a4){a4=a6;a3=a5}}au(a1,a3||a5)}function h(a3){var a4,a2=a3._i,a1=aD.exec(a2);if(a1){a3._pf.iso=true;for(a4=4;a4>0;a4--){if(a1[a4]){a3._f=aR[a4-1]+(a1[6]||" ");break}}for(a4=0;a4<4;a4++){if(E[a4][1].exec(a2)){a3._f+=E[a4][0];break}}if(a2.match(n)){a3._f+="Z"}N(a3)}else{a3._d=new Date(a2)}}function M(a2){var a1=a2._i,i=b.exec(a1);if(a1===B){a2._d=new Date()}else{if(i){a2._d=new Date(+i[1])}else{if(typeof a1==="string"){h(a2)}else{if(a(a1)){a2._a=a1.slice(0);ab(a2)}else{if(d(a1)){a2._d=new Date(+a1)}else{if(typeof(a1)==="object"){ax(a2)}else{a2._d=new Date(a1)}}}}}}}function ak(a7,i,a5,a4,a6,a3,a2){var a1=new Date(a7,i,a5,a4,a6,a3,a2);if(a7<1970){a1.setFullYear(a7)}return a1}function F(a1){var i=new Date(Date.UTC.apply(null,arguments));if(a1<1970){i.setUTCFullYear(a1)}return i}function aW(i,a1){if(typeof i==="string"){if(!isNaN(i)){i=parseInt(i,10)}else{i=a1.weekdaysParse(i);if(typeof i!=="number"){return null}}}return i}function aC(i,a2,a1,a3,a4){return a4.relativeTime(a2||1,!!a1,i,a3)}function w(a2,i,a1){var a7=T(Math.abs(a2)/1000),a3=T(a7/60),a6=T(a3/60),a8=T(a6/24),a4=T(a8/365),a5=a7<45&&["s",a7]||a3===1&&["m"]||a3<45&&["mm",a3]||a6===1&&["h"]||a6<22&&["hh",a6]||a8===1&&["d"]||a8<=25&&["dd",a8]||a8<=45&&["M"]||a8<345&&["MM",T(a8/30)]||a4===1&&["y"]||["yy",a4];a5[2]=i;a5[3]=a2>0;a5[4]=a1;return aC.apply({},a5)}function y(a4,a2,a5){var a1=a5-a2,i=a5-a4.day(),a3;if(i>a1){i-=7}if(i<a1-7){i+=7}a3=O(a4).add("d",i);return{week:Math.ceil(a3.dayOfYear()/7),year:a3.year()}}function r(a4,a3,a5,a7,i){var a6=new Date(H(a4,6,true)+"-01-01").getUTCDay(),a2,a1;a5=a5!=null?a5:i;a2=i-a6+(a6>a7?7:0);a1=7*(a3-1)+(a5-i)+a2+1;return{year:a1>0?a4:a4-1,dayOfYear:a1>0?a1:aQ(a4-1)+a1}}function K(a1){var i=a1._i,a2=a1._f;if(typeof a1._pf==="undefined"){az(a1)}if(i===null){return O.invalid({nullInput:true})}if(typeof i==="string"){a1._i=i=at().preparse(i)}if(O.isMoment(i)){a1=au({},i);a1._d=new Date(+i._d)}else{if(a2){if(a(a2)){aM(a1)}else{N(a1)}}else{M(a1)}}return new I(a1)}O=function(a1,a2,a3,i){if(typeof(a3)==="boolean"){i=a3;a3=B}return K({_i:a1,_f:a2,_l:a3,_strict:i,_isUTC:false})};O.utc=function(a2,a3,a4,a1){var i;if(typeof(a4)==="boolean"){a1=a4;a4=B}i=K({_useUTC:true,_isUTC:true,_l:a4,_i:a2,_f:a3,_strict:a1}).utc();return i};O.unix=function(i){return O(i*1000)};O.duration=function(a1,a5){var a6=a1,a4=null,i,a3,a2;if(O.isDuration(a1)){a6={ms:a1._milliseconds,d:a1._days,M:a1._months}}else{if(typeof a1==="number"){a6={};if(a5){a6[a5]=a1}else{a6.milliseconds=a1}}else{if(!!(a4=aT.exec(a1))){i=(a4[1]==="-")?-1:1;a6={y:0,d:J(a4[aK])*i,h:J(a4[s])*i,m:J(a4[ap])*i,s:J(a4[q])*i,ms:J(a4[Q])*i}}else{if(!!(a4=ay.exec(a1))){i=(a4[1]==="-")?-1:1;a2=function(a8){var a7=a8&&parseFloat(a8.replace(",","."));return(isNaN(a7)?0:a7)*i};a6={y:a2(a4[2]),M:a2(a4[3]),d:a2(a4[4]),h:a2(a4[5]),m:a2(a4[6]),s:a2(a4[7]),w:a2(a4[8])}}}}}a3=new aa(a6);if(O.isDuration(a1)&&a1.hasOwnProperty("_lang")){a3._lang=a1._lang}return a3};O.version=aw;O.defaultFormat=R;O.updateOffset=function(){};O.lang=function(a1,i){var a2;if(!a1){return O.fn._lang._abbr}if(i){ae(z(a1),i)}else{if(i===null){aU(a1);a1="en"}else{if(!ar[a1]){at(a1)}}}a2=O.duration.fn._lang=O.fn._lang=at(a1);return a2._abbr};O.langData=function(i){if(i&&i._lang&&i._lang._abbr){i=i._lang._abbr}return at(i)};O.isMoment=function(i){return i instanceof I};O.isDuration=function(i){return i instanceof aa};for(Y=S.length-1;Y>=0;--Y){am(S[Y])}O.normalizeUnits=function(i){return aN(i)};O.invalid=function(a1){var i=O.utc(NaN);if(a1!=null){au(i._pf,a1)}else{i._pf.userInvalidated=true}return i};O.parseZone=function(i){return O(i).parseZone()};au(O.fn=I.prototype,{clone:function(){return O(this)},valueOf:function(){return +this._d+((this._offset||0)*60000)},unix:function(){return Math.floor(+this/1000)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var i=O(this).utc();if(0<i.year()&&i.year()<=9999){return ai(i,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}else{return ai(i,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function(){var i=this;return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]},isValid:function(){return av(this)},isDSTShifted:function(){if(this._a){return this.isValid()&&aI(this._a,(this._isUTC?O.utc(this._a):O(this._a)).toArray())>0}return false},parsingFlags:function(){return au({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){this.zone(0);this._isUTC=false;return this},format:function(a1){var i=ai(this,a1||O.defaultFormat);return this.lang().postformat(i)},add:function(i,a2){var a1;if(typeof i==="string"){a1=O.duration(+a2,i)}else{a1=O.duration(i,a2)}D(this,a1,1);return this},subtract:function(i,a2){var a1;if(typeof i==="string"){a1=O.duration(+a2,i)}else{a1=O.duration(i,a2)}D(this,a1,-1);return this},diff:function(a4,a3,i){var a5=u(a4,this),a1=(this.zone()-a5.zone())*60000,a6,a2;a3=aN(a3);if(a3==="year"||a3==="month"){a6=(this.daysInMonth()+a5.daysInMonth())*43200000;a2=((this.year()-a5.year())*12)+(this.month()-a5.month());a2+=((this-O(this).startOf("month"))-(a5-O(a5).startOf("month")))/a6;a2-=((this.zone()-O(this).startOf("month").zone())-(a5.zone()-O(a5).startOf("month").zone()))*60000/a6;if(a3==="year"){a2=a2/12}}else{a6=(this-a5);a2=a3==="second"?a6/1000:a3==="minute"?a6/60000:a3==="hour"?a6/3600000:a3==="day"?(a6-a1)/86400000:a3==="week"?(a6-a1)/604800000:a6}return i?a2:k(a2)},from:function(a1,i){return O.duration(this.diff(a1)).lang(this.lang()._abbr).humanize(!i)},fromNow:function(i){return this.from(O(),i)},calendar:function(){var i=u(O(),this).startOf("day"),a2=this.diff(i,"days",true),a1=a2<-6?"sameElse":a2<-1?"lastWeek":a2<0?"lastDay":a2<1?"sameDay":a2<2?"nextDay":a2<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(a1,this))},isLeapYear:function(){return aE(this.year())},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone())},day:function(a1){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();if(a1!=null){a1=aW(a1,this.lang());return this.add({d:a1-i})}else{return i}},month:function(i){var a1=this._isUTC?"UTC":"",a2;if(i!=null){if(typeof i==="string"){i=this.lang().monthsParse(i);if(typeof i!=="number"){return this}}a2=this.date();this.date(1);this._d["set"+a1+"Month"](i);this.date(Math.min(a2,this.daysInMonth()));O.updateOffset(this);return this}else{return this._d["get"+a1+"Month"]()}},startOf:function(i){i=aN(i);switch(i){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(i==="week"){this.weekday(0)}else{if(i==="isoWeek"){this.isoWeekday(1)}}return this},endOf:function(i){i=aN(i);return this.startOf(i).add((i==="isoWeek"?"week":i),1).subtract("ms",1)},isAfter:function(a1,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)>+O(a1).startOf(i)},isBefore:function(a1,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)<+O(a1).startOf(i)},isSame:function(a1,i){i=i||"ms";return +this.clone().startOf(i)===+u(a1,this).startOf(i)},min:function(i){i=O.apply(null,arguments);return i<this?this:i},max:function(i){i=O.apply(null,arguments);return i>this?this:i},zone:function(i){var a1=this._offset||0;if(i!=null){if(typeof i==="string"){i=v(i)}if(Math.abs(i)<16){i=i*60}this._offset=i;this._isUTC=true;if(a1!==i){D(this,O.duration(a1-i,"m"),1,true)}}else{return this._isUTC?a1:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm){this.zone(this._tzm)}else{if(typeof this._i==="string"){this.zone(this._i)}}return this},hasAlignedHourOffset:function(i){if(!i){i=0}else{i=O(i).zone()}return(this.zone()-i)%60===0},daysInMonth:function(){return aV(this.year(),this.month())},dayOfYear:function(i){var a1=T((O(this).startOf("day")-O(this).startOf("year"))/86400000)+1;return i==null?a1:this.add("d",(i-a1))},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(i){var a1=y(this,this.lang()._week.dow,this.lang()._week.doy).year;return i==null?a1:this.add("y",(i-a1))},isoWeekYear:function(i){var a1=y(this,1,4).year;return i==null?a1:this.add("y",(i-a1))},week:function(i){var a1=this.lang().week(this);return i==null?a1:this.add("d",(i-a1)*7)},isoWeek:function(i){var a1=y(this,1,4).week;return i==null?a1:this.add("d",(i-a1)*7)},weekday:function(i){var a1=(this.day()+7-this.lang()._week.dow)%7;return i==null?a1:this.add("d",i-a1)},isoWeekday:function(i){return i==null?this.day()||7:this.day(this.day()%7?i:i-7)},get:function(i){i=aN(i);return this[i]()},set:function(i,a1){i=aN(i);if(typeof this[i]==="function"){this[i](a1)}return this},lang:function(i){if(i===B){return this._lang}else{this._lang=at(i);return this}}});function aF(i,a1){O.fn[i]=O.fn[i+"s"]=function(a2){var a3=this._isUTC?"UTC":"";if(a2!=null){this._d["set"+a3+a1](a2);O.updateOffset(this);return this}else{return this._d["get"+a3+a1]()}}}for(Y=0;Y<aA.length;Y++){aF(aA[Y].toLowerCase().replace(/s$/,""),aA[Y])}aF("year","FullYear");O.fn.days=O.fn.day;O.fn.months=O.fn.month;O.fn.weeks=O.fn.week;O.fn.isoWeeks=O.fn.isoWeek;O.fn.toJSON=O.fn.toISOString;au(O.duration.fn=aa.prototype,{_bubble:function(){var a2=this._milliseconds,a7=this._days,i=this._months,a5=this._data,a6,a4,a1,a3;a5.milliseconds=a2%1000;a6=k(a2/1000);a5.seconds=a6%60;a4=k(a6/60);a5.minutes=a4%60;a1=k(a4/60);a5.hours=a1%24;a7+=k(a1/24);a5.days=a7%30;i+=k(a7/30);a5.months=i%12;a3=k(i/12);a5.years=a3},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+J(this._months/12)*31536000000},humanize:function(a1){var a2=+this,i=w(a2,!a1,this.lang());if(a1){i=this.lang().pastFuture(a2,i)}return this.lang().postformat(i)},add:function(i,a2){var a1=O.duration(i,a2);this._milliseconds+=a1._milliseconds;this._days+=a1._days;this._months+=a1._months;this._bubble();return this},subtract:function(i,a2){var a1=O.duration(i,a2);this._milliseconds-=a1._milliseconds;this._days-=a1._days;this._months-=a1._months;this._bubble();return this},get:function(i){i=aN(i);return this[i.toLowerCase()+"s"]()},as:function(i){i=aN(i);return this["as"+i.charAt(0).toUpperCase()+i.slice(1)+"s"]()},lang:O.fn.lang,toIsoString:function(){var a3=Math.abs(this.years()),i=Math.abs(this.months()),a5=Math.abs(this.days()),a1=Math.abs(this.hours()),a2=Math.abs(this.minutes()),a4=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return"P0D"}return(this.asSeconds()<0?"-":"")+"P"+(a3?a3+"Y":"")+(i?i+"M":"")+(a5?a5+"D":"")+((a1||a2||a4)?"T":"")+(a1?a1+"H":"")+(a2?a2+"M":"")+(a4?a4+"S":"")}});function U(i){O.duration.fn[i]=function(){return this._data[i]}}function aq(i,a1){O.duration.fn["as"+i]=function(){return +this/a1}}for(Y in A){if(A.hasOwnProperty(Y)){aq(Y,A[Y]);U(Y.toLowerCase())}}aq("Weeks",604800000);O.duration.fn.asMonths=function(){return(+this-this.years()*31536000000)/2592000000+this.years()*12};O.lang("en",{ordinal:function(a2){var i=a2%10,a1=(J(a2%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";return a2+a1}});function P(a1){var i=false,a2=O;if(typeof ender!=="undefined"){return}if(a1){x.moment=function(){if(!i&&console&&console.warn){i=true;console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")}return a2.apply(null,arguments)};au(x.moment,a2)}else{x.moment=O}}if(ag){module.exports=O;P(true)}else{if(typeof define==="function"&&define.amd){define("moment",function(a1,i,a2){if(a2.config&&a2.config()&&a2.config().noGlobal!==true){P(a2.config().noGlobal===B)}return O})}else{P()}}}).call(this);