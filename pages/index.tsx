import Head from 'next/head';
import { FC, ReactElement } from 'react';
import Aside from '../components/aside/Aside';
import Header from '../components/header/Header';
import MainContent from '../components/main-content/MainСontent';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

const Home: FC = (): ReactElement => (
	<>
		<Head>
			<title>Home page</title>
		</Head>
		<Header></Header>
		<MainContent>
			<Aside></Aside>
			<Main></Main>
		</MainContent>
		<Footer></Footer>
	</>
);

export default Home;
