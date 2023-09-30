import React from 'react';
import { motion } from 'framer-motion';
import CustomizedButton from '../utils/customizedButton';
import { Link } from 'react-router-dom';
const Thanks = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, type: 'spring' }}
			className="d-flex justify-content-center flex-column gap-4 align-items-center w-100 text-white"
			style={{ height: '75vh' }}>
			<h2>Thanks for your feedback</h2>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1, type: 'spring' }}>
				<Link to="/">
					<CustomizedButton
						text="Submit another one"
						type="button"
					/>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default Thanks;
