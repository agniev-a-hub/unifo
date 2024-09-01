export interface CookieAttributes {
  /**
   * The cookie's expiration date.
   * Can be a `Date` object or a number representing days from now.
   */
  expires?: Date | number;
  /**
   * The path where the cookie is accessible.
   * Defaults to the path of the page where the cookie was created.
   */
  path?: string;
  /**
   * The domain that the cookie is available to.
   * Defaults to the domain of the page where the cookie was created.
   */
  domain?: string;
  /**
   * Indicates if the cookie should only be transmitted over secure protocols like HTTPS.
   * Default is false.
   */
  secure?: boolean;
  /**
   * If true, the cookie will be inaccessible to JavaScript's `Document.cookie` API.
   * It can still be sent with HTTP requests, but cannot be read via JavaScript.
   * Default is false.
   */
  httpOnly?: boolean;
  /**
   * The `SameSite` attribute. This prevents the browser from sending this cookie along with cross-site requests.
   * Can be 'strict', 'lax', or 'none'.
   */
  sameSite?: 'strict' | 'lax' | 'none';
  /**
   * Allows for setting custom attributes not predefined in this type.
   */
  [key: string]: any;
}
