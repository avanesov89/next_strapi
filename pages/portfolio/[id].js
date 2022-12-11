import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import style from '../../styles/components/PortfolioPage.module.scss';
import setting from '../../styles/Setting.module.scss';
import { fetcher } from '../../lib/api';
import ReactMarkdown from "react-markdown";

export default function PortfolioPage({ portfolio }) {

	console.log(portfolio)
	
  return (
		<>
		<Head>
			<title>Портфолио - Веб разработчик Аванесов Юрий</title>
		</Head>

		<div className={style.work__page}>
			<div className={setting.container}>
				<div className={style.work__pageItem}>
					<div className={style.work__info}>
						<div className={style.work__infoBlock}>
							<h1>
								{portfolio.data.attributes.title}
							</h1>

							<div className={style.work__infoType}>
								{portfolio.data.attributes.type}, {portfolio.data.attributes.year}
							</div>

							<div className={style.work__infoText}>
								<ReactMarkdown>{portfolio.data.attributes.description}</ReactMarkdown>
							</div>

							<ul className={`${style.work__data} ${setting.list__reset}`}>
								<li className={style.work__dataItem}>
									<span>Заказчик:</span>
									<div className={style.work__dataCustomer}>
										{portfolio.data.attributes.client}
									</div>
								</li>
								<li className={style.work__dataItem}>
									<span>Сайт:</span>
									<a href="{portfolio.data.attributes.link}" title="{portfolio.data.attributes.title}" className={style.work__dataAddress}>
										{portfolio.data.attributes.link}
									</a>
								</li>
							</ul>
						</div>
						
					</div>
					<div className={style.work__screenshots}>
						<div className={style.work__screenshotsPresentation}>

							<h3 className={style.work__screenshotsTitle}>
								Video presentation
							</h3>

							{/* {portfolio.attributes.video.data?.[0].attributes.name} */}
								
								{/* <video autoplay="" preload="metadata" controls="" class="work__screenshots-video" poster="portfolio.data.attributes.client">
									<source src={portfolio.video.attributes.url} type="video/mp4" />
								</video> */}
						</div>
					</div>
				</div>
			</div>
		</div>

		</>
  );
}


export const getStaticProps = async (context) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios/${context.params.id}`);
	const portfolio = await data.json();
  return {
    props: { portfolio },
    revalidate: 1,
  };
};
export async function getStaticPaths() {
  // Вызываем внешнюю конечную точку API для получения постов
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios`);
	const portfolios = await res.json();

  // Получаем на основе постов пути, которые нужно предварительно отрисовать
  const paths = portfolios.data.map((portfolio) => ({
    params: { id: portfolio.id.toString() },
  }));

  // В процессе сборки мы будем предварительно отрисовывать только эти пути
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
