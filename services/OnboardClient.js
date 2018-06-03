import fetch from 'isomorphic-unfetch';

export default class OnboardClient {
  constructor(baseURL, auth0Client) {
    this.baseURL = baseURL;
    this.auth0Client = auth0Client;
  }

  submitSample({ name, email, sample }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.auth0Client.isAuthenticated()) {
      headers['Authorization'] = `Bearer ${this.auth0Client.getAccessToken()}`;
    }

    return fetch(this.baseURL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, sample })
    });
  }
}
