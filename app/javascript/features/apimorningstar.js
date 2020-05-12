const titleContainerElement = document.querySelector(".stock_newsflow");

const MorningStars = async () => {
  const url = "http://localhost:8080/morningstar/1";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      console.log(dataAPI);
    }
  } catch (e) {
    //Si try échoue, retourne l'erreur catchée
    console.error("e : ", e);
  }
};

///MAIN///
//Si nous sommes sur une page du DOM contenant les classes du "titleContainerElement" à savoir ".stock_newsflow"
//Alors on éxécute la recherche avec les paramètres sélectionnés.
if (titleContainerElement) {
  console.log("GO");
  MorningStars();
}
