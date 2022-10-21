import { techType } from "../types/techTypes";

export interface IProject {
    id: number;
    image: string;
    name: string | "none";
    description: string;
    techsUsed: techType[];
}

export const projectSet: IProject = {
    id: 1,
    image: "forestLake.jpg",
    name: "forest project",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt earum mollitia sint delectus aperiam aspernatur laudantium sequi eaque adipisci odit eveniet eum atque, inventore est dicta natus tenetur! Dolorum, a?",
    techsUsed: ["react", "javascript", "tailwind"],
};
