import './App.css';
import SurveyForm from './components/surveyForm';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Thanks from './components/thanks';
import Root from './pages/root';
import Error from './pages/error';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="codeclauseinternship_complete-survey-system/"
			element={<Root />}>
			<Route
				index
				element={<SurveyForm />}
			/>
			<Route
				path="thanks"
				element={<Thanks />}
			/>
			<Route
				path="*"
				element={<Error />}
			/>
		</Route>
	)
);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
