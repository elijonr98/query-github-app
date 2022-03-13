import { ReactNode } from "react";
import RepositoryCard from "../components/RepositoryCard";

export default {
  title: "Repository card",
  component: RepositoryCard,
};

const Template = (args) => <RepositoryCard {...args} />;

export const RepositoryCardDefault = Template.bind({});

RepositoryCardDefault.args = {
  item: {
    updated_at: "16-02-2022",
    name: "RepositoryName",
    description: "RepositoryDescription",
    language: "Javascript",
    license: { name: "MIT" },
    forks: 123,
    private: false,
  },
};
