var pulse=new function(){var B=90,G="pulse",I="https://ecustomeropinions.com/clients/bbc/pulse?url={url}&data=yes&data2={siteid}&data3={bbcuid}";this.globalSurveysRunning=true;this.localSurveysRunning=true;this.translations={};this.forceOn=false;this.testing={luckyPunk:null};this.localSurvey={active:false,URLFormat:"",probability:0,translations:{}};this.init=function(N,M){if(!document.getElementById||!document.cookie||!H("BBC-UID")){return false}if((D()&&!this.forceOn)||(!this.probabilities[N]&&!this.localSurvey.active&&!this.forceOn)||(!this.globalSurveysRunning&&!this.localSurvey.active&&!this.forceOn)||(!this.localSurveysRunning&&!this.forceOn)){return false}if(this.localSurvey.active){if(!this.probabilities[N]||(this.probabilities[N]&&C(2))){L(N)}}if(this.barOverride[N]){M=true}if(C(this.probabilities[N])||this.forceOn){A(N,M);this.attachListeners()}return true};this.attachListeners=function(){var N=document.getElementById("pulse-close");var O=document.getElementById("pulse-reject");var M=document.getElementById("pulse-accept");N.onclick=this.reject;O.onclick=this.reject;M.onclick=this.accept};this.accept=function(M){F();return true};this.reject=function(M){if(!M){var M=window.event}F();document.getElementById("pulse-container").style.display="none";if(M.preventDefault){M.preventDefault()}M.returnValue=false;return false};function L(M){pulse.probabilities[M]=pulse.localSurvey.probability;I=pulse.localSurvey.URLFormat;if(pulse.localSurvey.translations.intro){pulse.translations.intro=pulse.localSurvey.translations.intro}if(pulse.localSurvey.translations.question){pulse.translations.question=pulse.localSurvey.translations.question}if(pulse.localSurvey.translations.accept){pulse.translations.accept=pulse.localSurvey.translations.accept}if(pulse.localSurvey.translations.reject){pulse.translations.reject=pulse.localSurvey.translations.reject}return true}function D(){var M=H(G);if(M){return true}else{return false}}function C(N){if(pulse.testing.luckyPunk===true){return true}if(pulse.testing.luckyPunk===false){return false}var M=Math.floor(Math.random(1)*N);if(M==0){return true}else{return false}}function A(O,N){var M='<div id="pulse-container" class="';if(N){M+="pulse-bar"}else{M+="pulse-pop"}M+=' blq-reset"><div id="pulse-q"><p>'+pulse.translations.intro+"</p><p><strong>"+pulse.translations.question+'</strong></p></div><ul id="pulse-a" class="blq-clearfix"><li><a id="pulse-accept" href="'+J(O)+'" >'+pulse.translations.accept+'</a></li><li id="pulse-reject-container"><a id="pulse-reject" href="#">'+pulse.translations.reject+'</a></li></ul><a href="#" id="pulse-close">x</a></div>';document.getElementById("blq-pre-mast").innerHTML+=M;E();return true}function J(N){var M=I;M=M.replace("{url}",K());M=M.replace("{siteid}",N);M=M.replace("{bbcuid}",H("BBC-UID").substring(0,64));return M}function E(){blq.addGoTrack("pulse-accept");blq.addGoTrack("pulse-reject");return true}function H(O){var N=document.cookie;var Q=O+"=";var P=N.indexOf("; "+Q);if(P==-1){P=N.indexOf(Q);if(P!=0){return null}}else{P+=2}var M=document.cookie.indexOf(";",P);if(M==-1){M=N.length}return unescape(N.substring(P+Q.length,M))}function F(){var M=new Date();M.setDate(M.getDate()+B);document.cookie=G+"=1; expires="+M.toGMTString()+"; path=/; domain=bbc.co.uk;";return true}function K(){return encodeURIComponent(window.location.href)}};