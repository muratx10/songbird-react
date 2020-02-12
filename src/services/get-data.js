export default class GetBird {
  _flickr_API_KEY = '5cf196a195bc41e974d1d1be1aea46f4';
  _apiBaseImg = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this._flickr_API_KEY}&gallery_id=&format=json&nojsoncallback=1&per_page=10&tags=`;
  _apiBaseAudio = 'https://www.xeno-canto.org/api/2/recordings?query=';

  async image(name) {
    const res = await fetch(`${this._apiBaseImg}${name}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}\` +
        \`, received ${res.status}`);
    }
    const data = await res.json();
    const bird = await data.photos.photo[8];
    const image = await fetch(`https://farm${bird.farm}.staticflickr.com/${bird.server}/${bird.id}_${bird.secret}.jpg`);
    return image.url;
  }

  async audio(name) {
    const proxyUrl = 'https://fathomless-temple-74211.herokuapp.com/';
    const res = await fetch(`${proxyUrl}${this._apiBaseAudio}${name}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}\` +
        \`, received ${res.status}`);
    }
    const data = await res.json();
    const song = await data.recordings[0].file;
    return song;

  }
}
