import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import RemoveFeedback from './RemoveFeedback';

const FeedbackTable = ({ feedbacks }) => {
    return (
        <Table p={8} mt={4}>
            <thead>
                <Tr>
                    <Th>Author</Th>
                    <Th>Feedback </Th>
                    <Th>Route</Th>
                    <Th>Visible</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {feedbacks.map((feedback) => {
                    return (
                        <Box as="tr" key={feedback.id}>
                            <Td fontWeight="medium">{feedback.author}</Td>
                            <Td color="purple">{feedback.textContent}</Td>
                            <Td>
                                <Code>{'/'}</Code>
                            </Td>
                            <Td>
                                <Switch
                                    size="sm"
                                    defaultChecked={
                                        feedback.status === 'active'
                                    }
                                />
                            </Td>
                            <Td>
                                {feedback.status === 'removed' ? (
                                    'Removed'
                                ) : (
                                    <RemoveFeedback feedbackID={feedback.id} />
                                )}
                            </Td>
                        </Box>
                    );
                })}
            </tbody>
        </Table>
    );
};
export default FeedbackTable;
