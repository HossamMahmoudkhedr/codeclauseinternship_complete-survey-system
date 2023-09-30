import React, { useState } from 'react';

import TextInput from '../utils/textInput';
import CustomizedButton from '../utils/customizedButton';
const UserInfo = ({ userData, setUserData, setCurrentFrom }) => {
	const [input, setInput] = useState(new Set([]));
	const handleInput = (e) => {
		let target = e.target;
		let name = target.name;
		let value = target.value;
		setUserData((prev) => ({ ...prev, [name]: value }));
		if (value !== '') {
			setInput((prev) => new Set([...prev, name]));
		} else {
			const updateInput = new Set(input);
			updateInput.delete(name);
			setInput(updateInput);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.size === 3) {
			setCurrentFrom((prev) => prev + 1);
		}
	};
	return (
		<>
			<TextInput
				label="First Name"
				type="text"
				placeholder="Jhon"
				id="fname"
				name="fname"
				width="half-width"
				restprops={{
					onInput: handleInput,
				}}
			/>
			<TextInput
				label="Last Name"
				type="text"
				placeholder="Wick"
				id="lname"
				name="lname"
				width="half-width"
				restprops={{ onInput: handleInput }}
			/>
			<TextInput
				label="Email"
				type="email"
				placeholder="exapmle@example.com"
				id="email"
				name="email"
				restprops={{
					onInput: handleInput,
				}}
			/>

			<CustomizedButton
				restprops={{
					onClick: handleSubmit,
					disabled: input.size !== 3 ? true : false,
				}}
				text="Start Survey"
				type="button"
			/>
		</>
	);
};

export default UserInfo;
