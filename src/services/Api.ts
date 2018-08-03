import { Observable } from 'rxjs'
import {
  ajax,
  AjaxRequest,
  AjaxResponse
} from 'rxjs/ajax';

type httpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export default class Api {
  private baseUrl: '';
  private config: AjaxRequest;
  private defaultConfig: AjaxRequest = {};

  constructor(config: AjaxRequest = {}) {
    this.config = {
      ...this.defaultConfig,
      ...config,
    };
  }

  public call(url: string, method: httpMethod = 'GET', body?: any): Observable<AjaxResponse> {
    const config: AjaxRequest = {
      ...this.config,
      body,
      method,
      url: `${this.baseUrl}${this.formatUrl(url)}`,
    };

    return ajax(config);
  }

  private formatUrl(url: string): string {
		let fullUrl: string;

		if (url.charAt(0) === '/') {
			fullUrl = url;
		} else {
			fullUrl = `/${url}`;
		}

		return fullUrl;
	}
}
