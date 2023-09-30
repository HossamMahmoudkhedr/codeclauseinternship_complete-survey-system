import React, { useEffect, useState } from 'react';
import CustomizedButton from '../utils/customizedButton';
import { motion } from 'framer-motion';

const FirstQuestion = ({ userData, setUserData, setCurrentFrom }) => {
	const [isFilled, setIsFilled] = useState(false);
	const [chosen, setChosen] = useState();
	const choises = ['Always', 'From time to time', 'Rarely', 'Never'];
	useEffect(() => {
		if (choises.indexOf(userData.usingTimes) != -1) {
			setChosen(choises.indexOf(userData.usingTimes));
			setIsFilled(true);
		}
	}, []);
	const handleClick = (idx) => {
		let name = 'usingTimes';
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
				<span>1.</span>How often do you use our system?
			</h3>
			<ul className="choises ms-2 d-flex flex-column gap-4">
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
			</ul>
			<div className="d-flex justify-content-end align-items-center">
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

export default FirstQuestion;
