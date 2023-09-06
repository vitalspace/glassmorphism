import SinginTemplate from "../componets/code-templates/SinginTemplate.svelte";
import ConllectionsTemplate from "../componets/code-templates/CollectionsTemplate.svelte";
import ProfileCard from "../componets/code-templates/ProfileTemplate.svelte";
import StoresListCard from "../componets/code-templates/StoresListTemplate.svelte";

let templateList = [
  {
    id: 1,
    label: "singin-card",
    component: SinginTemplate,
  },
  {
    id: 2,
    label: "profile-card",
    component: ProfileCard,
  },
  {
    id: 3,
    label: "collections-card",
    component: ConllectionsTemplate,
  },
  {
    id: 4,
    label: "stores-list-card",
    component: StoresListCard
  }
];

export { templateList };