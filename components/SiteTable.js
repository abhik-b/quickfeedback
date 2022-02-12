import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';

const SkeletonRow = ({ width }) => (
    <Box as="tr">
        <Td>
            <Skeleton height="10px" w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height="10px" w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height="10px" w={width} my={4} />
        </Td>
        <Td>
            <Skeleton height="10px" w={width} my={4} />
        </Td>
    </Box>
);

const SiteTable = ({ sites }) => {
    return (
        <Table p={8} mt={4}>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Site Link</Th>
                    <Th>Feedback Link</Th>
                    <Th>Date Added</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {sites.map((site) => {
                    return (
                        <Box as="tr" key={site.id}>
                            <Td fontWeight="medium">{site['site-name']}</Td>
                            <Td color="purple">{site['site-link']}</Td>
                            <Td>{site['site-name']}</Td>
                            <Td>{site.createdAt}</Td>
                        </Box>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default SiteTable;
