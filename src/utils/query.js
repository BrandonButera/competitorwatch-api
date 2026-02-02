const MAX_LIMIT = 100;

const parseNumber = (value, fallback, { min = 1, max = Number.POSITIVE_INFINITY } = {}) => {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
};

const parseList = (value, fallback = []) => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return fallback;
};

const parsePagination = ({ page, limit }) => ({
  page: parseNumber(page, 1, { min: 1 }),
  limit: parseNumber(limit, 20, { min: 1, max: MAX_LIMIT })
});

module.exports = {
  MAX_LIMIT,
  parseList,
  parseNumber,
  parsePagination
};
