import SinginTemplate from "../componets/code-templates/SinginTemplate.svelte";
import ConllectionsTemplate from "../componets/code-templates/CollectionsTemplate.svelte";

let templateList = [
  {
    id: 1,
    label: "singin-card",
    component: SinginTemplate,
  },
  {
    id: 2,
    label: "collections-card",
    component: ConllectionsTemplate,
  },
];

export { templateList };