import { routes } from "../routes.js";
import { extractPueryParams } from "../utils/extractQueryParams.js";

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractPueryParams(query) : {};
    
    return route.controller(request, response);
  }
  return response.writeHead(404).end("Rota não encontrada");
}
