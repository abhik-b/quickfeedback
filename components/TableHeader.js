import React from 'react';
import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

export default function TableHeader({ label }) {
    return (
        <Flex flexDirection="column">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink>{label} / </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex justifyContent={'space-between'}>
                <Heading color="blackAlpha.800">{label}</Heading>
                <AddSiteModal
                    color={'white'}
                    backgroundColor={'gray.900'}
                    label={`+ Add ${label}`}
                />
            </Flex>
        </Flex>
    );
}
