import style from "../../styles/components/About.module.scss";
import { fetcher } from '../../lib/api';
import setting from "../../styles/Setting.module.scss";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function About({ data }) {

  return (
		<>
		<Head>
			<title>Об авторе - Веб разработчик Аванесов Юрий</title>
		</Head>
		<div className={setting.category__title}>
				<div className={setting.container}>
					<h1>
					Об авторе
					</h1>
					<p>
						Давайте знакомиться, расскажу о себе и своем опыте.
					</p>
				</div>
			</div>

			<div className={style.about}>
				<div className={setting.container}>
					<div className={style.about__page}>

						<div className={style.about__pageItem}>
							<div className={style.about__pageTitle}>
								{data.data.attributes.AcquaintedTitle}
							</div>
							<div className={style.about__pageContent} dangerouslySetInnerHTML={{__html: data.data.attributes.AcquaintedDescription}}>
							</div>
						</div>

						<div className={style.about__pageItem}>
							<div className={style.about__pageTitle}>
								{data.data.attributes.ExperienceTitle}
							</div>
							<div className={style.about__pageContent}>
								<ul className={`${setting.list__reset} ${style.about__pageExperience}`} dangerouslySetInnerHTML={{__html: data.data.attributes.ExperienceDescription}} />
							</div>
						</div>

						<div className={style.about__pageItem}>
							<div className={style.about__pageTitle}>
								{data.data.attributes.SkillsTitle}
							</div>
							<div className={style.about__pageContent}>
								<ul className={`${setting.list__reset} ${style.about__pageSkills}`} dangerouslySetInnerHTML={{__html: data.data.attributes.SkillsDescription}} />
							</div>
						</div>

						<div className={style.about__pageItem}>
							<div className={style.about__pageTitle}>
								{data.data.attributes.UseWorksTitle}
							</div>
							<div className={style.about__pageContent}>
								<ul className={`${setting.list__reset} ${style.about__pageUse}`} dangerouslySetInnerHTML={{__html: data.data.attributes.UseWorksDescription}} />
							</div>
						</div>
					</div>
				</div>
			</div>
    
		</>
  );
}

export async function getStaticProps() {
  const data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/about`);
  return {
    props: { data },
    revalidate: 1,
  };
};
