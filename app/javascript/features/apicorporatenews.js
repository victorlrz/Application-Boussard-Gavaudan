//---------------------------------------------------------CORPORATE-FILES-API---------------------------------------------------------

//@corporateNews
const corporateNews = async () => {
  const url = "http://localhost:5000/corporate";
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (response.ok) {
      console.log("Corporate files database updated !");
    } else {
      console.log("Database update failed");
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

//SetIntervam
corporateNews();
