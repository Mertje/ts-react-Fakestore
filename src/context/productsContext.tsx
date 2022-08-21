import { createContext } from "react";
import FakeProductAPI from "../interface/FakeProductApi"

export const listOfProducts = createContext([] as FakeProductAPI[])

export const urlChoose = createContext([]) as any

export const cartAdded = createContext([] as any[])