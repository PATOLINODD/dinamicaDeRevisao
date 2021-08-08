function soma(...nums){
	let numsArray = [...nums]
	return numsArray.reduce((acc, values)=>acc + values)
}

async function receita(){
	const ver = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
	const {meals} = await ver.json()
	
	const receita = trazReceita(meals)

	
	console.log(meals);
	console.log(receita);
}
	
function trazReceita(item){
	
	const [{strMeal, idMeal, strArea, strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,
strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strInstructions}] = item;

	let ingredientes = [strMeasure1 + strIngredient1, strMeasure2 + strIngredient2,strMeasure3 + strIngredient3,strMeasure4 + strIngredient4,strMeasure5 + strIngredient5,strMeasure6 + strIngredient6,strMeasure7 + strIngredient7,strMeasure8 + strIngredient8,strMeasure9 + strIngredient9,].join(", ");
	
	return {
		"Nome": strMeal, "ID": idMeal, "Regiao": strArea, "ingredientes": ingredientes, "instrucoes": strInstructions
		};
}
console.log(receita())
console.log(soma(1,2,3,4,5))
