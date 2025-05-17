/**
 * commitlint 配置文件
 * 文档
 * https://commitlint.js.org/#/reference-rules
 * https://cz-git.qbb.sh/zh/guide/
 */

module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 自定义规则
  rules: {
    // 提交类型枚举，git提交type必须是以下类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'docs', // 文档变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改 CI 配置、脚本
        'revert', // 回滚 commit
        'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
        'wip' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ]
    ],
    'subject-case': [0] // subject大小写不做校验
  },

  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    // prettier-ignore
    types: [
        { value: 'feat', name: 'feat:     ✨  A new feature', emoji: ':sparkles:' },
        { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
        { value: 'docs', name: 'docs:     📝  Documentation only changes', emoji: ':memo:' },
        { value: 'style', name: 'style:    💄  Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
        { value: 'refactor', name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
        { value: 'perf', name: 'perf:     ⚡️  A code change that improves performance', emoji: ':zap:' },
        { value: 'test', name: 'test:     ✅  Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
        { value: 'build', name: 'build:    📦️   Changes that affect the build system or external dependencies', emoji: ':package:' },
        { value: 'ci', name: 'ci:       🎡  Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
        { value: 'chore', name: 'chore:    🔨  Other changes that don\'t modify src or test files', emoji: ':hammer:' },
        { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit', emoji: ':rewind:' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: true,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: ['breaking', 'footerPrefix', 'footer'], // 跳过的步骤
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
