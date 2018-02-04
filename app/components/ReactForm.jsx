import React from 'react';

export default class ReactForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			val:"",
			arr:[]
		}
		this.handleInputValue = this.handleInputValue.bind(this);
		this.handleButton = this.handleButton.bind(this);
		this.handleButtonDelete= this.handleButtonDelete.bind(this);
		this.handleButtonUpdate= this.handleButtonUpdate.bind(this);
	}
	handleInputValue(e){
		const val = e.target.value;
		this.setState({
			val
		});
	}
	handleButton(e){
		const value = this.state.val;
		const arr =this.state.arr;
		arr.push(value);
		this.setState({
			arr
		});
	}
	handleButtonDelete(e){
		const arr = this.state.arr;
		const index = arr.indexOf(e.target.name);
		arr.splice(index,1);
		this.setState({
			arr
		});
	}
	handleButtonUpdate(e){
		const updatedValue = prompt("Enter the number you want to update");
		const arr = this.state.arr;
		arr[e.target.name] = updatedValue;
			this.setState({
						arr
					});
	}
	render(){
		return(
		<div>
		Enter the Value<br />
			<input type="text" id="val" onChange={(e)=>this.handleInputValue(e)}/><br />
			<button onClick={this.handleButton}>Add</button><br /><br />
				{
						this.state.arr.length>0?this.state.arr.map((val,index)=>{
						return([
									val,
									<button name={index} onClick={(e)=>this.handleButtonUpdate(e)}>Update</button>,
									<button name={index} onClick={(e)=>this.handleButtonDelete(e)}>Delete</button>,
									<br />
								])
						}):""				
				}
		</div>
		);
	}
}
