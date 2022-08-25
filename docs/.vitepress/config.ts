import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '灵曼科技',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['meta', { name: 'viewport', content: '"width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no' }]
  ],
  themeConfig: {

    nav: [
      { text: "退出✈", link: "/login.html" }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.dev/jackyecnu/docs.lingman.tech' },
    ],

    algolia: {
      appId: 'YBTDBGHO4R',
      apiKey: '27f98b9818ccfdd420d7301ec38794fe',
      indexName: 'lingman',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
})
