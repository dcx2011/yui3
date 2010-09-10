YUI.add("highlight-base",function(G){var E=G.Array,C=G.Escape,B=G.Unicode.WordBreak,F='<b class="yui3-highlight">$1</b>',D={},A={_REGEX:"(%needles)",_REPLACE:F,_START_REGEX:"^(%needles)",_START_REPLACE:F,_WORD_REPLACE:F,all:function(N,M,I){var J,H,L,K;if(!I){I=D;}N=C.html(N);M=E.test(M)?M.concat():[M];for(J=0,H=M.length;J<H;++J){M[J]=C.regex(C.html(M[J]));}if(I.startsWith){L=A._START_REGEX;K=I.replacer||A._START_REPLACE;}else{L=A._REGEX;K=I.replacer||A._REPLACE;}return N.replace(new RegExp(L.replace("%needles",M.join("|")),I.caseSensitive?"g":"gi"),K);},allCase:function(J,I,H){return A.all(J,I,G.merge(H||D,{caseSensitive:true}));},start:function(J,I,H){return A.all(J,I,G.merge(H||D,{startsWith:true}));},startCase:function(I,H){return A.start(I,H,{caseSensitive:true});},words:function(L,K,I){var H,N,J=A._WORD_REPLACE,M;if(!I){I=D;}H=!!I.caseSensitive;K=E.hash(E.test(K)?K:B.getUniqueWords(K,{ignoreCase:!H}));N=I.mapper||function(P,O){if(O.hasOwnProperty(H?P:P.toLowerCase())){return J.replace("$1",C.html(P));}return C.html(P);};M=B.getWords(L,{includePunctuation:true,includeWhitespace:true});return E.map(M,function(O){return N(O,K);}).join("");},wordsCase:function(I,H){return A.words(I,H,{caseSensitive:true});}};G.Highlight=A;},"@VERSION@",{requires:["collection","escape","unicode-wordbreak"]});YUI.add("highlight-accentfold",function(E){var D=E.Unicode.AccentFold,B=E.Escape,C={},A=E.mix(E.Highlight,{allFold:function(K,J,H){var I,F=[],G=0;H=E.merge({replacer:function(N,M,O){var L=M.length;F.push(K.substring(G,O)+I.replace("$1",K.substr(O,L)));G=O+L;}},H||C);I=H.startsWith?A._START_REPLACE:A._REPLACE;A.all(D.fold(K),D.fold(J),H);if(G<K.length-1){F.push(K.substr(G));}return F.join("");},startFold:function(G,F){return A.allFold(G,F,{startsWith:true});},wordsFold:function(H,G){var F=A._WORD_REPLACE;return A.words(H,D.fold(G),{mapper:function(J,I){if(I.hasOwnProperty(D.fold(J))){return F.replace("$1",B.html(J));}return B.html(J);}});}});},"@VERSION@",{requires:["highlight-base","unicode-accentfold"]});YUI.add("highlight",function(A){},"@VERSION@",{use:["highlight-base","highlight-accentfold"]});