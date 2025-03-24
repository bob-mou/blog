import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
},)

const UITest = defineNoteConfig({
  dir: 'UITest',
  link: '/UITest',
  sidebar: ['', 'foo', 'bar' , '功能测试'],
},)

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,UITest],
})
