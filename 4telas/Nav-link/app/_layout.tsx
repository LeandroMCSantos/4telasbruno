import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="tela2"
        options={{
          href: 'tela2',
        }}
      />
      <Tabs.Screen
        name="TelaC"
        options={{
          href: 'telaC',
        }}
      />
      <Tabs.Screen
        name="TelaD"
        options={{
          href: 'telaD',
        }}
      />
    </Tabs>
  );
}