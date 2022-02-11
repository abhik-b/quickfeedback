import React from 'react';
import Dashboard from './DashboardShell';
import { Box, Text, Button, Heading } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

export default function EmptyState() {
    return (
        <div>
            <DashboardShell>
                <Box
                    backgroundColor="#ffffff"
                    color="whiteAlpha.800"
                    p={8}
                    mt={4}
                    textAlign="center"
                >
                    <Heading
                        size="lg"
                        color="gray.800"
                        backgroundColor="whiteAlpha.50"
                    >
                        You have not added any sites yet
                    </Heading>
                    <Text color="gray.500" mt={2}>
                        Welcome 👋 Lets get started by adding a site.
                    </Text>
                    <AddSiteModal />
                </Box>
            </DashboardShell>
        </div>
    );
}
