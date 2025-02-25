import { CONTENTFUL_TOKEN, SPACE_ID } from "@ball/env";
import { type ContentfulClientApi, createClient } from "contentful";

let client: ContentfulClientApi<undefined> | undefined = undefined;

export function getClient(): ContentfulClientApi<undefined> {
  if (!client) {
    client = createClient({
      // your space id
      space: SPACE_ID,
      // your environment id
      environment: "staging",
      // Supported values: 'preview.contentful.com' or 'cdn.contentful.com',
      host: "preview.contentful.com",
      // needs to be access token if host = 'cdn.contentful.com' and preview token if 'preview.contentful.com'
      accessToken: CONTENTFUL_TOKEN,
    });
  }

  return client;
}
