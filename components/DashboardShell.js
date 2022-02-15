import React from 'react';
import { ChakraProvider, Flex, Link, Avatar } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import TableHeader from './TableHeader';
import NextLink from 'next/link';

export default function DashboardShell({ children }) {
    const auth = useAuth();
    return (
        <ChakraProvider resetCSS>
            <Flex
                borderTop={'8px solid cyan'}
                minHeight="100vh"
                backgroundColor="gray.100"
                flexDirection="column"
            >
                <Flex
                    justifyContent={'space-between'}
                    backgroundColor="white"
                    paddingX={[4, 8]}
                    paddingY={'4'}
                >
                    <Flex gap={2} alignItems="center">
                        <Link
                            to="/"
                            fontWeight={'bold'}
                            fontSize={['smaller', 'medium']}
                        >
                            Quick Feedback
                        </Link>
                        <NextLink href={'/dashboard'} passHref>
                            <Link fontSize={['smaller', 'medium']} to="/">
                                Sites
                            </Link>
                        </NextLink>
                        <NextLink href={'/feedback'} passHref>
                            <Link fontSize={['smaller', 'medium']}>
                                Feedback
                            </Link>
                        </NextLink>
                    </Flex>
                    <Flex alignItems="center">
                        <Link fontSize={['smaller', 'medium']} mr={4}>
                            Account
                        </Link>
                        <Avatar size="sm" src={auth?.user?.image} />
                    </Flex>
                </Flex>
                <Flex
                    justifyContent="flex-start"
                    color="gray.500"
                    flexDirection="column"
                    py={8}
                    px={[4, 8]}
                >
                    {children}
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}
