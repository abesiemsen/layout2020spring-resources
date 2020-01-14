const newsTemplate = new Vue({
  el: '#news-template',
  data: {
    currentStoryId: 0,
    stories: [
      {
        title: 'A News Story',
        subtitle: 'subtitle',
        teaser: 'It\'s a news story.',
        date: new Date().toLocaleDateString(),
        tags: [
          'silly', 'fake', 'news'
        ],
        image: {
          url: 'https://google.com',
          caption: 'This is the image caption'
        },
        content: '<strong>markup!</strong>',
        source: {
          name: 'The Washington Post',
          url: 'http://wapo.com'
        }
      },
      {
        title: 'Another News Story',
        subtitle: 'ST 2',
        teaser: 'teaser 2',
        date: new Date().toLocaleDateString(),
        tags: [
          'news'
        ],
        image: {
          url: '',
          caption: ''
        },
        source: {
          name: 'The Atlantic',
          url: 'http://atlantic.com'
        },
        content: 'This is story 2 html.'
      },
      {
        title: 'A Third Story',
        subtitle: 'ST 3',
        teaser: 'Teaser 3',
        date: new Date().toLocaleDateString(),
        tags: [
          'fake', 'news'
        ],
        image: {
          url: '',
          caption: ''
        },
        source: {
          name: 'The New York Times',
          url: 'http://nyt.com'
        },
        content: 'This is story 3 html.'
      }

    ] // end stories
  },
  computed: {
    story: vm => ({
      ...vm.stories[vm.currentStoryId]
    }),
    relatedStories: vm => vm.stories
      .map( (story, id) => {
        const { tags, date, author, ...rest } = story;
        return { id, ...rest };
      })
      .filter( (story) => story.id !== vm.currentStoryId)
  },
  methods: {
    load: function(relatedStory) {
      this.currentStoryId = relatedStory.id;
    }
  },
  filters: {
    json: function (value) {
      return JSON.stringify(value, null, 2);
    }
  }
});
