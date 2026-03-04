## JWT Authentication

[JSON Web Token, commonly referred to as JWT, is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. The token is digitally signed, ensuring its authenticity and integrity. JWTs are primarily used to authenticate users, authorize access to certain resources, and exchange information securely.](https://medium.com/@extio/understanding-json-web-tokens-jwt-a-secure-approach-to-web-authentication-f551e8d66deb)

### HttpOnly Cookies

HttpOnly cookies are a common way to store session identifiers or refresh tokens because the browser will automatically include them on requests, but JavaScript cannot read or modify them. This helps reduce the impact of XSS attacks, though you still need to configure secure attributes like `Secure` and `SameSite` and ensure proper CORS settings when using them across different hosts.

[HttpOnly](https://owasp.org/www-community/HttpOnly)

### Token Storage (Avoid localStorage)

Storing JWTs in `localStorage` (or `sessionStorage`) exposes them to any injected script, so an XSS bug can leak tokens. Prefer HttpOnly cookies or short-lived tokens kept only in memory and refreshed server-side.

[HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)
