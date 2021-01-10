import { HttpParams } from '@angular/common/http';

export function createHttpParams(params: {}): HttpParams {
  let httpParams: HttpParams = new HttpParams();

  Object.keys(params).forEach((param) => {
    const paramValue = params[param];

    if (paramValue !== undefined) {
      if (Array.isArray(paramValue)) {
        httpParams = addArray(param, paramValue);
      } else {
        httpParams = addValue(param, paramValue);
      }
    }
  });

  return httpParams;

  function addValue(param: string, paramValue) {
    return httpParams.append(param, paramValue);
  }

  function addArray(param: string, paramArray) {
    paramArray.forEach(
      (paramValue) => (httpParams = httpParams.append(param, paramValue))
    );

    return httpParams;
  }
}
