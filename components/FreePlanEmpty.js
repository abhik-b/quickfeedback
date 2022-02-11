import React from 'react';
import { Box, Text, Button, Heading } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
export default function FreePlanEmpty() {
    return (
        <div>
            <DashboardShell>
                <Box
                    backgroundColor="#ffffff"
                    color="whiteAlpha.800"
                    p={24}
                    mt={4}
                >
                    <Heading
                        size="lg"
                        color="gray.800"
                        backgroundColor="whiteAlpha.50"
                    >
                        Get Quick Feedback on Your Site Instantly
                    </Heading>
                    <Text color="gray.500" mt={2}>
                        Start today , then grow with us 🌱
                    </Text>
                    <Button variant="solid" size="md" color="gray.900" mt={8}>
                        Upgrade to Starter
                    </Button>
                </Box>
            </DashboardShell>
        </div>
    );
}
