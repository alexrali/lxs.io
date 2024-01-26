import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { Style } from "@/components/styles"
import { Theme } from "@/components/themes"

type Config = {
  style: Style["name"]
  theme: Theme["name"]
  radius: number
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 1.0,
})

export function useConfig() {
  return useAtom(configAtom)
}
