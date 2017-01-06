/*eslint no-unused-expressions:0 */
'use strict';

import Skill from '../skill';

describe('Skill View', function() {

  beforeEach(() => {
    this.skill = new Skill();
  });

  it('Should run a few assertions', () => {
    expect(this.skill).to.exist;
  });

});
