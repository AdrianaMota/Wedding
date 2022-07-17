import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();

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
								<Stack textAlign="center" color={"#371700"}>
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
								</Stack>
							</div>
							<div className="section">
								<Flex flexDirection="column" textAlign={"center"}>
									<Text>Details</Text>
									<Text>Details</Text>
									<Box mb="5rem">
										<Text fontWeight={"bold"}>Dress Code</Text>
										<Text>La boda tomará lugar en la 5ta Dominica.</Text>
									</Box>
									<Box mt="3rem">
										<Text fontWeight={"bold"}>Lugar</Text>
										<Text>La boda tomará lugar en la 5ta Dominica.</Text>
										<Button
											colorScheme={"green"}
											size="lg"
											onClick={() =>
												router.push(
													"https://www.google.com/maps/place/Quinta+Dominica/@18.4713072,-69.8879331,17z/data=!4m5!3m4!1s0x8eaf883d1811bd5d:0xc598883a435b9cfd!8m2!3d18.4712971!4d-69.8857427"
												)
											}
										>
											Cómo Llegar
										</Button>
									</Box>
								</Flex>
							</div>
							<div className="section">
								<Text>Registry</Text>
							</div>
							<div className="section">
								<Text>RSVP</Text>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Flex>
	);
}
