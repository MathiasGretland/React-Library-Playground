import { TLibrary } from "../@types";

// Icons
import reactFinalFormLogo from "../assets/reactFinalFormLogo.png";
import platejsLogoLight from "../assets/platejsLogoLight.svg";
import platejsLogoDark from "../assets/platejsLogoDark.svg";
import { isDarkModeSet } from "./ThemeProviderUtils";

/**
 * Returns the owner and repo based on which library is passed
 * Add more to the switch case statement if more libraries are added in the future
 */
export function getAPIOwnerAndRepoFromLibrary(library: TLibrary): {
  owner: string;
  repo: string;
} {
  switch (library) {
    case "platejs":
      return { owner: "udecode", repo: "plate" };
    case "react-final-form":
      return { owner: "final-form", repo: "react-final-form" };
  }
}

/**
 * Returns all the library info of the current supported libraries in the playground
 * Add more libraries here in the future
 */
export function getLibrarySelectorButtons(): {
  value: TLibrary;
  text: string;
  logo: string;
}[] {
  const isDarkMode = isDarkModeSet();

  return [
    {
      value: "platejs",
      text: "PlateJS",
      logo: isDarkMode ? platejsLogoDark : platejsLogoLight,
    },
    {
      value: "react-final-form",
      text: "React Final Form",
      logo: reactFinalFormLogo,
    },
  ];
}
