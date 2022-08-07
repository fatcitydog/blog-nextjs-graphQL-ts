import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchURL = (link: string) => {
  const [imageURL, setImageURL] = useState();
  const [data, setData] = useState("");

  const fetchData = async (url: any) => {
    const {
      data: { response, err },
    } = await axios.post("/api/metacardvalidator", {
      url: url,
    });
    if (response) {
      getData(response);
    } else {
      setData(err);
    }
  };

  const getData = (data: string) => {
    console.log(data);
    const regexp = new RegExp("<meta.*?(|</meta)>", "g");
    let metaTagsContent = {};
    let metaTagsList = [];
    if (data) {
      metaTagsList = data.match(regexp);
      metaTagsList.map((tag: any) => {
        let nameRegexp = new RegExp(
          '((?<=name=")|(?<=property=")).*?(?=")',
          "g"
        );
        let contentRegexp = new RegExp('(?<=content=").*?(?=")', "g");
        let contentRegexp1 = new RegExp("<meta*?>(.*?)</meta>", "g");
        let name = tag.match(nameRegexp);
        let content = tag.match(contentRegexp);
        content = content || tag.match(contentRegexp1);
        if (name && content) {
          metaTagsContent = {
            ...metaTagsContent,
            [`${name[0]}`]: `${content[0]}`,
          };
        }
      });
    }
    console.log(metaTagsContent["og:image"]);
    setImageURL("s");
  };

  useEffect(() => {
    fetchData("https://conversion-rate-experts.com/genchi-genbutsu-stories/");
  }, [URL]);

  return imageURL;
};
