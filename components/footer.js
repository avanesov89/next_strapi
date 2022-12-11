import setting from '../styles/Setting.module.scss';
import footer from '../styles/components/Footer.module.scss';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
	return (
		<footer className={footer.footer}>
			<div className={`${setting.container} ${footer.container}`}>
				© 2021 Аванесов Ю.М.
				<ul className={`${setting.list__reset} ${footer.footer__social}`}>
					<li className={footer.footer__social_item}>
							<a href="https://tlgg.ru/avanesov89" target="_blank" className={footer.footer__social_link} title="Telegram">
								<BsTelegram />
							</a>
					</li>

					<li className={footer.footer__social_item}>
						<a href="mailto:avanesov89@mail.ru" target="_blank" className={footer.footer__social_link} title="email">
								<IoMdMail />
							</a>
					</li>

					<li className={footer.footer__social_item}>
						<a href="https://github.com/avanesov89" target="_blank" className={footer.footer__social_link} title="Github">
								<BsGithub />
							</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;