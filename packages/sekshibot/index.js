module.exports = {
  mongo: 'mongodb://localhost:27017/sekshi',
  adapters: [
    ['slack', { token: process.env.SLACK_TOKEN }],
    ['uwave', {
      api: 'https://welovekpop.club/v1',
      socket: 'wss://welovekpop.club',
      token: process.env.UWAVE_TOKEN
    }],
    ['plugdj', {
      email: process.env.PLUGDJ_EMAIL,
      password: process.env.PLUGDJ_PASSWORD,
      room: 'loves-kpop'
    }]
  ],
  plugins: [
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
    ['waitlist-raffle', { enable: true }],
    ['welovekpop-redirect', { enable: true }]
  ]
}
