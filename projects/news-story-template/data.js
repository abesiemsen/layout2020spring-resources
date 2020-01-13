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
          title: 'Another News Story',
          url: 'https://google.com'
        },
        {
          title: 'A Third Story',
          url: 'https://google.com'

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