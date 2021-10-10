const newsTemplate = new Vue({
  el: '#news-template',
  data: {
    currentStoryId: 0,
    stories: [
      {
        title: 'Just about every store at the mall is struggling. Then there’s Bath & Body Works.',
        subtitle: 'The candle-and-lotion chain has notched 40 straight quarters of sales growth. Even analysts are flummoxed.',
        date: new Date('2020-01-13 06:00:00-0600').toLocaleDateString(),
        tags: [
          'business', 'retail'
        ],
        image: {
          url: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IAS3WVBSM4I6VFY3IO7MH74YMA.jpg&w=1440',
          caption: 'Sales have risen for 40 straight quarters at Bath & Body Works, making it the rare mall success story. (Christopher Dilts/Bloomberg)'
        },
        teaser: `
          <p>There is only one reason Abigail Burt goes to the mall anymore: to smell the candles at Bath & Body Works.</p>
          <p>The 21-year-old college student stops in each month, whether she has spending money or not, then makes a beeline for the exit, bypassing every other store.</p>
          <p>“Every time a new scent comes out, my roommate and I are like, ‘We’ve got to try it,” she said. “I walk in and just feel so happy."</p>
        `,
        content: `
          <p>For three decades, Bath &amp; Body Works has been an enduring and unexpected bright spot in the now-crumbling landscape of America’s malls. The retailer, known for highly scented lotions and candles with names such as Twinkling Nights and Underwater Oasis, has notched 40 straight quarters of sales growth and continues to attract new customers at a time when mall visits are dwindling. Analysts say it has defied many of the challenges roiling the retail industry — though they could not exactly say why.</p>
          <p>“It truly is a head-scratcher,” said Sucharita Kodali, a Forrester analyst whose preteen daughters are fans of the brand. “There are so many things going against this company: It’s a mall merchant — that, alone, should have spelled doom. And it’s selling commodities that are broadly available elsewhere, often for cheaper. But somehow Bath &amp; Body Works has figured out how to appeal to the masses.”</p>
          <p>Burt, an advertising major at the University of Georgia, has been a devotee since middle school. Unlike so many other retailers of her youth — Aeropostale and Claire’s among them — that have staggered through bankruptcy and store closures, Bath &amp; Body Works is posting double-digit growth and expanding into new locations. Analysts say its 1,600 U.S. stores, most located in shopping malls, have become destinations unto themselves.</p>
          <p>“To me, it’s Exhibit A that the mall is not dead,” said John Morris, a senior analyst at D.A. Davidson. “Bath &amp; Body Works has found a way to get everyone into its stores, teens up to baby boomers."</p>
          <p>Morris traces the retailer’s success to its constantly changing assortment of candles, shower gels and hand creams, which can be tried out in stores. Many products are affordable indulgences that appeal to preteens on an allowance, as well as 50-somethings in search of a pick-me-up. It doesn’t hurt that the company has invested heavily to transform its stores into bright, fanciful enclaves of escape.</p>
          <p>“When you go into a second- or third-tier mall, a lot of stores look very gloomy or down on their luck,” said Neil Saunders, managing director of research firm GlobalData Retail. “Bath &amp; Body Works, though, stands out: It’s a shiny beacon that draws customers in."</p>
          <p>A spokeswoman for L Brands declined to comment but provided a transcript of remarks made recently by Nicholas Coe, the retailer’s chief executive.</p>
          <p>Bath &amp; Body Works has become “a ludicrously powerful brand” by constantly assessing — and reassessing — every part of its business, he told investors in September. Stores often double as testing labs, allowing executives to experiment with new floor plans, prices and products to determine what its customers want. Plus, he said, it helps that few rivals have been able to strike the same balance between “prestige” and affordability.</p>
          <p>“We have competition, but we don’t have a direct competitor that looks just like us and does what we do,” Coe said. “Our brand has a very, very clear point of view. You’re not wallowing in ambiguity when you walk into one of our stores.”</p>
          <p>As a result, the retailer has become a darling of mall owners and operators. The Mall of America in Bloomington, Minn., the nation’s largest shopping mall, has not one but two stores that have recently been remodeled and expanded. Bath &amp; Body Works “has always been a destination,” said Heather Brechbill Swilley, the mall’s senior vice president of leasing. It’s “successful and relevant.”</p>
          <p>Adrienne Myers, 28, bought her share of Sweet Pea shimmer lotions, body sprays and “other embarrassing sparkly stuff” while she was in middle school. She hadn’t thought about Bath &amp; Body Works for years until a friend mentioned buying all of her candles there.</p>
          <p>“I was like, ‘Really?,'” said Myers, who lives in Washington, D.C. “I kind of thought of it like Abercrombie — a store you shopped at when you’re younger and then forget about.” But she bought a candle and liked the way its scent filled her room. Now she stocks up every few months.</p>
          <p>“Honestly, it’s one of the only reasons I come to the mall anymore,” Myers said during a recent stop at a store in Northern Virginia.</p>
          <p>Inside, rainbow-hued candles, shower gels and body lotions were lined up by scent and color. There was no shortage of discounts. Hand soaps: six for $26. Plug-in fragrance refills: five for $24. All body scrubs, shower gels and fragrance mists: buy three, get three free.</p>
          <p>Angeline Williams, 64, popped in to redeem a birthday coupon for 20 percent off. She bought a bottle of her favorite lotion, formulated to smell like Japanese cherry blossoms.</p>
          <p>“They have very friendly customer service and really good products that smell fresh,” said Williams, who works at Nordstrom a few doors down. “I definitely stock up when they send me coupons.”</p>
          <p>It is a formula that not many brands, including sister company Victoria’s Secret, have been able to replicate. The lingerie company — which has the same parent company, L Brands — has posted sales declines for 12 of the past 13 quarters as it struggles to win over consumers put off by its sexualized marketing. On Thursday, L Brands revised down its 2019 forecast after reporting that holiday same-store sales fell 12 percent at Victoria’s Secret. At Bath &amp; Body Works, they jumped 9 percent.</p>
          <p>Analysts say Victoria’s Secret also has suffered from L Brands Chairman Leslie Wexner’s personal ties to <a href="https://www.washingtonpost.com/national-security/jeffrey-epsteins-autopsy-concludes-his-death-was-a-suicide-by-hanging/2019/08/16/bb670d58-c053-11e9-a5c6-1e74f7ec4a93_story.html?tid=lk_inline_manual_37" target="_blank">Jeffrey Epstein</a>, the millionaire sex offender. But Saunders says Bath &amp; Body Works and its “very wholesome” image have remained largely immune to those woes.</p>
          <p>“These are two companies that couldn’t be more different,” he said. “Victoria’s Secret is stuck in its ways and is out of touch with what consumers want. Bath &amp; Body Works is the opposite: It’s authentic, has friendly stores and is constantly challenging itself.”</p>
          <p>Beauty product and candle sales are also on the rise as Americans gravitate toward inexpensive indulgences. Chains such as Lush, the U.K.-based company with 200 U.S. stores, and Ulta Beauty, which has 1,100 stores, have both benefited from rising demand for moderately priced cosmetics, bath gels and other personal restoratives.</p>
          <p>“Bath &amp; Body Works has become one of the only places in the mall where you can pick up an affordable gift,” Kodali, of Forrester, said. “It’s this little pocket of retail that no one has successfully emulated.”</p>
          <p>Sales rose 10 percent in the first nine months of 2019, and 12 percent the year before that. Store traffic is up, as are online sales. Annual revenue, which is approaching $5 billion, has climbed for 11 consecutive years. Bath &amp; Body Works opened three dozen stores in 2019, notable growth in a sector that announced a record 9,300 store closures.</p>
          <p>Its stores are relatively small, making them inexpensive to operate, and they don’t have many mall-based competitors, according to Kodali. And though mainstream chains such as Target, Walmart and CVS have beefed up their beauty aisles in recent years, she says their products don’t quite have the same cachet.</p>
          <p>But Randal Konik, an analyst for Jefferies, warns that the company’s never-ending discounts and sales are thinning profit margins. Plus, he says, candle sales — which make up 40 percent of the chain’s revenue vs. 15 percent a decade ago — are likely to plateau soon.</p>
          <p>“The candle party is over,” he wrote in a note to clients Thursday. “The peak of the cycle has been reached."</p>
          <p>Maybe, but Tony Serafini is not deterred.</p>
          <p>The 44-year-old English teacher keeps a tube of Cucumber Melon body cream in the top drawer of his desk, tucked between Sharpies and masking tape. He has been shopping at Bath &amp; Body Works for more than two decades and has no intention of stopping — much to the amusement of his seventh-grade students.</p>
          <p>“People make fun of me, but I just really like the scented cream,” he said. “It’s something I was brought up on, and it’s a name I recognize and trust.”</p>
          <p>Plus, he says, “everyone tells me I smell good.”</p>
          <p>It is also one of the few stores he and his daughters, ages 10 and 13, can agree on. The girls stop in every two weeks for the mini bottles of hand sanitizer they keep clipped to their backpacks.</p>
          <p>Serafini, meanwhile, goes to Bath &amp; Body Works twice a year — and breezes past just about every other store at the local mall in central Massachusetts. He and his family, he said, buy nearly everything else online.</p>
          <p>“I can’t think of another company I’ve shopped at for 20 years,” he said.</p>
        `,
        source: {
          name: 'The Washington Post',
          url: 'https://www.washingtonpost.com/business/2020/01/13/bath-and-body-works-sales-soar/'
        }
      },
      {
        title: 'Teenager Discovers Planet Orbiting Binary Stars On Third Day Of NASA Internship',
        subtitle: undefined,
        teaser: undefined,
        date: new Date('2020-01-13 16:31:00+0600').toLocaleDateString(),
        tags: [
          'news', 'science'
        ],
        image: {
          url: 'https://cdn.iflscience.com/images/b6a52bd6-2ac7-52c7-8f9c-6d7fad170e90/extra_large-1578926935-cover-image.jpg',
          caption: `Artist's impression of TOI 1338 b silhouetted against its host stars.NASA's Goddard Space Flight Center/Chris Smith`
        },
        source: {
          name: 'IFLScience!',
          url: 'https://www.iflscience.com/space/teenager-discovers-planet-orbiting-binary-stars-on-third-day-of-nasa-internship/'
        },
        content: `
          <p>Planets orbiting binary systems are an exciting curiosity and <a target="_blank" href="https://www.iflscience.com/space/nasas-planethunting-tess-has-discovered-its-smallest-exoplanet-yet/">NASA’s Transiting Exoplanet Survey Satellite</a> (TESS) has found its first one. What’s even more exciting is that the discovery was made by teenager Wolf Cukier on his third day of a NASA internship last summer.</p>
          <p>The planet's new name is TOI 1338 b and it is 6.9 times larger than Earth, coming between us and the star between every 93 and 95 days. Cukier’s job during the internship was to examine data from TESS uploaded to the <a target="_blank" href="https://www.zooniverse.org/projects/nora-dot-eisner/planet-hunters-tess">Zooniverse citizen science portal</a>. Users help researchers find new planets and the 17-year-old managed to do just that.</p>
          <p>“I was looking through the data for everything the volunteers had flagged as an eclipsing binary, a system where two stars circle around each other and from our view eclipse each other every orbit,” Cukier said in a <a target="_blank" href="https://www.nasa.gov/feature/goddard/2020/nasa-s-tess-mission-uncovers-its-1st-world-with-two-stars">statement</a>. “About three days into my internship, I saw a signal from a system called TOI 1338. At first I thought it was a stellar eclipse, but the timing was wrong. It turned out to be a planet.”</p>
          <p>TOI 1338 consists of a star 10 percent heavier than the Sun and a second one about one-third of the mass of our own star. The two stars orbit each other every 15 days, taking turns to get in front of each other from our perspective. These systems are known as eclipsing binaries.</p>
          <p>But Cukier spotted another type of eclipse. TOI 1338 b is between the size of Neptune and Saturn, so whenever it passed in front of the star, TESS reported a dip in the brightness we got from the system. The signal was small for the larger star and undetectable for the smaller star, but it was enough to pique the attention of the young researcher.</p>
          <p>“These are the types of signals that algorithms really struggle with,” added Veselin Kostov, a research scientist at the SETI Institute and Goddard Space Flight Center and lead author of the upcoming paper on the planet. “The human eye is extremely good at finding patterns in data, especially non-periodic patterns like those we see in transits from these systems.”</p>
          <p>TESS monitors millions of stars, taking photographs of the same patch of sky every 30 minutes for 27 days. Previous planet-hunting missions from NASA, Kepler and K2, have discovered 12 planets like TOI 1338 b. TESS is expected to discover hundreds of thousands of eclipsing binaries so this might be the first planet orbiting binary stars for the mission but it won’t be the last.</p>
          <p>The TOI 1338 system is located 1,300 light-years away in the constellation Pictor.</p>
        `
      },
      {
        title: 'America’s CFOs Are Warning Of A Recession. Here’s Why That’s An Important Indicator',
        subtitle: undefined,
        teaser: undefined,
        date: new Date('2020-01-13 14:22:00+0600').toLocaleDateString(),
        tags: [
          'markets', 'money', 'news'
        ],
        image: {
          url: 'https://specials-images.forbesimg.com/imageserve/1192829269/1440x0.jpg',
          caption: 'CFO sentiment can sometimes be a helpful indicator of looming market sell-offs. GENG YUHE/VCG VIA GETTY IMAGES'
        },
        source: {
          name: 'Forbes',
          url: 'https://www.forbes.com/sites/sergeiklebnikov/2020/01/13/americas-cfos-are-warning-of-a-recession-heres-why-thats-an-important-indicator/#ccb82863448d'
        },
        content: `
          <p><strong>Topline:</strong> Recession fears are again on the rise, with the vast majority of chief financial officers bracing for an economic downturn in 2020—and historical data shows that trends of declining optimism among America’s financial executives can sometimes be a harbinger for looming market sell-offs.</p>
          <ul>
            <li>Recession fears are back in full force: 97% of CFOs said that an economic downturn has already begun or will begin in 2020—up from 88% who said the same thing last year, according to Deloitte’s latest <a href="https://www2.deloitte.com/us/en/pages/finance/articles/cfo-signals-quarterly-survey.html" target="_blank">CFO Signals Survey</a>.</li>
            <li>Many on Wall Street primarily use CFO sentiment as an indicator of the business environment, but deteriorating forecasts can sometimes help warn of looming market downturns, historical data shows.</li>
            <li>Going into 2019, for example, <a href="https://www2.deloitte.com/us/en/pages/finance/articles/cfo-signals-anticipating-a-slowdown-but-not-a-recession.html" target="_blank">just 28%</a> of CFOs said they expected the North American economy to improve—half the number it was a <a href="https://www2.deloitte.com/us/en/pages/finance/articles/growth-underpins-optimism-entering-2018.html" target="_blank">year earlier</a>, in 2018. That statistic <a href="https://www2.deloitte.com/us/en/pages/finance/articles/cfo-signals-investing-through-an-expected-mild-downturn.html#2" target="_blank">fell to 24%</a> in the following quarter, right before the S&amp;P 500 dropped almost 7% in May and again by nearly 6% from mid-July to August.</li>
            <li>Business optimism also notably declined before the big December 2018 market sell-off, when the S&amp;P 500 shed over 9%: Over two thirds of CFOs warned that the U.S. market was overvalued, and a metric of their forward-looking optimism hit a two-year low.</li>
            <li>Before the market lost almost 10% in the third quarter of 2015, some CFO growth expectations hit their <a href="https://www2.deloitte.com/us/en/pages/finance/articles/cfo-signals-survey-executives-sentiment-rising-concern-2015q2.html" target="_blank">lowest levels in five years</a>, reflecting rising concern ahead of the sell-off. The S&amp;P 500 also fell by 5% in the first month of 2016—in Deloitte’s prior outlooks, CFO optimism had been steadily <a href="https://www2.deloitte.com/content/dam/Deloitte/us/Documents/finance/us-cfo-signals-3q15-high-level-report.pdf" target="_blank">on the decline</a>.</li>
            <li>Going further back, CFO sentiment was also relatively accurate in warning of the 2008 financial crisis: According to Duke’s <a href="https://www.cfosurvey.org/" target="_blank">CFO Global Business Outlook</a>, optimism had plunged to a record low by September 2017—with pessimistic CFOs outnumbering optimists by around four to one.</li>
          </ul>
          <p><strong>What to watch for:</strong> It’s important to remember that CFO sentiment, which helps give insight into business and consumer spending, is primarily an indicator of economic activity—rather than stock market behavior.</p>
          <p><strong>Crucial quote:</strong> “While as a stand-alone they don’t offer much insight, it’s most helpful to look at these surveys hand-in-hand with hard economic data,” says Mark Freeman, chief investment officer at Socorro Asset Management. “What really matters is the extent to which sentiment potentially translates into CFO behavior—that has earnings implications, and that does matter to the market from a fundamental standpoint.”</p>
          <p><strong>Tangent:</strong> Nearly two thirds of CFOs <a href="https://www2.deloitte.com/us/en/pages/about-deloitte/articles/press-releases/ninety-seven-percent-of-cfos-say-a-downturn-has-either-already-begun-or-will-next-year.html" target="_blank">surveyed by Deloitte</a> said that U.S. economic performance beyond 2020 will “depend substantially” on the outcome of the elections, while trade policy remains CFOs’ “most worrisome external risk.” Respondents also cited falling expectations for two key measures of the economy: Consumer sentiment, which has largely held steady so far, and business spending, expectations for which hit a three-year low. More than 80% of CFOs also said they had already taken at least one defensive action to mitigate against a potential downturn, as evidenced by their growing focus on cost reduction and returning cash.</p>
        `
      }

    ] // end stories
  },
  computed: {
    story: vm => ({
      ...vm.stories[vm.currentStoryId]
    }),
    relatedStories: vm => vm.stories
      .map((story, id) => {
        const { tags, date, source, ...rest } = story;
        return { id, ...rest };
      })
      .filter((story) => story.id !== vm.currentStoryId)
  },
  methods: {
    load: function (relatedStory) {
      this.currentStoryId = relatedStory.id;
      window.scrollTo(0, 0);
    }
  },
  filters: {
    json: function (value) {
      return JSON.stringify(value, null, 2);
    }
  }
});