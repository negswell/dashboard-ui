/** get reviews api call  */
const getReviews = async () => {
  const reviews = [
    {
      reviewer: '123',
      reviewee: '1234',
      review: 'hello awesome',
      id: '1',
    },
    {
      reviewer: '1234',
      reviewee: '12345',
      review: 'good luck',
      id: '2',
    },
    {
      reviewer: '1233434',
      reviewee: '123434',
      review: 'hello fab',
      id: '3',
    },
    {
      reviewer: '123',
      reviewee: '123423423',
      review: 'amazing',
      id: '4',
    },
  ];

  const mockApi = new Promise((resolve) => {
    setTimeout(() => resolve(reviews), 1000);
  });

  return await mockApi;
};

export default getReviews;
