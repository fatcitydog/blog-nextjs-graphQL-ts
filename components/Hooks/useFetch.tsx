import { useEffect, useState } from "react";

export const useFetch = (link: URL) => {
  const [imageURL, setImageURL] = useState("");

  const getImageFromMetadata = () => {
    //problerm2: how to get link from metadata
    const metaLink = "abc";

    if (!metaLink) return false;

    setImageURL(metaLink);
  };

  useEffect(() => {
    getImageFromMetadata();
  }, [URL]);

  return imageURL;
};
