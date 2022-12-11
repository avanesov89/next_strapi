import setting from "../styles/Setting.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	},);

	return (
		<div className="not__found">
			<Head>
				<title>404 ошибка - Веб разработчик Аванесов Юрий</title>
			</Head>
			<div className={setting.category__title}>
				<div className={setting.container}>
					<h1>
						Страница не найдена!
					</h1>
					<p>Происходит автоматический переход на главную страницу ...</p>
				</div>
			</div>
		</div>
	)
}

export default NotFoundPage;