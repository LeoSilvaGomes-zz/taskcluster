// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Login extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'login',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.ping.entry = {"args":[],"method":"get","name":"ping","query":[],"route":"/ping","stability":"stable","type":"function"}; // eslint-disable-line
    this.oidcCredentials.entry = {"args":["provider"],"method":"get","name":"oidcCredentials","output":true,"query":[],"route":"/oidc-credentials/<provider>","stability":"experimental","type":"function"}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
  /* eslint-disable max-len */
  // Given an OIDC `access_token` from a trusted OpenID provider, return a
  // set of Taskcluster credentials for use on behalf of the identified
  // user.
  // This method is typically not called with a Taskcluster client library
  // and does not accept Hawk credentials. The `access_token` should be
  // given in an `Authorization` header:
  // ```
  // Authorization: Bearer abc.xyz
  // ```
  // The `access_token` is first verified against the named
  // :provider, then passed to the provider's APIBuilder to retrieve a user
  // profile. That profile is then used to generate Taskcluster credentials
  // appropriate to the user. Note that the resulting credentials may or may
  // not include a `certificate` property. Callers should be prepared for either
  // alternative.
  // The given credentials will expire in a relatively short time. Callers should
  // monitor this expiration and refresh the credentials if necessary, by calling
  // this endpoint again, if they have expired.
  /* eslint-enable max-len */
  oidcCredentials(...args) {
    this.validate(this.oidcCredentials.entry, args);

    return this.request(this.oidcCredentials.entry, args);
  }
}
