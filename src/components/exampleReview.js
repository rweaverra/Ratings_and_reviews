const exampleReview = {
  product: '2',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 57336,
      rating: 2,
      summary: 'testsumm',
      recommend: 1,
      response: null,
      body: 'bodynasty',
      date: '2019-10-22T00:00:00.000Z',
      reviewer_name: 'asdfs',
      helpfulness: 29,
      photos: [],
    },
    {
      review_id: 57337,
      rating: 3,
      summary: 'Enter summary here..',
      recommend: 1,
      response: null,
      body: 'bodynasty',
      date: '2019-10-22T00:00:00.000Z',
      reviewer_name: 'asdfs',
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 57344,
      rating: 4,
      summary: 'new message',
      recommend: 1,
      response: null,
      body: 'newnew',
      date: '2019-10-25T00:00:00.000Z',
      reviewer_name: 'asdfs',
      helpfulness: 1,
      photos: [],
    },
    {
      review_id: 57338,
      rating: 4,
      summary: 'yahh',
      recommend: 1,
      response: null,
      body: 'newnew',
      date: '2019-10-25T00:00:00.000Z',
      reviewer_name: 'asdfs',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 57339,
      rating: 4,
      summary: 'yahh',
      recommend: 1,
      response: null,
      body: 'newnew',
      date: '2019-10-25T00:00:00.000Z',
      reviewer_name: 'asdfs',
      helpfulness: 0,
      photos: [],
    },
  ],
};

const exampleRating = {
  product_id: '2',
  ratings: {
    1: 1,
    2: 3,
    3: 11,
    4: 12,
    5: 10,
  },
  recommended: {
    0: 13,
    1: 23,
    null: 1,
  },
  characteristics: {
    Fit: {
      id: 1,
      value: '2.4800',
    },
    Length: {
      id: 2,
      value: '2.6000',
    },
    Comfort: {
      id: 3,
      value: '3.5200',
    },
    Quality: {
      id: 4,
      value: '3.4400',
    },
  },
};

export { exampleReview, exampleRating };
