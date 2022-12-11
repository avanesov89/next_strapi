import Link from 'next/link';
import Image from 'next/image';
import header from '../styles/components/Header.module.scss';
import setting from '../styles/Setting.module.scss';
import { RiMenu3Fill } from 'react-icons/ri';

const Header = () => {
	return (
		<header className={header.head}>
			<div className={`${setting.container} ${header.container}`}>
				<a href="/" title="Avanesov.Site" className={header.head__logo}>
					{/* <image src="../assets/svg/logo.svg" alt="Avanesov.Site" width={50} height={50} /> */}
				</a>
				
				<nav className={header.nav}>

				<input className={header.menu__btn} type="checkbox" id="menu-btn" />
				<label className={header.menu__icon} htmlFor="menu-btn">
					<RiMenu3Fill />
				</label>

					<ul className={`${setting.list__reset} ${header.nav__list}`}>
						<li className={header.nav__item}>
							<Link href="/about"><a className={header.nav__link} title="Об авторе">Об авторе</a></Link>
						</li>
						<li className={header.nav__item}>
							<Link href="/services"><a className={header.nav__link} title="Услуги">Услуги</a></Link>
						</li>
						<li className={header.nav__item}>
							<Link href="/portfolio"><a className={header.nav__link} title="Портфолио">Портфолио</a></Link>
						</li>
						<li className={header.nav__item}>
							<Link href="/articles"><a className={header.nav__link} title="Статьи">Статьи</a></Link>
						</li>
						<li className={header.nav__item}>
							<Link href="/cooperation"><a className={header.nav__link} title="Сотрудничество">Сотрудничество</a></Link>
						</li>
					</ul>    
				</nav>
			</div>
		</header>
	)
}

export default Header;