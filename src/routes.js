import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(200).end("Lista de produtos");
    },
  },

  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.query));
    },
  },

  {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      return response
        .writeHead(404)
        .end("Produto removido com ID:" + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
