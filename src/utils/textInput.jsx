import React from 'react';
import { Form } from 'react-bootstrap';
const TextInput = ({
	label,
	type,
	placeholder,
	id,
	name,
	width,
	restprops,
}) => {
	return (
		<Form.Group
			className={`mb-3 ${width || 'w-100'}`}
			controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				className="bg-transparent p-3 border-2 rounded-4 text-white"
				{...restprops}
				type={type}
				name={name}
				placeholder={placeholder}
			/>
		</Form.Group>
	);
};

export default TextInput;
