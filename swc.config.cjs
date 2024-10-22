module.exports = {
  jsc: {
    parser: {
      syntax: 'ecmascript',
      jsx: true,
    },
    transform: {
      react: {
        throwIfNamespace: false,
        runtime: 'automatic',
        development: true,
        useBuiltIns: true,
      },
    },
  },
};
