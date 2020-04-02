# Slack translation bot

---

This is a simple example App built with [Slack's Bolt Framework](https://slack.dev/bolt/tutorial/getting-started) for node.js.

App shows a welcome message when a user opens the "app home".

### Requirements

* A Bot User must be added to your App
* Your App must be subscribed to [Events API](https://api.slack.com/events-api)
* Your app needs to be subscribed to the events mentioned in the *Events* section

### Scopes

* [`chat:write`](https://api.slack.com/scopes/chat:write)

### Events

#### Workspace events
* [`app_home_opened`](https://api.slack.com/events/app_home_opened)

