import React from 'react';
import {
    ChakraProvider,
    Flex,
    Link,
    Stack,
    Icon,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

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
                        <Link fontSize={['smaller', 'medium']} to="/">
                            Sites
                        </Link>
                        <Link fontSize={['smaller', 'medium']}>Feedback</Link>
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
                    <Flex flexDirection="column">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Sites / </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Flex justifyContent={'space-between'}>
                            <Heading color="blackAlpha.800">Sites</Heading>
                            <AddSiteModal
                                color={'white'}
                                backgroundColor={'gray.900'}
                                label="+ Add Site"
                            />
                        </Flex>
                    </Flex>
                    {children}
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}
