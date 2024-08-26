import { Flex, Text, Button } from '@radix-ui/themes';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
      </Flex>
      <div>
      <FaceIcon />
      <SunIcon />
      <ImageIcon />
    </div>
    </main>
  );
}
