import { TaskSection } from "./task-section";

export interface ExperienceSection {
    title: string;
    date_range: string;
    tasks: TaskSection[];
}
