/*eslint no-unused-expressions:0 */
'use strict';

import Project from '../project';

describe('Project View', function() {

  beforeEach(() => {
    this.project = new Project();
  });

  it('Should run a few assertions', () => {
    expect(this.project).to.exist;
  });

});
