import Document, { Html, Head, Main, NextScript } from 'next/document'

class Fonts extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.google.com/specimen/Montserrat#standard-styles"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Fonts
