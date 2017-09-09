import Unsplash, { toJson } from 'unsplash-js';

let unsplash = new Unsplash({
  applicationId: "2130f8bc4fd3976191f7d48c292fe107563a4f58a603fd53abef1ce8b2a98264",
  secret: "9009594821dc4c51f13367ab1b0d610eeac31dce4d0c7a232eaf3c63c85c2ea6",
  callbackUrl: "http://localhost:3000/"
})

export {
  toJson
};

export default unsplash;