const newsTemplate = new Vue({
  el: '#news-template',

  data: function() {
    return {
      apikey: 'b7301fef1aa6403898bc27297b14f1fb',
      cacheDuration: 1000 * 60 * 15,
      currentStoryId: 0,
      stories: []
    };
  },

  created: function() {
    Promise.all([
      this.retrieveStories(),
      this.retrieveSources()
    ])
      .then(storiesAndSources => {
        const storiesResponse = storiesAndSources[0];
        const sourcesResponse = storiesAndSources[1];
        this.stories = storiesResponse.articles
          .map(article => {
            sourceRecord = sourcesResponse.sources.find(source => source.id === article.source.id);
            source = {
              ...sourceRecord,
              ...article.source,
              url: article.url
            };
            titleParts = article.title.split(' - ');
            titleParts.pop();
            title = titleParts.length === 0 ? article.title : titleParts.join(' - ');
            return {
              author: article.author,
              title,
              subtitle: article.description,
              date: new Date(article.publishedAt).toLocaleDateString(),
              tags: source.category ? [ source.category ] : [],
              image: {
                url: article.urlToImage,
                caption: undefined
              },
              teaser: `<p>${article.content} <a href="https://newsapi.org" target="_blank">Powered by NewsAPI.org</a>.</p>`,
              content: article.text,
              source
            }
          })
      });
  },

  computed: {
    story: vm => {
      const article = vm.stories[vm.currentStoryId];
      return article || { source: {}, image: {} }
    },
    relatedStories: vm => vm.stories
      .map( (story, id) => {
        const { date, source, ...rest } = story;
        return { id, ...rest };
      })
      .filter( (story) => story.id !== vm.currentStoryId),
    storiesWithSameTag: vm => {
      if (!!vm.story.tags && vm.story.tags.length > 0) {
        return vm.relatedStories
          .filter(story => story.tags.indexOf(vm.story.tags[0]) > -1);
      }
      return [];
    },
  },

  methods: {

    load: function(relatedStory) {
      this.currentStoryId = relatedStory.id;
      window.scrollTo(0,0);
    },

    retrieveStories: function() {
      const fromCache = window.localStorage.getItem('stories');
      if (!!fromCache) {
        const data = JSON.parse(fromCache);
        if ( (data.retrievedAt + this.cacheDuration) > new Date().getTime() ) {
          return Promise.resolve(data);
        }
      }
      return this.getStoriesFromAPI();
    },

    retrieveSources: function () {
      const fromCache = window.localStorage.getItem('sources');
      if (!!fromCache) {
        const data = JSON.parse(fromCache);
        if ((data.retrievedAt + this.cacheDuration) > new Date().getTime()) {
          return Promise.resolve(data);
        }
      }
      return this.getSourcesFromAPI();
    },

    getStoriesFromAPI: function () {
      const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=' + this.apikey;
      const req = new Request(url);
      return fetch(req)
        .then(result => result.json())
        .then(json => {
          json.retrievedAt = new Date().getTime();
          // return json;
          return Promise.all(
            json.articles
              .map(article => {
                // const ipsumUrl = 'https://loripsum.net/api/' + (6 + Math.floor(Math.random() * 6)) + '/medium/ul/bq';
                // const ipsumUrl = 'https://corporatelorem.kovah.de/api/' + (6 + Math.floor(Math.random() * 6)) + '/json');
                const ipsumUrl = 'https://www.randomtext.me/api/lorem/p-' + (6 + Math.floor(Math.random() * 6)) + '/25-75';
                return fetch(new Request(ipsumUrl, { mode: 'cors' }))
                  .then(ipsumResponse => {
                    return ipsumResponse.json();
                  })
                  .then(text => {
                    return { ...article, text:text.text_out };
                  })
                  .catch(err => {
                    return article;
                  });
              })
          )
            .then(articles => ({...json, articles}));
        })
        .then(json => {
          window.localStorage.setItem('stories', JSON.stringify(json));
          return json;
        });
    },

    getSourcesFromAPI: function () {
      const url = 'https://newsapi.org/v2/sources?' +
        'apiKey=' + this.apikey;
      const req = new Request(url);
      return fetch(req)
        .then(result => result.json())
        .then(json => {
          json.retrievedAt = new Date().getTime();
          window.localStorage.setItem('sources', JSON.stringify(json));
          return json;
        });
    },

    topStories: function (count) {
      return this.relatedStories
        .slice(0, count);
    }
  },

  filters: {
    json: function (value) {
      return JSON.stringify(value, null, 2);
    }
  }
});
