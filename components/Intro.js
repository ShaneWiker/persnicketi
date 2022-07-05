import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
	return (
		<div className={style.container}>
			{/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
			<Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
			{/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
			<div className={style.card}>
				<h1 className={style.title}>
					<span className={style.brandName}>PERSNICKETY</span> DIGITAL PRODUCT
					AGENCY
				</h1>
				<p className={style.desc}>
					Persnickety: Requiring a particularly careful or precise approach.
				</p>
				<button className={style.button}>DISCOVER</button>
			</div>
			<div className={style.card}>
				<Image
					src={process.env.NEXT_PUBLIC_URL + "/img/macaron.png"}
					layout="fill"
					objectFit="contain"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Intro;
