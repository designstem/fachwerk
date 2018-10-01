import Markdown from "../Markdown.js";

const content = `
## Why not React?

While development the framework we wondered about it many times. We are big fans on React [MDX](https://github.com/mdx-js) ecosystem and tools like [Docz](https://www.docz.site) and [MDX-deck](https://jxnblk.com/mdx-deck/#0) have been a great inspiration for us.

It is all about DesignSTEM's target audience, the primary use case we have. Main goal of the framework is make it instantly usable for everybody with the minimal knowledge of HTML. Educators and hobbyist are just about to graduate from jQuery, so build steps and other heavy Javascript tooling is not an option.

VueJS offers this easy migration path, so it was a natural choice for Fachwerk.

## What the font?

It is [IBM Plex](https://www.ibm.com/plex). We just love the latest design work from _Internationale Mensch-Maschine_.
`;

export default {
  components: { Markdown },
  // render: function(h) {
  //   return h('div', { props: { content: 'aa' } });
  // }
  data: () => ({ content }),
  template: `
    <Markdown :content="content" />
  `
};
