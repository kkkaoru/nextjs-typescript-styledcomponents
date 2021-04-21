module.exports = {
  '*.{ts,tsx}': ['eslint --max-warnings=0 --fix', 'stylelint --max-warnings=0 --fix', 'prettier -cw', 'git add'],
  '*.js': ['prettier -cw', 'git add'],
  '*.css': ['stylelint --max-warnings=0 --fix', 'prettier -cw', 'git add'],
};
