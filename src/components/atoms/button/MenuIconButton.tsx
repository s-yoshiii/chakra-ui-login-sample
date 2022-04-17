import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
type Props = {
  onOpen: () => void;
};
export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      variant="unstyled"
      size="sm"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
