import {readFile} from 'node:fs/promises';
import {test,expect} from '@playwright/test';

const base='http://127.0.0.1:4173';
test('Japanese inquiry keeps predictions optional and exposes comparison after reveal',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#inquiry');
 await expect(page.locator('h1')).toContainText('科学的な問い');
 await expect(page.locator('#inquiry-prediction-panel')).toBeHidden();
 await page.locator('#inquiry-reveal').click();
 await expect(page.locator('#inquiry-prediction-panel')).toBeVisible();
 await page.locator('#inquiry-capture').click();
 await expect(page.locator('#inquiry-trial-list')).toContainText('試行 1');
 const slider=page.locator('[data-inquiry-input="force"]');
 await slider.fill('8');
 await expect(page.locator('#inquiry-prediction-panel')).toBeHidden();
 await page.locator('#inquiry-reveal').click();
 await page.locator('#inquiry-capture').click();
 await expect(page.locator('#inquiry-comparison')).toContainText('1つの変数だけ');
 await page.locator('[name="inquiry-display-mode"][value="live"]').check();
 await slider.fill('9');
 await expect(page.locator('#inquiry-prediction-panel')).toBeVisible();
 expect(errors).toEqual([]);
});
test('research topic drafts remain available when learners navigate between domains',async({page})=>{
 await page.goto(base+'/#inquiry');
 await page.locator('[data-inquiry-case="cart"]').click();
 await page.locator('#inquiry-hypothesis').fill('The mass might matter more than the force.');
 await page.locator('[data-inquiry-case="fall"]').click();
 await page.locator('#inquiry-hypothesis').fill('In a vacuum all masses should fall together.');
 await page.locator('[data-inquiry-case="cart"]').click();
 await expect(page.locator('#inquiry-hypothesis')).toHaveValue('The mass might matter more than the force.');
 await page.reload();
 await expect(page.locator('#inquiry-hypothesis')).toHaveValue('The mass might matter more than the force.');
});
test('English mode includes inquiry and cross-field reasoning',async({page})=>{
 await page.goto(base+'/#inquiry');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('h1')).toContainText('Develop your own scientific questions');
 await expect(page.locator('#inquiry-prediction-panel')).toBeHidden();
 await page.locator('[data-inquiry-case="fall-drag"]').click();
 await expect(page.locator('h2').first()).toContainText('air drag');
 await page.locator('[name="inquiry-display-mode"][value="live"]').check();
 await expect(page.locator('#inquiry-result')).toContainText('Fall time with drag');
 await page.goto(base+'/#transfer');
 await expect(page.locator('h1')).toContainText('Transfer ideas');
});
test('chapter links reach scientific investigations and earlier concepts',async({page})=>{
 await page.goto(base+'/#mechanics');
 await expect(page.locator('h1')).toBeVisible();
 const target=page.locator('[data-open-inquiry]').first();
 await expect(target).toBeVisible();
 await target.click();
 await expect(page).toHaveURL(/#inquiry$/);
 await expect(page.locator('#inquiry-graph-panel')).toBeHidden();
});
test('mobile navigation search supports both languages',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/#overview');
 const button=page.locator('#menu-toggle');
 await button.click();
 await page.locator('#nav-search').fill('collision');
 await expect(page.locator('[data-page="conservation"]')).toBeVisible();
 await expect(page.locator('[data-page="history"]')).toBeHidden();
 await page.locator('#nav-search').fill('force');
 await expect(page.locator('[data-page="forcelab"]')).toBeVisible();
});

test('self-reported measurements remain separate from predictions and persist through snapshots',async({page})=>{
 await page.goto(base+'/#inquiry');
 await page.locator('#inquiry-reveal').click();
 await page.locator('#inquiry-capture').click();
 await page.locator('#inquiry-observed-value').fill('6.2');
 await page.locator('#inquiry-observed-uncertainty').fill('0.3');
 await page.locator('#inquiry-observed-method').fill('Simulated demonstration input for browser test; not a real measurement.');
 await page.locator('#inquiry-observation-form [type=submit]').click();
 await expect(page.locator('#inquiry-observation-list')).toContainText('学習者が入力した観測値');
 await expect(page.locator('#inquiry-observation-list')).toContainText('0.3');
 await expect(page.locator('.inquiry-observed-marker')).toHaveCount(1);
 await expect(page.locator('#inquiry-curve-note')).toContainText('検証済みデータではありません');
 await page.locator('#inquiry-save').click();
 await page.reload();
 await expect(page.locator('#inquiry-observation-list')).toContainText('6.2');
 await page.locator('#inquiry-clear-trials').click();
 await expect(page.locator('#inquiry-observation-list')).not.toContainText('6.2');
 await expect(page.locator('#inquiry-history')).toContainText('観測');
});

test('installed application can reopen its bilingual textbook and inquiry labs while offline',async({page,context})=>{
 await page.goto(base+'/#inquiry');
 await page.waitForFunction(()=>Boolean(navigator.serviceWorker.controller),{},{timeout:45000});
 await page.goto(base+'/#mechanics');
 await expect(page.locator('h1')).toBeVisible();
 await context.setOffline(true);
 await page.reload({waitUntil:'domcontentloaded'});
 await expect(page.locator('h1')).toContainText('力学');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('h1')).toContainText('Explore Mechanics');
 await page.goto(base+'/#inquiry',{waitUntil:'domcontentloaded'});
 await expect(page.locator('h1')).toContainText('Develop your own scientific questions');
 await page.locator('#inquiry-reveal').click();
 await expect(page.locator('#inquiry-result')).toContainText('Acceleration a');
 await context.setOffline(false);
});

test('browser Back and Forward return learners to previously explored concepts',async({page})=>{
 await page.goto(base+'/#overview');
 await page.locator('[data-goto="inquiry"]').first().click();
 await expect(page).toHaveURL(/#inquiry$/);
 await page.locator('[data-page="connections"]').click();
 await expect(page).toHaveURL(/#connections$/);
 await page.goBack();
 await expect(page).toHaveURL(/#inquiry$/);
 await expect(page.locator('h1')).toContainText('科学的な問い');
 await page.goBack();
 await expect(page).toHaveURL(/#overview$/);
 await page.goForward();
 await expect(page).toHaveURL(/#inquiry$/);
});

test('optional guidance is adjustable and earlier observations do not overwrite current thinking',async({page})=>{
 await page.goto(base+'/#inquiry');
 await expect(page.locator('.inquiry-scaffold')).toHaveAttribute('open','');
 await page.locator('#inquiry-mode').selectOption('light');
 await expect(page.locator('.inquiry-scaffold')).not.toHaveAttribute('open','');
 await page.locator('.inquiry-scaffold summary').click();
 await expect(page.locator('.inquiry-scaffold-step')).toHaveCount(2);
 await page.locator('#inquiry-hypothesis').fill('Earlier explanation: force is needed to keep moving.');
 await page.locator('#inquiry-save').click();
 await page.locator('#inquiry-hypothesis').fill('Current explanation: net force changes velocity.');
 await page.locator('.inquiry-history-details summary').first().click();
 await expect(page.locator('.inquiry-history-pair').first()).toContainText('当時');
 await expect(page.locator('.inquiry-history-details')).toContainText('force is needed to keep moving.');
 await expect(page.locator('.inquiry-history-details')).toContainText('net force changes velocity.');
 await expect(page.locator('#inquiry-hypothesis')).toHaveValue('Current explanation: net force changes velocity.');
 await page.locator('#inquiry-mode').selectOption('open');
 await expect(page.locator('.inquiry-scaffold')).not.toHaveAttribute('open','');
});

test('all mechanics chapters expose detailed definitions, reasoning and worked examples in both languages',async({page})=>{
 const failures=[];page.on('pageerror',e=>failures.push(e.message));
 await page.goto(base+'/#mechanics');
 await expect(page.locator('h1')).toContainText('力学');
 await expect(page.locator('.mechanics-deep-intro summary').first()).toContainText('初めて学ぶ人へ');
 await expect(page.locator('.mechanics-reading-prose p')).toHaveCount(2);
 const glossary=page.locator('.mechanics-deep-intro details').nth(1);
 await glossary.locator('summary').click();
 await expect(glossary.locator('dt')).toHaveCount(4);
 const example=page.locator('.mechanics-deep-example details');
 await example.locator('summary').click();
 await expect(example.locator('.mechanics-worked-steps li')).toHaveCount(3);
 await expect(example).toContainText('右向き');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('.mechanics-deep-intro summary').first()).toContainText('Start here');
 await expect(page.locator('.mechanics-reading-prose p')).toContainText(['A cart moving right','On a rough floor']);
 await page.locator('[data-mech-chapter="4"]').click();
 await expect(page.locator('.mechanics-topic h2')).toContainText('Circular');
 await expect(page.locator('.mechanics-common-error')).toContainText('centrifugal');
 expect(failures).toEqual([]);
});
test('mechanics explanations remain optional and usable at iPhone display width',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/#mechanics');
 await expect(page.locator('.mechanics-explain-details').first()).toBeVisible();
 const example=page.locator('.mechanics-deep-example details');
 await expect(example).not.toHaveAttribute('open','');
 await example.locator('summary').click();
 await expect(example).toHaveAttribute('open','');
 await expect(page.locator('.mechanics-example-conclusion')).toBeVisible();
 await expect(page.locator('html')).toHaveAttribute('lang','ja');
});

test('a detailed explanation links directly to the relevant interactive model',async({page})=>{
 await page.goto(base+'/#mechanics');
 await expect(page.locator('.mechanics-try-lab')).toBeVisible();
 await page.locator('.mechanics-try-lab [data-goto="forcelab"]').click();
 await expect(page).toHaveURL(/#forcelab$/);
 await page.goto(base+'/#mechanics');
 await page.locator('[data-mech-chapter="4"]').click();
 await page.locator('.mechanics-try-lab [data-goto="advanced"]').click();
 await expect(page).toHaveURL(/#advanced$/);
});

test('each of the twelve mechanics chapters has optional deep bilingual reading and formula interpretations',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#mechanics');
 for(let i=0;i<12;i++){
  await page.locator('[data-mech-chapter="'+i+'"]').click();
  await expect(page.locator('.mechanics-deep-intro')).toHaveCount(1);
  await expect(page.locator('.mechanics-reasoning-sequence li')).toHaveCount(4);
  await expect(page.locator('.mechanics-formula-reader')).toHaveCount(1);
  await expect(page.locator('.mechanics-worked-steps li')).not.toHaveCount(0);
  await expect(page.locator('.mechanics-revisit')).toHaveCount(1);
  await page.locator('.mechanics-formula-reader summary').click();
  await expect(page.locator('.mechanics-formula-symbols dt')).not.toHaveCount(0);
  await expect(page.locator('.mechanics-formula-content')).toContainText('単位は合っているか');
 }
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('.mechanics-formula-reader summary')).toContainText('Read each symbol');
 await page.locator('.mechanics-formula-reader summary').click();
 await expect(page.locator('.mechanics-formula-content')).toContainText('Do the units agree');
 await expect(page.locator('.mechanics-formula-content')).toContainText('limiting case');
 expect(errors).toEqual([]);
});
test('detailed mechanics chapter remains readable on iPhone-width Chromium viewport',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/#mechanics');
 await page.locator('.mechanics-formula-reader summary').click();
 await expect(page.locator('.mechanics-formula-symbols dt')).toHaveCount(3);
 const overflow=await page.evaluate(()=>({viewport:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
 expect(overflow.scroll).toBeLessThanOrEqual(overflow.viewport+2);
});

test('advanced mechanics sliders model the selected topic rather than generic spring motion',async({page})=>{
 await page.goto(base+'/#mechanics');
 const checks=[
  [8,'見かけの力','N'],
  [9,'ラグランジュ','rad/s'],
  [10,'ハミルトニアン','J'],
  [11,'逆位相','rad/s']
 ];
 for(const [index,term,unit] of checks){
  await page.locator('[data-mech-chapter="'+index+'"]').click();
  await expect(page.locator('#mech-output')).toContainText(term);
  await expect(page.locator('#mech-output')).toContainText(unit);
 }
 await page.locator('[data-mech-chapter="10"]').click();
 await expect(page.locator('#mech-label-x')).toContainText('位置 q');
 await expect(page.locator('#mech-label-y')).toContainText('正準運動量 p');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('#mech-output')).toContainText('Hamiltonian');
});

test('all twelve mechanics chapters and synthesis expose accessible optional problems',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#practice');
 const chapters=['force','friction','energy','momentum','circular','oscillation','gravitation','rotation','noninertial','lagrange','hamilton','coupled','synthesis'];
 for(const ch of chapters){
  await page.locator('[data-practice-section="'+ch+'"]').click();
  await expect(page.locator('.practice-problem-button')).toHaveCount(ch==='synthesis'?8:2);
  await expect(page.locator('.practice-hint')).toHaveCount(2);
  await expect(page.locator('.practice-solution-steps li')).not.toHaveCount(0);
  await page.locator('.practice-solution summary').click();
  await expect(page.locator('.practice-solution')).toHaveAttribute('open','');
  await expect(page.locator('.practice-solution')).toContainText('物理的な解釈');
 }
 expect(errors).toEqual([]);
});
test('numeric comparison is optional and qualitative answers do not become test gates',async({page})=>{
 await page.goto(base+'/#practice');
 await expect(page.locator('#practice-check-status')).toBeEmpty();
 await page.locator('#practice-numeric').fill('2');
 await page.locator('#practice-check').click();
 await expect(page.locator('#practice-check-status')).toContainText('参考値に近い');
 await page.locator('#practice-numeric').fill('20');
 await page.locator('#practice-check').click();
 await expect(page.locator('#practice-check-status')).toContainText('参考値とは違い');
 await page.locator('[data-practice-problem="force-inertia"]').click();
 await expect(page.locator('#practice-numeric')).toHaveCount(0);
 await page.locator('.practice-solution summary').click();
 await expect(page.locator('.practice-solution')).toHaveAttribute('open','');
});
test('learner thinking and older versions survive changes of chapter, language, and reload',async({page})=>{
 await page.goto(base+'/#practice');
 await page.locator('#practice-response').fill('At first I used the applied force only.');
 await page.locator('#practice-reflection').fill('Now I also include friction.');
 await page.locator('#practice-numeric').fill('2');
 await page.locator('#practice-save').click();
 await expect(page.locator('#practice-history .practice-history-entry')).toHaveCount(1);
 await page.locator('#practice-response').fill('I now isolate the cart before drawing forces.');
 await page.locator('[data-practice-section="energy"]').click();
 await page.locator('[data-practice-section="force"]').click();
 await expect(page.locator('#practice-response')).toHaveValue('I now isolate the cart before drawing forces.');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('.practice-problem-card h2')).toContainText('cart');
 await expect(page.locator('#practice-history')).toContainText('At first I used');
 await expect(page.locator('#practice-history')).toContainText('I now isolate');
 await page.reload();
 await expect(page.locator('#practice-response')).toHaveValue('I now isolate the cart before drawing forces.');
 await expect(page.locator('#practice-history')).toContainText('Now I also include friction.');
});
test('mechanics chapter link navigates straight to its topic-specific practice',async({page})=>{
 await page.goto(base+'/#mechanics');
 await page.locator('[data-mech-chapter="8"]').click();
 await page.locator('[data-open-practice="noninertial"]').click();
 await expect(page).toHaveURL(/#practice$/);
 await expect(page.locator('.practice-chapter-button.active')).toContainText('非慣性系');
 await expect(page.locator('.practice-problem-button')).toHaveCount(2);
 await page.locator('[data-practice-section="synthesis"]').click();
 await expect(page.locator('.practice-problem-button')).toHaveCount(8);
});
test('iPhone-width mechanics practice keeps the reading viewport and optional mathematics accessible',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/#practice');
 await page.locator('.practice-solution summary').click();
 await expect(page.locator('.practice-solution-steps li')).not.toHaveCount(0);
 const measured=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));
 expect(measured.scroll).toBeLessThanOrEqual(measured.client+2);
 await page.locator('[data-practice-section="synthesis"]').click();
 await expect(page.locator('.practice-problem-button')).toHaveCount(8);
});

test('unified knowledge backup includes original mechanics reflections and survives reimport',async({page})=>{
 await page.goto(base+'/#practice');
 await page.locator('#practice-response').fill('A force diagram shows the net force, not the velocity.');
 await page.locator('#practice-save').click();
 await page.goto(base+'/#journeys');
 const downloadEvent=page.waitForEvent('download');
 await page.locator('#journey-export').click();
 const download=await downloadEvent;
 const archive=JSON.parse(await readFile(await download.path(),'utf8'));
 expect(archive.version).toBe(3);
 expect(archive.practice).toHaveLength(1);
 expect(archive.practice[0].response).toContain('force diagram');
 await page.locator('#journey-import').setInputFiles({
  name:'knowledge-learning-v3.json',mimeType:'application/json',
  buffer:Buffer.from(JSON.stringify(archive))
 });
 await expect(page.locator('#journey-transfer-status')).toContainText('力学演習 1 件');
 await page.goto(base+'/#practice');
 await expect(page.locator('#practice-history')).toContainText('force diagram');
});

test('momentum is introduced through force-time area before the named quantity in Japanese and English',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#mechanics');
 await page.locator('[data-mech-chapter="3"]').click();
 const lesson=page.locator('#momentum-origin');
 await expect(lesson).toBeVisible();
 await expect(lesson.locator('.momentum-origin-step')).toHaveCount(6);
 await expect(lesson.locator('.momentum-origin-step').first()).toContainText('同じ強さで長く押したら');
 await expect(page.locator('#mo-impulse')).toContainText('8 N·s');
 await expect(page.locator('#mo-momentum-difference')).toContainText('8 N·s');
 await page.locator('#mo-duration').fill('4');
 await expect(page.locator('#mo-impulse')).toContainText('16 N·s');
 await page.locator('[name="mo-profile"][value="ramp"]').check();
 await expect(page.locator('#mo-impulse')).toContainText('8 N·s');
 await page.locator('#mo-force').fill('-4');
 await expect(page.locator('#mo-impulse')).toContainText('-8 N·s');
 await page.locator('#language-select').selectOption('en');
 await expect(page.locator('#momentum-origin')).toContainText('What if the same push lasts longer');
 await expect(page.locator('#mo-impulse')).toContainText('8 N·s');
 expect(errors).toEqual([]);
});
test('the force-time visualization remains readable at iPhone viewport width',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+'/#mechanics');
 await page.locator('[data-mech-chapter="3"]').click();
 await expect(page.locator('#mo-chart')).toBeVisible();
 const size=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
 expect(size.scroll).toBeLessThanOrEqual(size.width+2);
});
