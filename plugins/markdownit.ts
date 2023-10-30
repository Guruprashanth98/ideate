// @/plugins/markdownit.ts
import md from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItHighlightjs from 'markdown-it-highlightjs'

export default defineNuxtPlugin(() => {
  const renderer = md({
    breaks: true,
    linkify: true,
  })
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const defaultRender =
    renderer.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(
        tokens,
        idx,
        options,
      )
    }

  renderer.renderer.rules.link_open = function (
    tokens,
    idx,
    options,
    env,
    self,
  ) {
    // If you are sure other plugins can't add `target` - drop check below
    const aIndex = tokens[idx].attrIndex('target')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']) // add new attribute
    }

    // pass token to default renderer.
    return defaultRender(
      tokens,
      idx,
      options,
      env,
      self,
    )
  }
  renderer.use(markdownItAttrs)
  renderer.use(markdownItHighlightjs)
  return {
    provide: {
      mdRenderer: renderer,
    },
  }
})
