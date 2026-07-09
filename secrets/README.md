# Expo Secrets / used -- by -- Expo Team

* == keys + other data
  * _Examples:_ client API keys
  * stored | Google Cloud Secret Manager
  * synced locally | it's needed

* 👀audience
  * Expo team👀   
* uses
  * configure the official Expo client
  * connect -- to -- services / Expo uses

## Expo team instructions

### Security

* ❌NOT add anything | this path❌

### Unlocking the secrets
TODO:

**Prerequisites:**
- Google Cloud SDK installed (`brew install google-cloud-sdk`)
- Authenticated with gcloud (`gcloud auth login`)
- Project set (`gcloud config set project exponentjs`)
- Access to the `exponentjs` project with `services-secrets-accessor` rights ([request access](https://console.cloud.google.com/iam-admin/pam/entitlements/my?project=exponentjs))

* Run `./bin/unlock` in this repo to fetch and decrypt the secrets to your local machine.

The unlocked secrets will remain on your local computer in the `secrets/` directory but are gitignored and will not be committed to the repository.

### Locking the secrets

You can remove the secrets from your local directory by running `./bin/lock`
* This removes the secret files.
