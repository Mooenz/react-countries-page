import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Layout from '@/layout/Layout';
import '@/styles/global.css';
import '@/styles/fonts.css';

const Home = lazy(() => import('@/pages/index.tsx'));
const InfoCountry = lazy(() => import('@/pages/infoCountry.tsx'));
const NotFound = lazy(() => import('@/pages/NotFound.tsx'));

function App() {
	return (
		<>
			<Layout>
					<Suspense fallback={<div className='text-center content-center'>Loading...</div>}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/country/:name" element={<InfoCountry />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
			</Layout>
		</>
	);
}

export default App;
