let sortInfo = function (vari, num, str, img) {
	let info = null;
	let userInput = null;
	let infoType = {};
	switch (info) {
		case info==vari: 
		  infoType.variable = userInput;
		  console.log();
		  break;
		case info==num:
		  infoType.number = userInput;
		  console.log();
		  break;
		case info==str: 
		  infoType.string = userInput;
		  console.log();
		  break;
		case info==img:
		  infoType.image = userInput;
		  processImg();
		  console.log();
		  break;
	};
	
};

let processImg = function (image) {
	let userPhoto = null;
	let img = null;
	let imageType = {};
	switch (userPhoto) {
		case userPhoto==image: 
		  imageType.image1 = img;
		  document.write();
		  console.log(imageType);
		  console.log();
		  break;
	};
};

let processWord = function(lang) {
	let word = Math.round(Math.random * 5);
	let animals = {
		species: animal,
		animalType: deer,
	};
	let householdItems = {
		cleaningSupplies: bleach,
		cleaningSupplies2: All-Purpose Cleaner,
	};
	
	switch (word) {
		case word == 0:
		  document.write(animals.species + householdItems.cleaningSupplies);
		  console.log();
		  break;
		case word == 1:
		  document.write(animals.animalType + housholdItems.cleaningSupplies2);
		  console.log();
		  break;
		case word == 2:
		  document.write();
		  console.log();
		  break;
		 case word == 3:
		   document.write();
		   console.log();
		   break;
		 case word == 4: 
		   document.write();
		   console.log();
		  
	};
}
