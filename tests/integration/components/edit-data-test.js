import { module, test } from 'qunit';
import { setupRenderingTest } from 'tables/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | edit-data', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EditData />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EditData>
        template block text
      </EditData>
    `);

    assert.dom().hasText('template block text');
  });
});
