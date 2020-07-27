const uwOptions = {}

if (process.env.UWAVE_TOKEN) {
  uwOptions.token = process.env.UWAVE_TOKEN
} else {
  uwOptions.email = process.env.UWAVE_EMAIL
  uwOptions.password = process.env.UWAVE_PASSWORD
}

module.exports = {
  mongo: 'mongodb://localhost:27017/sekshi',
  adapters: [
    ['slack', { token: process.env.SLACK_TOKEN }],
    ['uwave', {
      ...uwOptions,
      api: 'https://wlk.yt/api',
      socket: 'wss://wlk.yt'
    }]
  ],
  plugins: [
    ['serve', {
      enable: true,
      baseUrl: 'https://munar.wlk.yt/'
    }],
    ['usage', { enable: true }],
    ['user-log', { enable: true }],
    ['emotes', { enable: true }],
    ['karma', { enable: true }],
    ['reddit-feed', {
      enable: true,
      subreddits: ['kindie', 'koreanmusic', 'khiphop', 'koreanrock'],
      output: 'uwave'
    }],
    ['triggers', { enable: true }],
    ['dj-history-skip', {
      enable: true,
      limit: 25,
      lockskipPosition: 1
    }],
    ['waitlist-raffle', {
      enable: true,
      duration: 60
    }],
    ['media-blacklist', { enable: true }]
  ]
}
