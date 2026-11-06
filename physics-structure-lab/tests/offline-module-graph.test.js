import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname,relative,sep} from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
const read=path=>readFileSync(resolve(root,path),'utf8');
const worker=read('sw.js');
const cacheMatch=worker.match(/const APP_FILES = \[([^\]]+)\]/);
const cached=new Set(cacheMatch?[...cacheMatch[1].matchAll(/'([^']+)'/g)].map(x=>x[1]):[]);
test('service worker cache has base application assets',()=>{
 for(const f of ['./','./index.html','./styles.css','./main.js','./manifest.webmanifest'])
  assert.ok(cached.has(f),'Missing offline base asset: '+f);
});
test('all locally imported application JavaScript modules are cached for offline use',()=>{
 const visited=new Set(),queue=['main.js'];
 while(queue.length){
  const source=queue.shift();
  if(visited.has(source))continue;
  visited.add(source);
  const full=resolve(root,source);
  assert.ok(existsSync(full),'Imported source missing: '+source);
  const expected='./'+source.split(sep).join('/');
  assert.ok(cached.has(expected),'Offline cache missing JavaScript module: '+expected);
  const code=read(source);
  for(const match of code.matchAll(/\bfrom\s*['"](\.[^'"]+\.js)['"]/g)){
   const local=relative(root,resolve(dirname(full),match[1]));
   assert.ok(!local.startsWith('..'),'Module import escapes app root: '+local);
   queue.push(local);
  }
 }
 assert.ok(visited.size>=15,'Unexpectedly small application module graph');
});
