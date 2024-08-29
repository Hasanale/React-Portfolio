import * as adobeXd from "/public/skills/adobe-xd.svg";

import bootstrap from "/public/skills/bootstrap.svg";

import canva from "/public/skills/canva.svg";

import css from "/public/skills/css.svg";

import figma from "/public/skills/figma.svg";
import firebase from "/public/skills/firebase.svg";

import git from "/public/skills/git.svg";

import html from "/public/skills/html.svg";
import illustrator from "/public/skills/illustrator.svg";

import javascript from "/public/skills/javascript.svg";

import materialui from "/public/skills/materialui.svg";

import microsoftoffice from "/public/skills/microsoftoffice.svg";

import mysql from "/public/skills/mysql.svg";

import photoshop from "/public/skills/photoshop.svg";

import react from "/public/skills/react.svg";

import vitejs from "/public/skills/vitejs.svg";

import wordpress from "/public/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;

    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "react":
      return react;

    case "bootstrap":
      return bootstrap;

    case "mysql":
      return mysql;

    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;

    case "firebase":
      return firebase;

    case "git":
      return git;

    case "materialui":
      return materialui;

    case "wordpress":
      return wordpress;

    case "figma":
      return figma;

    case "microsoft office":
      return microsoftoffice;

    case "canva":
      return canva;
    default:
      break;
  }
};
