export interface AddressDetailsProps {
  setCurrentStepForm: React.Dispatch<React.SetStateAction<number>>;
  addressDetailsFormData: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  setAddressDetailsFormData: React.Dispatch<
    React.SetStateAction<{
      street: string;
      city: string;
      state: string;
      zip: string;
    }>
  >;
}
