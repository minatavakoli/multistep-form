export interface UserDetailsProps {
  setCurrentStepForm: React.Dispatch<React.SetStateAction<number>>;
  userDetailsFormData: {
    firstName: string;
    lastName: string;
    age: string;
  };
  setUserDetailsFormData: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      age: string;
    }>
  >;
}
