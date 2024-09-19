import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Homeheader from "../components/Homeheader";
import EventSection from "../components/EventSection";
import EventList from "../components/EventList";
import useSWR from "swr";
import { Event } from "../utils/interface";

export default function Home() {
  const { data: eventData, isLoading } = useSWR("/events?page=page");
  const { data: categoryData } = useSWR("/events/?category");

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]); 

  console.log(category);
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filter events based on the search term and category
  // use effect to update the data
  useEffect(() => {
    if (eventData) {
      const filtered = eventData.data.allEvents.filter(
        (event: { title: string; category: string }) => {
          const matchesSearchTerm = event.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const matchesCategory =
            category === "" || event.category === category;
          return matchesSearchTerm && matchesCategory;
        }
      );

      setFilteredEvents(filtered); 
    }
  }, [searchTerm, category, eventData]); 
  // Re-run filter whenever searchTerm, category, or eventData changes

  return (
    <>
      <Homeheader
        onSearch={handleSearch}
        category={category}
        setCategory={setCategory}
        categories={categoryData?.data.allEvents || []} />
      <Container maxWidth="xl">
        <EventList events={filteredEvents} isLoading={isLoading} />
        <EventSection />
      </Container>
    </>
  );
}
