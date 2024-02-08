import { module, test } from 'qunit';
import { setupTest } from 'tables/tests/helpers';

module('Unit | Service | items', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:items');
    assert.ok(service);
  });
});
