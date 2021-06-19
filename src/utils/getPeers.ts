const getPeers = async () => {
  const peers = [
    {
      uid: '123',
      name: 'Ravi',
    },
    {
      uid: '1234',
      name: 'Dan',
    },
    {
      uid: '1235',
      name: 'Alok',
    },
    {
      uid: '1236',
      name: 'Sheryl',
    },
  ];

  const mockApi = new Promise((resolve) => {
    setTimeout(() => resolve(peers), 1000);
  });

  return await mockApi;
};

export default getPeers;
