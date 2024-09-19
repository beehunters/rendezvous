import { Container } from "@mui/material";
import Homeheader from "../components/Homeheader";
import EventSection from "../components/EventSection";
import EventList from "../components/EventList";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const { data: eventData, isLoading } = useSWR("/events?page=page");
  const { data: categoryData, isLoading: categoriesLoading } = useSWR("/events/?category");

  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  
  console.log(category)
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filter events based on the search term and category
  const filteredEvents = eventData?.data.allEvents?.filter((event: any) => {
    const matchesSearchTerm = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || event.category === category;
    return matchesSearchTerm && matchesCategory;
  });
  return (
    <>
      <Homeheader
        onSearch={handleSearch}
        category={category}
        setCategory={setCategory}
        categories={categoryData?.data.allEvents || []} // Pass fetched categories
      />{" "}
      <Container maxWidth="xl">
      <EventList events={filteredEvents} />
      <EventSection />
      </Container>
    </>
  );
}
