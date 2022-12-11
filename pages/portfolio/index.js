import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import { fetcher } from '../../lib/api';
import style from '../../styles/components/Portfolio.module.scss';
import setting from '../../styles/Setting.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export default function PortfolioCategory({ portfolios }) {
	
  return (
		<>
			<Head>
				<title>Портфолио - Веб разработчик Аванесов Юрий</title>
			</Head>
			<div className={setting.category__title}>
				<div className={setting.container}>
					<h1>
						Портфолио
					</h1>
					<p>
						Предлагаю вашему вниманию примеры своих работ.
					</p>
				</div>
			</div>

			<div className={style.portfolio}>
				<div className={setting.container}>
					<div className={style.portfolio__grid}>
						{portfolios && portfolios.data.map((portfolio, i) => {
							return ( 
							<div className={style.portfolio__item} key={portfolio.id}>
								<Link href={`/portfolio/${portfolio.id}`}>
									<a>
									<div className={style.portfolio__itemBlock}>
											<div className={style.portfolio__itemImg}>
												<img src={`http://localhost:1337${portfolio.attributes.preview.data?.[0].attributes.formats.small.url}`} />
											</div>
											<h3 className={style.portfolio__itemTitle}>{portfolio.attributes.title}</h3>
											<div className={style.portfolio__itemType}>{`${portfolio.attributes.type}, ${portfolio.attributes.year}`}</div>
										</div>
									</a>
								</Link>
							</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
  );
}

export async function getStaticProps() {
	const portfoliosList = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`);
	
	return {
		props: {
			portfolios: portfoliosList
		}
	}
}