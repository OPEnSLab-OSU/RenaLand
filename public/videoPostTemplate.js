(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['videoPostTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"video\" data-genre=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre") || (depth0 != null ? lookupProperty(depth0,"genre") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":40}}}) : helper)))
    + "\">\n    <div class=\"video-contents\">\n        <div class=\"video-url\">\n            <video class='myVideo' width=\"612\" height=\"612\" controls>\n                <source src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"video") || (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":38}}}) : helper)))
    + "\" type=\"video/mp4\">\n            </video>\n        </div>\n        <div class=\"video-caption\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"caption") || (depth0 != null ? lookupProperty(depth0,"caption") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":23}}}) : helper)))
    + "\n        </div>\n    </div>\n</div>";
},"useData":true});
})();