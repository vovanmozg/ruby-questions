const assertModule = import('assert');
const indexModule = import('../index.js');

describe('index', function () {
  it('returns array', async function () {
    const assert = await assertModule;
    const { ruby } = await indexModule;
    console.log(ruby[0].question)

    assert.equal(typeof ruby[0].question, 'string');
  });
});