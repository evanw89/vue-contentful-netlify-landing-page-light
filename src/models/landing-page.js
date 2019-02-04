import api from '../utils/api';
import { responseAdapter as contentBlockResponseAdapter } from './content-block';
import { responseAdapter as teaserResponseAdapter } from './teaser';

// Contentful Content ID
export const HOME = `3ChB6F61tBTN54t4fYlyrd`;

export class LandingPage {
  constructor({
    contentBlocks = [],
    id = null,
    intro = ``,
    about = ``,
    teasers = ``,
    title = ``,
  } = {}) {
    this.contentBlocks = contentBlocks;
    this.id = id;
    this.intro = intro;
    this.about = about;
    this.teasers = teasers;
    this.title = title;
  }
}

// We use an adapter to bring the API response
// from the Contentful API into the correct format
// for our LandingPage class.
export function responseAdapter(response) {
  const { fields, sys } = response.sys.type === `Array`
    ? response.items[0]
    : response;

  const contentBlocks = fields.contentBlocks
    .map(x => contentBlockResponseAdapter(x));
  const teasers = fields.teasers
    .map(x => teaserResponseAdapter(x));

  return new LandingPage({
    ...fields,
    ...sys,
    contentBlocks,
    teasers,
  });
}

// Wrap the Contentful API client
export default {
  async get(id) {
    return responseAdapter(await api.getEntries({ 'sys.id': id }));
  },
};
