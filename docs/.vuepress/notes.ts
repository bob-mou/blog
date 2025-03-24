import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
},)

const UITest = defineNoteConfig({
  dir: 'UITest',
  link: '/UITest',
  sidebar: ['', '功能测试','测试用例','测试工具','腾讯工作室信息'],
},)

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,UITest],
})
