import { getClient } from "../server/contentfulClient";


async function main() {
  const client = getClient();
  console.log(client.getSpace())

  const entries = await client.getEntries({
    content_type: 'experience',
  });

  for (const entry of entries.items) {
    console.log(entry);
  }
}

main().then(() => {
           console.log('done')
}).catch((err) => {
  console.error(err)
});
