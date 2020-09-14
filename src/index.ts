import * as express from 'express';
import * as mdns from 'mdns';

let app = express();

let services: mdns.Service[] = [];
const browser = mdns.browseThemAll({});

browser.on('serviceUp', service => {
  services.push(service);
});

browser.on('serviceDown', service => {
  console.log('Service Down', service);
});

browser.start();

app.get('/', (req: express.Request, res: express.Response) => {
  req.body;
  res.json(services);
});

app.listen(3000);
