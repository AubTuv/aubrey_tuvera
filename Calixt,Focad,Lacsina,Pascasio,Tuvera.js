document.addEventListener("DOMContentLoaded", function () {
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", changeDescPic);
  
    let image = "a";
    let desc = "b";
  
    const zodiac = [
      {
        url: "https://img.freepik.com/vector-gratis/insignia-oro-ano-gallo-vector-signo-zodiaco-chino-tradicional_53876-153973.jpg?w=740&t=st=1697301174~exp=1697301774~hmac=89cf50415601b53c54dad804f578d4d8ab977a06cb21019e7b186403f3a125e3",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/perro-ano-insignia-oro-vector-signo-zodiaco-chino-tradicional_53876-153974.jpg?t=st=1697301221~exp=1697301821~hmac=f4a502c7acc49b3fa8fc35070d8b194db8b29b127cae8c782b76c0ffceb50cd0",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/signo-zodiaco-chino-tradicional-vector-insignia-oro-ano-cerdo_53876-153975.jpg?t=st=1697303995~exp=1697304595~hmac=b1c2c85cc4c0522e9abe99960eb82d797e96e97cf0d4e6dd0f8815e33e3e2488",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/conjunto-elementos-diseno-oro-ano-buey-chino_53876-117220.jpg?w=740&t=st=1697304333~exp=1697304933~hmac=f32c4830180a50b185fb763a62bfc359c80b2346943b064eb345c821d8827a60",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/ano-rata-insignia-oro-horoscopo-chino-zodiaco-animal_53876-111835.jpg?t=st=1697304265~exp=1697304865~hmac=10c09370d1d7dcbde47a3552a6128662530f43ed56f693437306ca96b5d001c8",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/ano-tigre-insignia-vector-oro-horoscopo-chino-zodiaco-animal_53876-153968.jpg?t=st=1697301174~exp=1697301774~hmac=3704eb2f1c334353389c192b40490e210df0834ec688ee88e200f99a53bc8780",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/ano-conejo-insignia-vector-oro-horoscopo-chino-zodiaco-animal_53876-153969.jpg",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/ano-nuevo-chino-dragon-vector-insignia-oro-animal-signo-zodiaco_53876-153970.jpg?t=st=1697301174~exp=1697301774~hmac=712c69dd6b486fcadfef9e6a8358c9654219c5904d6972ac1712a6f4c8805dc9",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/ano-nuevo-chino-serpiente-vector-insignia-oro-animal-zodiaco-signo_53876-153971.jpg?t=st=1697301221~exp=1697301821~hmac=ad43602aaca2df82c6b6a4ae5575d028842a7b4fe6aa75af18139e7a18010458",
        width: 350,
        height: 350,
      },
      {
        url: "https://images.mypandit.com/myPandit_web/images/Content/Horse-astrology.jpg",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/insignia-oro-ano-cabra-vector-signo-zodiaco-chino-tradicional_53876-111837.jpg?w=740&t=st=1697303903~exp=1697304503~hmac=ebddef696c13f9c9a6636c3aaabe2105c29e53b7e96df768f0f8e94929d2ea58",
        width: 350,
        height: 350,
      },
      {
        url: "https://img.freepik.com/vector-gratis/insignia-oro-ano-mono-vector-signo-zodiaco-chino-tradicional_53876-153972.jpg?t=st=1697301174~exp=1697301774~hmac=4115f9d5a0ad5eec17450b86cb42a12c5df578cea6559efc6bbed707bc6f0484",
        width: 350,
        height: 350,
      }
    ];
  
    const description = [ 
        "Rat zodiac lucky numbers: 2, 3\n                    Lucky colors: Blue, Red and Green",
        "Ox zodiac lucky numbers: 1, 9\n                   Lucky colors: Green, White, and Gold",
        "Tiger zodiac lucky numbers: 1, 3, 4\n                       Lucky colors: Blue, Orange, and Grey",
        "Rabbit zodiac lucky numbers: 3, 4, 9\n                         Lucky colors: Pink, Purple, and Red",
        "Dragon zodiac lucky numbers: 1, 6, 7\n                           Lucky colors: Gold, Silver, and Purple",
        "Snake zodiac lucky numbers: 2, 8, 9\n                         Lucky colors: Black, Red, and Yellow",
        "Horse zodiac lucky numbers: 2, 3, 7\n                        Lucky colors: Red, Green, and Blue",
        "Goat zodiac lucky numbers: 3, 4, 9\n                      Lucky colors: Brown, Red, and White",
        "Monkey zodiac lucky numbers: 1, 7, 8\n                           Lucky colors: Grey, Blue, and Black",
        "Rooster zodiac lucky numbers: 5, 7, 8\n                           Lucky colors: Brown, Gold, and Green",
        "Dog zodiac lucky numbers: 3, 4, 9\n                     Lucky colors: Red, Green, and Pink",
        "Pig zodiac lucky numbers: 2, 5, 8\n                   Lucky colors: Orange, Grey, and Brown",
      ];
      
  
    function changeDescPic() {
      const yer = document.getElementById("year");
      const year = parseInt(yer.value);
      let zodiacIndex = (year % 12) - 1;
      if (zodiacIndex < 0) {
        zodiacIndex += 12;
      }
      image = zodiac[zodiacIndex].url;
      desc = description[zodiacIndex];
  
      const userReport = document.getElementById("cs-description");
      userReport.textContent = desc;
  
      const imgElement = document.getElementById("img");
  
      
      imgElement.style.width = zodiac[zodiacIndex].width + "px";
      imgElement.style.height = zodiac[zodiacIndex].height + "px";
  
      imgElement.src = image;
    }
  });
  