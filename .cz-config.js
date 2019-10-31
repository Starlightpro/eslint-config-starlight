module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name:
        'style:    Changes that do not affect the meaning of the code\n (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name:
        'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    { value: 'ui', name: 'ui: UI improvement' },
    { value: 'test', name: 'test:     Adding missing tests' },
    {
      value: 'chore',
      name:
        'chore:    Changes to config, auxiliary tools, and libraries',
    },
    { value: 'ci', name: 'ci:   Changes to build system' },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'deps', name: 'deps:     Add or update dependencies' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
    {
      value: 'internal',
      name: 'internal:  A catch all. Please use as little as possible.',
    },
  ],

  scopes: [
    { name: 'base' },
    { name: 'react' },
    { name: 'flow' },
    { name: 'prettier' },
    { name: 'import' },
    { name: 'documentation' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'STAR-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
  // skip any questions you want
  // skipQuestions: ['body', 'footer'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:', // default value
};