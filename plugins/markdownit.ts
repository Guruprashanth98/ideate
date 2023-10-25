// @/plugins/markdownit.ts
import md from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItHighlightjs from 'markdown-it-highlightjs'

export default defineNuxtPlugin(() => {
  const renderer = md({
    breaks: true,
    linkify: true,
  })
  renderer.use(markdownItAttrs)
  renderer.use(markdownItHighlightjs)
  return {
    provide: {
      mdRenderer: renderer,
    },
  }
})
