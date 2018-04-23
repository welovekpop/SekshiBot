const uwOptions = {}

if (process.env.UWAVE_TOKEN) {
  uwOptions.token = process.env.UWAVE_TOKEN
} else {
  uwOptions.email = process.env.UWAVE_EMAIL
  uwOptions.password = process.env.UWAVE_PASSWORD
}

const gapiKey = process.env.GAPI_TOKEN

module.exports = {
  mongo: 'mongodb://localhost:27017/sekshi',
  adapters: [
    ['slack', { token: process.env.SLACK_TOKEN }],
    ['uwave', Object.assign(uwOptions, {
      api: 'https://wlk.yt/v1',
      socket: 'wss://wlk.yt'
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
      baseUrl: 'https://munar.wlk.yt/'
    }],
    ['usage', { enable: true }],
    ['chat-log', { enable: true }],
    ['user-log', { enable: true }],
    ['emotes', { enable: true }],
    ['greetings', { enable: false }],
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
    ['media-blacklist', { enable: true }],
    ['welovekpop-redirect', {
      enable: true,
      redirectMessage: 'Welcome @$user! We have moved to a different platform. Come join us at https://wlk.yt/! :heart:'
    }],
    ['events-calendar', {
      enable: true,
      calendar: 'glb1d8iaqpb234p80fed7q4lk0@group.calendar.google.com',
      key: gapiKey
    }]
  ]
}
