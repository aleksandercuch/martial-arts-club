export const schema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Gdańska Szkoła Fechtunku",
  image: "https://gdanskaszkolafechtunku.pl/logo.png",
  url: "https://gdanskaszkolafechtunku.pl/",
  telephone: "+48XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TU WPISZ ULICĘ",
    addressLocality: "Gdańsk",
    postalCode: "XX-XXX",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.3520",
    longitude: "18.6466",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Wednesday", "Friday"],
    opens: "18:00",
    closes: "21:00",
  },
};
