import React, { useState } from 'react';
import CustomizedButton from '../utils/customizedButton';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ThirdQuestion = ({ userData, setUserData, setCurrentFrom }) => {
	const [isFilled, setIsFilled] = useState(false);
	const [chosen, setChosen] = useState();

	const choises = [
		'Very satisfied',
		'Satisfied',
		'Partly satisfied',
		'Not satisfied at all',
	];
	useEffect(() => {
		if (choises.indexOf(userData.satisfaction) != -1) {
			setChosen(choises.indexOf(userData.satisfaction));
			setIsFilled(true);
		}
	}, []);
	const handleClick = (idx) => {
		let name = 'satisfaction';
		let value = choises[idx];
		setUserData((prev) => ({ ...prev, [name]: value }));
		setIsFilled(true);
		setChosen(idx);
	};
	return (
		<motion.div
			initial={{ transform: 'translateX(100%)', opacity: 0 }}
			animate={{ transform: 'translateX(0%)', opacity: 1 }}
			transition={{ duration: 2, type: 'spring' }}
			className="question d-flex flex-column gap-3">
			<h3>
				How satisfied are you with the system's performance in terms of speed
				and responsiveness?
			</h3>
			<motion.ul className="choises ms-4 d-flex flex-column gap-4">
				{choises.map((choise, idx) => (
					<motion.li
						style={{ transformOrigin: 'left' }}
						className={chosen === idx ? 'active' : ''}
						initial={{ transform: 'scale(1) ', color: '#FFFFFF' }}
						whileHover={{
							transform: 'scale(1.3) ',
							color: '#FFA500',
						}}
						transition={{
							color: { duration: 0.3 },
							transform: { duration: 0.4, type: 'spring', stiffness: 200 },
						}}
						key={idx}>
						<button
							onClick={() => {
								handleClick(idx);
							}}
							type="button"
							className="bg-transparent border-0 ouline-0">
							{choise}
						</button>
					</motion.li>
				))}
			</motion.ul>
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
						text="Next"
						type="submit"
						restprops={{
							onClick: () => {
								setCurrentFrom((prev) => prev + 1);
							},
						}}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default ThirdQuestion;
