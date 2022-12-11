import Header from "./header";
import Footer from "./footer";
import setting from '../styles/Setting.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={setting.wrapper}>
			<Header />
				{children}
			<Footer />
		</div>
	)
}

export default Layout;