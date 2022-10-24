import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import AccountDetailsForms from "./pages/Forms/AccountDetails";
import AddressDetailsForms from "./pages/Forms/AddressDetails";
import UserDetailsForms from "./pages/Forms/UserDetailsForms";

function App() {
  const [currentStepForm, setCurrentStepForm] = useState(0);
  const [userDetailsFormData, setUserDetailsFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [addressDetailsFormData, setAddressDetailsFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [accountDetailsFormData, setAccountDetailsFormData] = useState({
    email: "",
    password: "",
  });

  function handleContent() {
    if (currentStepForm === 0) {
      return (
        <UserDetailsForms
          setCurrentStepForm={setCurrentStepForm}
          userDetailsFormData={userDetailsFormData}
          setUserDetailsFormData={setUserDetailsFormData}
        />
      );
    } else if (currentStepForm === 1) {
      return (
        <AddressDetailsForms
          setCurrentStepForm={setCurrentStepForm}
          addressDetailsFormData={addressDetailsFormData}
          setAddressDetailsFormData={setAddressDetailsFormData}
        />
      );
    } else {
      return (
        <AccountDetailsForms
          setCurrentStepForm={setCurrentStepForm}
          accountDetailsFormData={accountDetailsFormData}
          setAccountDetailsFormData={setAccountDetailsFormData}
          onOpen={onOpen}
        />
      );
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {handleContent()}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th fontWeight="bold" fontSize="16px">
                      title
                    </Th>
                    <Th fontWeight="bold" fontSize="16px">
                      value
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">FirstName</Td>
                    <Td>{userDetailsFormData.firstName}</Td>
                  </Tr>

                  <Tr>
                    <Td fontWeight="bold">LastName</Td>
                    <Td>{userDetailsFormData.lastName}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Age</Td>
                    <Td>{userDetailsFormData.age}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Street</Td>
                    <Td>{addressDetailsFormData.street}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold"> state</Td>
                    <Td>{addressDetailsFormData.state}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">city</Td>
                    <Td>{addressDetailsFormData.city}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">zip</Td>
                    <Td>{addressDetailsFormData.zip}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
