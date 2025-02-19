import fs from 'fs';
import { promisify } from 'util';

import { instruments } from '../src/config/instruments';
import { getMinStartDate } from './min-start-date';

const writeFile = promisify(fs.writeFile);

(async (ms: number) => {
  try {
    const data: string[][] = [];

    for (const instrument of Object.keys(instruments)) {
      const minstarDate = await getMinStartDate(instrument);
      data.push([instrument, minstarDate]);
      await wait(ms);
    }

    await writeFile('instrumentsWithStartDates.json', JSON.stringify(data, null, 2));
    console.log('DONE');
  } catch (error) {
    console.log(error);
  }
})(((argv) => {
  const ms = Number(argv[2]);
  if (Number.isNaN(ms)) return 5000;
  return ms;
})(process.argv));

function wait(ms: number) {
  return new Promise(res => {
    console.log('Start waiting');
    setTimeout(function() {
      console.log('Finish waiting');
      res();
    }, ms);
  });
}
