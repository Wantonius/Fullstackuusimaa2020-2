import React,{useState} from 'react';

const ShoppingForm = ({addToList}) => {
	
	const [item,setItem] = useState({
		type:"",
		price:0,
		count:0
	})
	
	const onChange = (event) => {
		setItem({
			...item,
			[event.target.name]:event.target.value
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		addToList(item);
		setItem({
			type:"",
			price:0,
			count:0			
		})
	}
	
	return(
		<form onSubmit={onSubmit}>
			<label htmlFor="type">Type:</label>
			<input type="text"
					name="type"
					onChange={onChange}
					value={item.type}/>
			<br/>
			<label htmlFor="count">Count:</label>
			<input type="number"
					name="count"
					onChange={onChange}
					value={item.count}/>
			<br/>
			<label htmlFor="price">Price:</label>
			<input type="number"
					name="price"
					onChange={onChange}
					value={item.price}/>
			<br/>			
			<button type="submit">Add</button>
		</form>
	)
}

export default ShoppingForm;