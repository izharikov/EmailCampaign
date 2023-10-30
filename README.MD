# Sitecore StackExchange Email Campaign
This is simple express-based server, that provides HTML email templates can be used in the campaigns.

## Usage
This API is used for repeatable campaign inside [Sitecore Send](https://doc.sitecore.com/send/en/users/sitecore-send/create-a-repeatable-html-campaign.html).

## API
`/api/templates/latest-questions`

Get the email template for latest questions posted on https://sitecore.stackexchange.com/ during last week.

## Tools used
- [Express](https://www.npmjs.com/package/express) - server
- [mjml](https://mjml.io/) - emails framework
