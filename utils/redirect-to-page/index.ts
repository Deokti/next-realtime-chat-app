import Router from 'next/router';

export function redirectToPage(ROUTE_PATH: string): Promise<boolean> {
	return Router.push(ROUTE_PATH);
}