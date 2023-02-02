export default function handler(req, res) {
	const { method} = req;
	if (method === 'GET') {
		
			//  create are new object date
			const date = new Date();
            // date in utc
			const utcDate = date.toUTCString();

			// change the date into millisecond
			const timeInMs = date.getTime();
            // date to unix
			const unixTimestamp = Math.floor(timeInMs / 1000);
			res.status(200).json({ unix: unixTimestamp, utc: utcDate });
		
	}
}
