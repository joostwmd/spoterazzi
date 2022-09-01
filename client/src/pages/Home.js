import { useState } from 'react'
import { Input, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import homepage1 from '../assets/pictures/homepage1.jpg'


function Home() {



    return (
        <div>
            <Flex
                w='100vw'
                h='50vh'
                backgroundColor='#e26400'
                alignItems='center'
            >

                <Image
                    w='150px'
                    h='200px'
                    src={logo}
                    alt='logo'
                    mr='10vw'
                    ml='5vw'
                />

                <Flex
                    display='flex'
                    flexDirection='column'
                    mb='5vh'
                >
                    <Heading
                        fontSize='10vw'
                        color='#fff'
                        textAlign='center'
                    >
                        spoterrazi
                    </Heading>

                    <Text
                        as='em'
                        fontSize='5vw'
                        color='#fff'
                        textAlign='center'
                    >
                        pic' a scenery
                    </Text>
                </Flex>
            </Flex>

            <Flex
                flexDirection='row'
                alignItems='center'
                h='50vh'
            >
                <Flex
                    flexDirection='column'
                    alignItems='center'
                >
                    <Text
                        ml='2.5vw'
                        mr='2.5vw'
                        w='30vw'
                        fontSize='20px'
                        color='#e26400'
                        fontWeight='bold'
                        textAlign='center'
                    >
                        visit the map and simply discover new loactions for your photoshoots.
                        you can also just add your locations and contribute back to the photography community.
                    </Text>

                    <Link to='/map'>
                        <Button
                            mt='7.5vh'
                            backgroundColor='#e26400'
                            borderRadius='25px'
                            w='20vw'
                            h='7.5vh'
                        >
                            <Text
                                color='#fff'
                            >
                                map
                            </Text>
                        </Button>
                    </Link>
                </Flex>

                <Image
                    w='70vw'
                    h='50vh'
                    id='homepagePictures'
                    src={homepage1}
                />
            </Flex>
        </div>
    )
}

export default Home
