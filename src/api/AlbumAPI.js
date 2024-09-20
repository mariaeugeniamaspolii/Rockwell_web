const API_URL = process.env.REACT_APP_ALBUMS_API;

export class AlbumAPI {
  static obtenerListaAlbumes() {
    return fetch(`${API_URL}/albums`)
      .then((res) => res.json(res))
    //   .then((data) => data)
      .catch(console.error);
  }

  static obtenerAlbumPorId() {}

  static obtenerArtistaPorId() {}
}