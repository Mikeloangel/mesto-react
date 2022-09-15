class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async _getJSON(res){
    if(res.ok) return res.json();

    //getting proper error message from JSON response {'message':''}
    const isJSON = res.headers.get('content-type')?.includes('application/json');
    const data = isJSON ? await res.json() : null;
    const error = (data && data.message) || res.status;

    return Promise.reject(error);
  }

  _getRouteRequest(route, method, body=null) {
    return body ?
      fetch(`${this._baseUrl}${route}`,{ method, headers: this._headers, body: JSON.stringify(body) })
        .then(this._getJSON) :
      fetch(`${this._baseUrl}${route}`,{ method, headers: this._headers })
        .then(this._getJSON);

  }

  handleError(response, cb=null) {
    console.error(`Api error: ${response}`);
    if (typeof cb === 'function') cb(response)
  }

  //API ROUTES

  getInitialCards = () => this._getRouteRequest('/cards','GET');

  getUserMe = () => this._getRouteRequest('/users/me', 'GET');

  pathchUserMe = body => this._getRouteRequest('/users/me','PATCH',body);

  postCard = body => this._getRouteRequest('/cards','POST',body);

  deleteCard = id => this._getRouteRequest(`/cards/${id}`,'DELETE');

  putLike = id => this._getRouteRequest(`/cards/${id}/likes`,'PUT');

  deleteLike = id =>this._getRouteRequest(`/cards/${id}/likes`,'DELETE');

  patchUserAvatar = url => this._getRouteRequest(`/users/me/avatar`,'PATCH',{avatar:url});
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'f965250c-63b8-497e-85ae-bfe5bf7bc71a',
    'Content-Type': 'application/json'
  }
});

export default api;
