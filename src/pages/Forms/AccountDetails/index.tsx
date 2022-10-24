import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AccountDetailsProps } from "./types";

const AccountDetailsForms = ({
  setCurrentStepForm,
  accountDetailsFormData,
  setAccountDetailsFormData,
  onOpen,
}: AccountDetailsProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex w="100%" height="100vh" justifyContent="center" alignItems="center">
      <Box
        border="1px solid #000000"
        borderRadius="10px"
        alignItems="center"
        w="600px"
        height="400px"
        p="2rem"
      >
        <Text
          justifyContent="flex-end"
          display="flex"
          fontSize="16px"
          fontWeight="bold"
          mr="8px"
          mt="8px"
        >
          3/3
        </Text>
        <Text
          alignItems="center"
          justifyContent="center"
          display="flex"
          fontSize="24px"
          fontWeight="bold"
        >
          Account Details
        </Text>
        <Stack mt="20px" spacing={4}>
          <InputGroup>
            <InputLeftAddon children="Email" />
            <Input
              type="email"
              value={accountDetailsFormData.email}
              onChange={(e) => {
                setAccountDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  email: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={accountDetailsFormData.password}
              onChange={(e) => {
                setAccountDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  password: e.target.value,
                }));
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
        <Flex justifyContent="flex-end" gap="20px">
          <Button
            onClick={() => {
              setCurrentStepForm((currentvalue) => currentvalue - 1);
            }}
            mt="40px"
            colorScheme="blue"
          >
            Back
          </Button>
          <Button mt="40px" colorScheme="blue" onClick={onOpen}>
            Finish
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AccountDetailsForms;
