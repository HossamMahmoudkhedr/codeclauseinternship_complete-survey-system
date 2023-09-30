import { motion } from 'framer-motion';
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomizedButton = ({ text, classes, type, restprops }) => {
	return (
		<motion.button
			initial={{ transform: 'translateX(100%)' }}
			whileInView={{ transform: 'translateX(0%)' }}
			transition={{ duration: 1.5, type: 'spring' }}
			type={type}
			className={`btn border border-3 border-white rounded-5 p-2 px-4 fs-5 fw-semibold ${
				classes || ''
			}`}
			{...restprops}>
			{text}
		</motion.button>
	);
};

export default CustomizedButton;
