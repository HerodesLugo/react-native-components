import React, { memo, useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { AvatarProps } from "./types";
import { getInitials } from "./util/getInitials";

function AvatarInner(props: AvatarProps) {
  const {
    source,
    uri,
    name,
    initials,
    size = "md",
    onPress,
    accessibilityLabel,
    className,
    containerClassName,
    imageClassName,
    fallbackClassName,
    testID,
  } = props;

  const resolvedSource = uri ? { uri } : source;
  const [errored, setErrored] = useState(false);

  const sizeMap = { sm: 32, md: 40, lg: 56 } as const;
  const computedSize =
    typeof size === "number" ? size : sizeMap[size as keyof typeof sizeMap];
  const radius = computedSize / 2;

  const label = useMemo(() => getInitials(name, initials), [name, initials]);

  const Wrapper: any = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      className={
        containerClassName ?? className ?? "rounded-full overflow-hidden"
      }
      style={{
        width: computedSize,
        height: computedSize,
        borderRadius: radius,
      }}
    >
      {resolvedSource && !errored ? (
        <Image
          source={resolvedSource}
          onError={() => setErrored(true)}
          className={imageClassName ?? "w-full h-full"}
          style={{
            width: computedSize,
            height: computedSize,
            borderRadius: radius,
          }}
        />
      ) : (
        <View
          className={
            fallbackClassName ?? "bg-gray-400 items-center justify-center"
          }
          style={{
            width: computedSize,
            height: computedSize,
            borderRadius: radius,
          }}
        >
          <Text className="text-white font-medium">{label}</Text>
        </View>
      )}
    </Wrapper>
  );
}

export default memo(AvatarInner);
