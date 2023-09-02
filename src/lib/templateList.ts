import SinginTemplate from "../componets/code-templates/SinginTemplate.svelte";
import ConllectionsTemplate from "../componets/code-templates/CollectionsTemplate.svelte";

let templateList = [
  {
    id: 1,
    label: "singinTemplate",
    component: SinginTemplate,
  },
  {
    id: 2,
    label: "collectionsTemplate",
    component: ConllectionsTemplate,
  },
];

export { templateList };
