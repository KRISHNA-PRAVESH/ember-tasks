import { module, test } from 'qunit';
import { setupRenderingTest } from 'tables/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Scroll />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Scroll>
        template block text
      </Scroll>
    `);

    assert.dom().hasText('template block text');
  });
});
