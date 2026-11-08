import test from 'node:test';
import assert from 'node:assert/strict';
import { energyTextbookHtml } from '../energy-textbook.js';

test('energy textbook contains eight explanatory sections in both languages', () => {
  for (const lang of ['ja', 'en']) {
    const html = energyTextbookHtml(lang);
    assert.equal((html.match(/<section class="mechanics-worked-article">/g) || []).length, 8);
    assert.match(html, /id="energy-potential-lab"/);
    assert.match(html, /id="energy-k"/);
    assert.match(html, /id="energy-e"/);
    assert.match(html, /\\frac12mv\^2/);
  }
});
test('potential lab does not require a scored checkpoint', () => {
 const html = energyTextbookHtml('ja');
 assert.doesNotMatch(html, /required|type="submit"/);
});
