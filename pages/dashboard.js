import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import { Button } from '@chakra-ui/react';
import React from 'react';

export default function Dashboard() {
    const auth = useAuth();
    if (!auth.user) return <div>Loadin...</div>;
    return <EmptyState />;
}
