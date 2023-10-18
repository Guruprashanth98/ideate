import type { NitroRuntimeConfig } from 'nitropack'

export default class HankoConfig {
  runtimeConfig: NitroRuntimeConfig
  hankoConfig: any
  constructor() {
    this.runtimeConfig = useRuntimeConfig()
    this.hankoConfig = this.runtimeConfig.public.hanko
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
