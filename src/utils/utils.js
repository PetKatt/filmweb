export default {
	shortingText: (obj, index) => {
		const overview = [];
		const overviewSliced = [];

		// shorting text overview
		overview[index] = obj.overview.split("");
		if(overview[index].length > 400) {
			let dif = overview[index].length - 400;
			overview[index].splice(400, dif, "...");
			overviewSliced[index] = overview[index].join("");
		} else {
			overviewSliced[index] = obj.overview;
		}

		return overviewSliced[index];
	},
	titles: (obj, index) => {
		let titlesArray = [];
		const description = [];
		const descriptionSliced = [];

		obj.known_for.forEach((f) => titlesArray.push(f.title || f.name));
		description[index] = titlesArray.join(", ").split("");
		//console.log(description[index]);
		if(description[index].length > 30) {
			let dif = description[index].length - 30;
			description[index].splice(30, dif, "...");
			descriptionSliced[index] = description[index].join("");
		} else {
			descriptionSliced[index] = titlesArray.join(", ");
		}

		//console.log(descriptionSliced[index]);
		return descriptionSliced[index];
	}
};