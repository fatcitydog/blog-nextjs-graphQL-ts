import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchURL = (link: string) => {
  const [imageURL, setImageURL] = useState<string | null>();

  const fetchData = async (url: string) => {
    const {
      data: { response, err },
    } = await axios.post("/api/metacardvalidator", {
      url: url,
    });
    if (response) {
      getData(response);
    } else {
      console.log(err);
    }
  };

  const getData = (data: string) => {
    const regexp = new RegExp("<meta.*?(|</meta)>", "g");
    let imageLink = "";
    const metaTagsList = data.match(regexp);

    if (metaTagsList?.length) {
      metaTagsList.map((tag: string) => {
        const nameRegexp = new RegExp(
          '((?<=name=")|(?<=property=")).*?(?=")',
          "g"
        );
        const contentRegexp = new RegExp('(?<=content=").*?(?=")', "g");
        const name = tag.match(nameRegexp);
        const content = tag.match(contentRegexp);

        if (name && content && name![0] === "og:image") {
          return (imageLink = content![0]);
        }
      });
      setImageURL(imageLink);
    } else setImageURL("error");
  };

  useEffect(() => {
    fetchData(link);
  }, []);

  return imageURL;
};
