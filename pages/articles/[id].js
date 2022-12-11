import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import setting from '../../styles/Setting.module.scss';
import style from '../../styles/components/Article.module.scss';
import ReactMarkdown from "react-markdown";

export default function PortfolioPage({ article }) {
	return (
		<>
			<Head>
				<title>Статьи - Веб разработчик Аванесов Юрий</title>
			</Head>
			<div className={setting.container}>
				<h1>
					{article.data.attributes.Title}
				</h1>

				<ReactMarkdown>
					{article.data.attributes.Description}
				</ReactMarkdown>


			</div>

		</>
  );
}


export const getStaticProps = async (context) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles/${context.params.id}`);
	const article = await data.json();
  return {
    props: { article },
    revalidate: 1,
  };
};
export async function getStaticPaths() {
  // Вызываем внешнюю конечную точку API для получения постов
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`);
	const articles = await res.json();

  // Получаем на основе постов пути, которые нужно предварительно отрисовать
  const paths = articles.data.map((article) => ({
    params: { id: article.id.toString() },
  }));

  // В процессе сборки мы будем предварительно отрисовывать только эти пути
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

