import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone();
    req.headers.append(
      'AUTHORIZATION',
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiVEVTVFVTRVIxOTg3NjUiLCJ2ZXJzaW9uIjoidjIiLCJyZXNldF9kYXRlIjoiMjAyMy0wNS0yMCIsImlhdCI6MTY4NTQ0OTE4MCwic3ViIjoiYWdlbnQtdG9rZW4ifQ.OQ1IQRry32U1UMn16UBAO48RlNp9wsQUg0gUTOmDyxVc1lQpdjyWjvPefCmV-ixIlGQVhe6qcz08whypgMTuOGTuDqwI0jQiHURw5PACUAjwGFYaDFAxV8iB4iT_R4hRtOsAgMfxAaquhkFsiLo-cqxLxGerfz5UWKONvptGIB5BNa1b9PcHTzZ3ZhQ9EjwJER-e7-eJ1pYyr-vXrXk33R9UdyZhL0WQ1mmdqK-CwAhq_ywXplC7Gp90WEVrAwUAarZzn-7i4iLTbk0NlV8LZownZUP2OrR5iHpMXGkbu_pE3UnDdQrRGh1KCRPD3KvmtUtXA0L-oIwtEqcFFUaz7A'
    );
    return next.handle(req);
  }
}
