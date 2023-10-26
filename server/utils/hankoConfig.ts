import { RuntimeConfig } from 'nuxt/schema'

export default class HankoConfig {
  runtimeConfig: RuntimeConfig
  hankoConfig: any
  constructor() {
    this.runtimeConfig = useRuntimeConfig()
    this.hankoConfig =
      this.runtimeConfig.public.hanko
  }

  getHankoUrl() {
    return this.hankoConfig.apiURL
  }

  getCookieName() {
    return this.hankoConfig.cookieName
  }

  getRedirects() {
    return this.hankoConfig.redirects
  }
}
