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
