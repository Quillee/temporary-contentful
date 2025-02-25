import {
  detachExperienceStyles,
  fetchBySlug,
} from '@contentful/experiences-sdk-react';
import Experience from '@ball/app/_components/Experience/Experience';
import { getClient } from '@ball/server/contentfulClient';
import { experienceTypeId } from '@ball/env';

import {
  CONTENTFUL_COMPONENTS,
  defineComponents,
} from "@contentful/experiences-sdk-react";
import { Button } from "@ball/app/_components/Button/button";

defineComponents(
  [
    {
      component: Button,
      definition: {
        id: "button",
        name: "Button",
        category: "Custom Components",
        variables: {
          text: {
            displayName: "Text",
            type: "Text",
            defaultValue: "Click me!",
          },
        },
      },
    },
  ],
  {
    enabledBuiltinComponents: [
      CONTENTFUL_COMPONENTS.button.id,
      CONTENTFUL_COMPONENTS.divider.id,
      CONTENTFUL_COMPONENTS.heading.id,
      CONTENTFUL_COMPONENTS.richText.id,
      CONTENTFUL_COMPONENTS.text.id,
    ],
  },
);

const client = getClient();

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function AppPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const locale = 'en-US';
  const { expEditorMode } = await searchParams;

  const experience = await fetchBySlug({
    client,
    slug,
    experienceTypeId: experienceTypeId as string,
    localeCode: locale,
    isEditorMode: expEditorMode === 'true',
  });

  // extract the styles from the experience
  const stylesheet = experience ? detachExperienceStyles(experience) : null;

  // experience currently needs to be stringified manually to be passed to the component
  const experienceJSON = experience ? JSON.stringify(experience) : null;

  return (
    <main style={{ width: '100%' }}>
      {stylesheet && <style>{stylesheet}</style>}
      <Experience experienceJSON={experienceJSON} locale={locale} />
    </main>
  );
}

export default AppPage
