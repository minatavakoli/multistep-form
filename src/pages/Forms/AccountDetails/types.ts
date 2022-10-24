export interface AccountDetailsProps {
  setCurrentStepForm: React.Dispatch<React.SetStateAction<number>>;
  accountDetailsFormData: {
    email: string;
    password: string;
  };
  setAccountDetailsFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  onOpen: () => void;
}
