export default function handler(req, res) {
	const { method, query: { id } } = req;
	
	let date_string = id;
    
	const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	const regexForLetterSpecialChar = /^[a-zA-Z\W]+$/;
	
	// check can it own method in the process
	
	if (method === 'GET') {
		

		// check the if  it is the date object
		if (dateRegex.test(date_string)) {
			//  create are new object date
			const date = new Date(date_string);
            // date in utc
			const utcDate = date.toUTCString();

			// change the date into millisecond
			const timeInMs = date.getTime();
            // date to unix
			const unixTimestamp = Math.floor(timeInMs / 1000);
			res.status(200).json({ unix: unixTimestamp, utc: utcDate });

			
		}
		
		else if( date_string > 0  && !(regexForLetterSpecialChar.test(date_string))){
			// create new date object
                const date = new Date(date_string * 1000);

		    // convert new date format into utc Date
				const utcDate = date.toUTCString();
				res.status(200).json({ unix: date_string, utc: utcDate });
		}
		else{
			res.json({ error: 'Invalid Date' });
		}
		
	}
}
