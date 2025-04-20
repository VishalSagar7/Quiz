import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartQuizPage from './pages/StartQuizPage';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import QuizEnded from './pages/QuizEnded';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartQuizPage />
    },
    {
      path: '/quiz',
      element: <Quiz />
    },
    {
      path: '/result',
      element: <Result />
    },
    {
      path: '/quizended',
      element : <QuizEnded/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
