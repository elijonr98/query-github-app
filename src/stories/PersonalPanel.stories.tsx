import PersonalPanel from '../components/PersonalPanel'

export default{
    title: "Star button",
    component: PersonalPanel
}

export const PersonalPanelDefault = () => <PersonalPanel personalInfo={{avatar_url: "https://avatars.githubusercontent.com/u/7484517?v=4", name:"Elijon",
login:"elijon",
bio: "This is a bio",
followers:20,
following:30,
company:"MVST",
location:"Munich",
email:"elijonr98@gmail.com",
twitter_username: "@elijonr"


}} />