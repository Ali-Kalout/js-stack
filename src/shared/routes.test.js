import { helloEndpointRoute } from './routes';

test('helloEndpointRoute', () => {
    expect(helloEndpointRoute()).toBe('/ajax/hello/:num');
    expect(helloEndpointRoute(2)).toBe('/ajax/hello/2');
});
