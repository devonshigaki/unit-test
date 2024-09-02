const math = require('../src/math'); test('fetches data successfully', async () => { const data = await math.fetchData(); expect(data).toBe('data'); });
