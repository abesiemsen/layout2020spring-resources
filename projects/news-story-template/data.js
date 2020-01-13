var app = new Vue({
  el: '#news-template',
  data: {
    story: {
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
      author: {
        name: 'Abram Siemsen',
        image: {
          url: 'https://google.com'
        },
        twitter: {
          handle: '@defectiveguru'
        }
      },
      related: [
        {
          slug: '',
          url: 'https://google.com',
          title: 'Another News Story',
          subtitle: '',
          teaser: '',
          image: {
            url: '',
            caption: ''
          }
        },
        {
          slug: '',
          url: 'https://google.com',
          title: 'A Third Story',
          subtitle: '',
          teaser: '',
          image: {
            url: '',
            caption: ''
          }

        }
      ]
    }
  },
  filters: {
    json: function (value) {
      return JSON.stringify(value, null, 2);
    }
  }
})