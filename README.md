# SuperTokens SSO-ish

### Introduction

These are a set of apps that try to demonstrate how you might build SSO-like apps with `supertokens`. [(SSO - Single Sign-On)]()

It includes `api` - An api written in nestjs, `app-one`, `app-two`, `auth-app` are react-typescript apps. The  `auth-app` is the single sign-on app that authenticates both `app-one` and `app-two`


### Setup and run

1. Install`supertokens core` if don't already have it installed.[With Docker]() or[Without Docker]()
2. Clear your cookies/tokens if you have been developing a different app that uses supertokens else it would just use those cookies/tokens. You wouldn't re-authenticate with this app. This is not the result we desire. If you don't want to clear your cookies, open a new private/incognito window for this app.
3. Run`yarn start` at the root of this repository. This both installs and starts all the apps. If you use`npm` only, you'll have to tweak the scripts a little bit to their npm equivalent.
4. Play around a raise issues as you see fit.
