import tokenService from '../services/tokenService'
const BASE_URL = '/api/flashcards/'

export function create(flashcard) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(flashcard)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function getMyFlashCards(user) {
    return fetch(`${BASE_URL}${user._id}`, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteFlashCard(flashCardId) {
    console.log(flashCardId)
    return fetch(
      `${BASE_URL}${flashCardId}`,
      {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
          },
      }, { mode: "cors" }
    ).then((res) => res.json());
}

