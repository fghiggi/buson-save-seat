/**
 * Generates a random email address.
 * @returns {string}
 */
export const generateRandomEmail = () => {
  const animals = ['gato', 'cachorro', 'papagaio', 'tigre', 'urso', 'lobo', 'aguia', 'peixe', 'coelho', 'raposa'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

  const animal = animals[Math.floor(Math.random() * animals.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const randomNumber = Math.floor(Math.random() * 1000);

  return `${animal}${randomNumber}@${domain}`;
};
