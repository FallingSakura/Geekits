import { getAllApps } from "./appData";

export default (locale?: string, processId?: (id: string) => string) => {
	const allApps = getAllApps(false);

	const paths = allApps.map((app) => {
		return {
			params: {
				id: app.id,
			},
			locale,
		};
	});

	return paths;
};
