import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

export default function Feedback({ author, textContent, createdAt }) {
    return (
        <Box borderRadius={4} p={2} maxWidth="700px" w="full">
            <Divider borderColor="gray.200" backgroundColor="gray.200" my={8} />
            <Heading
                size="sm"
                as="h4"
                mb={0}
                color="gray.700"
                fontWeight="medium"
            >
                {author}
            </Heading>
            <Text color="gray.500" mb={4} fontSize="xs">
                {createdAt}
            </Text>
            <Text fontSize={'lg'} color="gray.800">
                {textContent}
            </Text>
        </Box>
    );
}
