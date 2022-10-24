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
import { AddressDetailsProps } from "./types";

const AddressDetailsForms = ({
  setCurrentStepForm,
  setAddressDetailsFormData,
  addressDetailsFormData,
}: AddressDetailsProps) => {
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
          2/3
        </Text>
        <Text
          alignItems="center"
          justifyContent="center"
          display="flex"
          fontSize="24px"
          fontWeight="bold"
        >
          Address Details
        </Text>
        <Stack mt="20px" spacing={2}>
          <InputGroup>
            <InputLeftAddon children="Street" />
            <Input
              type="string"
              value={addressDetailsFormData.street}
              onChange={(e) => {
                setAddressDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  street: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="City" />
            <Input
              type="string"
              value={addressDetailsFormData.city}
              onChange={(e) => {
                setAddressDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  city: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="State" />
            <Input
              type="string"
              value={addressDetailsFormData.state}
              onChange={(e) => {
                setAddressDetailsFormData((currentvalues) => ({
                  ...currentvalues,
                  state: e.target.value,
                }));
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Zip" />
            <Input
              type="string"
              value={addressDetailsFormData.zip}
              onChange={(e) => {
                setAddressDetailsFormData((currenvalues) => ({
                  ...currenvalues,
                  zip: e.target.value,
                }));
              }}
            />
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

export default AddressDetailsForms;
