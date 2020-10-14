import http, { RequestOptions, IncomingMessage } from 'http';
import { URL } from 'url';

export function get(optionsOrUrl: RequestOptions | string | URL, options?: RequestOptions): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    const callback = (response: IncomingMessage) => {
      resolve(
        new Promise((resolve, reject) => {
          response.on('end', resolve);
          response.on('error', reject);
        }),
      );
    };
    if (options) {
      http.get(optionsOrUrl as URL | string, options, callback).on('error', reject);
    } else {
      http.get(optionsOrUrl, callback).on('error', reject);
    }
  });
}
