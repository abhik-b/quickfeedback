import { Flex, Link } from '@chakra-ui/react';
import React from 'react';

export default function FeedbackLink({ siteID }) {
    return (
        <Flex justifyContent={'space-between'} mb={8} width="full" mt="1">
            <Link fontWeight={'bold'} fontSize={'sm'} href={`/p/${siteID}`}>
                Leave a comment ➡️
            </Link>
            <Link fontSize={'xs'} color={'blackAlpha.500'}>
                Powered By Quick Feedback
            </Link>
        </Flex>
    );
}
