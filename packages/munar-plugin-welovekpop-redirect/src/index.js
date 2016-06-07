import { Plugin } from 'munar-core'

export default class WLKRedirect extends Plugin {
  static defaultOptions = {
    redirectMessage: `
      Welcome back @$user! We've migrated to a different site while plug.dj was
      down. Come join us at https://welovekpop.club/! :heart:
    `.replace(/\s+/g, ' '),
    redirectSources: ['plugdj']
  }

  init () {
    this.bot.on('user:join', this.onUserJoin)
  }

  destroy () {
    this.bot.removeListener('user:join', this.onUserJoin)
  }

  shouldRedirect (adapter) {
    const name = adapter.getAdapterName()
    return this.options.redirectSources.indexOf(name) !== -1
  }

  onUserJoin = (adapter, user) => {
    if (this.shouldRedirect(adapter)) {
      user.source.send(
        this.options.redirectMessage.replace(/\$user/g, user.username)
      )
    }
  }
}
