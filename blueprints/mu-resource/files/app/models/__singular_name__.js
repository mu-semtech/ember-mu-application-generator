import attr from 'ember-data/attr';
<%= importStatements %>

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,[<%="'" + ["id"].concat(attributes.map( function(attribute) {return attribute.name})).join("', '") + "'"%>]),

  uri: attr(),
  <%= attrs %>
  rdfaBindings: {
    <%= entityClassUri ? `class: "${entityClassUri}",`:"" %>
    <%= properties.map( (property) => {
      if( property.propertyUri ) {
        return `${property.name}: "${property.propertyUri}"`;
      } else {
        return false;
      }
    }).filter( (x) => x ).join(",\n    ") %>
  }
});
