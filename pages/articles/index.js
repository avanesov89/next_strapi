import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import { fetcher } from '../../lib/api';
import style from '../../styles/components/Article.module.scss';
import setting from '../../styles/Setting.module.scss';
import ReactMarkdown from "react-markdown";
import Link from 'next/link';

const ArticlesCategory = ({ articles }) => {
	return (
		<>
			<Head>
				<title>Статьи - Веб разработчик Аванесов Юрий</title>
			</Head>
			<div className={setting.category__title}>
				<div className={setting.container}>
					<h1>
					Статьи
					</h1>
					<p>
						Делюсь опытом в области разработки.
					</p>
				</div>
			</div>
			<div className={setting.container}>
				<div className={style.article__grid}>
					{articles && articles.data.map((article) => {
						return (
							<div key={article.id} className={style.article__item}>
								<time>{article.attributes.createdAt}</time>
								<h3>{article.attributes.Title}</h3>
								<ReactMarkdown>
									{article.attributes.Description.length > 250 ? `${article.attributes.Description.substring(0, 250)} ...` : article.attributes.Description}
								</ReactMarkdown>
								<Link href={`/articles/${article.id}`}>
									<a className={style.article__itemMore}>Читать полностью</a>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default ArticlesCategory;

export async function getStaticProps() {
	const articlesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=*`);
	console.log(articlesResponse);
	return {
		props: {
			articles: articlesResponse
		}
	}
} 