const path = require('path');
const { Pact } = require('@pact-foundation/pact');
const { like } = require('@pact-foundation/pact').Matchers;
const axios = require('axios').default;

describe('React frontend -> /users contract test', () => {
  const mockProvider = new Pact({
    consumer: 'ReactFrontend',
    provider: 'NodeBackend',
    port: 1234,
    host: '127.0.0.1',
    dir: path.resolve(process.cwd(), 'pact/pacts'),
    log: path.resolve(process.cwd(), 'pact/logs', 'mockprovider.log'),
    spec: 2,
  });

  beforeAll(async () => {
    await mockProvider.setup();
  });

  afterAll(async () => {
    await mockProvider.finalize();
    console.log('Finalized!');
  });

  describe('POST /users', () => {
    beforeAll(async () => {
      await mockProvider.addInteraction({
        state: 'provider allows user creation',
        uponReceiving: 'a request to create a new user',
        withRequest: {
          method: 'POST',
          path: '/users',
          headers: { 'Content-Type': 'application/json' },
          body: {
            firstname: 'Dinh',
            lastname: 'Trung Kien',
            email: 'dinhtrungkien@example.com',
            age: 22,
            address: 'Hanoi, Vietnam',
          },
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
          body: {
            id: like(1),
            firstname: 'Dinh',
            lastname: 'Trung Kien',
            email: 'dinhtrungkien@example.com',
            age: 22,
            address: 'Hanoi, Vietnam',
          },
        },
      });
    });

    it('should create a new user successfully', async () => {
      const response = await axios.post('http://127.0.0.1:1234/users', {
        firstname: 'Dinh',
        lastname: 'Trung Kien',
        email: 'dinhtrungkien@example.com',
        age: 22,
        address: 'Hanoi, Vietnam',
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      expect(response.status).toBe(201);
      expect(response.headers['content-type']).toContain('application/json');
      expect(response.data).toEqual({
        id: expect.any(Number),
        firstname: 'Dinh',
        lastname: 'Trung Kien',
        email: 'dinhtrungkien@example.com',
        age: 22,
        address: 'Hanoi, Vietnam',
      });

      await mockProvider.verify();
    });
  });
});
