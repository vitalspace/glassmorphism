import CollectionsCard from "../componets/template-components/Collections.svelte";
import ProfileCard from "../componets/template-components/ProfileCard.svelte";
import SinginCard from "../componets/template-components/SinginCard.svelte";
import StoresListCard from "../componets/template-components/StoresListCard.svelte";

let componentsList = [
  {
    id: 1,
    name: "Singin card",
    label: "singin-card",
    component: SinginCard,
  },
  {
    id: 2,
    name: "Profile card",
    label: "profile-card",
    component: ProfileCard,
  },
  {
    id: 3,
    name: "Collections card",
    label: "collections-card",
    component: CollectionsCard,
  },
  {
    id: 4,
    name: "Stores list card",
    label: "stores-list-card",
    component: StoresListCard
  }
];

export { componentsList };

