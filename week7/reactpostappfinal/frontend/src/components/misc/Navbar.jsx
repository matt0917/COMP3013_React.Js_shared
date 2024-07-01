import React from "react";
import classes from "./Navbar.module.css";
import MainLogo from "./MainLogo";
import { Container, Group, Burger, Drawer, Stack, Text } from "@mantine/core";
import useLinks from "./useLinks";
import { DrawerContext } from "../../Contexts/drawerContext";

const Navbar = () => {
  const { opened, toggle } = React.useContext(DrawerContext);
  const [items] = useLinks();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group align="center" spacing="sm">
          <MainLogo width={32} height={32} color="#c50041" />
          <Text className={classes.logoText}>{"JSP.Gallery"}</Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} />
        <Drawer
          withCloseButton={true}
          opened={opened}
          size="100%"
          onClose={toggle}
        >
          <Stack>{items}</Stack>
        </Drawer>
      </Container>
    </header>
  );
};

export default Navbar;
