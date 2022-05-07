const axios = require('axios');

/*
function main() {
  console.log("Begin");
  const result = axios.get("https://api.aakhilv.me/fun/facts");
  console.log("result:", result);
  console.log("End");
}
*/

/*
function main() {
	console.log('Begin');
	const url = ('https://api.aakhilv.me/fun/facts');
	axios.get(url).then(function (result) {
		console.log('result:', result.data);
		console.log("End");
	})
	
}
*/

/*
function getFact() {
	const url = 'https://api.aakhilv.me/fun/facts';
	return axios.get(url).then(function (result) {
		return result.data[0]
	})
}
*/

/*
function main() {
	console.log("Begin");
	getFact().then(function (result) {
		console.log('result:', result);
		console.log('End');
		getFact().then(function (secondresult) {
			console.log('second result:', secondresult);
			console.log('End')
			getFact().then(function (thirdResult) {
				console.log('third result:', thirdResult);
				console.log('End');
				getFact().then(function (fourthResult) {
					console.log('fourt result:', fourthResult);
					console.log('End');
					getFact().then(function (fifthResult) {
						console.log('fifth result:', fifthResult);
						console.log('End')
					})
				})
			})
		})
	})
}
*/

async function getFact() {

		const url = "https://api.aakhilv.me/fun/facts";
    const result = await axios.get(url);
    return result.data[0];
		//return console.log({ message: "Não houve retorno dos dados!!"})
	
}

/*
async function main() {
	console.log('Begin');
	const result = await getFact();
	console.log('result:', result);
	const secondResult = await getFact();
	console.log('second result:', secondResult);
	console.log('End');
}
*/

/*
async function main() {
	console.log('Begin');
	for (let i = 1; i <= 5; i++) {
		const result = await getFact();
		console.log(`result no.${i}:`, result);
	}
	console.log('End');
}
*/

/*
async function main() {
	console.time('getFactTimer');
	for (let i = 1; i <= 5; i++) {
		const result = await getFact();
		console.log(`result no.${i}:`, result);
	}
	console.timeEnd('getFactTimer');
}
*/

async function main() {
	try {
			console.time("getFactTimer");
    	const promises = [];
    	for (let i = 0; i < 5; i++) {
				promises.push(getFact());
    }

		const results = await Promise.all(promises);
			if (results != undefined) {
				for (let i = 0; i < 5; i++) {
          console.log(`result no.${i + 1}:`, results[i]);
				}
				console.timeEnd("getFactTimer");
			//} else {
				//throw new console.log(Error({ err: true, message: "Deu ruim!!" }));
			}
			
	} catch (err) {
		return console.log({ err: false, message: "Api esta fora do ar!!"});
	}
}

main();