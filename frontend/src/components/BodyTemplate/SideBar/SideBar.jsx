import React from "react";

import {
  Assignment as AssignmentIcon,
  VerifiedUser as VerifiedUserIcon,
  Assistant as AssistantIcon,
  BugReport as BugReportIcon,
  FindInPage as FindInPageIcon,
  Description as DescriptionIcon,
  Code as CodeIcon,
} from "@material-ui/icons/";
import SideBarButton from "./SideBarButton";
import SideBarSubButton from "./SideBarSubButton";

export default function SideBar({ classes }) {
  const buttonProperties = [
    {
      buttonID: 1,
      buttonText: "OBSM",
      buttonIcon: <AssignmentIcon />,
      buttonType: "Plain",
      dropDownList: [],
      buttonRoute: "/",
    },
    {
      buttonID: 2,
      buttonText: "Test Management",
      buttonIcon: <VerifiedUserIcon />,
      buttonType: "DropDown",
      dropDownList: [],
      buttonRoute: "/",
    },
    {
      buttonID: 3,
      buttonText: "Test Assist",
      buttonIcon: <AssistantIcon />,
      buttonType: "Plain",
      dropDownList: [
        {
          buttonID: 31,
          buttonText: "Scan Logs",
          buttonIcon: <FindInPageIcon />,
          buttonType: "Plain",
          dropDownList: [],
          buttonRoute: "/",
        },
        {
          buttonID: 32,
          buttonText: "Scan Code",
          buttonIcon: <DescriptionIcon />,
          buttonType: "Plain",
          dropDownList: [],
          buttonRoute: "/",
        },
      ],
      buttonRoute: "/about",
    },
    {
      buttonID: 4,
      buttonText: "Defect Management",
      buttonIcon: <BugReportIcon />,
      buttonType: "Plain",
      dropDownList: [],
      buttonRoute: "/",
    },
    {
      buttonID: 5,
      buttonText: "Script As A Service",
      buttonIcon: <CodeIcon />,
      buttonType: "Plain",
      dropDownList: [],
      buttonRoute: "/",
    },
  ];

  return (
    <>
      {buttonProperties.map((button) => {
        return (
          <div key={button.buttonID}>
            <SideBarButton
              key={button.buttonID}
              classes={classes}
              buttonProperty={button}
            />
            {button.dropDownList.map((dropDownButton) => {
              return (
                <SideBarSubButton
                  key={dropDownButton.buttonID}
                  classes={classes}
                  buttonProperty={dropDownButton}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
