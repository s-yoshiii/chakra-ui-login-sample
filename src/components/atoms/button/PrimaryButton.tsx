import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="red.300"
      color="white"
      transition="all 0.3s ease"
      border="2px"
      borderColor="red.300"
      isLoading={loading}
      disabled={disabled || loading}
      _hover={{
        bg: "white",
        color: "red.300"
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
