import { parseArgs } from 'node:util';

export const parseCommandLineArgs = () => {
  const options = {
    url: { type: 'string', required: true },
    seat: { type: 'string', required: true },
  };

  const { values } = parseArgs({ options });

  return values;
};
