import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Section, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Box
				min-width="50px"
				min-height="50px"
				width="50px"
				height="50px"
				border-style="radius"
				border-radius="50%"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/67fa69a79710450018a84f18/images/ezgif-2a4d0d9f0b334b.gif?v=2025-04-12T15:30:33.699Z) center/350% repeat scroll padding-box"
			>
				<Link
					href="/"
					color="#000000"
					background="rgba(0, 0, 0, 0)"
					border-style="radius"
					border-radius="100px"
					min-width="50px"
					width="50px"
					height="50px"
					min-height="50px"
					display="grid"
					link-display="grid"
				/>
			</Box>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="icon"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
				<Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px" />
				<Override
					slot="menu"
					md-height="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					md-width="100%"
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						hover-opacity="1"
						md-transition="opacity .15s ease 0s"
						md-font="16px/24px sans-serif"
						font="--base"
						color="--dark"
						opacity=".5"
						transition="opacity .15s ease 0s"
						text-transform="initial"
						md-color="--dark"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						text-decoration-line="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
					<Override
						slot="item"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-about" width="101px" />
					<Override slot="item-work" width="101px" />
					<Override slot="item-team" width="101px" />
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
			</Components.BurgerMenu>
			<Button
				hover-transform="translateY(-4px)"
				font="--base"
				z-index="5"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				padding="8px 18px 8px 18px"
				letter-spacing="0.5px"
				background="--color-primary"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
			>
				Contact Us
			</Button>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
				width="100%"
				min-height="480px"
			>
				<Text
					font="--headline1"
					margin="0px 0px 0px 0px"
					quarkly-title="Title"
					sm-text-align="center"
					text-align="center"
					md-font="--headline2"
					display="flex"
					align-items="center"
					color="--light"
					justify-content="center"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-font="--headline2"
				>
					Services
				</Text>
			</Box>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-style="solid"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			quarkly-title="About"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			md-padding="50px 0px 50px 0px"
			sm-padding="0px 0 0px 0"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
				margin="0px 32px 0px 32px"
			/>
			<Text
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				lg-text-align="center"
				font="--base"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				text-transform="uppercase"
				text-align="center"
			/>
			<Text
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="--headline3"
				margin="0px 0px 0px 0px"
			>
				Podcast, pub, musique, sound design… une seule direction artistique pour tout ce qui s’écoute.{"\n\n"}
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			padding="100px 0px 100px 0px"
			quarkly-title="Our Services"
			xl-padding="100px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				align-items="center"
			/>
			<Text
				lg-margin="0px 0px 48px 0px"
				md-font="--headline3"
				sm-margin="0px 0px 36px 0px"
				font="--headline2"
				margin="0px 0px 72px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
			>
				Nos Services
			</Text>
			<Box min-width="100px" min-height="100px" sm-display="block">
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13:57:03.258Z"
					display="none"
					sm-display="block"
					sm-width="400px"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%282%29.png?v=2025-04-25T13%3A57%3A03.258Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13:58:38.224Z"
					display="none"
					sm-display="block"
					sm-width="400px"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%283%29.png?v=2025-04-25T13%3A58%3A38.224Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13:59:49.966Z"
					display="none"
					sm-display="block"
					sm-width="400px"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%284%29.png?v=2025-04-25T13%3A59%3A49.966Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14:02:32.002Z"
					display="none"
					sm-display="block"
					sm-width="400px"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Copie%20de%20Tableau%20%C3%A0%204%20colonnes%20%285%29.png?v=2025-04-25T14%3A02%3A32.002Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14:06:19.411Z"
					display="none"
					sm-position="absolute"
					sm-bottom="-968px"
					sm-height="47px"
					sm-left="7px"
					sm-right="15.5px"
					sm-top="1817px"
					sm-width="391.5px"
					sm-display="block"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes%20%281%29.png?v=2025-04-25T14%3A06%3A19.411Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Image
					src="https://uploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10:36:36.362Z"
					display="block"
					object-position="cover"
					sm-display="none"
					srcSet="https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67fa69a79710450018a84f18/images/Tableau%20%C3%A0%204%20colonnes.png?v=2025-04-25T10%3A36%3A36.362Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
				<Link
					href="/#contact"
					color="#000000"
					position="absolute"
					bottom="1158.94px"
					height="100.3079294117647px"
					top="1801.7364705882353px"
					left="19.2353px"
					right="33.4688px"
					width="1227.28px"
					pointer-events="auto"
					user-select="auto"
					sm-bottom="-975.25px"
					sm-left="-3.016px"
					sm-right="1px"
					sm-top="568.45px"
					sm-height="1302.8px"
					sm-width="416.016px"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-lightD1"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
			box-sizing="border-box"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				width="100%"
				lg-grid-template-columns="1fr"
			>
				<Text
					color="--darkL2"
					lg-margin="0px 0px 0px 0px"
					md-font="--lead"
					font="--headline3"
					margin="0px 0px 10px 0px"
					display="inline-block"
				>
					Hi! I'm a paragraph.{" "}
				</Text>
				<Text
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
					margin="0px 0px 0px 0px"
				>
					Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer.
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					display="inline-block"
					opacity="0.6"
					color="--darkL2"
					lg-text-align="left"
					text-align="left"
					font="--base"
				>
					Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				</Text>
			</Box>
		</Section>
		<Section
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			quarkly-title="USP"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				min-height="480px"
				display="flex"
				justify-content="center"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				lg-min-height="420px"
				sm-min-height="280px"
				padding="36px 24px 36px 24px"
				align-items="center"
				flex-direction="column"
				md-min-height="360px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
				>
					Make It Work.
				</Text>
				<Text
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
				>
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					letter-spacing="0.5px"
					transition="opacity .15s ease 0s"
					z-index="5"
					margin="10px auto 0px auto"
					padding="8px 36px 8px 36px"
					position="relative"
					opacity="1"
					hover-opacity=".85"
					hover-box-shadow="none"
					active-box-shadow="none"
					width="fit-content"
					font="--lead"
					focus-box-shadow="none"
					md-font="--base"
					color="--darkL2"
					background="--color-light"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
			margin="0 0 0 0"
			padding="16px 0 16px 0"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
				display="grid"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" width="28px" height="28px" />
					<Link
						hover-text-decoration-line="underline"
						white-space="nowrap"
						color="--dark"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						href="https://quarkly.io/"
						font="--base"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end" facebook="https://www.facebook.com/quarklyapp/">
					<Override slot="link" background="none" border-radius="50%" />
					<Override slot="icon" color="--dark" />
				</SocialMedia>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});