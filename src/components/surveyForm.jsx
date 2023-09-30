import React, { useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import styled from 'styled-components';
import UserInfo from './userInfo';
import FirstQuestion from './firstQuestion';
import SecondQuestion from './secondQuestion';
import ThirdQuestion from './thirdQuestion';
import FourthQuestion from './fourthQuestion';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
const StyledFormContainer = styled.div`
	height: 65vh;
	@media (max-width: 768px) {
		height: 70vh;
	}
`;

const StyledSeparator = styled.div`
	width: 50px;
	height: 2px;
	background-color: white;
	transition: all 0.4s linear;
`;
const SurveyForm = () => {
	const [userData, setUserData] = useState({});
	const [currentFrom, setCurrentFrom] = useState(0);
	const [error, setError] = useState('');
	const forms = [
		<UserInfo
			userData={userData}
			setUserData={setUserData}
			setCurrentFrom={setCurrentFrom}
		/>,
		<FirstQuestion
			userData={userData}
			setUserData={setUserData}
			setCurrentFrom={setCurrentFrom}
		/>,
		<SecondQuestion
			userData={userData}
			setUserData={setUserData}
			setCurrentFrom={setCurrentFrom}
		/>,
		<ThirdQuestion
			userData={userData}
			setUserData={setUserData}
			setCurrentFrom={setCurrentFrom}
		/>,
		<FourthQuestion
			userData={userData}
			setUserData={setUserData}
			setCurrentFrom={setCurrentFrom}
		/>,
	];
	const navigate = useNavigate();
	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError('');
			}, 5000);
		}
	}, [error]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'https://jsonplaceholder.typicode.com/posts',
				userData
			);

			console.log(response);
			if (response.status === 201 || response.status === 200) {
				navigate('thanks');
			}
		} catch (error) {
			setError(error);
		}
	};

	return (
		<>
			<div className="stepper justify-content-center mt-5 gap-4 w-100">
				{forms.map((el, idx) => {
					return (
						<div
							key={idx}
							className="d-flex align-items-center gap-4">
							{currentFrom <= idx && (
								<div
									className={`${
										idx !== currentFrom ? 'disabled' : ''
									} rounded-circle d-flex justify-content-center align-items-center`}
									style={{
										width: '35px',
										height: '35px',
										transition: 'all 0.4s linear',
										border: '3.5px solid white',
									}}>
									<p className="mb-0">{idx + 1}</p>
								</div>
							)}
							{currentFrom > idx && (
								// <AiOutlineCheckCircle transform="scale(2.5)" />
								<IconContext.Provider
									value={{
										size: '40px',
									}}>
									<div>
										<AiOutlineCheckCircle />
									</div>
								</IconContext.Provider>
							)}
							{idx < forms.length - 1 && (
								<StyledSeparator
									className={`${
										idx > currentFrom - 1 ? 'disabled' : ''
									}`}></StyledSeparator>
							)}
						</div>
					);
				})}
			</div>
			<div className="resStepper justify-content-center mt-5 gap-4 w-100">
				{forms.map((el, idx) => {
					return (
						<div
							key={idx}
							className="d-flex align-items-center gap-4">
							<div
								className={`bg-white ${
									idx > currentFrom ? 'disabled' : ''
								} rounded-circle d-flex justify-content-center align-items-center`}
								style={{
									width: '20px',
									height: '20px',
									transition: 'all 0.4s linear',
									border: '3.5px solid white',
								}}></div>
						</div>
					);
				})}
			</div>
			{error && (
				<motion.div
					initial={{ bottom: '-30px' }}
					animate={{ bottom: '10px' }}
					transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
					className="alert  bg-danger position-absolute left-0"
					role="alert">
					Something went worng! Please, try again.
				</motion.div>
			)}
			<StyledFormContainer className="d-flex align-items-center justify-content-center w-100 overflow-hidden">
				<Form
					method="POST"
					onSubmit={handleSubmit}
					className="d-flex flex-wrap justify-content-center column-gap-2 row-gap-1 w-50">
					{forms[currentFrom]}
				</Form>
			</StyledFormContainer>
		</>
	);
};

export default SurveyForm;
