!function(i,n,t,e){function l(n,t){this.element=n,this.options=i.extend({},o,t),this._defaults=o,this._name=s,this.init()}var s="addClear",o={closeSymbol:"&#10006;",color:"#CCC",top:1,right:4,returnFocus:!0,showOnLoad:!1,onClear:null,hideOnBlur:!1,tabbable:!0,paddingRight:"20px",lineHeight:"1",display:"block"};l.prototype={init:function(){var n,e=i(this.element),l=this,s=this.options;e.wrap("<div style='display:inline; position:relative;' class='add-clear-span'></div>");var o=s.tabbable?"":" tabindex='-1'";n=i("<a href='#clear' style='display: none;'"+o+">"+s.closeSymbol+"</a>"),e.after(n),e.next().css({color:s.color,textDecoration:"none",display:"none",overflow:"hidden",position:"absolute",right:s.right,top:s.top,lineHeight:s.lineHeight},this),s.paddingRight&&e.css({"padding-right":s.paddingRight}),e.val().length>=1&&s.showOnLoad===!0&&n.css({display:s.display}),e.focus(function(){i(this).val().length>=1&&n.css({display:s.display})}),e.blur(function(i){s.hideOnBlur&&setTimeout(function(){var e=i.relatedTarget||i.explicitOriginalTarget||t.activeElement;e!==n[0]&&n.css({display:"none"})},0)});var a=function(){i(this).val().length>=1?n.css({display:s.display}):n.css({display:"none"})},c=function(){e.off("keyup",a),e.off("cut",a),c=a,a.call(this)};e.on("keyup",a),e.on("cut",function(){var i=this;setTimeout(function(){a.call(i)},0)}),e.on("input",function(){c.call(this)}),s.hideOnBlur&&n.blur(function(){n.css({display:"none"})}),n.click(function(n){var t=i(l.element);t.val(""),i(this).css({display:"none"}),s.returnFocus===!0&&t.focus(),s.onClear&&s.onClear(t),n.preventDefault()})}},i.fn[s]=function(n){return this.each(function(){i.data(this,"plugin_"+s)||i.data(this,"plugin_"+s,new l(this,n))})}}(jQuery,window,document);