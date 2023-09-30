import React, { useEffect, useState } from 'react';
import CustomizedButton from '../utils/customizedButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FourthQuestion = ({ userData, setUserData, setCurrentFrom }) => {
	const [isFilled, setIsFilled] = useState(false);

	const handleChange = (e) => {
		let name = 'featuresSuggestion';
		let value = e.target.value;
		setUserData((prev) => ({ ...prev, [name]: value }));
	};
	useEffect(() => {
		if (userData.featuresSuggestion !== '') {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	}, []);

	return (
		<motion.div
			initial={{ transform: 'translateX(100%)', opacity: 0 }}
			animate={{ transform: 'translateX(0%)', opacity: 1 }}
			transition={{ duration: 2, type: 'spring' }}
			className="question d-flex flex-column gap-3">
			<h3>
				Are there any features you would like to see added or improved in the
				system?
			</h3>
			<textarea
				onChange={handleChange}
				className="bg-transparent border-2 border-white rounded-4 p-3 text-white  "
				name="features"
				value={
					userData.featuresSuggestion !== undefined
						? userData.featuresSuggestion
						: ''
				}
				id="features"
				cols="30"
				rows="10"
				style={{ resize: 'none' }}></textarea>
			<div className="d-flex justify-content-between align-items-center">
				<CustomizedButton
					text="Back"
					type="button"
					restprops={{
						onClick: () => {
							setCurrentFrom((prev) => prev - 1);
						},
					}}
				/>
				{isFilled && (
					<CustomizedButton
						text="Submit"
						type="submit">
						<Link to="thanks"></Link>
					</CustomizedButton>
				)}
			</div>
		</motion.div>
	);
};

export default FourthQuestion;
