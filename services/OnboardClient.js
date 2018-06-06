import fetch from 'isomorphic-unfetch';

export default class OnboardClient {
  constructor(auth0Client) {
    this.auth0Client = auth0Client;
  }

  submitSample({ name, email, sample }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.auth0Client.isAuthenticated()) {
      headers['Authorization'] = `Bearer ${this.auth0Client.getAccessToken()}`;
    }

    return fetch('/api/', {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, sample })
    });
  }
}
