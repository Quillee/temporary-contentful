import { CONTENTFUL_COMPONENTS, defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from '@ball/app/_components/Button/button';

defineComponents([
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'Custom Components',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me!',
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
});
