import React, {useRef} from 'react';

function IncomeForm({income, setIncome}) {

	//Pulls values from forms. Modified below in the AddIncome method. Ref creates a current object that stores info
	const desc = useRef(null);
	const date = useRef(null);
	const price = useRef(null);

	const AddIncome = (e) => {
		e.preventDefault();

		let d = date.current.value.split("-");
		let newD = new Date(d[0], d[1], d[2]);


		setIncome([...income, {
			"desc":desc.current.value,
			"price":price.current.value,
			"date":newD.getTime()
		}]);

		//Make those values disappear from the forms after submission
		desc.current.value=null;
		price.current.value=null;
		date.current.value=null;
	}

	return(

		<form className="income-form" onSubmit={AddIncome}>
			<div className="form-inner">
				<input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} />
				<input type="number" name="price" placeholder="price" ref={price}/>
				<input type="date" name="date" date="date..." ref={date}/>
				<input type="submit" value="Add Income" />
			</div>
		</form>

	)
}

export default IncomeForm;