# SekshiBot

Moderation and more bot for [WE ♥ KPOP][üWave], built on [Munar][].

![SekshiBot](./assets/character.png)

Runs in our [Slack][] and [üWave][] channels.

## Installation

```shell
$ npm install --global sekshibot
```

## Usage

```shell
$ sekshibot
```

Environment variables can be used to configure the bot.

| Variable | |
|----------|-|
| `SLACK_TOKEN` | A Slack bot token to connect to Slack. |
| `UWAVE_TOKEN` | A üWave session JWT to connect to the [WE ♥ KPOP üWave instance][üWave]. You can also provide an email/password combination instead. |
| `UWAVE_EMAIL` | Email address of the üWave bot account on the [WE ♥ KPOP üWave instance][üWave]. |
| `UWAVE_PASSWORD` | Plaintext password of the üWave bot account on the [WE ♥ KPOP üWave instance][üWave]. |
| `PLUGDJ_EMAIL` | Email address of the plug.dj bot account. |
| `PLUGDJ_PASSWORD` | Email address of the plug.dj bot account. |
| `GAPI_TOKEN` | A server key for Google Data APIs. |

## License

[ISC][]

[Munar]: https://munar.space
[Slack]: https://slack.welovekpop.club
[üWave]: https://welovekpop.club
[ISC]: ./LICENSE
