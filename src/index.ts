import * as dnssd from 'dnssd';
console.log('Starting');
const browser = new dnssd.Browser(dnssd.all())
  .on('serviceUp', service => console.log('Device up: ', service))
  .on('serviceDown', service => console.log('Device down: ', service));

browser.start();
