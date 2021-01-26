import tokenService from "../services/tokenService";
const BASE_URL = "/api/resources/";

export function create(resource) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(resource)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

export function getResource(id){
  return fetch(`${BASE_URL}${id}`,
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  },
  { mode: "cors" })
  .then((res) => res.json())
}

export function deleteFromSaved(resourceId) {
  return fetch(
    `${BASE_URL}${resourceId}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getMySavedItems(user) {
  return fetch(`${BASE_URL}savedItems/${user._id}`, {
    mode: "cors",
  }).then((res) => res.json());
}

export function search(queryString) {
  return fetch(
    `${BASE_URL}search`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(queryString)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function addToSavedItems(resource) {
  return fetch(
    `${BASE_URL}/myResources`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(resource)
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

