import express from 'express';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('port', { alias: 'p', type: 'number', default: 5003 })
  .parse();

const app = express();
app.get('/', (_, res) => res.json({ service: 'C', port: argv.port }));

app.listen(argv.port, () => {
  console.log(`🟣 Server C running on port ${argv.port}`);
});
