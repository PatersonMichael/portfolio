export interface ISkill {
    id: number;
    icon: string;
    name: string | "none";
}

export const skillSet: ISkill[] = [
    { id: 1, name: "React", icon: `FaReact` },
    { id: 2, name: "HTML", icon: `FaHtml5` },
    { id: 3, name: "CSS", icon: `FaCss3Alt` },
    { id: 4, name: "JavaScript", icon: `FaJs` },
];
