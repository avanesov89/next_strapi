import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import { fetcher } from '../../lib/api';
import style from '../../styles/components/Services.module.scss';
import setting from '../../styles/Setting.module.scss';
import ReactMarkdown from "react-markdown";


export default function ServicesPage({ services }) {
	console.log(services)
  return (
		<>
		<Head>
			<title>Услуги - Веб разработчик Аванесов Юрий</title>
		</Head>
		<div className={setting.category__title}>
				<div className={setting.container}>
					<h1>
						Услуги
					</h1>
					<p>
						Предлагаю свои услуги по разработке сайтов.
					</p>
				</div>
			</div>

			<div className={style.services__page}>
				<div className={setting.container}>
					<div className={style.services__items}>
						{services && services.data.map((service) => {
							return ( 
							<div className={style.services__block} key={service.id}>
								<div className={style.services__info}>
									<img src={`http://localhost:1337${service.attributes.icon.data?.[0].attributes.url}`} />
									<h2 className={style.services__infoTitle}>{service.attributes.title}</h2>
									<ReactMarkdown className={style.services__infoText}>{service.attributes.description}</ReactMarkdown>
								</div>
								<div className={style.services__infoImg}>
									<img className={style.services__infoImage} src={`http://localhost:1337${service.attributes.image.data?.[0].attributes.formats.large.url}`} />
								</div>
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
	const servicesList = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=*`);
	
	return {
		props: {
			services: servicesList
		}
	}
}