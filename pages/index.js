import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
	return (
		<Flex
			justifyContent={"center"}
			alignItems="stretch"
			position="relative"
			minW="100vw"
			minH="100vh"
			p="5rem"
		>
			<Box bgColor={"#FAF3ED"} position={"absolute"} inset="5rem"></Box>
			<Image
				position="absolute"
				top="2rem"
				left="2rem"
				width="10.7rem"
				src="/Blue1.png"
				transform={"rotate(20deg)"}
			/>
			<Image
				position="absolute"
				bottom="0"
				right="2rem"
				width="13.7rem"
				src="/Blue1.png"
				transform={"rotate(-120deg)"}
			/>
			<Image
				position="absolute"
				top="17rem"
				left="8rem"
				width="5rem"
				src="/Yellow.png"
				transform={"rotate(20deg)"}
			/>
			<Image
				position="absolute"
				top="15rem"
				right="2rem"
				width="8rem"
				src="/Blue2.png"
				transform={"rotate(20deg)"}
			/>
			<ReactFullpage
				scrollingSpeed={1000}
				autoScrolling={true}
				render={({}) => {
					return (
						<ReactFullpage.Wrapper>
							<div className="section">
								<Box textAlign="center" color={"#371700"}>
									<Text mb="2rem">
										Ana Lucia Mota, nos complace invitarle a la boda de
									</Text>
									<Heading
										as="h1"
										fontWeight={"normal"}
										fontFamily={"heading"}
										fontSize="10rem"
									>
										Camila &amp; Eduardo
									</Heading>
									<Text mt="2rem" letterSpacing={"0.26em"}>
										03.10.22
									</Text>
								</Box>
							</div>
							<div className="section">
								<Text>Registry</Text>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Flex>
	);
}
