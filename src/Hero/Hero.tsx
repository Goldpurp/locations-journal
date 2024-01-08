import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  Icon,
  CardFrame,
  ImgTag,
  ImgTagDiv,
  Location,
  MapAnchor,
  CityName,
  Population,
  CountryBio,
  AboutCountry,
  Country,
} from "./Hero.styled";

type Prop = {
  id: number;
  img: string;
  country: string;
  link: string;
  cityName: string;
  population: string;
  bio: string;
};

export default function Hero({
  img,
  country,
  link,
  cityName,
  population,
  bio,
}: Prop) {
  return (
    <CardFrame>
      <ImgTagDiv>
        <ImgTag src={img} alt="image" />
      </ImgTagDiv>

      <AboutCountry>
        <Location>
          <Icon icon={faLocationDot} />
          <Country>{country}</Country>
          <MapAnchor href={link}>View on Google Maps</MapAnchor>
        </Location>

        <div>
          <CityName>{cityName}</CityName>
          <Population href="https://en.wikipedia.org/wiki/Population">
            <span>Population:</span> {population}{" "}
          </Population>
          <CountryBio>{bio}</CountryBio>
        </div>
      </AboutCountry>
    </CardFrame>
  );
}
