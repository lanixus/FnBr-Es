import { Platform } from "fnbr/dist/enums/Enums";
import { Config } from "./types/config";

const config: Config = {
    prefix: "",
    ownerIds: process.env.OWNER_IDS?.split(', ') || [],
    status: "Nosotros, somos linux.",
    platform: Platform.PS5,
    outfit: "Glow",
    backpack: "Pursuit",
    pickaxe: "Driver",
    emote: "Scenario",
    level: 999,
};

export default config;
