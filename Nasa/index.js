async function nasa() {
  try {
    const response = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY"
    );

    // console.log("API Response:", response);

    if (!response.ok) {
      throw new Error("RESPONSE ERROR");
    }

    const data = await response.json();

    //console.log("API Data:", data);

    // Get the photos array from the response data
    // I looked at the console
    const photos = data.photos;

    // Use for each to create the photos
    photos.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.img_src;
      img.style.width = "200px";
      img.style.margin = "10px";
      document.body.append(img);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
}

nasa();
