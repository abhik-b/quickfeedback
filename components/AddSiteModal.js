import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { createSite } from '@/lib/firestore';
import { useToast } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import useSWR, { mutate } from 'swr';

export default function AddSiteModal({ color, backgroundColor, label }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, errors } = useForm();
    const initialRef = useRef();
    const toast = useToast();
    const auth = useAuth();

    const onSubmit = async (values) => {
        console.log(values);
        await createSite({
            authorId: auth.user.uid,
            ...values,
            createdAt: new Date().toISOString()
        })
            .then(() => {
                toast({
                    title: 'Site added',
                    description: `${values['site-name']} added successfully`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                });
                mutate('/api/sites');
                onClose();
            })
            .catch((e) => {
                toast({
                    title: 'Error occured',
                    description: 'Site not added',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
                console.error(e);
            });
    };

    return (
        <>
            <Button
                onClick={onOpen}
                variant="solid"
                size="md"
                color={color}
                backgroundColor={backgroundColor}
                mt={8}
            >
                {label}
            </Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as={'form'} onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder="My Site"
                                {...register('site-name', {
                                    required: 'Name is required'
                                })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                {...register('site-link', {
                                    required: 'Link is required',
                                    pattern:
                                        /[A-Za-z]+:\/\/[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_:%&;\?\#\/.=]+/g
                                })}
                                placeholder="https://mywebsiteurl.com"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3}>
                            Cancel
                        </Button>
                        <Button backgroundColor="cyan" type="submit">
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
