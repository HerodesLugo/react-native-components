import Navbar from "@/components/navbar/Navbar";
import { Stack } from "expo-router";
import { Text } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <Navbar
            left={{
              render: () => <Text className="text-white">Back</Text>,
            }}

            // title="Tienda"
            // subtitle="Bienvenido a nuestra tienda"
            // containerClassName="w-full justify-end" // contenedor principal
            // backgroundClassName="bg-indigo-600" // color de fondo via nativewind
            // titleClassName="text-white text-lg font-bold" // estilos del título
            // subtitleClassName="text-indigo-100 text-xs" // estilos del subtítulo
            // right={[
            //   { label: "Fav", onPress: () => {}, className: "text-white" },
            // ]}

            // backgroundClassName="bg-indigo-600"
            // title=""
            // left={{
            //   onPress: () => console.log("back"),
            //   accessibilityLabel: "Atrás",
            //   className: "p-2",
            //   label: "Atrás",
            // }}
            // right={[
            //   {
            //     onPress: () => console.log("search"),
            //     label: "Buscar",
            //     className: "p-2",
            //   },
            //   {
            //     onPress: () => console.log("menu"),
            //     label: "Menú",
            //     className: "p-2 text-white",
            //   },
            // ]}
          />
        ),
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}
