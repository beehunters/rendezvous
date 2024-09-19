import { Container } from "@mui/material";
import Homeheader from "../components/Homeheader";
import EventSection from "../components/EventSection";
import EventList from "../components/EventList";

export default function Home() {
  return (
    <>
    <Homeheader />
    <Container  maxWidth="xl">
    <EventList />
    <EventSection />
    </Container>   
     </>
  )
}