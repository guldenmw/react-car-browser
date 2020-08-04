export const vehiclesResponseMock = {
  'data': [
    {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e31',
      'manufacturer': 'Porsche',
      'model': '911',
      'price': 1550000,
      'body': 'Coupé',
      'wiki': 'http://en.wikipedia.org/wiki/Porsche_997', // correct
      'img': '/images/Porsche_997.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e32',
      'manufacturer': 'Nissan',
      'model': 'GT-R',
      'price': 850000,
      'body': 'Coupé',
      'wiki': 'http://en.wikipedia.org/wiki/Nissan_Gt-r', // Nissan_GT-R
      'img': '/images/Nissan_GT-R.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e33',
      'manufacturer': 'BMW',
      'model': 'M3',
      'price': 705000,
      'body': 'Sedan',
      'wiki': 'http://en.wikipedia.org/wiki/Bmw_m3', // BMW_M3
      'img': '/images/BMW_M3.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e34',
      'manufacturer': 'Audi',
      'model': 'S5',
      'price': 630000,
      'body': 'Sedan',
      'wiki': 'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5', // Correct
      'img': '/images/Audi_S5.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e35',
      'manufacturer': 'Audi',
      'model': 'TT',
      'price': 550000,
      'body': 'Coupé',
      'wiki': 'http://en.wikipedia.org/wiki/Audi_TT', // Correct
      'img': '/images/Audi_TT.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e36',
      'manufacturer': 'Mercedes-Benz',
      'model': 'M-Class',
      'price': 950000,
      'body': 'SUV',
      'wiki': 'https://en.wikipedia.org/wiki/Mercedes-Benz_M-Class', // Correct
      'img': '/images/Mercedes-Benz_GLE.jpg'
    }, {
      'id': 'd1c240e0-b0bd-41dd-a298-acd183323e37',
      'manufacturer': 'Ford',
      'model': 'Mustang',
      'price': 720000,
      'body': 'Coupé',
      'wiki': 'https://en.wikipedia.org/wiki/Ford_Mustang', // Correct
      'img': '/images/Ford_Mustang_GT.jpg'
    }
  ], 'message': '7 Found'
}

export const wikiSummaryResponseMock = {
  "type": "standard",
  "title": "Ford Mustang",
  "displaytitle": "Ford Mustang",
  "namespace": {
    "id": 0,
    "text": ""
  },
  "wikibase_item": "Q183476",
  "titles": {
    "canonical": "Ford_Mustang",
    "normalized": "Ford Mustang",
    "display": "Ford Mustang"
  },
  "pageid": 105908,
  "thumbnail": {
    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2018_Ford_Mustang_GT_5.0_Front.jpg/320px-2018_Ford_Mustang_GT_5.0_Front.jpg",
    "width": 320,
    "height": 170
  },
  "originalimage": {
    "source": "https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Ford_Mustang_GT_5.0_Front.jpg",
    "width": 3912,
    "height": 2073
  },
  "lang": "en",
  "dir": "ltr",
  "revision": "964854387",
  "tid": "dc3cd390-c972-11ea-81a9-0ba1986df59e",
  "timestamp": "2020-06-27T23:56:27Z",
  "description": "American car manufactured by Ford",
  "description_source": "local",
  "content_urls": {
    "desktop": {
      "page": "https://en.wikipedia.org/wiki/Ford_Mustang",
      "revisions": "https://en.wikipedia.org/wiki/Ford_Mustang?action=history",
      "edit": "https://en.wikipedia.org/wiki/Ford_Mustang?action=edit",
      "talk": "https://en.wikipedia.org/wiki/Talk:Ford_Mustang"
    },
    "mobile": {
      "page": "https://en.m.wikipedia.org/wiki/Ford_Mustang",
      "revisions": "https://en.m.wikipedia.org/wiki/Special:History/Ford_Mustang",
      "edit": "https://en.m.wikipedia.org/wiki/Ford_Mustang?action=edit",
      "talk": "https://en.m.wikipedia.org/wiki/Talk:Ford_Mustang"
    }
  },
  "api_urls": {
    "summary": "https://en.wikipedia.org/api/rest_v1/page/summary/Ford_Mustang",
    "metadata": "https://en.wikipedia.org/api/rest_v1/page/metadata/Ford_Mustang",
    "references": "https://en.wikipedia.org/api/rest_v1/page/references/Ford_Mustang",
    "media": "https://en.wikipedia.org/api/rest_v1/page/media/Ford_Mustang",
    "edit_html": "https://en.wikipedia.org/api/rest_v1/page/html/Ford_Mustang",
    "talk_page_html": "https://en.wikipedia.org/api/rest_v1/page/html/Talk:Ford_Mustang"
  },
  "extract": "The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the \"pony car\" automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by \"long hood, short deck\" proportions.",
  "extract_html": "<p>The <b>Ford Mustang</b> is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the \"pony car\" automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by \"long hood, short deck\" proportions.</p>"
}