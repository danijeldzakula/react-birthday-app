declare module 'eslint-plugin-react-refresh' {
  import { ESLint } from 'eslint';

  const rules: {
    'only-export-components': ESLint.Rule.RuleModule;
  };

  export { rules };
  export default {
    rules,
  };
}
