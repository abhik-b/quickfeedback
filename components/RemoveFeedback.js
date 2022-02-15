import React from 'react';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from '@chakra-ui/react';
import { removeFeedback } from '@/lib/firestore';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';

export default function RemoveFeedback({ feedbackID }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();

    const auth = useAuth();

    const deleteFeedback = () => {
        removeFeedback(feedbackID)
            .then(() => {
                mutate(auth.user ? ['/api/feedback', auth.user.token] : null);
            })
            .catch((e) => {});
        onClose();
    };

    return (
        <>
            <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                Remove Feedback
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Remove Feedback
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You cannot undo this action
                            afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={deleteFeedback}
                                ml={3}
                            >
                                Remove
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}
