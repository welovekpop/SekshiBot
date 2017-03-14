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
    ['uwave', Object.assign(uwOptions, {
      api: 'https://welovekpop.club/v1',
      socket: 'wss://welovekpop.club'
    })],
    ['plugdj', {
      email: process.env.PLUGDJ_EMAIL,
      password: process.env.PLUGDJ_PASSWORD,
      room: 'loves-kpop'
    }]
  ],
  plugins: [
    ['serve', {
      enable: true,
      baseUrl: 'https://munar.welovekpop.club/'
    }],
    ['chat-log', { enable: true }],
    ['user-log', { enable: true }],
    ['emotes', { enable: true }],
    ['greetings', { enable: true }],
    ['karma', { enable: true }],
    ['reddit-feed', {
      enable: true,
      subreddits: ['kpop', 'koreanmusic', 'khiphop', 'koreanrock'],
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
    ['media-blacklist', { enable: true }],
    ['welovekpop-redirect', { enable: true }]
  ]
}
