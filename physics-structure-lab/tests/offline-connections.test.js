import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const sw=readFileSync(new URL('../sw.js',import.meta.url),'utf8');
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const app=readFileSync(new URL('../main.js',import.meta.url),'utf8');
test('knowledge connections can load from the offline application cache',()=>{
 assert.match(sw,/\.\/knowledge-connections-data\.js/);
 assert.match(sw,/\.\/knowledge-connections\.js/);
 assert.match(sw,/\.\/mechanics-data\.js/);
 assert.match(sw,/\.\/mechanics-en\.js/);
 assert.match(sw,/const CACHE_NAME = 'physics-structure-lab-offline-v[0-9]+\.[0-9]+/);
});
test('knowledge explorer is in navigation, is reachable from mechanics and respects the language edition',()=>{
 assert.match(html,/data-page="connections"/);
 assert.match(app,/connections: connectionsPage/);
 assert.match(app,/installConnections/);
 assert.match(app,/installJourneys/);
 assert.match(html,/data-page="journeys"/);
 assert.match(app,/setConnectionFocus/);
 assert.match(app,/focusMechanicsChapter/);
 assert.match(app,/!\['overview','phenomenon','mechanics','connections','journeys'\]\.includes\(page\)/);
});
