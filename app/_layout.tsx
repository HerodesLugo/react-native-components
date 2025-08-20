import Logo from "@/assets/images/react-logo.png"; // Import your logo image
import Avatar from "@/components/ui/avatar/Avatar";
import Navbar from "@/components/ui/navbar/Navbar";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <Navbar
            left={{
              render: () => <Avatar name="Herodes"   size="md" source={Logo} />,
            }}
            title="React Native Components"
            subtitle="Reutilizables"
            backgroundClassName="bg-indigo-600"
            titleClassName="text-sm text-white"
            // right={
            //   [
            //     {
            //       label: "Avatar",
            //       onPress: () => Alert.alert("Avatar pressed"),
            //     }
            //   ]
            // }
            // title="Tienda"
            // subtitle="Bienvenido a nuestra tienda"
            // containerClassName="w-full justify-end" // contenedor principal
            // backgroundClassName="bg-indigo-600" // color de fondo via nativewind
            // titleClassName="text-white text-lg font-bold" // estilos del título
            // subtitleClassName="text-indigo-100 text-xs" // estilos del subtítulo
            // right={[
            //   { label: "Fav", onPress: () => {}, className: "text-white" },
            // ]}

          //   // backgroundClassName="bg-indigo-600"
          //   // title=""
          //   // left={{
          //   //   onPress: () => console.log("back"),
          //   //   accessibilityLabel: "Atrás",
          //   //   className: "p-2",
          //   //   label: "Atrás",
          //   // }}
          //   // right={[
          //   //   {
          //   //     onPress: () => console.log("search"),
          //   //     label: "Buscar",
          //   //     className: "p-2",
          //   //   },
          //   //   {
          //   //     onPress: () => console.log("menu"),
          //   //     label: "Menú",
          //   //     className: "p-2 text-white",
          //   //   },
          //   // ]}
          />
        ),
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}
