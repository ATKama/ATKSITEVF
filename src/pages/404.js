import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Section, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
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
			<Button
				font="--base"
				z-index="5"
				background="--color-primary"
				border-radius="0px"
				hover-transform="translateY(-4px)"
				padding="8px 18px 8px 18px"
				letter-spacing="0.5px"
				md-display="none"
				white-space="nowrap"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="stretch"
			>
				Contact Us
			</Button>
		</Section>
		<Section lg-padding="25px 0 25px 0" quarkly-title="Hero" padding="25px 0 75px 0">
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						md-height="360px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						text-align="center"
						padding="0px 16px 0px 16px"
						color="--light"
						font="--headline1"
						margin="16px 0px 0px 0px"
						sm-text-align="center"
						sm-width="80%"
					>
						404
					</Text>
					<Text
						margin="10px 0px 35px 0px"
						sm-text-align="center"
						sm-width="80%"
						opacity="0.7"
						text-align="center"
						padding="0px 16px 0px 16px"
						font="--lead"
						color="--light"
					>
						This is not the page you're looking for. Move along, move along.
					</Text>
					<Link
						href="/"
						text-decoration-line="initial"
						color="--darkL2"
						background="--color-light"
						padding="12px 24px 12px 24px"
						letter-spacing="0.5px"
						hover-transform="translateY(-4px)"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Home Page
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" width="28px" height="28px" />
					<Link
						text-decoration-line="initial"
						opacity="0.6"
						font="--base"
						color="--dark"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
						white-space="nowrap"
						href="https://quarkly.io/"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end" facebook="https://www.facebook.com/quarklyapp/">
					<Override slot="icon" color="--dark" />
					<Override slot="link" border-radius="50%" background="none" />
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