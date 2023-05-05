import { json } from '@sveltejs/kit';
import cheerio from 'cheerio';
import axios from 'axios'

export async function POST({ request }) {
  const { name } = await request.json();
  const sendName = name.split(' ').join('_')
  const result = await axios.get(`https://en.wikipedia.org/wiki/${sendName}`)
    .then(({ data }) => {
      const $ = cheerio.load(data)
      const table = $('th.infobox-label').map((_, each) => {
        const $each = $(each);
        if ($each.text() === 'Family' || $each.text() === 'Relatives' || $each.text() === 'Parents') {
          return $each.siblings('.infobox-data').children().text()
        }
      }).toArray()
      return !!table.length
    })
    .catch(err => null)
  return json(result);
}
