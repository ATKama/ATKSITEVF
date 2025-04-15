import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Section, Text, Icon, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
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
					<Override slot="item-about" flex="0 1 auto" width="101px" />
					<Override slot="item-work" width="150px" />
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
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/67fa69a79710450018a84f18/images/20250413_0022_Futuristic%20Audio%20Tech%20Background_simple_compose_01jrp1e7kbfqj8pecnpwqzqjcn.png?v=2025-04-12T22:24:31.438Z) 0% 0%/cover no-repeat scroll"
				height="620px"
				justify-content="center"
				sm-width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				position="static"
				display="flex"
				flex-direction="column"
				overflow-x="auto"
			/>
			<Text
				margin="150px 0px 0px 0px"
				sm-text-align="center"
				sm-width="100%"
				lg-text-align="center"
				lg-font="--headline2"
				color="--light"
				font="--headline2"
				width="800px"
				flex="1 1 0%"
				display="flex"
				sm-flex-direction="column-reverse"
				sm-flex="0 1 auto"
				sm-align-items="center"
				sm-height="auto"
				sm-overflow-x="visible"
				sm-justify-content="center"
				sm-font="normal small-caps 900 35px/1.2 --fontFamily-googleOrbitron"
				sm-margin="80px 0px 0px 0px"
				text-align="center"
			>
				ATK Music - Valoriser votre marque avec une identité sonore adaptée{" "}
			</Text>
			<Text
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
				color="--light"
				margin="10px 0px 10px 0px"
				font="--headline3"
				flex="0 0 auto"
				min-height="2px"
				height="223px"
				width="50% content-box"
				position="relative"
				top="-65\n\t\tpx"
				sm-font="normal 500 20px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				sm-flex="0 1 auto"
				sm-margin="-80px 0px 10px 0px"
				sm-top="60px"
			>
				<br />
				<br />
				L'équilibre entre expertise, technologie et intuition artistique.
			</Text>
			<Link
				text-decoration-line="initial"
				color="--darkL2"
				padding="12px 24px 12px 24px"
				letter-spacing="0.5px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				href="#mission"
				background="--color-light"
				font="--base"
				hover-transform="translateY(-4px)"
				flex="0 1 auto"
				height="initial"
				position="relative"
				top="-64px"
				sm-top="-10px"
			>
				Learn More
			</Link>
		</Section>
		<Section
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			id="mission"
			padding="90px 0px 100px 0px"
			quarkly-title="About"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			background="--color-lightD1"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
		</Section>
		<Section
			md-padding="25px 0px 25px 0px"
			justify-content="center"
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						QUI SOMMES NOUS ?
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
					>
						ATK Music, est un studio où la création sonore devient un véritable levier d’identité et d’impact. Nous collaborons avec des PME, des artistes et des structures pédagogiques pour concevoir des univers sonores sur mesure, alignés avec leurs intentions créatives ou stratégiques. Chaque production vise à valoriser un message, une ambiance ou une émotion, avec exigence technique et sens artistique.{"\n\n"}
					</Text>
				</Box>
				<Box
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					md-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/67fa69a79710450018a84f18/images/laptop-screen-showing-interface-music-program-working-with-sound.jpg?v=2025-04-15T20:14:43.236Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					lg-order="-1"
				/>
			</Box>
			<Box
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="3fr 2fr"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
			>
				<Box
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
				/>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					min-width="100px"
					min-height="100px"
				>
					<Text
						lg-text-align="center"
						quarkly-title="Title"
						text-transform="uppercase"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
					>
						expertise
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Why Choose Us
					</Text>
					<Text
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						color="--light"
						text-align="center"
						background="--color-primary"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						hover-transform="translateY(-4px)"
						href="/team"
						text-decoration-line="initial"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						margin="9px 0px 0px 0px"
					>
						Read More
					</Link>
				</Box>
			</Box>
			<Box
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						quarkly-title="Title"
						text-transform="uppercase"
						lg-text-align="center"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						font="--base"
					>
						CONTACTS
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-text-align="left"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Where We Work
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						margin="9px 0px 0px 0px"
						hover-transform="translateY(-4px)"
						text-decoration-line="initial"
						padding="8px 18px 8px 18px"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						href="/contact"
						color="--light"
						letter-spacing="0.5px"
						background="--color-primary"
					>
						Read More
					</Link>
				</Box>
				<Box
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					lg-order="-1"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					md-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
			</Box>
		</Section>
		<Section
			padding="100px 0px 100px 0px"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 0px 0px 0px"
				align-items="center"
			/>
			<Text
				color="--dark"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				opacity="0.6"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				font="--base"
			>
				what we create
			</Text>
			<Text
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 48px 0px"
				color="--dark"
			>
				Our Works
			</Text>
			<Box
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
			>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/110% no-repeat"
				/>
			</Box>
			<Link
				text-align="center"
				margin="48px 0px 0px 0px"
				hover-transform="translateY(-4px)"
				href="/contact"
				color="--light"
				padding="8px 18px 8px 18px"
				font="--base"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				md-margin="36px 0px 0px 0px"
				text-decoration-line="initial"
				letter-spacing="0.5px"
				background="--color-primary"
				lg-margin="24px 0px 0px 0px"
			>
				View More
			</Link>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			background="--color-lightD1"
			border-style="solid"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="--color-lightD2"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 30px 50px 30px"
			quarkly-title="FAQ"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				lg-text-align="center"
			>
				We're here to help
			</Text>
			<Text
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
			>
				FAQ
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box>
					<Text
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
					>
						Have any questions?
					</Text>
					<Text
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
						font="--lead"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						color="--dark"
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				color="--dark"
				text-align="center"
				lg-margin="0px 0px 6px 0px"
				text-transform="uppercase"
				lg-text-align="center"
				quarkly-title="Title"
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				opacity="0.6"
			>
				They trust us
			</Text>
			<Text
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
			>
				Our Customers
			</Text>
			<Box
				lg-grid-template-columns="repeat(6, 1fr)"
				sm-grid-template-columns="1fr"
				display="grid"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(5, 1fr)"
			>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="1 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Icon
						category="di"
						icon={DiBootstrap}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
					>
						Company Name
					</Text>
				</Box>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="3 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Icon
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiBingSmall}
						margin="0px auto 0px auto"
					/>
					<Text
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="5 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						sm-font="48px sans-serif"
						category="di"
						icon={DiCssTricks}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="2 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						icon={DiEnvato}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
					/>
					<Text
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="4 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
					/>
					<Text
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
					>
						Company Name
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				align-self="auto"
				align-content="space-around"
				justify-content="space-around"
				flex-direction="row"
			/>
			<Components.AudioForm />
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Box
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
				display="grid"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image width="28px" height="28px" src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" />
					<Link
						white-space="nowrap"
						font="--base"
						opacity="0.6"
						text-align="left"
						margin="1px 0px 0px 10px"
						href="https://quarkly.io/"
						color="--dark"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end">
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