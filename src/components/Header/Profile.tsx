import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Milena Hikari</Text>
          <Text color="gray.300" fontSize="small">
            milenahikari11@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Milena Hikari" src="https://github.com/milenahikari.png"/>
    </Flex>
  );
}