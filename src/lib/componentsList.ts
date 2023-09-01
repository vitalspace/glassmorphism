import CollectionsCard from "../componets/template-components/Collections.svelte";
import ProfileCard from "../componets/template-components/ProfileCard.svelte";
import SinginCard from "../componets/template-components/SinginCard.svelte";

let componentsList = [
  {
    id: 1,
    label: "singin-card",
    component: SinginCard,
  },
  {
    id: 2,
    label: "profile-card",
    component: ProfileCard,
  },
  {
    id: 3,
    label: "collections-card",
    component: CollectionsCard,
  },
];

export { componentsList };

