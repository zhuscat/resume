/*eslint no-unused-expressions:0 */
'use strict';

import Education from '../education';

describe('Education View', function() {

  beforeEach(() => {
    this.education = new Education();
  });

  it('Should run a few assertions', () => {
    expect(this.education).to.exist;
  });

});
