export interface EventCardProps {
    img: string;
    title: string;
    date: string;
    time: string;
    description: string;
    link: string;
  }


  export interface Event {
    id: string | null | undefined;
    imageUrl: string;
    title: string;
    date: string;
    time: string;
    description: string;
  }
  
  export interface EventSearchBarProps {
    onSearch: (searchTerm: string) => void;
    setCategory: (searchTerm: string) => void;
    categories: { category: string }[];      
    category: string; 
  }

  export interface HomeheaderProps {
    onSearch: (term: string) => void;
    category: string;
    setCategory: (category: string) => void;
    categories: { category: string }[];      
  }

  export interface EventData {
    title: string;
    image: string;
  }
  