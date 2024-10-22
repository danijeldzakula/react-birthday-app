declare module 'eslint-plugin-react' {
  import { ESLint } from 'eslint';

  const rules: {
    'prop-types': ESLint.Rule.RuleModule;
    'jsx-uses-react': ESLint.Rule.RuleModule;
    'jsx-uses-vars': ESLint.Rule.RuleModule;
  };

  export { rules };
  export default {
    rules,
  };
}
