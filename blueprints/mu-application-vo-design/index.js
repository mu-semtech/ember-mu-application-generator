/* eslint-env node */
module.exports = {
  description: 'Generates the design for the flemish government.',

  normalizeEntityName: function() {},

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  async afterInstall(options) {
    await this.addAddonToProject("@lblod/ember-vo-webuniversum");
    await this.addAddonToProject("@lblod/ember-vo-webuniversum-data-table");
    await this.addAddonToProject("@lblod/ember-rdfa-helpers");
  }

};
