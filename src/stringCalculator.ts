const DELIMITER_PATTERN = /,|\n/;

const parseNumber = (value: string): number => {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return 0;
  }

  const parsed = Number(trimmed);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid number: ${value}`);
  }

  return parsed;
};

export const add = (input: string): number => {
  if (!input || input.trim().length === 0) {
    return 0;
  }

  return input
    .split(DELIMITER_PATTERN)
    .map(parseNumber)
    .reduce((total, amount) => total + amount, 0);
};

