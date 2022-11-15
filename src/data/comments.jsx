import avatar1 from "../assets/img/avatar-1.svg";
import avatar2 from "../assets/img/avatar-2.svg";
import avatar3 from "../assets/img/avatar-3.svg";
import avatar4 from "../assets/img/avatar-4.svg";

const commets = [
  {
    id: 2,
    img: avatar1,
    name: "Elijah Moss",
    userName: "@hexagon.bestagon",
    commet: "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.",
    ansver: []
  },
  {
    id: 2,
    img: avatar2,
    name: "James Skinner",
    userName: "@hummingbird1",
    commet: "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It's also quite a trend with modern apps and  apparently saves battery life.",

    ansver: [
      {
        img: avatar3,
        name: "Anne Valentine ",
        userName: "@annev1990",
        commet: 'While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
        user: "@hummingbird1"
      },
      {
        img: avatar4,
        name: "Ryan Welles",
        userName: "@voyager.344",
        commet: " Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
        user: "@annev1990"
      }
    ]
  }

];

export default commets;