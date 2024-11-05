import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Initenary.js";

const arrayItineraries = [
    {
      name: "Anna",
      photo: "https://example.com/photo1.jpg",
      city: "Amsterdam",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#VanGogh", "#Canals", "#Museums"]
    },
    {
      name: "Lucas",
      photo: "https://example.com/photo2.jpg",
      city: "Amsterdam",
      price: 2,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#Bicycles", "#Rijksmuseum"]
    },
    {
      name: "Eva",
      photo: "https://example.com/photo3.jpg",
      city: "Amsterdam",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#Art", "#AnneFrankHouse", "#Vondelpark"]
    },
    {
      name: "John",
      photo: "https://example.com/photo4.jpg",
      city: "Amsterdam",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#CoffeeShops", "#Biking"]
    },
    {
      name: "Maria",
      photo: "https://example.com/photo5.jpg",
      city: "Rio de Janeiro",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#ChristTheRedeemer", "#Copacabana", "#Carnival"]
    },
    {
      name: "José",
      photo: "https://example.com/photo6.jpg",
      city: "Rio de Janeiro",
      price: 5,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#Ipanema", "#Samba", "#Beaches"]
    },
    {
      name: "Sofia",
      photo: "https://example.com/photo7.jpg",
      city: "Rio de Janeiro",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#Lapa", "#SugarloafMountain"]
    },
    {
      name: "Carlos",
      photo: "https://example.com/photo8.jpg",
      city: "Bangkok",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Bangkok", "#GrandPalace", "#ThaiFood"]
    },
    {
      name: "Sofia",
      photo: "https://example.com/photo9.jpg",
      city: "Bangkok",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Bangkok", "#Temples", "#Markets", "#Thailand"]
    },
    {
      name: "Liam",
      photo: "https://example.com/photo10.jpg",
      city: "Toronto",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Toronto", "#CNtower", "#Ontario", "#Canada"]
    },
    {
      name: "David",
      photo: "https://example.com/photo11.jpg",
      city: "Toronto",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Toronto", "#NiagaraFalls", "#Multiculturalism"]
    },
    {
      name: "Emily",
      photo: "https://example.com/photo12.jpg",
      city: "Toronto",
      price: 5,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Toronto", "#OntarioLake", "#The6ix"]
    },
    {
      name: "Minho",
      photo: "https://example.com/photo13.jpg",
      city: "Seoul",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Seoul", "#Palaces", "#KoreanFood", "#NamsanTower"]
    },
    {
      name: "Jiwon",
      photo: "https://example.com/photo14.jpg",
      city: "Seoul",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Seoul", "#Shopping", "#KPop", "#KoreanTemples"]
    },
    {
      name: "Lucía",
      photo: "https://example.com/photo15.jpg",
      city: "Barcelona",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Barcelona", "#SagradaFamilia", "#Gaudí", "#PlazaCatalunya"]
    },
    {
      name: "Carlos",
      photo: "https://example.com/photo16.jpg",
      city: "Barcelona",
      price: 2,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#Barcelona", "#Beaches", "#ParcGuell"]
    },
    {
      name: "Sarah",
      photo: "https://example.com/photo17.jpg",
      city: "San Francisco",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#SanFrancisco", "#GoldenGate", "#Alcatraz", "#SiliconValley"]
    },
    {
      name: "Michael",
      photo: "https://example.com/photo18.jpg",
      city: "San Francisco",
      price: 5,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#SanFrancisco", "#BayArea", "#LombardStreet"]
    },
    {
      name: "Xiaoyu",
      photo: "https://example.com/photo19.jpg",
      city: "Hong Kong",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#HongKong", "#VictoriaPeak", "#Temples", "#ChineseFood"]
    },
    {
      name: "Li Wei",
      photo: "https://example.com/photo20.jpg",
      city: "Hong Kong",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Shopping", "#Skyscrapers"]
    },
    {
      name: "Chen",
      photo: "https://example.com/photo21.jpg",
      city: "Hong Kong",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Foodie", "#Markets", "#MongKok"]
    },
    {
      name: "Mei Ling",
      photo: "https://example.com/photo22.jpg",
      city: "Hong Kong",
      price: 5,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Skyline", "#VictoriaHarbour"]
    },
    {
      name: "Jia",
      photo: "https://example.com/photo23.jpg",
      city: "Hong Kong",
      price: 3,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Shopping", "#Temples"]
    },
    {
      name: "Giulia",
      photo: "https://example.com/photo24.jpg",
      city: "Rome",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Rome", "#Colosseum", "#TreviFountain", "#Vatican"]
    },
    {
      name: "Antonio",
      photo: "https://example.com/photo25.jpg",
      city: "Rome",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Rome", "#Pantheon", "#PiazzaNavona", "#History"]
    },
    {
      name: "Simone",
      photo: "https://example.com/photo26.jpg",
      city: "Rome",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Rome", "#RomanForum", "#Tiber"]
    },
    {
      name: "Sophia",
      photo: "https://example.com/photo27.jpg",
      city: "Rome",
      price: 5,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Rome", "#VaticanMuseums", "#Pantheon"]
    },
    {
      name: "Aisha",
      photo: "https://example.com/photo28.jpg",
      city: "Dubai",
      price: 5,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Dubai", "#BurjKhalifa", "#Desert", "#Shopping"]
    },
    {
      name: "Omar",
      photo: "https://example.com/photo29.jpg",
      city: "Dubai",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Dubai", "#Luxury", "#SkiDubai", "#PalmIsland"]
    },
    {
      name: "Emily",
      photo: "https://example.com/photo30.jpg",
      city: "Dubai",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Dubai", "#Luxury", "#ShoppingMall", "#Marina"]
    }
  ]
  
  Itinerary.insertMany(arrayItineraries);