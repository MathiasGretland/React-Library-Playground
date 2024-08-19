import { TLibrary } from "../@types";

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
