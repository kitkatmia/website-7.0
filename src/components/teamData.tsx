import React, { useState } from "react";
import Papa, { ParseResult } from "papaparse";

type Data = {
  Name: string;
  Team: string;
  "Link(s)": string;
  Image: string;
};

type shortData = {
  Team: string;
  "Link(s)": string;
  Image: string;
};

const useTeamData = () => {
  const [values, setValues] = useState<
    { [key: string]: shortData } | undefined
  >();

  const defaultValues = {
    "Amanda Zhang": {
      Team: "Director",
      "Link(s)": "amanda@mvhacks.io",
      Image: "",
    },

    "Alex Markova": {
      Team: "Tech Director",
      "Link(s)": "alexm@mvhacks.io",
      Image: "",
    },
    "Emily Markova": {
      Team: "Tech Member",
      "Link(s)": "emily@mvhacks.io",
      Image: "",
    },
    "Arihant Jain": {
      Team: "Tech Member",
      "Link(s)": "arihant@mvhacks.io",
      Image: "",
    },
    "Atulya Weise": {
      Team: "Tech Member",
      "Link(s)": "atulya@mvhacks.io",
      Image: "",
    },
    "Ryan Yin": {
      Team: "Tech Member",
      "Link(s)": "ryany@mvhacks.io",
      Image: "",
    },

    "Arthur Cheong": {
      Team: "Event Director",
      "Link(s)": "arthurc@mvhacks.io",
      Image: "",
    },
    "Vinmarc Bala": {
      Team: "Event Member",
      "Link(s)": "vinmarc@mvhacks.io",
      Image: "",
    },
    "Ryan Chan": {
      Team: "Event Member",
      "Link(s)": "ryan@mvhacks.io",
      Image: "",
    },
    "Rohin Gupta": {
      Team: "Event Member",
      "Link(s)": "rohin@mvhacks.io",
      Image: "",
    },
    "Nathan Leong": {
      Team: "Event Member",
      "Link(s)": "nathan@mvhacks.io",
      Image: "",
    },
    "Milo Lin": {
      Team: "Event Member",
      "Link(s)": "milo@mvhacks.io",
      Image: "",
    },
    "Massimo Predosin": {
      Team: "Event Member",
      "Link(s)": "contac@mvhacks.io",
      Image: "",
    },
    "Anya Singh": {
      Team: "Event Member",
      "Link(s)": "anya@mvhacks.io",
      Image: "",
    },
    "Aaron Lo": {
      Team: "Event Member",
      "Link(s)": "aaron@mvhacks.io",
      Image: "",
    },
    "Lucas Kirazci": {
      Team: "Event Member",
      "Link(s)": "contact@mvhacks.io",
      Image: "",
    },

    "Yhali Matot": {
      Team: "Sponsorship Director",
      "Link(s)": "yhali@mvhacks.io",
      Image: "",
    },
    "Henry Shih": {
      Team: "Sponsorship Member",
      "Link(s)": "henry@mvhacks.io",
      Image: "",
    },
    "Ishaan Sharma": {
      Team: "Sponsorship Member",
      "Link(s)": "ishaan@mvhacks.io",
      Image: "",
    },
    "Ethan Chen": {
      Team: "Sponsorship Member",
      "Link(s)": "ethan@mvhacks.io",
      Image: "",
    },
    "Shankaran Srivatsa": {
      Team: "Sponsorship Member",
      "Link(s)": "shankaran@mvhacks.io",
      Image: "",
    },
    "Nayan Ganapathi": {
      Team: "Sponsorship Member",
      "Link(s)": "nayan@mvhacks.io",
      Image: "",
    },
    "Owen Kim": {
      Team: "Sponsorship Member",
      "Link(s)": "owen@mvhacks.io",
      Image: "",
    },
    "Sander Vonk": {
      Team: "Outreach Director",
      "Link(s)": "sander@mvhacks.io",
      Image: "",
    },
    "Saahiti Bondalapati": {
      Team: "Outreach Member",
      "Link(s)": "saahiti@mvhacks.io",
      Image: "",
    },
    "Senator Trent Story McCauley IV": {
      Team: "Outreach Member",
      "Link(s)": "trent@mvhacks.io",
      Image: "",
    },
    "Nikita Narang": {
      Team: "Outreach Member",
      "Link(s)": "nikita@mvhacks.io",
      Image: "",
    },
    "Niko Sohmers": {
      Team: "Outreach Member",
      "Link(s)": "nikolai@mvhacks.io",
      Image: "",
    },
  };
  const getCSV = (currentValues: { [key: string]: shortData }) => {
    Papa.parse("/team_data.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        let newValues: any = { ...currentValues };
        results.data.forEach((data) => {
          console.log("data : " + JSON.stringify(data));
          if (data["Link(s)"] !== "") {
            newValues[data.Name]["Link(s)"] = data["Link(s)"];
          }
          newValues[data.Name].Image = data.Image;
        });
        setValues(newValues);
      },
    });
  };

  React.useEffect(() => {
    getCSV(defaultValues);
  }, []);

  return { values };
};

export default useTeamData;
