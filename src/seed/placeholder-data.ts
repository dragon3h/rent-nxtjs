export const bouncyCastles = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', // Replace with actual UUID
    name: 'Princess Palace Bouncer',
    description:
      'A magical pink and purple castle perfect for little princesses. Features safety netting and a spacious jumping area.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: '9c3a1b2f-8e4d-4f2a-b1d0-3e5f7a1b2c3d', // Replace with actual UUID
    name: 'Jungle Adventure Combo',
    description:
      'Explore the wild with this combo unit! Includes a bounce area, climbing wall, and a fun slide. Bright jungle theme.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', // Replace with actual UUID
    name: 'Superhero Jump Zone',
    description:
      'Leap into action like a superhero! Vibrant comic book graphics cover this exciting bounce house. Ideal for themed parties.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'b2c3d4e5-f6a7-8901-2345-67890abcdef1', // Replace with actual UUID
    name: 'Classic Rainbow Castle',
    description:
      'The timeless bouncy castle experience. Bright primary colors make it suitable for any event. Simple, fun, and safe.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'c3d4e5f6-a7b8-9012-3456-7890abcdef12', // Replace with actual UUID
    name: 'Pirate Ship Adventure',
    description:
      'Ahoy, mateys! Bounce on the deck of this inflatable pirate ship. Features obstacles and a slide for extra fun.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'd4e5f6a7-b8c9-0123-4567-890abcdef123', // Replace with actual UUID
    name: 'Sports Arena Bouncer',
    description:
      'Perfect for sports fans! This bouncer looks like a mini stadium and includes inflatable basketball hoops inside.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'e5f6a7b8-c9d0-1234-5678-90abcdef1234', // Replace with actual UUID
    name: 'Toddler Town Playland',
    description:
      'Specially designed for the little ones (ages 1-4). Low walls, gentle obstacles, and bright colors ensure safe fun.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'f6a7b8c9-d0e1-2345-6789-0abcdef12345', // Replace with actual UUID
    name: 'Tropical Water Slide Combo',
    description:
      'Beat the heat! This combo unit features a bounce area and an attached water slide leading to a splash pool.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'a7b8c9d0-e1f2-3456-7890-bcdef1234567', // Replace with actual UUID
    name: 'Medieval Knight Castle',
    description:
      'Defend the castle! A classic castle design with stone wall graphics and flags. Large bounce area for epic battles.',
    dataCreation: new Date().toISOString(),
  },
  {
    id: 'b8c9d0e1-f2a3-4567-8901-cdef12345678', // Replace with actual UUID
    name: 'Circus Big Top Bouncer',
    description:
      'Step right up to the greatest bounce on earth! Fun circus theme with vibrant colors and graphics. Great for carnivals.',
    dataCreation: new Date().toISOString(),
  },
];

// You might want to export this array if needed in other parts of your seed script
// export { bouncyCastles };

/*
Note on 'crypto' dependency:
The 'crypto' npm package (version 1.0.1) listed in your package.json is indeed deprecated and generally unnecessary for modern Node.js projects.
Node.js has a built-in 'crypto' module, which is what the `import { randomUUID } from 'crypto';` line uses.
You can safely remove the "crypto": "^1.0.1" line from your package.json dependencies and run `npm install` or `yarn install` again.
*/
