(function(d){var e=window.AmazonUIPageJS||window.P,a=e._namespace||e.attributeErrors,c=a?a("ShoppingPortalAssets@cookieConsent",""):e;c.guardFatal?c.guardFatal(d)(c,window):c.execute(function(){d(c,window)})})(function(d,e,a){d.when("sp-cc-ready").execute(function(){function c(){document.body.style.paddingBottom=b.offsetHeight+"px"}function f(c,a){var b="localStorage"in e&&e.localStorage;if(b)try{return b[c].call(b,"sp-cc-pending",a)}catch(d){}}var b=document.querySelector("#a-page").querySelector("#sp-cc"),
a=b.querySelector("#sp-cc-error");b.querySelector("#sp-cc-customize");f("getItem")&&(a.className=(" "+a.className+" ").replace(" aok-hidden "," "));f("removeItem");c();d.when("A").execute(function(a){function d(){g--&&a.post(b.action,{timeout:5E3,params:{"anti-csrftoken-a2z":b.elements["anti-csrftoken-a2z"].value,accept:b.elements.accept.value},accepts:"application/json",success:function(){f("removeItem")},error:d})}c();var e=a.on("orientationchange resize",c),g=3;a.declarative("sp-cc","submit",function(b){a.off(e);
b.$currentTarget.remove();c();f("setItem","1");b.$event.preventDefault();d()})})})});