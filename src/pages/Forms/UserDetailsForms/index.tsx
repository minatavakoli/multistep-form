import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { UserDetailsProps } from "./types";

const UserDetailsForms = ({
  setCurrentStepForm,
  setUserDetailsFormData,
  userDetailsFormData,
}: UserDetailsProps) => {
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
          1/3
        </Text>
        <Text
          alignItems="center"
          justifyContent="center"
          display="flex"
          fontSize="24px"
          fontWeight="bold"
        >
          User Details
        </Text>
        <Stack mt="20px" spacing={4}>
          <InputGroup>
            <InputLeftAddon children="First Name" />
            <Input
              type="text"
              value={userDetailsFormData.firstName}
              onChange={(e) => {
                setUserDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  firstName: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Last Name" />
            <Input
              type="text"
              value={userDetailsFormData.lastName}
              onChange={(e) => {
                setUserDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  lastName: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Age" />
            <Input
              type="number"
              value={userDetailsFormData.age}
              onChange={(e) => {
                setUserDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  age: e.target.value,
                }));
              }}
            />
          </InputGroup>
        </Stack>
        <Flex justifyContent="flex-end">
          <Button
            onClick={() => {
              setCurrentStepForm((currentValue) => currentValue + 1);
            }}
            mt="40px"
            colorScheme="blue"
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserDetailsForms;
